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