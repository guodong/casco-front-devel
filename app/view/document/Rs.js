

Ext.define('cascoFront.view.document.Rs', {
    extend : 'Ext.grid.Panel',
    alias : 'widget.document.rs',
    uses: [
        'cascoFront.view.document.RsImport',
        'cascoFront.store.Rss'
    ],
    title : 'TSP-SyRS',
    autoHeight: true,
    allowDeselect: false,
    viewModel : 'main',
    initComponent: function(){
    	var me = this;
    	var store = new cascoFront.store.Rss({
	        data: [
	            {id: 'TSP-SyRS-0001', content: 'TSP shall be configured', implement: '1.1.0', priority: 'High',contribution:' RAM#Category = Non-Functional#Allocation = [TSP-SyAD]#Source = [TSP-RAMSRs-0010], [TSP-SyUR-0003], [TSP-RAMSRs-0014][End]',active:0},
	            {id: 'TSP-SyRS-0002', content: 'MPS software shall include the operating system and execution software', implement: '1.1.0',priority: 'High',contribution:' RAM#Category = Non-Functional#Allocation = [TSP-SyAD]#Source = [TSP-RAMSRs-0010], [TSP-SyUR-0003], [TSP-RAMSRs-0014][End]',active:0},
	            {id: 'TSP-SyRS-0003', content: 'Diversity design methods must be used by software.', implement:'1.1.0',priority:'High',contribution:' RAM#Category = Non-Functional#Allocation = [TSP-SyAD]#Source = [TSP-RAMSRs-0010], [TSP-SyUR-0003], [TSP-RAMSRs-0014][End]',active:0},
	            {id: 'TSP-SyRS-0004', content: 'Diversity design methods must be used by software.', implement:'1.1.0',priority:'High',contribution:' RAM#Category = Non-Functional#Allocation = [TSP-SyAD]#Source = [TSP-RAMSRs-0010], [TSP-SyUR-0003], [TSP-RAMSRs-0014][End]',active:0},
	            {id: 'TSP-SyRS-0005', content: 'Diversity design methods must be used by software.', implement:'1.1.0',priority:'High',contribution:' RAM#Category = Non-Functional#Allocation = [TSP-SyAD]#Source = [TSP-RAMSRs-0010], [TSP-SyUR-0003], [TSP-RAMSRs-0014][End]',active:0},
	            {id: 'TSP-SyRS-0006', content: 'Diversity design methods must be used by software.', implement:'1.1.0',priority:'High',contribution:' RAM#Category = Non-Functional#Allocation = [TSP-SyAD]#Source = [TSP-RAMSRs-0010], [TSP-SyUR-0003], [TSP-RAMSRs-0014][End]',active:0},
	            {id: 'TSP-SyRS-0007', content: 'Diversity design methods must be used by software.', implement:'1.1.0',priority:'High',contribution:' RAM#Category = Non-Functional#Allocation = [TSP-SyAD]#Source = [TSP-RAMSRs-0010], [TSP-SyUR-0003], [TSP-RAMSRs-0014][End]',active:0},
	            {id: 'TSP-SyRS-0008', content: 'Diversity design methods must be used by software.', implement:'1.1.0',priority:'High',contribution:' RAM#Category = Non-Functional#Allocation = [TSP-SyAD]#Source = [TSP-RAMSRs-0010], [TSP-SyUR-0003], [TSP-RAMSRs-0014][End]',active:0},
	        ]
	    });
    	me.store = store;
    	me.callParent(arguments);
    },
    columns: [
        {
            xtype: 'checkcolumn',
            header: '',
            dataIndex: 'active',
            width: 60,
            editor: {
                xtype: 'checkbox',
                cls: 'x-grid-checkheader-editor'
            }
        },
        {text: "id", dataIndex: "id", width: 120},
        {text: "content", dataIndex: "content", flex: 1},
        {text: "implement", dataIndex: "implement", width: 100},
        {text: "priority", dataIndex: "priority", width: 100},
        {text: "contribution", dataIndex: "contribution", width: 250},
        {
            xtype:'actioncolumn',
            width:50,
            items: [{
                icon: '/resources/images/cog_edit.png',  // Use a URL in the icon config
                text: 'Edit',
                glyph : 0xf015,
                tooltip: 'Edit',
                handler: function(grid, rowIndex, colIndex) {
                    var win = new casco.view.main.EditRS();
                    win.show();
                    return;
                    var rec = grid.getStore().getAt(rowIndex);
                    alert("Edit " + rec.get('firstname'));
                }
            }]
        }
    ],
    tbar: [{
        text: 'Import Document',
        glyph: 0xf093,
        handler : function() {
        	var win = Ext.create('widget.document.rsimport',{listeners:{scope: this}});
            win.show();
        }
    },{
        text: 'Export Document',
        glyph: 0xf019,
        handler : function() {
            window.open('files/TC.doc')
        }
    },],
})