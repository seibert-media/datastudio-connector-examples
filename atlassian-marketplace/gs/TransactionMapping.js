var transactionsSchema = [
    {
        name: 'addonKey',
        label: 'App-Key',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'addonLicenseId',
        label: 'App Lizenz ID',
        dataType: 'NUMBER',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'addonName',
        label: 'App-Name',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'transactionId',
        label: 'Transaction ID',
        dataType: 'NUMBER',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'lastUpdated',
        label: 'Letzte Aktualisierung',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION',
            semanticGroup: 'YEAR_OR_DATE',
            semanticType: 'YEAR_MONTH_DAY'
        }
    },
    {
        name: 'licenseId',
        label: 'Lizenz ID',
        dataType: 'NUMBER',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'customerCompany',
        label: 'Unternehmen',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'customerCountry',
        label: 'Land',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'customerRegions',
        label: 'Region',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'customerDetailsTechnicalContactEmail',
        label: 'Technischer Kontakt E-Mail',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'partnerDetailsBillingContactEmail',
        label: 'Rechnungskontakt E-Mail',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'partnerDetailsBillingContactName',
        label: 'Rechnungskontakt',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'partnerDetailsPartnerName',
        label: 'Partnername',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'partnerDetailsPartnerType',
        label: 'Partnertyp',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'purchaseDetailBillingPeriod',
        label: 'Rechnungszeitraum',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'purchaseDetailHosting',
        label: 'Hostingvariante',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'purchaseDetailLicenseType',
        label: 'Lizenztyp',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'purchaseDetailMaintenanceEndDate',
        label: 'Wartungszeitraum Ende',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION',
            semanticGroup: 'YEAR_OR_DATE',
            semanticType: 'YEAR_MONTH_DAY'
        }
    },
    {
        name: 'purchaseDetailMaintenanceStartDate',
        label: 'Wartungszeitraum Beginn',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION',
            semanticGroup: 'YEAR_OR_DATE',
            semanticType: 'YEAR_MONTH_DAY'
        }
    },
    {
        name: 'purchaseDetailPartnerDiscountAmount',
        label: 'Partner Rabatt',
        dataType: 'NUMBER',
        semantics: {
            conceptType: 'METRIC',
            semanticGroup: 'CURRENCY',
            semanticType: 'CURRENCY_USD'
        }
    },
    {
        name: 'purchaseDetailPurchasePrice',
        label: 'Kaufpreis',
        dataType: 'NUMBER',
        semantics: {
            conceptType: 'METRIC',
            semanticGroup: 'CURRENCY',
            semanticType: 'CURRENCY_USD'
        }
    },
    {
        name: 'purchaseDetailSaleDate',
        label: 'Kaufdatum',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION',
            semanticGroup: 'YEAR_OR_DATE',
            semanticType: 'YEAR_MONTH_DAY'
        }
    },
    {
        name: 'purchaseDetailSaleType',
        label: 'Art des Kaufs',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'purchaseDetailTier',
        label: 'User-Tier',
        dataType: 'STRING',
        semantics: {
            conceptType: 'DIMENSION'
        }
    },
    {
        name: 'purchaseDetailVendorAmount',
        label: 'Händlermarge',
        dataType: 'NUMBER',
        semantics: {
            conceptType: 'METRIC',
            semanticGroup: 'CURRENCY',
            semanticType: 'CURRENCY_USD'
        }
    }
];

var transactionFieldMap = {
    'addonLicenseId': ['addonLicenseId'],
    'addonName': ['addonName'],
    'transactionId': ['transactionId'],
    'lastUpdated': ['lastUpdated'],
    'licenseId': ['licenseId'],

    'customerCompany': ['customerDetails','company'],
    'customerCountry': ['customerDetails','country'],
    'customerRegions': ['customerDetails','region'],
    'customerDetailsTechnicalContactEmail': ['customerDetails','technicalContact','email'],
    'customerDetailsTechnicalContactName': ['customerDetails','technicalContact','name'],

    'partnerDetailsBillingContactEmail': ['partnerDetails', 'billingContact', 'email'],
    'partnerDetailsBillingContactName': ['partnerDetails', 'billingContact', 'name'],
    'partnerDetailsPartnerName': ['partnerDetails', 'partnerName'],
    'partnerDetailsPartnerType': ['partnerDetails', 'partnerType'],

    'purchaseDetailBillingPeriod': ['purchaseDetails', 'billingPeriod'],
    'purchaseDetailHosting': ['purchaseDetails', 'hosting'],
    'purchaseDetailLicenseType': ['purchaseDetails', 'licenseType'],
    'purchaseDetailMaintenanceEndDate': ['purchaseDetails', 'maintenanceEndDate'],
    'purchaseDetailMaintenanceStartDate': ['purchaseDetails', 'maintenanceStartDate'],
    'purchaseDetailPartnerDiscountAmount': ['purchaseDetails', 'partnerDiscountAmount'],
    'purchaseDetailPurchasePrice': ['purchaseDetails', 'purchasePrice'],
    'purchaseDetailSaleDate': ['purchaseDetails', 'saleDate'],
    'purchaseDetailSaleType': ['purchaseDetails', 'saleType'],
    'purchaseDetailTier': ['purchaseDetails', 'tier'],
    'purchaseDetailVendorAmount': ['purchaseDetails', 'vendorAmount']
};
