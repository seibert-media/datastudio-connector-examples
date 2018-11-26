var licenseSchema = [
    {
        name: 'addonKey',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'addonLicenseId',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'addonName',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'contactDetailsBillingContactAddress1',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'contactDetailsBillingContactCity',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'contactDetailsBillingContactEmail',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'contactDetailsBillingContactName',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'contactDetailsBillingContactPhone',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'contactDetailsBillingContactPostcode',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'billingContactCompany',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'billingContactCountry',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'billingContactRegion',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'billingContactTechnicalContactAddress1',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'billingContactTechnicalContactCity',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'billingContactTechnicalContactEmail',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'billingContactTechnicalContactName',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'billingContactTechnicalContactPhone',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'billingContactTechnicalContactPostcode',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'hosting',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'lastUpdated',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'licenseId',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'licenseType',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'maintenanceEndDate',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'maintenanceStartDate',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'partnerDetailsBillingContactEmail',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'partnerDetailsBillingContactName',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'partnerDetailsPartnerName',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'partnerDetailsPartnerType',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'status',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'tier',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    }
];

var licenseFieldMap = {
    "addonKey": ["addonKey"],
    "addonLicenseId": ["addonLicenseId"],
    "addonName": ["addonName"],

    "contactDetailsBillingContactAddress1": ["contactDetails","billingContact","address1"],
    "contactDetailsBillingContactCity": ["contactDetails","billingContact","city"],
    "contactDetailsBillingContactEmail": ["contactDetails","billingContact","email"],
    "contactDetailsBillingContactName": ["contactDetails","billingContact","name"],
    "contactDetailsBillingContactPhone": ["contactDetails","billingContact","phone"],
    "contactDetailsBillingContactPostcode": ["contactDetails","billingContact","postcode"],

    "billingContactCompany": ["billingContact","company"],
    "billingContactCountry": ["billingContact","country"],
    "billingContactRegion": ["billingContact","region"],

    "billingContactTechnicalContactAddress1": ["billingContact","technicalContact","address1"],
    "billingContactTechnicalContactCity": ["billingContact","technicalContact","city"],
    "billingContactTechnicalContactEmail": ["billingContact","technicalContact","email"],
    "billingContactTechnicalContactName": ["billingContact","technicalContact","name"],
    "billingContactTechnicalContactPhone": ["billingContact","technicalContact","phone"],
    "billingContactTechnicalContactPostcode": ["billingContact","technicalContact","postcode"],

    "hosting": ["hosting"],
    "lastUpdated": ["lastUpdated"],
    "licenseId": ["licenseId"],
    "licenseType": ["licenseType"],
    "maintenanceEndDate": ["maintenanceEndDate"],
    "maintenanceStartDate": ["maintenanceStartDate"],

    "partnerDetailsBillingContactEmail": ["partnerDetails","billingContact","email"],
    "partnerDetailsBillingContactName": ["partnerDetails","billingContact","name"],

    "partnerDetailsPartnerName": ["partnerDetails","partnerName"],
    "partnerDetailsPartnerType": ["partnerDetails","partnerType"],

    "status": ["status"],
    "tier": ["tier"]
};
