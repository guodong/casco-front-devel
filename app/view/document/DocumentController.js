Ext.define('cascoFront.view.document.DocumentController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.document',
    uses: ['cascoFront.model.Document'],
    createDocument: function(){
    	var form = this.lookupReference('document_create_form');
    	var pjt = new cascoFront.model.Document(form.getValues());
    	if(pjt.get('id')){
    		pjt.set('id', 0);
    	}
    	pjt.set('project_id', localStorage.getItem("project_id"));
    	pjt.save();
    	
    	var t = Ext.ComponentQuery.query("#mtree")[0];
    	t.store.reload()
    },
    
    createTc: function(){
    	var form = this.lookupReference('TcAddform');
    	var data = form.getValues();
    	data.doc_id = localStorage.getItem("doc_id");
    	var grid = this.lookupReference('mgrid');
    	var d = grid.store.getData();
    	var steps = [];
    	for(var i in d.items){
    		steps.push(d.items[i].data);
    	}
    	data.steps = steps;
    	//console.log(data);
    	Ext.Ajax.request({
    		   url: API+'tc',
    		   params : Ext.JSON.encode(data),
    		   success: function(response, opts) {
    		      var obj = Ext.decode(response.responseText);
    		      console.dir(obj);
    		   },
    		   failure: function(response, opts) {
    		      console.log('server-side failure with status code ' + response.status);
    		   }
    		});
    }
});