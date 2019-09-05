Ext.define('Grid.view.grid.GridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.users',
    // routes : {
    //     '/page/:id' : {
    //         action: 'onPageClick'
    //     }
    // },
    onSelectionChange: function (sender,record)  {
        var removeBtn = this.lookupReference('btnRemoveUser');
        if (record.length){
            removeBtn.setDisabled(false)
        }
        else{
            removeBtn.setDisabled(true)
        }
    },
     onRemoveClick: function(sender,record) {
         var userGrid = this.getView()
         var userStore = userGrid.getStore()
         var selectedRows = userGrid.getSelectionModel().getSelection();
         userStore.remove(selectedRows)
         console.log(selectedRows)
     },

    //  onPageClick: function(sender,record) {
        
    //  },

     onAddClick: function(button) {
        Ext.require('Grid.view.form.AddForm');
        Ext.onReady(function() {
            Ext.create('Grid.view.form.AddForm').show();
    });
         
     } 
})