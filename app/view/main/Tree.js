Ext.define('cascoFront.view.main.Tree', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.tree',
    uses: ['cascoFront.view.document.Create', 'cascoFront.store.Documents'],

    listeners: {
        itemclick: 'seldoc',
    },
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        style: {
            background: '#eee'
        },
        items: ['->', {
            text: 'Create Document',
            glyph: 0xf067,
            handler: function() {
                var win = Ext.create('widget.document.create');
                win.show();
            }
        }]
    }],
    hideHeaders: true,
    columns: [{
        text: "name",
        dataIndex: "name",
        flex: 1,
    }],

    initComponent: function() {
        var store = new cascoFront.store.Documents();
        store.load({
            params: {
                project_id: localStorage.getItem("project_id")
            }
        });

        this.store = store;

        this.callParent(arguments);
    }
})