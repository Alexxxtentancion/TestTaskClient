Ext.define('MyTestApp.view.main.PersonnelViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.studentviewmodel',
	data: {
		name: 'MyTestApp'
    },
    stores:{
        PersonListStore: {
            storeId: 'tbData',
            alias:'viewmodel.personnelstore',
            autoLoad: true,
            autoSync: true,
            pageSize: 50,
            model:'MyTestApp.model.Person',
            proxy: {
                
                type: 'rest',
                url: 'http://ggous.pythonanywhere.com/mygridapi/persons',
                appendId:true,
                reader: {
                    type: 'json',
                    rootProperty: 'results',
                    totalProperty:'count',
                    cors:true
                },
                writer: {
                    type:'json',
                    writeRecordId: true,
                    writeAllFields: true
                },
                
            },
        }
    }
});
