Ext.define('MyTestAppV2.view.grid.GridModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.grid',
    requires:[
        'Grid.model.User',
    ],
    data: {
		name: 'Grid'
    },
    stores: {
        UserStore: {
            storeId: 'userStore',
            alias: 'viewmodel.userstore',
            reference:'userStore',
            autoLoad: true,
            autoSync: true,
            pageSize: 50,
            model: 'Grid.model.User',
            proxy: {
                type:'rest',
                url: 'https://ggous.pythonanywhere.com/mygridapi/persons',
                appendId:true,
                reader: {
                    type: 'json',
                    rootProperty: 'results',
                    totalProperty:'count',
                    cors:true
                },
                writer: {
                    type: 'json',
                    dateFormat: 'Y-m-d',
                    writeRecordId: true,
                    writeAllFields: false
                }
            }
        }
    }
})