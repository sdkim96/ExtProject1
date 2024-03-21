Ext.define('MyApp.components.Lesson13', {
    statics: {
        main: function() {
            layout = 'fit';

            let store = {
                fields: ['name', 'age', 'email', 'phone'],
                data: [{
                    name: '홍길동',
                    age: 20,
                    email: 'hongildong@gmail.com',
                    phone: '010-1234-5678',
                },{
                    name: '이순신',
                    age: 30,
                    email: 'yisoonsin@naver.com',
                    phone: '010-5678-1233',
                },{
                    name: '강감찬',
                    age: 40,
                    email: 'gangamchan@outlook.kr',
                    phone: '010-4321-8765',
                }]
            };

            let remoteStore = {
                fields: ['name', 'age', 'email', 'phone', 'address'],
                autoLoad: true,
                proxy: {
                    type: 'ajax',
                    url: 'app/data/combo.json',
                    reader: {
                        type: 'json',
                        rootProperty: 'data',
                    }
                }
            };


            Ext.create('Ext.panel.Panel', {
                renderTo: Ext.getBody(),
                title: 'Panel',
                items: [{
                    xtype: 'combo',
                    displayField: 'name',
                    valueField: 'name',
                    store: store,
                },{
                    xtype: 'grid',
                    columns: [{
                        text: 'name',
                        flex: 2,
                        style: 'text-align:center',
                        align: 'center',
                        dataIndex: 'name', //dataIndex는 store에 있는 필드명과 동일해야한다. 매핑키 같은 느낌
                    },{
                        text: 'age',
                        flex: 1,
                        style: 'text-align:center',
                        align: 'right',
                        dataIndex: 'age',
                    },{
                        text: 'email',
                        flex: 3,
                        style: 'text-align:center',
                        align: 'left',
                        dataIndex: 'email',
                    },{
                        text: 'phone',
                        flex: 2,
                        style: 'text-align:center',
                        align: 'right',
                        dataIndex: 'phone',
                    },{
                        text: 'address',
                        flex: 2,
                        style: 'text-align:center',
                        align: 'right',
                        dataIndex: 'address',
                    }],
                    store: remoteStore,
                }]
            });
        }
    }
});
    

