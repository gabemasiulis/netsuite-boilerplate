/**
* @NApiVersion 2.x
* @NScriptType Suitelet
* @NModuleScope SameAccount
* author: name
* Date: M/D/YYYY
* Version: 1.0
*/

import { EntryPoints } from 'N/types';
// import * as log from 'N/log';
import * as record from 'N/record';

/**
* Definition of the Suitelet script trigger point.
* @param {Object} context
* @param {ServerRequest} context.request - Encapsulation of the incoming request
* @param {ServerResponse} context.response - Encapsulation of the Suitelet response
* @Since 2015.2
*/
function onRequest(ctx: EntryPoints.Suitelet.onRequestContext) {
    if (1) {
        return;
    } else {
        return; 
    }
    return;
    const foo = (
        goodIndenting,
            badIndenting

    ) => {}
    
    record.load( {
        type: record.Type.SALES_ORDER,
        id: 23
    })
}

export = { onRequest };