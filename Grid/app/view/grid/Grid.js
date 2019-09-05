Ext.define('Grid.view.grid.Grid', {
    extend:'Ext.grid.Panel',
    xtype:'userGrid',
    id:'Grid',
    title:"Users",
    reference:'userListGrid',
    viewModel: {type:'grid'},
    requires:[
        'Grid.view.grid.GridController',
    ],
    layout:'fit',
    // padding:30,
    controller: 'users',
    bind: {
        store: '{UserStore}'
    },
    plugins: {
        ptype: 'rowediting', //изменение строк грида
        clicksToEdit: 2
    },
    listeners: {
        selectionchange: 'onSelectionChange' // при выборе активирует конпку
    },
    columns: [
        {text:'First Name',dataIndex: 'first_name',flex:1,editor: {xtype:'textfield'}},
        {text:'Last Name',dataIndex:'last_name',flex:1,editor: {xtype:'textfield'}},
        {text:'Email',dataIndex:'email',flex:1,editor: {xtype:'textfield'}},
        {text:'Date of Birth',xtype:'datecolumn',dataIndex:'date_of_birth',flex:1,editor: {xtype:'datefield'}},
        {text:'Date Added',xtype:'datecolumn',dataIndex:'date_added',flex:1,editable:false}
    ],
    bbar: [{
        xtype:'pagingtoolbar', //пагинация
        displayInfo:true,
        flex:1,
        dock:'bottom',
        bind: {
            store: '{UserStore}'
        },
        beforePageText: 'Страница',
        afterPageText: 'из {0}',
        displayMsg: 'Пользователи {0} - {1} из {2}'
    }],
    tbar: [{
        xtype:'toolbar', //тулбар
        flex:1,
        items: [{
            iconCls: 'icon-add',
            text: 'Add',
            reference: 'btnAddUser',
            handler: 'onAddClick'
        },
               
         {
            iconCls: 'icon-delete',
            text: 'Delete',
            reference: 'btnRemoveUser',
            disabled: true,
            handler: 'onRemoveClick'
        }]
    }],
    // height:'auto
    height:750
    
    
})