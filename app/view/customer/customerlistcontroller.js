Ext.define('MyApp.view.customer.customerlistcontroller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.customer-list',
    onSaveCustomer : function(obj) {

        const me = this;
        const thisCustomerName = obj.up('grid').down('textfield[name=customerName]').getValue();
        const thisCustomerContact = obj.up('grid').down('textfield[name=contact]').getValue();
        const thisCustomerAddress = obj.up('grid').down('textfield[name=address]').getValue();

        const store = me.getView().getStore();
        store.add({
            customerName: thisCustomerName,
            contact: thisCustomerContact,
            address: thisCustomerAddress,
            registerDate: new Date()
        });

    },

    onInitializeCustomer : function(obj) {

        const me = this;
        const customerName = obj.up('grid').down('textfield[name=customerName]');
        const contact = obj.up('grid').down('textfield[name=contact]');
        const address = obj.up('grid').down('textfield[name=address]');

        customerName.setValue('');
        contact.setValue('');
        address.setValue('');

    },

    onDeleteCustomer : function(obj) {

        const me = this;
        me.getView().getStore().remove(obj.getWidgetRecord());

    }

})

// const me = this;
// console.log(me);
// const view = me.getView();
// console.log(view);
// var store = view.getStore();
// var items = store.getData().items;
// var itemDataList = [];
// for (var i = 0; i < items.length; i++) {
//     var itemData = items[i].getData(); 
//     itemDataList.push(itemData);
//     console.log(itemData); 
// }
// console.log(itemDataList)