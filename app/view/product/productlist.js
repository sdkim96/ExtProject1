Ext.define('MyApp.view.order.productlist', {
    extend: 'Ext.grid.Panel',
    xtype: 'product-list',
    title: '상품목록',
    controller: 'product-list',

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [
            { xtype: 'textfield', fieldLabel: '상품명', name: 'productName', flex:1},
            { xtype: 'textfield', fieldLabel: '가격', name: 'productPrice', flex:1},
            { xtype: 'textfield', fieldLabel: '재고', name: 'productAmount', flex:1},
            { xtype: 'button', text: '저장', handler: 'onSaveProduct'},
            { xtype: 'button', text: '초기화', handler: 'onInitializeProduct'},
        ]
    },{
        xtype: 'toolbar',
        dock: 'top',
        items: [
            { xtype: 'textfield', fieldLabel: '상품명 검색', name: 'searchProductName', flex: 1},
            { xtype: 'button', text: '검색', handler: 'onSearchProduct'}
        ]
    }],

    columns: [
        { text: '상품명', dataIndex: 'productName', flex: 1 },
        { text: '가격', dataIndex: 'productPrice', flex: 1 },
        { text: '재고', dataIndex: 'productAmount', flex: 1 },
        { text: '등록일', dataIndex: 'productRegisterDate', flex: 1 },
        { text: '삭제', xtype: 'actioncolumn', iconCls: 'x-fa fa-edit', flex: 1,
            items: [{
                iconCls: 'x-fa fa-trash',
                tooltip: '삭제',
                handler: function(grid, rowIndex, colIndex) {
                    var rec = grid.getStore().getAt(rowIndex);
                    Ext.Msg.confirm('삭제', rec.get('productName') + ' 상품을 삭제하시겠습니까?', function(btn) {
                        if (btn == 'yes') {
                            grid.getStore().remove(rec);
                        }
                    });
                }
            }],
        }],

    store: {
        fields: ['productName', 'productPrice', 'productAmount', 'productRegisterDate'],
        data: [
            { productName: '상품1', productPrice: 1000, productAmount: 10, productRegisterDate: new Date() },
            { productName: '상품2', productPrice: 2000, productAmount: 20, productRegisterDate: new Date() }
        ]
    }
});
