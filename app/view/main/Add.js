/**
 * @class FeedViewer.FeedWindow
 * @extends Ext.window.Window
 *
 * Shows a dialog for creating and validating a new feed.
 *
 * @constructor
 * Create a new Feed Window
 * @param {Object} config The config object
 */

Ext.define('cascoFront.view.main.Add', {
    extend: 'Ext.window.Window',

    alias: 'widget.add',
    uses: [
        'cascoFront.view.main.DocTree'
    ],
    plain: true,
    resizable: true,
    maximizable: true,
    modal: true,
    closeAction: 'hide',
    defaultFocus: '#feed',

    initComponent: function(){
        var me = this;
        me.form = Ext.create('widget.form', {
            bodyPadding: '12 10 10',
            border: false,
            unstyled: true,
            items: [{
                anchor: '100%',
                fieldLabel: 'Id',
                labelAlign: 'top',
                msgTarget: 'under',
                xtype: 'textfield'
            },{
                anchor: '100%',
                fieldLabel: 'Description',
                labelAlign: 'top',
                msgTarget: 'under',
                xtype: 'textarea'
            },{
                anchor: '100%',
                fieldLabel: 'Sources',
                labelAlign: 'top',
                msgTarget: 'under',
                xtype: 'textarea'
            },{
                anchor: '100%',
                fieldLabel: 'Test Method',
                labelAlign: 'top',
                msgTarget: 'under',
                xtype: 'textarea'
            },{
                anchor: '100%',
                fieldLabel: 'Pre condition',
                labelAlign: 'top',
                msgTarget: 'under',
                xtype: 'textarea'
            },{
                anchor: '100%',
                title: 'Test Steps',
                style: 'backgroud: #fff',
                labelAlign: 'top',
                msgTarget: 'under',
                xtype: 'form',
                items: [{
                    anchor: '10%',
                    fieldLabel: 'Step',
                    labelAlign: 'top',
                    msgTarget: 'under',
                    style: 'float: left;margin-right:10px;border:0',
                    xtype: 'textfield',
                    value: 1
                },{
                    anchor: '45%',
                    fieldLabel: 'Actions',
                    labelAlign: 'top',
                    msgTarget: 'under',
                    style: 'float: left;margin-right:10px;',
                    xtype: 'textarea'
                },{
                    anchor: '45%',
                    fieldLabel: 'Expected Result',
                    labelAlign: 'top',
                    msgTarget: 'under',
                    style: 'float: left;',
                    xtype: 'textarea'
                }]
            },{
                text: 'Add Step',
                style: 'float: right',
                xtype: 'button',
                handler: function() {
					
				}
            }]
        });
        Ext.apply(me, {
            width: 800,
            height: 550,
            title: 'Add Item',
            layout: {
                type: 'border',
                padding: 0
            },

            items: [{
                xtype: 'doctree',
                region: 'west',
                width: 200,
                collapsible: true,
                split: true,
                floatable: false,

            }, {
                region: 'center',
                xtype: 'panel',
                title: 'Content',
                autoScroll: true,
                items: me.form,

                dockedItems: [{
                    xtype: 'toolbar',
                    dock: 'bottom',
                    style: {background: '#eee'},
                    items: ['->',
                        {
                            text: 'Save',
                            glyph: 0xf0c7,
                            scope: me,
                            handler : me.doHide
                        },{
                            text: 'Cancel',
                            glyph: 0xf112,
                            scope: me,
                            handler : me.doHide
                        }
                    ]
                }]
            }]
        });
        me.callParent(arguments);
    },

    doHide: function(){
        this.hide();
    },

});