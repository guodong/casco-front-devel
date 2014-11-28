Ext.define('cascoFront.model.Project', {
    extend: 'Ext.data.Model',
    requires:[
        'Ext.data.proxy.LocalStorage',
        'Ext.data.proxy.Ajax'
    ],
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name' },
        {name: 'dsc'}
    ],
    hasMany: 'Document',
    proxy: {
        type: 'rest',
        url: API+'project',
        writer: {
            type: 'json'
        }
    }

});