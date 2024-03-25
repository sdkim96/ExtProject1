Ext.define('MyApp.view.product.productlistcontroller', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.product-list',
    
    onSaveProduct: function(obj) {
        
        const me = this;

        const thisPN = obj.up('toolbar').down('textfield[name=productName]').getValue();
        const thisPP = obj.up('toolbar').down('textfield[name=productPrice]').getValue();
        const thisPA = obj.up('toolbar').down('textfield[name=productAmount]').getValue();
        const thisPRD = new Date();

        const store = me.getView().getStore();
        store.add({
            productName: thisPN,
            productPrice: thisPP,
            productAmount: thisPA,
            productRegisterDate: thisPRD
        });

    },

    onInitializeProduct: function(obj) {

        obj.up('toolbar').down('textfield[name=productName]').setValue('');
        obj.up('toolbar').down('textfield[name=productPrice]').setValue('');
        obj.up('toolbar').down('textfield[name=productAmount]').setValue('');
    },

    onSearchProduct: function(obj) {
        const me = this;
        const store = me.getView().getStore();
        const searchProductName = obj.up('toolbar').down('textfield[name=searchProductName]').getValue();
        store.filter('productName', searchProductName);
    },
})