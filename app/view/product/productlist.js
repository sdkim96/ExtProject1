Ext.define('MyApp.view.order.productlist', {
    extend: 'Ext.grid.Panel',
    xtype: 'product-list',
    title: '상품목록',

    tbar: [
        { xtype: 'textfield', emptyText: '상품 검색' },
        { xtype: 'button', text: '검색' },
        '->',
        { xtype: 'button', text: '상품 추가', iconCls: 'fa fa-plus', handler: 'onAddProduct' },
        { xtype: 'button', text: '상품 삭제', iconCls: 'fa fa-minus', handler: 'onDeleteProduct' }
    ],

    columns: [
        { text: '상품명', dataIndex: 'productName', flex: 1 },
        { text: '가격', dataIndex: 'productPrice', flex: 1 },
        { text: '재고', dataIndex: 'productAmount', flex: 1 },
        { text: '등록일', dataIndex: 'productRegisterDate', flex: 1 }
    ],

    store: {
        fields: ['productName', 'productPrice', 'productAmount', 'productRegisterDate'],
        data: [
            { productName: '상품1', productPrice: 1000, productAmount: 10, productRegisterDate: new Date() },
            { productName: '상품2', productPrice: 2000, productAmount: 20, productRegisterDate: new Date() }
        ]
    }
});
