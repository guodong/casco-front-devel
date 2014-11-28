/**
 * The main application class. An instance of this class is created by app.js
 * when it calls Ext.application(). This is the ideal place to handle
 * application launch and initialization details.
 */

Ext.define('cascoFront.Application', {
	extend : 'Ext.app.Application',

	name : 'cascoFront',

	stores : [
	          'Projects'
	// TODO: add global / shared stores here
	],
	defaultToken : 'home',
	views : [ 'cascoFront.view.login.Login', 'cascoFront.view.project.Project', 'cascoFront.view.main.Main' ],
	launch : function() {
		
		var supportsLocalStorage = Ext.supports.LocalStorage, loggedIn;

		if (!supportsLocalStorage) {

			// Alert the user if the browser does not support localStorage
			Ext.Msg.alert('Your Browser Does Not Support Local Storage');
			return;
		}

		// Check to see the current value of the localStorage key
		loggedIn = localStorage.getItem("TutorialLoggedIn");

		Ext.widget(loggedIn ? 'app-main' : 'login');

	}
});
