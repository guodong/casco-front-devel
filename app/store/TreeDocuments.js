Ext.define('cascoFront.store.TreeDocuments', {
    extend: 'Ext.data.TreeStore',
    model: 'cascoFront.model.Document',
    pageSize: 0, //disable paging
    autoLoad : false,
    proxy: {
        type: 'ajax',
        url: API+'tree',
        reader: {
            type: 'json',
        },
        writer: {
            type: 'json'
        }
    }
});