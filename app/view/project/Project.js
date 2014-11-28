Ext.define("cascoFront.view.project.Project", {
	extend : 'Ext.window.Window',
	xtype : 'project',

	requires : [ 'cascoFront.view.project.ProjectController', 'cascoFront.store.Projects', 'Ext.form.Panel' ],

	controller : 'project',
	title : 'Projects',
    closable: false,
    title: 'Choose Project',
	autoShow : true,
	items : {
        xtype: 'form',
        bodyPadding: 10,
        items: [{
            xtype: 'combobox',
            name: 'project_id',
            editable: false,
            fieldLabel: 'Choose Project',
            queryMode: 'local',
            displayField: 'name',
            valueField: 'id',
            allowBlank: false,
            store: 'Projects'
        }],
        buttons: [{
            text: 'Create Project',
            handler: function(){
            	var win = Ext.create('widget.project.create',{listeners:{scope: this}});
                win.show();
            }
        },{
            text: 'OK',
            formBind: true,
            listeners: {
                click: 'onChooseProject'
            }
        }]
    }

});