Ext.define('Grid.view.main.footer.Footer' ,{
    extend: 'Ext.panel.Panel',
    xtype: 'footerview',
    title: 'Footer',
    headerPosition:'bottom',
    layout:'fit',
    requires: [ 
        'Ext.plugin.Viewport',
        'Grid.view.main.MainController',
        'Grid.view.main.MainModel',
        'Grid.view.grid.Grid'
    ],
    reference: 'footerview',
    viewmodel: {},
})