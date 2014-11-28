Ext.define('cascoFront.view.document.TcAdd', {
    extend: 'Ext.window.Window',

    alias: 'widget.tcadd',
    uses: [
        'cascoFront.view.main.DocTree',
        'cascoFront.view.document.TcStep',
        'cascoFront.view.document.DocumentController'
    ],
    controller: 'document',
    resizable: true,
    maximizable: true,
    modal: true,
    title: 'Add Tc Item',
    width: 800,
    height: 550,
    autoScroll: true,
    
    initComponent: function(){
    	var me = this;
    	Ext.apply(me, {
    		dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                style: {background: '#eee'},
                items: ['->',
                    {
                        text: 'Save',
                        glyph: 0xf0c7,
                        listeners: {
                            click: 'createTc'
                        }
                    },{
                        text: 'Cancel',
                        glyph: 0xf112,
                        scope: me,
                        handler : this.doHide
                    }
                ]
            }],
    		items: [{
    	    	xtype: 'form',
    	    	reference: 'TcAddform',
    	    	bodyPadding: '10',
    	    	items: [{
    	            anchor: '100%',
    	            fieldLabel: 'Title',
    	            name: 'title',
    	            labelAlign: 'top',
    	            msgTarget: 'under',
    	            xtype: 'textfield'
    	        },{
    	            anchor: '100%',
    	            fieldLabel: 'Description',
    	            name: 'dsc',
    	            labelAlign: 'top',
    	            msgTarget: 'under',
    	            xtype: 'textarea'
    	        },{
    	            anchor: '100%',
    	            fieldLabel: 'Sources',
    	            name: 'sources',
    	            labelAlign: 'top',
    	            msgTarget: 'under',
    	            xtype: 'textarea'
    	        },{
    	            anchor: '100%',
    	            fieldLabel: 'Test Method',
    	            name: 'test_method',
    	            labelAlign: 'top',
    	            msgTarget: 'under',
    	            xtype: 'textarea'
    	        },{
    	            anchor: '100%',
    	            fieldLabel: 'Pre condition',
    	            name: 'pre_condition',
    	            labelAlign: 'top',
    	            msgTarget: 'under',
    	            xtype: 'textarea'
    	        },{
    	        	xtype: 'tcstep',
    	        	reference: 'mgrid'
    	        }]
    	    }]
    	});
    	me.callParent(arguments);
    },
    doHide: function(){
        this.hide();
    },
});