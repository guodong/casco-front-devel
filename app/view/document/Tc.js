Ext.define('cascoFront.view.document.Tc', {
    extend : 'Ext.grid.Panel',
    alias : 'widget.document.tc',
    uses: ['cascoFront.view.document.TcAdd', 'cascoFront.store.Tcs'],
    title : 'TSP-SyRTC',
    allowDeselect: true,
    //glyph : 0xf0c9,
    viewModel : 'main',
    initComponent: function(){
    	var me = this;
    	var store = new cascoFront.store.Tcs({
    		data: [{
                id: 'TSP-SyRTC-0117',
                description: 'Check TSP shall be a hot-redundant 2×2oo2 system',
                sources: '[Source:[TSP-SyRS-0002]] [Source:[TSP-SyRS-0106]] [Source:[TSP-SyRS-0234]] [Source:[TSP-SyRS-0011]] [Source:[TSP-SyRS-0368]] [Source:[TSP-SyRS-0310]] [Source:[TSP-SyRS-0056]] [Source:[TSP-SyRS-0216]',
                testmethod: 'EG',
                precondition:' All the communication is ok between TSP and all the external simulators.APP installed on A MPU1 and A MPU2 is the same as B MPU1 and B MPU2. The STBY is AUTO.Watch the working status by the lamp of panel.',
                active:0,
                result: 'pass',
                fct: 0
            },{
                id: 'TSP-SyRTC-0118',
                description: 'Check if TSP shall check communication state with external system.',
                sources: '[Source:[TSP-SyRS-0002]] [Source:[TSP-SyRS-0106]] [Source:[TSP-SyRS-0234]] [Source:[TSP-SyRS-0011]] [Source:[TSP-SyRS-0368]] [Source:[TSP-SyRS-0310]] [Source:[TSP-SyRS-0056]] [Source:[TSP-SyRS-0216]',
                testmethod: 'EG',
                precondition:'TSP Test Bench is prepared.',
                active:0,
                result: 'fail',
                fct: 1
            },{
                id: 'TSP-SyRTC-0100',
                description: 'Check if when one MPS is already running as MPS-N, the other MPS can start successfully.',
                sources: '[Source:[TSP-SyRS-0002]]',
                testmethod: 'EG',
                precondition:'STBY is AUTO',
                active:0,
                result: 'pass',
                fct: 0
            },{
                id: 'TSP-SyRTC-0129',
                description: 'Check if when one MPS is already running as MPS-N, the other MPS can start successfully.',
                sources: '[Source:[TSP-SyRS-0002]]',
                testmethod: 'EG',
                precondition:'STBY is AUTO',
                active:0,
                result: 'pass',
                fct: 0
            },{
                id: 'TSP-SyRTC-0119',
                description: 'Check if when one MPS is already running as MPS-N, the other MPS can start successfully.',
                sources: '[Source:[TSP-SyRS-0002]]',
                testmethod: 'EG',
                precondition:'STBY is AUTO',
                active:0,
                result: 'pass',
                fct: 0
            }]
	    });
    	me.store = store;
    	me.callParent(arguments);
    },
    columns: [
        {
            xtype: 'checkcolumn',
            header: '*',
            dataIndex: 'active',
            width: 30,
            editor: {
                xtype: 'checkbox',
                cls: 'x-grid-checkheader-editor'
            }
        },
        {text: "id", dataIndex: "id", width: 150, hideable: false},
        {text: "description", dataIndex: "description", flex: 1},
        //{text: "sources", dataIndex: "sources", width: 100, autoShow: false},
        {text: "test method", dataIndex: "testmethod", width: 100},
        {text: "pre condition", dataIndex: "precondition", width: 250},
        {text: "result", dataIndex: "result", width: 100},
        {text: "fail CT", dataIndex: "fct", width: 100}
    ],
    tbar: [{
        text: 'Switch Build Version',
        menu: [{
            text: 'Build20140922'
        },{
            text: 'Build20140802'
        }]
    },{
        text: 'Add Item',
        glyph: 0xf067,
        handler : function() {
            var win = Ext.create('widget.tcadd',{listeners:{scope: this}});
            win.show();
        }
    },{
        text: 'Delete Item',
        glyph: 0xf068,
        handler : function() {

        }
    },{
        text: 'Import Document',
        glyph: 0xf093,
        handler : function() {

        }
    },{
        text: 'Export Document',
        glyph: 0xf019,
        handler : function() {

        }
    }],
})