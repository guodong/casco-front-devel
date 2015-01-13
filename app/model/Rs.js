Ext.define('cascoFront.model.Rs', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'active', type: 'bool' },
        {name: 'id', type: 'string'},
        {name: 'content',  type: 'string'},
        {name: 'implement', type: 'string'},
        {name: 'priority', type: 'string'},
        {name: 'contribution', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'vat', type: 'string'},
    ],
    proxy: {
        type: 'ajax',
        url: API+'rs',
        reader:{
        	type: 'json'
        },
        writer: {
            type: 'json'
        }
    }
});