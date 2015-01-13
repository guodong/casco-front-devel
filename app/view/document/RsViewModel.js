Ext.define('cascoFront.view.document.RsViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.rs', // connects to viewModel/type below

    data: {
        firstName: 'John',
        lastName: 'Doe'
    },
    initComponent: function(){
    	var rs = new cascoFront.model.Rs();
    	rs.load({params: {id: this.rs_id}});
    	this.data = rs.getData();
    	me.callParent(arguments);
    }
});