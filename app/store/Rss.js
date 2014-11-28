Ext.define('cascoFront.store.Rss', {
    extend: 'Ext.data.Store',
    model: 'cascoFront.model.Rs',
    pageSize: 0, //disable paging
    //autoLoad : true,
    proxy: {
        type: 'rest',
        url: API+'rs',
        reader: {
            type: 'json',
        },
        writer: {
            type: 'json'
        }
    }
});