/**
 * This view is an example list of people.
 */
Ext.define('MyTestApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    id:'testGrid',
    requires: [
        'Ext.grid.plugin.CellEditing',
        'Ext.form.field.Text',
        'Ext.toolbar.TextItem'
    ],
    listeners: {
        selectionchange: 'onSelectionChange'
    },
    title: 'Personnel',
    controller: 'person-list',
    viewModel: { type: 'studentviewmodel' },
    reference:'studentlistgrid',
    selType: 'rowmodel',
    selModel:
    {
        mode: 'SINGLE'
    },
    viewConfig:
    {
        stripeRows: true
    },
    listeners: {
        selectionchange: 'onSelectionChange',
        exception: function(proxy, response, op) {
            if (response.status === 403 || response.status === 401) return; /skip this exception handler and check App exception handler/
            Ext.Msg.alert('ERROR', response.responseText + ' ' + response.statusText);
          }
    },
    bind: {
        store: '{PersonListStore}'
    },
    initComponent: function() {
        Ext.apply(this,{
            plugins:[{
                ptype:'rowediting',
                clicksToEdit: 1
            }],
            columns : [
                {
                    text: 'First Name',
                    dataIndex: 'first_name',
                    editable: true,
                    width: 100,
                    flex:1,
                    cell: {userCls: 'bold'},
                    editor: {
                        xtype: 'textfield',
                        allowBlank: true
                    }
                },
                {
                    text: 'Last Name',
                    dataIndex: 'last_name',
                    editable: true,
                    width: 100,
                    flex:1,
                    cell: {userCls: 'bold'},
                    editor: {
                        xtype: 'textfield',
                        allowBlank: true
                    }
                },
                {
                    text: 'Email',
                    dataIndex: 'email',
                    editable: true,
                    flex:1,
                    width: 230,
                    editor: {
                        xtype: 'textfield',
                        allowBlank: true
                    }
                },
                {
                    text: 'Date of birth',
                    dataIndex: 'date_of_birth',
                    editable: true,
                    flex:1,
                    width: 150,
                    editor: {
                        xtype: 'textfield',
                        allowBlank: true
                    }
                },
                {
                    text: 'Date added',
                    dataIndex: 'date_added',
                    editable: false,
                    flex:1,
                    width: 150
                }
            ],
            bbar: [{
                xtype:'pagingtoolbar',
                displayInfo:true,
                dock:'bottom',
                bind: {
                    store: '{PersonListStore}'
                },
                beforePageText: 'Страница',
                afterPageText: 'из {0}',
                displayMsg: 'Пользователи {0} - {1} из {2}'
            }],
            tbar: [{
                xtype:'toolbar',
                items: [{
                    iconCls: 'icon-add',
                    text: 'Add',
                    handler: 'onAddClick'
                },
                       
                 {
                    iconCls: 'icon-delete',
                    text: 'Delete',
                    reference: 'btnRemovePerson',
                    disabled: true,
                    handler: 'onRemoveClick'
                }]
            }]
          
        
        
           
            
            
        })
         
        this.callParent(arguments);
    },
    height:500,
//     // listeners: {
//     //     select: 'onItemSelected'
//     // },
//     // renderTo: Ext.getBody()
    
});
