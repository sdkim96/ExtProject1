Ext.define('MyApp.view.order.orderlistcontroller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.order-list',
    
    onSaveOrder: function(obj) {

        thisOrderCustomerName = obj.up('grid').down('textfield[name=OrderCustomerName]').getValue();
        thisOrderCustomerGoods = obj.up('grid').down('textfield[name=OrderCustomerGoods]').getValue();
        thisOrderCustomerAmount = obj.up('grid').down('textfield[name=OrderCustomerAmount]').getValue();

        const store = this.getView().getStore();

        const lastId = store.getAt(store.getCount() - 1).get('orderId');
        store.add({
            orderId: lastId + 1,
            customerName: thisOrderCustomerName,
            orderGoods: thisOrderCustomerGoods,
            orderAmount: thisOrderCustomerAmount,
            orderTotalAmount: thisOrderCustomerAmount * 1000, // 나중에 고치면댐 
            orderDate: new Date()
        })

    },

    onInitializeOrder: function(obj) {

        obj.up('grid').down('textfield[name=OrderCustomerName]').setValue('');
        obj.up('grid').down('textfield[name=OrderCustomerGoods]').setValue('');
        obj.up('grid').down('textfield[name=OrderCustomerAmount]').setValue('');

    },

    onSearchOrder: function(obj) {

        const me = this;
        const store = me.getView().getStore();
        const searchOrder = obj.up('grid').down('textfield[name=searchOrder]').getValue();
        store.filter('customerName', searchOrder);
        
    },
})