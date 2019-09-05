Ext.define('Grid.view.main.footer.Footer' ,{
    extend: 'Ext.panel.Panel',
    xtype: 'footerview',
    layout:'fit',
    requires: [ 
        'Ext.plugin.Viewport',
        'Grid.view.main.MainController',
        'Grid.view.main.MainModel',
        'Grid.view.grid.Grid'
    ],
    reference: 'footerview',
    // cls: 'footer',
    viewmodel: {},
    items: [
        {
            xtype:'container',
            // cls: 'footerviewtext'
        }
    ]
})