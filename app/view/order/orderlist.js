Ext.define('MyApp.view.order.orderlist', {
    extend: 'Ext.grid.Panel',
    xtype: 'order-list',
    title: '주문목록',
    controller: 'order-list',

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [
            { xtype: 'textfield', fieldLabel: '고객명', name: 'OrderCustomerName', flex:1},
            { xtype: 'textfield', fieldLabel: '주문상품', name: 'OrderCustomerGoods', flex:1},
            { xtype: 'textfield', fieldLabel: '주문개수', name: 'OrderCustomerAmount', flex:1},
            { xtype: 'button', text: '저장', handler: 'onSaveOrder'},
            { xtype: 'button', text: '초기화', handler: 'onInitializeOrder'},
        ]
    },{
        xtype: 'toolbar',
        dock: 'top',
        items: [
            { xtype: 'textfield', fieldLabel: '주문 검색', name: 'searchOrder', flex: 1},
            { xtype: 'button', text: '검색', handler: 'onSearchOrder'}
        ]
    }],

    columns: [
        { text: '주문번호', dataIndex: 'orderId', flex: 1 },
        { text: '고객명', dataIndex: 'customerName', flex: 1 },
        { text: '주문상품', dataIndex: 'orderGoods', flex: 1},
        { text: '주문개수', dataIndex: 'orderAmount', flex: 1 },
        { text: '총 금액', dataIndex: 'orderTotalAmount', flex: 1},
        { text: '주문일', dataIndex: 'orderDate', flex: 1 }
    ],

    store: {
        fields: ['orderId', 'customerName', 'orderGoods','orderAmount', 'orderTotalAmount', 'orderDate'],
        data: [
            { orderId: 'A001', customerName: '홍길동', orderGoods: '상품1', orderAmount: 2, orderTotalAmount:2000, orderDate: new Date()},
            { orderId: 'A002', customerName: '김철수', orderGoods: '상품2', orderAmount: 3, orderTotalAmount:6000, orderDate: new Date()}
        ]
    }
});
