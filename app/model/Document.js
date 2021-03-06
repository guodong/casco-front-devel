Ext.define('cascoFront.model.Document', {
    extend: 'Ext.data.Model',
    requires:[
        'Ext.data.proxy.LocalStorage',
        'Ext.data.proxy.Ajax'
    ],
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name' },
        {name: 'type'},
        {name: 'project_id'},
        {name: 'leaf'}
    ],
    proxy: {
        type: 'ajax',
        url: API+'document',
        writer: {
            type: 'json'
        }
    }

});