Ext.define('cascoFront.view.document.RsImport', {
    extend: 'Ext.window.Window',

    alias: 'widget.document.rsimport',
    uses: [
    ],

    modal: true,
    title: 'Rs Import',
    width: 400,
    frame: true,
    		
    items: [{
    	xtype: 'form',
        bodyPadding: 10,
    	items: [{
	        xtype: 'filefield',
	        name: 'file',
	        fieldLabel: 'File',
	        labelWidth: 50,
	        msgTarget: 'side',
	        allowBlank: false,
	        anchor: 0,
	        width: '100%',
	        buttonText: 'Select File'
	    }],
	
	    buttons: [{
	        text: 'Import',
	        handler: function() {
	            var form = this.up('form').getForm();
	            if(form.isValid()){
	                form.submit({
	                    url: API+'docfile',
	                    waitMsg: 'Uploading file...',
	                    success: function(fp, o) {
	                        Ext.Msg.alert('Success', 'File "' + o.result.file + '" has been uploaded.');
	                    }
	                });
	            }
	        }
	    }],
    }],
    doHide: function(){
        this.hide();
    },
});