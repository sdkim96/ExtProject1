Ext.define('MyApp.components.Lesson15', {
    statics: {
        main: function() {
            layout = 'fit';

            Ext.create('Ext.panel.Panel', {
                height:800,
                width:800,
                renderTo: Ext.getBody(),
                layout: 'fit',
                items:{
                    xtype: 'grid',
                    listeners: {
                        cellclick: function(obj, td, cellIndex, record, tr, rowIndex, e, eOpts)
                        {
                            console.log(record.getData());
                        },
                        itemcontextmenu: function(obj, record, item, index, e, eOpts)
                        {
                            e.stopEvent();
                            console.log(record.getData());
                        }
                    },
                    plugins: 'cellediting', //편집가능하게 하는 플러그인
                    columns: [
                        { 
                            text: 'ID', 
                            dataIndex: 'id', 
                            flex: 1, 

                        },{ 
                            text: 'Name', 
                            dataIndex: 'name', 
                            flex: 1,
                            editor:{
                                xtype: 'textfield'
                            }
                        },{ 
                            text: 'Email', 
                            dataIndex: 'email', 
                            flex: 2,
                            editor:{
                                xtype: 'textfield'
                            },
                            // 화면에 표시되는 값에 대한 변환 
                            // 
                            renderer: function(value, metaData, record, rowIndex, colIndex, store, view)
                            {
                                console.log(value);
                                return value;
                            }
                        },],
                    store: {
                        autoLoad: true,
                        autoSync: true,
                        proxy: {
                            type: 'ajax',
                            // url: 'http://localhost:8000/read_all',
                            api:{
                                read: 'http://localhost:8000/read_all',
                                create: 'http://localhost:8000/create',
                                update: 'http://localhost:8000/update',
                                destroy: 'http://localhost:8000/delete',
                            },
                            headers:{
                                'Content-Type': 'application/json'
                            },
                            listeners: {
                                beforerequest: function(proxy, request) {
                                    console.log(request.url)
                                    console.log(request.params)
                                }
                            },
                            reader: {
                                type: 'json',
                                rootProperty: 'users',
                            },
                            writer : {
                                type: 'json',
                                writeAllFields: false,
                                rootProperty: 'users',
                                encode : false, // true로 하면 json으로 인코딩해서 보내기 때문에 서버에서 받을 때 json으로 파싱해야한다. 
                            }
                        },
                        fields: ['id', 'name', 'email'],
                    },
                    // bottom toolbar
                    bbar : {
                        xtype: 'pagingtoolbar',
                        displayInfo: true,
                        // plugins : "ux-slidingpager", //app.json에 requires에 'ux' 추가
                        plugins : "ux-progressbarpager", //app.json에 requires에 'ux' 추가
                    },
                    // top toolbar
                    // [] 의 역할은 가득 채우냐, 가득 채우지 않느냐의 차이
                    tbar :[{
                        xtype: 'button',
                        text: 'tbar button',
                        handler: function(btn)
                        {
                            alert('tbar button')
                        }
                    },{
                        xtype: 'combo',
                        listeners: {
                            change: function(obj, newValue, oldValue, eOpts)
                            {
                                console.log(newValue + "," + oldValue);
                            },
                        },
                        displayField: 'key',
                        valueField: 'value',
                        queryMode: 'local', // 하드코딩된 데이터를 사용할 때
                        store : {
                            fields:['key','value'],
                            data : [{
                                key: '1',
                                value: '1'
                            },{
                                key: '2',
                                value: '2'
                            },{
                                key: '3',
                                value: '3'
                            }]
                        }
                    }],
                    // right toolbar
                    rbar :[{
                        xtype: 'button',
                        text: 'rbar button',
                    }],
                    // left toolbar
                    lbar :[{
                        xtype: 'button',
                        text: 'lbar button',
                    }],
                    // footer toolbar
                    fbar :[{
                        xtype: 'button',
                        text: 'fbar button',
                    }],

                }
            });
        }
    }
});