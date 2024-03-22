Ext.define('MyApp.view.main.UserGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'usergrid',
    
    tbar: [{
        xtype: 'button',
        text: '데이터 로드',
        handler: function(btn) {
            const grid = btn.up('grid');
            const store = grid.getStore();
            store.load();
        }
    }],
    columns: [{
        text: 'id',
        flex: 1,
        dataIndex: 'id'
    }, {
        text: 'name',
        flex: 1,
        dataIndex: 'name'
    }, {
        text: 'email',
        flex: 1,
        dataIndex: 'email'
    }],
    store: {
        type: 'userstore' // 스토어 xtype 사용
    }
});
