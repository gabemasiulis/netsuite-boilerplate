/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 * @NModuleScope SameAccount
 * author: name
 * Date: M/D/YYYY
 * Version: 1.0
 */
define(["require", "exports", "N/record"], function (require, exports, record) {
    /**
     * Definition of the Suitelet script trigger point.
     * @param {Object} context
     * @param {ServerRequest} context.request - Encapsulation of the incoming request
     * @param {ServerResponse} context.response - Encapsulation of the Suitelet response
     * @Since 2015.2
     */
    function onRequest(ctx) {
        record.load({
            type: record.Type.SALES_ORDER,
            id: 23
        });
    }
    return { onRequest: onRequest };
});
