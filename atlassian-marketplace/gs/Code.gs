var REST_ENDPOINTS = {
    TRANSACTIONS: "/reporting/sales/transactions/export",
    LICENSES: "/reporting/licenses/export",
    FEEDBACK: "/reporting/feedback/details/export"
};

function getAtlassianRestUrl(vendorId, endpoint) {
    return "https://marketplace.atlassian.com/rest/2/vendors/" + vendorId + endpoint;
}

function getAuthType() {
    // Using USER_PASS here causes an
    // error when the connector is used
    return { type: 'NONE'};
}

function getConfig() {
    return {
        configParams: [
            {
                type: 'TEXTINPUT',
                name: 'atlassianUser',
                displayName: 'Atlassian marketplace user name (e-mail-address-ish)',
                helpText: "Your Atlassian marketplace user's name.",
                placeHolder: 'Atlassian Marketplace User'
            },
            {
                type: 'TEXTINPUT',
                name: 'atlassianPass',
                displayName: 'Atlassian marketplace password',
                helpText: "Your Atlassian marketplace user's password.",
                placeHolder: 'Atlassian Marketplace User'
            },
            {
                type: 'TEXTINPUT',
                name: 'vendorId',
                displayName: 'Enter the vendor ID',
                helpText: "You can find the vendor ID as part of the public path of the vendor's site on the atlassian marketplace.",
                placeHolder: 'Vendor ID'
            },
            {
                type: 'SELECT_SINGLE',
                name: 'restEndPoint',
                displayName: 'Which kind of data would you like to retrieve?',
                helpText: "The reports on the Atlassian marketplace contain data about licenses, transactions and user feedback.",
                options: [{
                    label: "transactions",
                    value: REST_ENDPOINTS.TRANSACTIONS
                },{
                    label: "licenses",
                    value: REST_ENDPOINTS.LICENSES
                },{
                    label: "feedback",
                    value: REST_ENDPOINTS.FEEDBACK
                }]
            }
        ]
    };
}

function getData(request) {
    var currentSchema = getSchema(request).schema;
    var requestedSchema = request.fields.map(function(field){
        for (var i = 0; i < currentSchema.length; i++){
            if(currentSchema[i].name == field.name){
                return currentSchema[i];
            }
        }
    });

    var response = getAtlassianData(
        request.configParams.vendorId,
        request.configParams.restEndPoint,
        request.configParams.atlassianUser,
        request.configParams.atlassianPass);

    console.log("atlassian data (might be cached)", response);

    var parsedResponse = JSON.parse(response);

    var requestedData = mapData(
        parsedResponse,
        requestedSchema,
        request.configParams.restEndPoint);

    return {
        schema: requestedSchema,
        rows: requestedData
    };
}

function getSchema(request) {
    if(request.configParams.restEndPoint === REST_ENDPOINTS.TRANSACTIONS){
        return {schema: transactionsSchema};
    }
    else if(request.configParams.restEndPoint === REST_ENDPOINTS.LICENSES){
        return {schema: licenseSchema};
    }
    else if(request.configParams.restEndPoint === REST_ENDPOINTS.FEEDBACK){
        return {schema: feedbackSchema};
    }
    console.log("No schema found for:", request.configParams.restEndPoint);
}

function mapData(parsedResponse, requestedSchema, restEndPoint) {

    // Transform parsed data and filter for requested fields
    var mapperFunction = getMapperFunction(restEndPoint);
    var mappedData = parsedResponse.map(function(item) {
        var values = [];
        requestedSchema.forEach(function(field){
            var v = mapperFunction(field.name, item);
            values.push(v);
        });
        return { values: values};
    });
    return mappedData;
}

function getMapperFunction(restEndPoint) {
    if(restEndPoint === REST_ENDPOINTS.TRANSACTIONS){
        return function  (fieldName, transaction) {
            return mapField(transactionFieldMap, fieldName, transaction);
        };
    }
    else if(restEndPoint === REST_ENDPOINTS.LICENSES){
        return function  (fieldName, license) {
            return mapField(licenseFieldMap, fieldName, license);
        };
    }
    else if(restEndPoint === REST_ENDPOINTS.FEEDBACK){
        return function  (fieldName, feedback) {
            return mapField(feedbackFieldMap, fieldName, feedback);
        };
    }
    console.log("no mapper function found for:", restEndPoint);
}

function mapField(fieldMap, fieldName, item) {
    var path  = fieldMap[fieldName];
    if (! path) {
        console.error("missing path for:", fieldName);
        return '';
    }
    var obj = item;
    for (var i=0; i<path.length; i++){
        if(!path[i]){
            console.error("index out of bounds for", fieldName);
        }
        if(path[i] && obj[path[i]]){
            obj = obj[path[i]];
        }
        else {
            // Creates a lot of logs, and since not all fields
            // are alway available in the REST response
            // this will occur in prodution regularly ...
            // console.log("Can't map:", fieldName, fieldMap[fieldName]);
            return '';
        }
    }
    return obj;
}
