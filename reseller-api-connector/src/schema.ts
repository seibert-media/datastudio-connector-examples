import Field = GoogleAppsScript.Contacts.Field;

const STATIC_SCHEMA = [
    {
        name: 'totalSubscriptions',
        dataType: 'NUMBER',
        semantics: {
            conceptType: 'METRIC',
        },
    },
    {
        name: 'totalUsers',
        dataType: 'NUMBER',
        semantics: {
            conceptType: 'METRIC',
        },
    },
    {
        name: 'trialSubscriptions',
        dataType: 'NUMBER',
        semantics: {
            conceptType: 'METRIC',
        }
    },
    {
        name: 'trialUsers',
        dataType: 'NUMBER',
        semantics: {
            conceptType: 'METRIC',
        }
    },
];

function getSchema(request) {
    return {
        schema: STATIC_SCHEMA,
    };
}
