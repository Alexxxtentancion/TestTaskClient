Ext.define('Grid.view.form.AddForm',{
    extend:'Ext.window.Window',
    autoShow:true,
    height: 334,
    width: 540,
    layout: {
        type: 'border'
    },
    modal:true,
    title: 'Person Form',
    controller: 'form',
    requires: ['Ext.form.Panel','Ext.form.field.Text'],
    constructor: function() {
        Ext.applyIf(this, {
            items: [{
                xtype: 'form',
                bodyPadding: 10,
                columns: [{header: 'World'}],
                region:'center',
                items: [
                    {
                        xtype:'textfield',
                        name: 'id',
                        hidden: true
                    },
                    {
                        xtype:'textfield',
                        name: 'first_name',
                        fieldLabel:'First Name',
                        allowBlank: false
                    },
                    {
                        xtype:'textfield',
                        name: 'last_name',
                        fieldLabel:'Last Name',
                        allowBlank: false
                        
                    },
                    {
                        xtype:'textfield',
                        name: 'email',
                        fieldLabel:'Email',
                        allowBlank: false
                    },
                    {
                        xtype:'datefield',
                        name: 'date_of_birth',
                        fieldLabel:'Date of Birth',
                        allowBlank: false
                    }
                ],
                dockedItems: [{
                    xtype: 'toolbar',
                    dock: 'bottom',
                    ui: 'footer',
                    items: ['->', {
                        text:'Save',
                        formBind:true,
                        handler: 'onSaveClick',
                    },{
                        text: 'Cancel',
                        scope: this,
                        handler:this.close
                    }]
                }]
                
            }]
        })
        this.callParent(arguments)
    }
    // items: [{
    //     xtype:'form',
    //     bodyPadding: 10,
    //     region:'center',
    //     items: [
    //         {
    //             xtype:'textfield',
    //             fieldLabel:'First Name'
    //         },
    //         {
    //             xtype:'textfield',
    //             fieldLabel:'Last Name'
    //         },
    //         {
    //             xtype:'textfield',
    //             fieldLabel:'Email'
    //         },
    //         {
    //             xtype:'datefield',
    //             fieldLabel:'Date of Birth'
    //         }
    //     ]
        
        
    // },
    // ],
    
})