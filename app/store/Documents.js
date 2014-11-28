Ext.define('cascoFront.store.Documents', {
    extend: 'Ext.data.Store',
    model: 'cascoFront.model.Document',
    pageSize: 0, //disable paging
    autoLoad : true,
    proxy: {
        type: 'rest',
        url: API+'document',
        reader: {
            type: 'json'
        },
        writer: {
            type: 'json'
        }
    }
});