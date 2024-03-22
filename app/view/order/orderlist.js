Ext.define('MyApp.view.order.orderlist', {
    extend: 'Ext.grid.Panel',
    xtype: 'order-list',
    title: '주문목록',

    tbar: [
        { xtype: 'textfield', emptyText: '주문 검색' },
        { xtype: 'button', text: '검색' },
        '->',
        { xtype: 'button', text: '배송 정보', iconCls: 'fa fa-truck', handler: 'onShowShippingInfo' }
    ],

    columns: [
        { text: '주문번호', dataIndex: 'orderId', flex: 1 },
        { text: '고객명', dataIndex: 'customerName', flex: 1 },
        { text: '주문금액', dataIndex: 'orderAmount', flex: 1 },
        { text: '주문일', dataIndex: 'orderDate', flex: 1 }
    ],

    store: {
        fields: ['orderId', 'customerName', 'orderAmount', 'orderDate'],
        data: [
            { orderId: 'A001', customerName: '홍길동', orderAmount: 50000, orderDate: new Date() },
            { orderId: 'A002', customerName: '김철수', orderAmount: 70000, orderDate: new Date() }
        ]
    }
});
