/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 * @NModuleScope SameAccount
 * author: name
 * Date: M/D/YYYY
 * Version: 1.0
 */
define(["require", "exports", "N/log", "N/record", "N/https", "./sample2"], function (require, exports, log, record, https, superImportantValues) {
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
        let foo = 1;
        foo += 1;
        const bar = [1, 2, 3, 4];
        for (const el of bar) {
            log.debug({
                title: 'el',
                details: el
            });
        }
        if (bar.includes(1)) {
            log.debug({
                title: 'bar includes 1',
                details: ''
            });
        }
        const baz = bar.filter((el) => {
            return el % 2 === 0;
        });
        const qux = [1, ...bar];
        const quxSet = new Set(qux);
        async function asyncRequest() {
            // << Note the async keyword next to the function
            const promise = new Promise((resolve) => {
                const response = https.get({ url: 'https://jsonplaceholder.typicode.com/todos/1' });
                resolve(response.body);
            });
            // promise.then(log.debug); //No longer using this
            const responseBody = await promise; // Using await instead
            log.debug('responseBody', responseBody); // Logs correctly
        }
        superImportantValues.superImportantValues.start;
    }
    return { onRequest };
});
