
Ext.define('cascoFront.view.document.Rs', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.document.rs',
	uses : [ 'cascoFront.view.document.RsImport', 'cascoFront.store.Rss' ],
	autoHeight : true,
	allowDeselect : false,
	viewModel : 'main',
	initComponent : function() {
		var me = this;
		var st = new cascoFront.store.Rss();
		st.load({
			params : {
				document_id : me.doc_id
			}
		});
		me.store = st;
		me.tbar = [ {
			text : 'Import Document',
			glyph : 0xf093,
			scope : this,
			handler : function() {
				var win = Ext.create('widget.document.rsimport', {
					listeners : {
						scope : this
					},
					doc_id : me.doc_id
				});
				win.show();
			}
		} ]
		me.callParent(arguments);
	},
	listeners : {
		itemdblclick : function(dv, record, item, index, e) {
			console.log(arguments)
			var win = Ext.create('widget.document.rsdetail', {
				listeners : {
					scope : this
				},
				rs : record.data
			});
			win.show();
		}
	},
	columns : [
			{
				xtype : 'checkcolumn',
				header : '',
				dataIndex : 'active',
				width : 60,
				editor : {
					xtype : 'checkbox',
					cls : 'x-grid-checkheader-editor'
				}
			},{
				text : "title",
				dataIndex : "title",
				width : 130
			},
			{
				text : "implement",
				dataIndex : "implement",
				width : 100
			},
			{
				text : "category",
				dataIndex : "category",
				width : 130
			},
			{
				text : "allocation",
				dataIndex : "allocation",
				flex: 1
			},
			{
				text : "tcs",
				dataIndex : "tcs",
				width : 250,
				renderer : function(value) {
					var str = "";
					Ext.Array.each(value, function(v) {
				        str += v.title+" ";
				    });
					return str;
				}
			},
			{
				text : "vat",
				dataIndex : "vat",
				width : 250
			},
	// {
	// xtype:'actioncolumn',
	// width:50,
	// items: [{
	// icon: '/resources/images/cog_edit.png', // Use a URL in the icon config
	// text: 'Edit',
	// glyph : 0xf015,
	// tooltip: 'Edit',
	// handler: function(grid, rowIndex, colIndex) {
	// var win = new casco.view.main.EditRS();
	// win.show();
	// return;
	// var rec = grid.getStore().getAt(rowIndex);
	// alert("Edit " + rec.get('firstname'));
	// }
	// }]
	// }
	]
})