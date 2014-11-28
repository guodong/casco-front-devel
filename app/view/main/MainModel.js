/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('cascoFront.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    //requires: ['cascoFront.view.project.ProjectController'],

    data: {
        name: localStorage.getItem("project_name"),
        //projects: Ext.getStore('Projects').getData()
    },
	initComponent: function(){
		var pjts = Ext.getStore('Projects');
		var data = [];
		pjts.each(function(p){
			data.push({
				text: p.name
			})
		});
		this.data.projects = data;
	}
    //TODO - add data, formulas and/or methods to support your view
});