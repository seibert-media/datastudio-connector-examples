// ******************* WARNING ************************
//
// Google's CacheService has been tried in every imaginable way, 
// but without success. PropertiesSevice doesn't work either.
//
// If you value your life (time), don't use either of them!
//
// Probably needs external service to implement a cache.

function getAtlassianData(vendorId, restEndPoint, atlassianUser, atlassianPass){


    var headers = {
        "Authorization" : "Basic " + Utilities.base64Encode(atlassianUser + ':' + atlassianPass)
    };
    var params = {
        "method":"GET",
        "headers":headers
    };
    var url = getAtlassianRestUrl(
        vendorId,
        restEndPoint);

    try{
        var response = UrlFetchApp.fetch(url, params);
        console.log(response);
    }
    catch(exception) {
        console.log(exception);
    }

    return response;
}
