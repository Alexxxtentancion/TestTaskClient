// Ext.define('Grid.view.main.Main', {
//     extend: 'Ext.tab.Panel',
//     xtype:'mainview',
//     requires: [ 
//                 'Ext.plugin.Viewport',
//                 'Grid.view.main.MainController',
//                 'Grid.view.main.MainModel',
//                 'Grid.view.grid.Grid'
//             ],
//     layout:'fit',
//     title: "Users",
//     viewModel: {type:'main'},
//     tabBarHeaderPosition: 1,
//     titleRotation: 0,
//     tabRotation: 0,
//     header: {
//         layout: {
//             align: 'stretchmax'
//         },
//         title: {
//             bind: {
//                 text: '{name}'
//             },
//             flex: 0
//         },
//         iconCls: 'fa-th-list'
//     },
//     tabBar: {
//         flex: 1,
//         layout: {
//             align: 'stretch',
//             overflowHandler: 'none'
//         }
//     },
//     responsiveConfig: {
//         tall: {
//             headerPosition: 'top'
//         },
//         wide: {
//             headerPosition: 'left'
//         }
//     },
//     defaults: {
//         bodyPadding: 20,
//         tabConfig: {
//             responsiveConfig: {
//                 wide: {
//                     iconAlign: 'left',
//                     textAlign: 'left'
//                 },
//                 tall: {
//                     iconAlign: 'top',
//                     textAlign: 'center',
//                     width: 500
//                 }
//             }
//         }
//     },
//     items: [{
//         title: 'Grid',
//         iconCls: 'fa-home',
//         items: [{
//             xtype:'userGrid',
//             reference:'userListGrid'
//         }]
//         }]

// })
Ext.define('Grid.view.main.Main' ,{
    extend: 'Ext.Container',
    xtype: 'main',
    // controller: 'mainviewcontroller',
    viewmodel: {
        type:'mainviewmodel'
    },
    layout:'fit',
    requires: [
        'Grid.view.main.nav.Navbar',
        'Grid.view.main.footer.Footer'
    ],
    items: [
        {xtype:'navbar',reference:'navbar',docked:'left'},
        { xtype: 'footerview', reference: 'footerview', docked: 'bottom'},
    ]
})