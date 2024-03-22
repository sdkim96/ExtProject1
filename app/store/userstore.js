Ext.define('MyApp.store.UserStore', {
    extend: 'Ext.data.Store',
    alias: 'store.userstore', // xtype으로 사용 가능하게 함
    fields: ['id', 'name', 'email'],
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'http://localhost:8000/read_all',
        reader: {
            type: 'json',
            rootProperty: 'users',
            totalProperty: 'total'
        }
    }
});