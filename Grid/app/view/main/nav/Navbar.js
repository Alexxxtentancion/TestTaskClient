Ext.define('Grid.view.main.nav.Navbar', {
    extend: 'Ext.tab.Panel',
    xtype:'navbar',
    requires: [ 
                'Ext.plugin.Viewport',
                'Grid.view.main.MainController',
                'Grid.view.main.MainModel',
                'Grid.view.grid.Grid',
                'Grid.view.main.nav.NavbarController'
            ],
    layout:'fit',
    // width:'100',
    height: '100',
    // title: "App",
    controller:'navbar',
    tabPosition:'left',
    tabRotation:0,
    reference:'navbar',
    viewModel: {type:'main'},
    tabPosition: 'left',
    items: [{
        title: 'Grid',
        tabConfig: {
            listeners:{
                click: 'onGridClick'
            }
        },
        items: [{
            xtype:'userGrid',
            reference:'userListGrid'
        }]
        },
        {
            title:'Test',
            tabConfig: {
                listeners:{
                    click: 'onTestClick'
                }
            }
        }]

})