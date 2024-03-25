Ext.define('MyApp.view.order.customerlist', {
    extend: 'Ext.grid.Panel',
    xtype: 'customer-list',
    title: '고객목록',
    controller: 'customer-list',
    columnLines: true,


    tbar: [
        { xtype: 'textfield', fieldLabel: '고객명', name: 'customerName', flex:1},
        { xtype: 'textfield', fieldLabel: '연락처', name: 'contact', flex:1},
        { xtype: 'textfield', fieldLabel: '주소', name: 'address', flex:1},
        { xtype: 'button', text: '저장', handler: 'onSaveCustomer'},
        { xtype: 'button', text: '초기화', handler: 'onInitializeCustomer'},
    ],
    
    columns: [
        { text: '고객명', dataIndex: 'customerName', flex: 1 },
        { text: '연락처', dataIndex: 'contact', flex: 1 },
        { text: '주소', dataIndex: 'address', flex: 1 },
        { text: '가입일', dataIndex: 'registerDate', flex:1},
        { text: '삭제', xtype: 'widgetcolumn', flex:1,
            widget:{
                xtype:'button',
                text:'삭제',
                handler: 'onDeleteCustomer'
            }
        },
    ],

    store: {
        fields: ['customerName', 'contact', 'address', 'registerDate'],
        
        data: [
            { customerName: '홍길동', contact: '010-1234-5678', address: '서울시 강남구', registerDate: new Date() },
            { customerName: '김철수', contact: '010-8765-4321', address: '서울시 서초구', registerDate: new Date() }
        ]
    },
    

   
});    
