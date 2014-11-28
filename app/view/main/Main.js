/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('cascoFront.view.main.Main', {
    extend: 'Ext.container.Container',
    plugins: 'viewport',
    requires: [
        'cascoFront.view.main.MainController',
        'cascoFront.view.main.MainModel',
        'cascoFront.view.document.Rs',
        'cascoFront.view.document.Tc',
        'cascoFront.view.main.Top',
        'cascoFront.store.TcSteps',
        'cascoFront.store.Projects',
        //'cascoFront.store.Rss'
    ],

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },
    initComponent : function() {
		Ext.setGlyphFontFamily('FontAwesome'); // 设置图标字体文件，只有设置了以后才能用glyph属性
		this.callParent();
	},

    layout: {
        type: 'border'
    },

    items: [{
        region: 'north',
        xtype: 'top'
    },{
        xtype: 'tree',
        id: 'mtree',
        title: localStorage.getItem("project_name"),
        region: 'west',
        width: 200,
        split: true,
        collapsible: true
    },{
        region: 'center',
        xtype: 'tabpanel',
        layout: 'fit',
        reference: 'main',
        flex: 1,
        items:[{
            title: 'Main',
            html: '<iframe src="/draw/index.html" style="width:100%;height:100%;border:0"></iframe>'
        }]
    }]
});
