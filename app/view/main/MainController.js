/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('cascoFront.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.MessageBox',
        'cascoFront.view.main.Tree',
        'cascoFront.view.document.Document'
    ],

    alias: 'controller.main',

    onLogout: function () {
        Ext.Msg.confirm('Confirm', 'Are you sure to logout?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
        	// Remove the localStorage key/value
            localStorage.removeItem('TutorialLoggedIn');

            // Remove Main View
            this.getView().destroy();

            // Add the Login Window
            Ext.widget('login');
        }
    },
    seldoc: function(view, record, item, index, e, eOpts){
		var json = record.data;
		var tabs = this.lookupReference('main');
		var tab = tabs.child('#tab-' + json.id);
		localStorage.setItem("doc_id", json.id);
		if(!tab){
			var type = 'document.' + json.type;
			tab = tabs.add({
				itemId: 'tab-' + json.id,
				xtype: type,
				title: json.name,
				closable: true
			});
		}

		tabs.setActiveTab(tab);
	},
	getProjectMenu: function(){
		
	}
});
