Ext.define('Grid.view.main.nav.NavbarController', {
    extend:'Ext.app.ViewController',
    alias:'controller.navbar',

    routes:{
        'test':'onTestClick',
        'grid': 'onGridClick'
    },
    onTestClick:function() {
        this.redirectTo('test')
    },
    onGridClick: function() {
        this.redirectTo('grid')
    }
})