Ext.define('cascoFront.view.project.Create', {
    extend: 'Ext.window.Window',

    alias: 'widget.project.create',
    uses: [
           'cascoFront.view.project.ProjectController'
    ],
    controller: 'project',
    resizable: true,
    maximizable: true,
    modal: true,
    title: 'Create Project',
    width: 300,
    id: 'mcreate',
    initComponent: function(){
    	var me = this;
    	
    	Ext.apply(me, {
    		dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                style: {background: '#eee'},
                items: ['->',
                    {
                        text: 'Ok',
                        glyph: 0xf0c7,
                        listeners: {
                        	scope: me,
                            click: 'createProject'
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
    	    	bodyPadding: '10',
    	    	reference: 'project_create_form',
    	    	items: [{
    	            anchor: '100%',
    	            fieldLabel: 'Name',
    	            name: 'name',
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
    	        }]
    	    }]
    	});
    	me.callParent(arguments);
    },
    doHide: function(){
        this.hide();
    }
});