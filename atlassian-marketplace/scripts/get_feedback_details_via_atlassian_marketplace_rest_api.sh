#!/bin/bash

# For authentication we need the user name - in our case
# this will most likely be an email address ...
ATLASSIAN_MARKETPLACE_NAME=$1

# ... and the associated password. Parts of the atlassian
# documentation state that an api token can also be used.
# However, the first tests have shown that the api token
# didn't work.
ATLASSIAN_MARKETPLACE_PASS=$2

# The id of the vendor for whom we want to retrieve
# report data. The vendor id appears in the path
# to the public atlassian-presence of the vendor:
# https://marketplace.atlassian.com/vendors/9093/seibert-media
VENDOR_ID=$3

COMMAND="curl -v -u $ATLASSIAN_MARKETPLACE_NAME:$ATLASSIAN_MARKETPLACE_PASS https://marketplace.atlassian.com/rest/2/vendors/9093/reporting/feedback/details/export"
#echo "Executing: $COMMAND"
eval $COMMAND
