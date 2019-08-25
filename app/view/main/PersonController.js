Ext.define('MyTestApp.view.main.PersonnelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.person-list',
    onSelectionChange: function (sender, record, isSelected) {
        var removeBtn = this.lookupReference('btnRemovePerson');
        if(record.length)
            removeBtn.setDisabled(false);
        else
            removeBtn.setDisabled(true);
    },
    onRemoveClick: function(sender,record) {
        var personGrid = this.getView();
        var personStore = personGrid.getStore();
        var selectedRows = personGrid.getSelectionModel().getSelection();
        selectedRows[0].data.id=selectedRows[0].internalId
        personStore.remove(selectedRows);
    },
    onAddClick : function(sender,record){
        Ext.create('MyTestApp.view.main.window.ListWindow').show();
    },
    onSaveClick: function(button) {
        var win = button.up('window'),
        form = win.down('form'),
        values = form.getValues();
        var model = Ext.create('MyTestApp.model.Person');
        model.set(values);
        var personStore = Ext.getStore('tbData');
        personStore.add(model);
        win.close()
    }
});
