Ext.define('cascoFront.store.Projects', {
    extend: 'Ext.data.Store',
    model: 'cascoFront.model.Project',
    pageSize: 0, //disable paging
    autoLoad : true,
    proxy: {
        type: 'rest',
        url: API+'project',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        writer: {
            type: 'json'
        }
    }
});