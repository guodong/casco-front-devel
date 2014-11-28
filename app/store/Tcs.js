Ext.define('cascoFront.store.Tcs', {
    extend: 'Ext.data.Store',
    model: 'cascoFront.model.Tc',
    pageSize: 0, //disable paging
    //autoLoad : true,
    proxy: {
        type: 'rest',
        url: API+'tc',
        reader: {
            type: 'json',
        },
        writer: {
            type: 'json'
        }
    }
});