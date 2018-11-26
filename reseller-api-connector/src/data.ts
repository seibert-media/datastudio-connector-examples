///<reference path="util.ts"/>
///<reference path="schema.ts"/>

function getData(request) {
    let schema = request.fields.map(function(field) {
        for (let i = 0; i < STATIC_SCHEMA.length; i++) {
            if (STATIC_SCHEMA[i].name == field.name) {
                return STATIC_SCHEMA[i];
            }
        }
    });

    let rows = [];
    for (let i = 0; i < schema.length; i++) {
        switch (schema[i].name) {
            case 'totalSubscriptions':
                rows.push({values: [getTotalSubscriptions()]});
                break;
            case 'totalUsers':
                rows.push({values: [getTotalUsers()]});
                break;
            case 'trialSubscriptions':
                rows.push({values: [getTrialSubscriptions()]});
                break;
            case 'trialUsers':
                rows.push({values: [getTrialUsers()]});
                break;
        }
    }
    return {
        schema: schema,
        rows: rows,
    };
}

function getTotalSubscriptions(): number {
    let pageToken;
    let totalSubscriptions = 0;
    do {
        // @ts-ignore
        let result = AdminReseller.Subscriptions.list({pageToken: pageToken});
        const subscriptions = result.subscriptions.filter((subscription) => {
            return subscription.skuName.indexOf('G Suite') >= 0
        });
        totalSubscriptions += subscriptions.length;
        pageToken = result.nextPageToken;
    } while (pageToken);
    console.log(`Reporting ${totalSubscriptions} total subscriptions`);
    return totalSubscriptions;
}

function getTrialSubscriptions(): number {
    let pageToken;
    let trialSubscriptions = 0;
    do {
        // @ts-ignore
        let result = AdminReseller.Subscriptions.list({pageToken: pageToken});
        const subscriptions = result.subscriptions.filter(function (subscription) {
            return subscription.skuName.indexOf('G Suite') >= 0 && subscription.trialSettings.isInTrial
        });
        trialSubscriptions += subscriptions.length;
        pageToken = result.nextPageToken;
    } while (pageToken);
    log(`Reporting ${trialSubscriptions} trial subscriptions`);
    return trialSubscriptions;
}

function getTotalUsers(): number {
    let pageToken;
    let totalUsers = 0;
    do {
        // @ts-ignore
        let result = AdminReseller.Subscriptions.list({pageToken: pageToken});
        const subscriptions = result.subscriptions.filter(function (subscription) {
            return subscription.skuName.indexOf('G Suite') >= 0
        });
        for (let subscription of subscriptions) {
            const planName: string = subscription.plan.planName;
            if (planName.indexOf('ANNUAL') >= 0) {
                totalUsers += subscription.seats.numberOfSeats;
            }
            else if (planName == 'FLEXIBLE' || planName == 'TRIAL') {
                totalUsers += subscription.seats.licensedNumberOfSeats;
            }
        }
        pageToken = result.nextPageToken;
    } while (pageToken);
    log(`Reporting ${totalUsers} total users`);
    return totalUsers;
}

function getTrialUsers(): number {
    let pageToken;
    let trialUsers = 0;
    do {
        // @ts-ignore
        let result = AdminReseller.Subscriptions.list({pageToken: pageToken});
        const subscriptions = result.subscriptions.filter(function (subscription) {
            return subscription.skuName.indexOf('G Suite') >= 0 && subscription.trialSettings.isInTrial
        });
        for (let subscription of subscriptions) {
            const planName: string = subscription.plan.planName;
            if (planName.indexOf('ANNUAL') >= 0) {
                trialUsers += subscription.seats.numberOfSeats;
            }
            else if (planName == 'FLEXIBLE' || planName == 'TRIAL') {
                trialUsers += subscription.seats.licensedNumberOfSeats;
            }
        }
        pageToken = result.nextPageToken;
    } while (pageToken);
    log(`Reporting ${trialUsers} trial users`);
    return trialUsers;
}
