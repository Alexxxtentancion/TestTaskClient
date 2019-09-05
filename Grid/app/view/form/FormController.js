Ext.define('Grid.view.form.FormController', {
    extend: 'Ext.app.ViewController',
    alias:'controller.form',
    onSaveClick: function(button) {
        var win = button.up('window')
        form = win.down('form')
        values = form.getValues()
        var model = Ext.create('Grid.model.User')
        model.set(values)
        var userStore = Ext.getStore('userStore')
        userStore.add(model)
        win.close()
        // console.log(model)
    }
})