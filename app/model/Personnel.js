
Ext.define('MyTestApp.model.Person', {
    extend: "Ext.data.Model",
    idProperty: 'id',
    fields: [
        'id','first_name', 'last_name', 'email', 'date_of_birth','date_added'
    ],
})