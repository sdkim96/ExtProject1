Ext.define('MyApp.view.order.userlist', {
    extend: 'Ext.grid.Panel',
    xtype: 'user-list',
    title: '고객목록',

    tbar: [
        { xtype: 'textfield', emptyText: '고객 검색' },
        { xtype: 'button', text: '검색' },
        '->',
        { xtype: 'button', text: '고객 추가', iconCls: 'fa fa-user-plus', handler: 'onAddUser' }
    ],

    columns: [
        { text: '고객명', dataIndex: 'userName', flex: 1 },
        { text: '연락처', dataIndex: 'contact', flex: 1 },
        { text: '주소', dataIndex: 'address', flex: 2 },
        { text: '가입일', dataIndex: 'registerDate', flex:1},
    ],

    store: {
        fields: ['userName', 'contact', 'address', 'registerDate'],
        data: [
            { userName: '홍길동', contact: '010-1234-5678', address: '서울시 강남구', registerDate: new Date() },
            { userName: '김철수', contact: '010-8765-4321', address: '서울시 서초구', registerDate: new Date() }
        ]
    }
});    
