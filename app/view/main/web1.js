Ext.define('MyApp.view.main.web1', {
    statics: {
        main: function() {
            Ext.create(Ext.container.Viewport, {
                xtype: 'main',
                layout: 'border',
                items: [{
                    xtype: 'panel',
                    region: 'north',
                    // title: 'Market Admin',
                    // header: false,
                    items: [{
                        xtype: 'toolbar',
                        items: [{
                            xtype: 'label',
                            html : '<h2>Market Admin</h2>',
                        },'->',{
                            xtype: 'button',
                            text: 'xxx님',
                            menu: [{
                                text: '비밀번호 변경',
                                handler : function(btn) {
                                    Ext.widget('updatePassword');
                                }
                            },{
                                text: '로그아웃',
                                handler: function(btn) {
                                    btn.up('viewport').destroy();
                                    Ext.widget('login');
                                }
                            }]
                        }]
                    }]
                },{
                    xtype: 'panel',
                    border : true,
                    region: 'west',
                    layout: 'fit',
                    width: 200,
                    items: [{
                        xtype: 'treelist',
                        listeners: {
                            selectionchange: function(obj, record){
                                console.log(record.get('page'));
                                const centerPage = obj.up('viewport').down('component[region=center]');
                                centerPage.removeAll(true);
                                if (record.get('page') === 'customer-list') {
                                    centerPage.add({
                                        xtype: 'customer-list'
                                    });
                                } else if (record.get('page') === 'product-list') {
                                    centerPage.add({
                                        xtype: 'product-list'
                                    });
                                } else if (record.get('page') === 'order-list') {
                                    centerPage.add({
                                        xtype: 'order-list'
                                    });
                                }
                            }
                        },
                        store: {
                            root: {
                                expanded : true,
                                children : [{
                                    text : '상품관리',
                                    iconCls : 'x-fa fa-gift',
                                    expanded : true,
                                    selectable : false,
                                    children : [{
                                        text : '상품목록',
                                        page : 'product-list',
                                        leaf : true
                                    },]          
                                },{
                                    text : '주문관리',
                                    iconCls : 'x-fa fa-shopping-cart',
                                    expanded : true,
                                    children : [{
                                        text : '주문목록',
                                        page : 'order-list',
                                        leaf : true
                                    },]
                                },{
                                    text : '고객관리',
                                    expanded : true,
                                    iconCls : 'x-fa fa-users',
                                    children : [{
                                        text : '고객목록',
                                        page : 'customer-list',
                                        leaf : true
                                    },]
                                },]
                            }
                        }
                    }]
                },{
                    xtype: 'panel',
                    flex: 1,
                    region: 'center',
                    layout: 'fit',
                    border:true,
                    items: {
                        xtype: 'panel',
                        html: "<h2>Main DashBoard</h2>"
                    }
                }]
            })
        }
    }
})