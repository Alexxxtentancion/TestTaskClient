Ext.define('MyTestApp.view.main.window.ListWindow', {
    extend: 'Ext.window.Window',
    autoShow: true,
    height: 334,
    width: 540,
    layout: {
        type: 'border'
    },
    title: 'Person Form',
    requires: ['Ext.form.Panel','Ext.form.field.Text'],
    controller: 'person-list',
       initComponent: function () {
        Ext.applyIf(this, {
            items: [{
                xtype: 'form',
                bodyPadding: 10,
                columns: [{header: 'World'}],  
                region: 'center',
                fieldDefaults: {
                    anchor: '100%',
                    labelAlign: 'left',
                    allowBlank: false,
                    combineErrors: true,
                    msgTarget: 'side'
                    },
                    items: [
                        {
                        xtype: 'textfield',
                        name : 'id',
                        fieldLabel: 'id',
                        hidden:true
                        },
                        {
                        xtype: 'textfield',
                        name : 'first_name',
                        fieldLabel: 'First Name'
                        },
                        {
                        xtype: 'textfield',
                        name : 'last_name',
                        fieldLabel: 'Last Name'
                        },
                        {
                        xtype: 'textfield',
                        name : 'email',
                        fieldLabel: 'Email'
                        },
                        {
                            xtype: 'textfield',
                            name : 'date_of_birth',
                            fieldLabel: 'Date of birth'
                            }
                        ],
                        dockedItems : [{
                            xtype: 'toolbar',
                            dock: 'bottom',
                            ui: 'footer',
                            items: ['->', {
                            iconCls: 'icon-save',
                            text: 'Save',
                            handler: 'onSaveClick'
                            },{
                            iconCls: 'icon-reset',
                            text: 'Cancel',
                            scope: this,
                            handler: this.close
                            }]
                            }]
            },
        ]
        });

        this.callParent(arguments);
    }
});