Ext.define('Grid.model.User', {
    extend: "Ext.data.Model",
    idProperty:'id',
    alias: 'model.user',
    fields: [
        {name:'first_name',type:'string'},
        {name:'last_name',type:'string'},
        {name:'email',type:'string'},
        {name:'date_of_birth',type:'date'},
        {name:'date_added',type:'date'}
    ]
})