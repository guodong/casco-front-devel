Ext.define('cascoFront.view.main.Tree', {
    extend: 'Ext.tree.Panel',
    alias: 'widget.tree',
    uses: ['Ext.data.TreeModel','cascoFront.view.document.Create', 'cascoFront.store.TreeDocuments'],

    listeners: {
        itemclick: 'seldoc',
    },
    displayField: 'name',
    dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',
        style: {
            background: '#eee'
        },
        items: [{
            text: 'Document',
            glyph: 0xf067,
            handler: function() {
                var win = Ext.create('widget.document.create');
                win.show();
            }
        }, {
            text: 'Folder',
            glyph: 0xf067,
            handler: function() {
                var win = Ext.create('widget.document.foldercreate');
                win.show();
            }
        }]
    }],
    hideHeaders: true,
    rootVisible : false,
    viewConfig: {
        plugins: {
            ptype: 'treeviewdragdrop',

        },
        listeners: {       
            drop: function (node, data, overModel, dropPosition) {
                  var d = {
                		src: data.records[0].id,
                		dst: overModel.data.id
                  };
          		Ext.Ajax.request({
        			url : API + 'treemod',
        			method: 'get',
        			params : d,
        			success : function(response, opts) {
        				
        			},
        			failure : function(response, opts) {
        				console.log('server-side failure with status code '
        						+ response.status);
        			}
        		});
            },
        }
    },

    initComponent: function() {
        var project_id = localStorage.getItem("project_id");
        var st = new cascoFront.store.TreeDocuments({
            root: {
                expanded: true,
            }
        });
        st.load({
        	params: {project_id: project_id}
        });

        this.store = st;

        this.callParent(arguments);
    }
})