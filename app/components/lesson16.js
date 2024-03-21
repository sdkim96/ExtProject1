Ext.define('MyApp.components.Lesson16', {
    statics: {
        main: function() {
            Ext.create('Ext.container.Viewport', {
                layout: 'center',
                items: [{
                    xtype: 'panel',
                    title: 'CRUD 예제',
                    height: 800,
                    width: 800,
                    layout: 'fit',
                    border: true,
                    items: [{
                        xtype: 'grid',
                        columns: [{
                            text: 'ID',
                            dataIndex: 'id',
                            flex: 1
                        },{
                            text: 'Name',
                            dataIndex: 'name',
                            flex: 1,
                            editor: {
                                xtype: 'textfield'
                            }
                        },{
                            text: 'Email',
                            dataIndex: 'email',
                            flex: 2,
                            editor: {
                                xtype: 'textfield'
                            }
                        }],
                        store : {
                            xtype: 'store',
                            autoLoad: true,
                            fields : ['id', 'name', 'email'],

                            proxy: {
                                type: 'ajax',
                                api : {
                                    read: 'http://localhost:8000/read_all',
                                    create: 'http://localhost:8000/create',
                                    update: 'http://localhost:8000/update',
                                    destroy: 'http://localhost:8000/delete',
                                },
                                reader: {
                                    type: 'json',
                                    rootProperty: 'users',
                                    totlaProperty: 'total'
                                },
                                writer:{
                                    type: 'json',
                                    writeAllFields: false,
                                    encode: false,
                                    rootProperty: 'users'
                                },
                                header : {
                                    'Content-Type' : 'application/json'
                                },
                            }
                        },
                        plugins: [{
                            ptype: 'cellediting',
                            clicksToEdit: 1
                        }],
                        bbar : {
                            xtype: 'pagingtoolbar',
                            displayInfo: true
                        },
                        tbar :[{
                            xtype: 'button',
                            text: '추가',
                            handler: function(btn) {
                                console.log('추가 버튼 클릭');
                                // console.log("AA", btn.up('grid'));
                                // 1. store 찾기
                                const store = btn.up('grid').getStore();
                                console.log(store.getData().getIndices());

                                const indices = store.getData().getIndices();
                                const keys = Object.keys(indices);
                                const maxkey = Math.max(...keys);
                                console.log(maxkey);

                                const newRecData = {
                                    id: maxkey + 1,
                                    name: '',
                                    email: ''
                                };
                                store.add(newRecData);
                            },
                        },{
                            xtype: 'button',
                            text: '삭제',
                            handler: function(btn) {
                                console.log('삭제 버튼 클릭');
                                const store = btn.up('grid').getStore();
                                const removeRec = btn.up('grid').getSelection();

                                store.remove(removeRec);
                            },
                        },{
                            xtype: 'button',
                            text: '저장',
                            handler: function(btn) {
                                const store = btn.up('grid').getStore();
                                store.sync({
                                    callback : function() {
                                        store.load();
                                    }
                                })
                            },
                        }]
                    }]
                }]   
            });
        }
    }
});