Ext.define('cascoFront.view.project.ProjectController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.project',
    uses: ['Ext.Msg'],
    onChooseProject: function(){

    	var pjt_id = this.getView().down('form').getForm().getFieldValues().project_id;
    	localStorage.setItem("project_id", pjt_id);
    	var store = Ext.getStore('Projects');
    	localStorage.setItem("project_name", store.findRecord('id', pjt_id).get('name'));
    	window.G_project_name = store.findRecord('id', pjt_id).get('name');
        this.getView().destroy();

        // Add the main view to the viewport
        Ext.widget('app-main');
    },
    createProject: function(){
    	var form = this.lookupReference('project_create_form');
    	var pjt = new cascoFront.model.Project(form.getValues());
    	if(pjt.get('id')){
    		pjt.set('id', 0);
    	}
    	pjt.save();
    	Ext.Msg.alert('Message', 'Project created successfully.');
    }
});