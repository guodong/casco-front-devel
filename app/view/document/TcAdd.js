var tm = Ext.create('Ext.data.Store', {
    fields: ['text', 'value'],
    data : [
        {"text":"EP", "value":"EP"},
        {"text":"EG", "value":"EG"}
    ]
});
Ext.define('cascoFront.view.document.TcAdd', {
    extend: 'Ext.window.Window',

    alias: 'widget.tcadd',
    uses: [
        'cascoFront.view.document.DocTree',
        'cascoFront.view.document.TcStep',
        'cascoFront.view.document.DocumentController',
        'cascoFront.view.document.TcAddForm'
    ],
    controller: 'document',
    resizable: true,
    maximizable: true,
    modal: true,
    title: 'Add Tc Item',
    width: 800,
    height: 550,
    autoScroll: true,
    layout: {
        type: 'border',
        padding: 0
    },

    initComponent: function(){
    	var me = this;
    	var st = new cascoFront.store.Rss();
		st.load({
			params : {
				document_id : 1
			}
		});
		me.ss = st;
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
                        handler : this.destroy
                    }
                ]
            }],
            
    		items: [
//    		        {
//                xtype: 'doctree',
//                region: 'west',
//                width: 200,
//                collapsible: true,
//                split: true,
//                floatable: false,
//
//            },
            {
    	    	xtype: 'panel',
    	    	region: 'center',
    	    	id: 'TcAddform',

    	        autoScroll: true,
    	    	bodyPadding: '10',
    	    	items: [{
        	    	xtype: 'tcaddform',
        	    	reference: 'TcAddform',
        	        
        	    }]
    	    }]
    	});
    	me.callParent(arguments);
    },
    doHide: function(){
        this.destroy();
    },
});