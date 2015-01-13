Ext.define('cascoFront.view.document.RsDetail', {
    extend: 'Ext.window.Window',

    alias: 'widget.document.rsdetail',
    uses: [
           'cascoFront.view.document.DocumentController'
    ],
    controller: 'document',
    
    modal: true,
    title: 'Rs Detail',
    width: 600,
    
    initComponent: function(){
    	var me = this;
    	Ext.apply(me, {
    		dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                style: {background: '#eee'},
                items: ['->',
                        {
                    text: 'Close',
                    glyph: 0xf112,
                    scope: me,
                    handler : this.destroy
                },
                {
                    text: 'Save',
                    glyph: 0xf112,
                    scope: me,
                    handler : function(){
                    	me.rs.save();
                    	this.destroy();
                    }
                }
                ]
            }],
    		items: [{
    	    	xtype: 'form',
    	    	bodyPadding: '10',
    	    	width: '100%',
    	    	items: [{
    	            fieldLabel: 'title',
    	            xtype: 'textfield',
    	            editable: false,
        	    	width: '100%',
    	            value: me.rs.title
    	        },{
    	            fieldLabel: 'description',
    	            xtype: 'textareafield',
    	            editable: false,
        	    	width: '100%',
    	            value: me.rs.description
    	        },{
    	            fieldLabel: 'implement',
    	            xtype: 'textfield',
    	            editable: false,
        	    	width: '100%',
    	            value: me.rs.implement
    	        },{
    	            fieldLabel: 'priority',
    	            xtype: 'textfield',
    	            editable: false,
        	    	width: '100%',
    	            value: me.rs.priority
    	        },{
    	            fieldLabel: 'contribution',
    	            xtype: 'textfield',
    	            editable: false,
        	    	width: '100%',
    	            value: me.rs.contribution
    	        },{
    	            fieldLabel: 'category',
    	            xtype: 'textfield',
    	            editable: false,
        	    	width: '100%',
    	            value: me.rs.category
    	        },{
    	            fieldLabel: 'allocation',
    	            xtype: 'textfield',
    	            editable: false,
        	    	width: '100%',
    	            value: me.rs.allocation
    	        },{
    	            fieldLabel: 'vat',
    	            xtype: 'textfield',
    	            editable: true,
        	    	width: '100%',
    	            value: me.rs.vat
    	        }]
    	    }]
    	});
    	me.callParent(arguments);
    },
    doHide: function(){
        this.hide();
    },
});