Ext.require([
    'MyApp.components.Lesson13',
    'MyApp.components.Lesson14',
    'MyApp.components.Lesson15',
    'MyApp.components.Lesson16',
    'MyApp.components.Lesson17',
    'MyApp.components.Lesson18',
    'MyApp.components.Lesson19',
]);

Ext.onReady(function() {
    MyApp.components.Lesson20.main();
});

//14강 내용
    // Ext.create('Ext.grid.Panel', {

    //     width: 500,
    //     height: 500,
    //     renderTo: Ext.getBody(),
    //     columns: [{
    //         text: 'name',
    //         flex: 2,
    //         style: 'text-align:center',
    //         align: 'center',
    //         dataIndex: 'name', //dataIndex는 store에 있는 필드명과 동일해야한다. 매핑키 같은 느낌
    //     },{
    //         text: 'age',
    //         flex: 1,
    //         style: 'text-align:center',
    //         align: 'right',
    //         dataIndex: 'age',
    //     },{
    //         text: 'email',
    //         flex: 3,
    //         style: 'text-align:center',
    //         align: 'left',
    //         dataIndex: 'email',
    //     },{
    //         text: 'phone',
    //         flex: 2,
    //         style: 'text-align:center',
    //         align: 'right',
    //         dataIndex: 'phone',
    //     }],
    //     store: {
    //         fields: ['name', 'age', 'email', 'phone'],
    //         data: [{
    //             name: '홍길동',
    //             age: 20,
    //             email: 'hongildong@gmail.com',
    //             phone: '010-1234-5678',
    //         },{
    //             name: '이순신',
    //             age: 30,
    //             email: 'yisoonsin@naver.com',
    //             phone: '010-5678-1233',
    //         },{
    //             name: '강감찬',
    //             age: 40,
    //             email: 'gangamchan@outlook.kr',
    //             phone: '010-4321-8765',
    //         }]
    //     }
    // });

    // 13강 내용
    // Ext.create('Ext.panel.Panel', {
    //     width: 500,
    //     height: 500,
    //     title: 'Data Store',
    //     renderTo: Ext.getBody(),
    //     items: [{
    //         xtype: 'combo',
    //         editable: false,
    //         value: '이름을 선택하세요.',

    //         displayField: 'name', 
    //         valueField: ['name', 'age', 'email', 'phone'],
            
    //         fieldLabel: 'Select name',
    //         store: Ext.create('Ext.data.Store', {
    //             fields: ['name', 'age', 'email', 'phone'],
    //             data: [{
    //                 name: '홍길동',
    //                 age: 20,
    //                 email: 'honggildong@gmail.com',
    //                 phone: '010-1234-5678',
    //             },{
    //                 name: '이순신',
    //                 age: 30,
    //                 email: 'soonsinyi@naver.com',
    //                 phone: '010-5678-1234',
    //             },{
    //                 name: '강감찬',
    //                 age: 40,
    //                 email: 'gangamchan@outlook.kr',
    //                 phone: '010-4321-8765',
    //             }]
    //         }),
    //         listeners: {
    //             select: function(combo, record) {
    //                 const data = record.getData();
    //                 Ext.Msg.alert('선택한 이름', data.name + '님의 나이는 ' + data.age + '세 이며, 이메일은 ' + data.email + '입니다.');
    //             }
    //         }
    //     }]
    // });

    // 텍스트 폼 입력
    // Ext.create('Ext.panel.Panel', {
    //     width: 500,
    //     height: 800,
    //     border: true,
    //     title: 'Hello, World!',
    //     renderTo: Ext.getBody(),
    //     items: [{
    //         xtype: 'textfield',
    //         fieldLabel: 'Name',
    //         allowBlank: false, // 빈칸을 허용하지 않음
    //         emptyText: '이름을 입력하세요.', // 빈칸일때 나오는 메세지
    //     },{
    //         xtype: 'textfield',
    //         fieldLabel: 'Age',
    //         allowBlank: false,
    //         emptyText: '나이를 입력하세요.',
    //     },{
    //         xtype: 'textfield',
    //         fieldLabel: 'Email',
    //         allowBlank: false,
    //         emptyText: '이메일을 입력하세요.',
    //     },{
    //         xtype: 'textfield',
    //         fieldLabel: 'Phone',
    //         allowBlank: false,
    //         emptyText: '전화번호를 입력하세요.',
            
    //     },{
    //         xtype: 'datefield',
    //         fieldLabel: 'Date',
    //         allowBlank: false,
    //         emptyText: '날짜를 입력하세요.',
    //     },{
    //         xtype: 'timefield',
    //         fieldLabel: 'Time',
    //         allowBlank: false,
    //         emptyText: '시간을 입력하세요.',
    //     },{
    //         xtype: 'numberfield',
    //         fieldLabel: 'Number',
    //         allowBlank: false,
    //         emptyText: '숫자를 입력하세요.',
    //         minValue: 0,
    //         maxValue: 100,
    //     },{
    //         xtype: 'filefield',
    //         fieldLabel: 'File',
    //         allowBlank: false,
    //         emptyText: '파일을 선택하세요.',
    //         buttonOnly: true,
    //     },{
    //         xtype: 'button',
    //         text: '버튼',
    //         handler: function(btn) {
    //             alert('버튼을 클릭하였습니다.');
    //         }
    //     },{
    //         xtype: 'checkboxfield',
    //         boxLabel: '아이디기억',
    //     },{
    //         xtype: 'radiofield',
    //         name : 'gender',
    //         boxLabel: '남자',
    //     },{
    //         xtype: 'radiofield',
    //         name: 'gender',
    //         boxLabel: '여자',
    //     },{
    //         xtype: 'slider',
    //         fieldLabel: 'Slider',
    //         width: 400,
    //         minValue: 0,
    //         maxValue: 700,

    //     }]
    // });  

    // 패널 중 탭패널 11강
    // Ext.create('Ext.tab.Panel', {
    //     width: 500,
    //     height: 500,
    //     renderTo: Ext.getBody(),
    //     tabPosition: 'left',
    //     items: [{
    //         xtype: 'panel',
    //         title: '패널1',
    //         items: [{
    //             xtype: 'button',
    //             text: '버튼1',
    //         }]
    //     },{
    //         xtype: 'panel',
    //         title: '패널2',
    //         items: [{
    //             xtype: 'button',
    //             text: '버튼2',
    //         }]
    //     },{
    //         xtype: 'panel',
    //         title: '패널3',
    //         items: [{
    //             xtype: 'button',
    //             text: '버튼3',
    //         }]
    //     }]
    // })


    // 10강 내용
    // const newpanel = 
    // Ext.create("Ext.window.Window", {
    //     width: 300,
    //     height: 300,
    //     minWidth:250,
    //     minHeight:250,
    //     maxWidth:350,
    //     maxHeight:350,
    //     title: "Window Title",
    //     layout: "center",
    //     items: [{
    //         xtype: "button",
    //         text: "버튼",
    //     }],
    //     modal: true,
    //     resizable: true,
    // });
    
    // Ext.create('Ext.panel.Panel', {
    //     border:true,
    //     width: 500,
    //     height: 500,
    //     renderTo: Ext.getBody(),
    //     items: [{
    //         xtype: 'button',
    //         text: '패널버튼',
    //         handler: function(btn) {
    //             newpanel.show();
    //         }
    //     }]
    // });
    


    // win.show();
    // win.setHtml('Hello, World!');
    // win.setTitle('안녕, 세계!');
    // win.setWidth(300);
    // win.setHeight(300);
    // win.setX(100);
    // win.setY(100);
    // win.setClosable(true);
    // win.setResizable(true);
    // win.setMaximizable(true);
    // win.setMinimizable(true);
    // win.setDraggable(true);
    // win.setClosable(true);
    // win.setModal(true);
    // win.setShadow(true);
    

    // 다양한 alert 강좌
    // 1. ExtJS ALERT

    // alert('Hello, World!');
    // confirm('Hello, World!');
    // Ext.Msg.alert('Hello, World!');
    // Ext.Msg.confirm('Hello, World!', 'asdf', function(button) {
    //     if (button === 'yes') {
    //         Ext.Msg.alert('Yes', 'Yes를 클릭하였습니다.');
    //     } else {
    //         Ext.Msg.alert('No', 'No를 클릭하였습니다.');
    //     }
    // });

    // Ext.toast({
    //     html: 'Hello, World!',
    //     title: '알림',
    //     width: 200,
    //     align: 't', //출력해주는 위치(t,tr,tl,b,br,bl)
    // });

    // Ext.MessageBox.show({
    //     title: '알림',
    //     msg: 'Hello, World!',
    //     icon: Ext.MessageBox.INFO,//INFO, WARNING, QUESTION, ERROR
    //     // buttons: Ext.MessageBox.YESNO, //OKCANCEL, YESNO, YESNOCANCEL
    //     buttonText: {
    //         ok: '확인',
    //         yes: '예',
    //         no: '아니오',
    //         cancel: '취소',
    //     },
    //     fn : function(button){
    //         console.log(button);
    //     }
    // });

    // 다양한 버튼강좌
    // Ext.create('Ext.container.Viewport', {
    //     layout: 'border',
    //     renderTo: Ext.getBody(),
    //     items: [{
    //         xtype: 'panel',
    //         height: 100,
    //         header: false,
    //         region: 'north',
    //         items: [{
    //             xtype: 'toolbar',
    //             items: [{
    //                 xtype: 'button',
    //                 text: 'File',
    //                 menu: [{
    //                     text: 'New',
    //                     iconCls: 'x-fa fa-file',
    //                 },{
    //                     text: 'Open',
    //                 },{
    //                     text: 'Save',
    //                 },{
    //                     text: 'Save As',
    //                 },{
    //                     text: 'Exit',
    //                 }]
    //             },{
    //                 xtype: 'splitbutton',
    //                 text: 'Edit',
    //                 menu: [{
    //                     text: 'Undo',
    //                 },{
    //                     text: 'Redo',
    //                 },{
    //                     text: 'Cut',
    //                 },{
    //                     text: 'Copy',
    //                 },{
    //                     text: 'Paste',
    //                 },{
    //                     text: 'Delete',
    //                 },{
    //                     text: 'Select All',
    //                 }]
    //             },{
    //                 xtype: 'segmentedbutton',
    //                 allowMultiple: true,
    //                 text: 'View',
    //                 items: [{
    //                     text: 'Find',
    //                 },{
    //                     text: 'Replace',
    //                 },{
    //                     text: 'Go to',
    //                 },{
    //                     text: 'Next',
    //                 },{
    //                     text: 'Previous',
    //                 }],

    //             },{
    //                 xtype: 'button',
    //                 text: 'Navigate',
    //             },{
    //                 xtype: 'button',
    //                 text: 'Code',
    //             },{
    //                 xtype: 'button',
    //                 text: 'Refactor',
    //             },{
    //                 xtype: 'button',
    //                 text: 'Build',
    //             },{
    //                 xtype: 'button',
    //                 text: 'Run',
    //             },{
    //                 xtype: 'button',
    //                 text: 'Tools',
    //             },{
    //                 xtype: 'button',
    //                 text: 'VCS',
    //             },{
    //                 xtype: 'button',
    //                 text: 'Window',
    //             },{
    //                 xtype: 'button',
    //                 text: 'Help',
    //             }]
    //         },{
    //             xtype: 'toolbar',
    //             items: [{
    //                 xtype: 'button',
    //                 iconCls: 'x-fa fa-plus',
    //                 scale: 'large',
    //             },{
    //                 xtype: 'button',
    //                 iconCls: 'x-fa fa-floppy-o',
    //                 scale:'small'
    //             },{
    //                 xtype: 'button',
    //                 iconCls: 'x-fa fa-desktop',
    //             },{
    //                 xtype: 'button',
    //                 iconCls: 'x-fa fa-play',
    //             },{
    //                 xtype: 'button',
    //                 iconCls: 'x-fa fa-pause',
    //             },{
    //                 xtype: 'button',
    //                 iconCls: 'x-fa fa-stop',
    //             },{
    //                 xtype: 'button',
    //                 iconCls: 'x-fa fa-refresh',
    //             },{
    //                 xtype: 'button',
    //                 iconCls: 'x-fa fa-cog',
    //             },{
    //                 xtype: 'button',
    //                 iconCls: 'x-fa fa-question',
    //             },{
    //                 xtype: 'button',
    //                 iconCls: 'x-fa fa-search',
    //             },{
    //                 xtype: 'button',
    //                 iconCls: 'x-fa fa-bell',
    //             },{
    //                 xtype: 'button',
    //                 iconCls: 'x-fa fa-bug',
    //             },{
    //                 xtype: 'button',
    //                 iconCls: 'x-fa fa-user',
    //             },{
    //                 xtype: 'button',
    //                 iconCls: 'x-fa fa-envelope',
    //             }]
    //         }]
    //     },{
    //         xtype: 'panel',
    //         region: 'west',
    //         flex:1,
    //         border: true,
    //         split : true,
    //         title: 'Project Explorer',
    //     },{
    //         xtype: 'panel',
    //         region: 'center',
    //         layout: 'border',
    //         header : false,
    //         flex:2,
    //         border:true,
    //         items : [{
    //             xtype: 'panel',
    //             region: 'center',
    //             border: true,
    //             flex: 2,
    //             title: 'app.js',
    //         },{
    //             xtype: 'panel',
    //             region: 'south',
    //             border: true,
    //             split: true,
    //             flex: 1,
    //             title: 'Servers.js',
    //         },{

    //         }]    
    //     }]

    // });
    
    
    
    // Ext.create('Ext.panel.Panel', {
    //     width:500,
    //     height:500,
    //     title : '6강',
    //     renderTo: Ext.getBody(),
    //     layout: 'border',
    //     items: [{
    //         xtype: 'panel',
    //         region: 'west',
    //         border: true,
    //         flex: 1,
    //         split: true,
    //         collapsible: true,
    //         title: 'West',
    //     },{
    //         xtype: 'panel',
    //         region: 'center',
    //         border: true,
    //         flex: 2,
    //         layout: 'border',
    //         items: [{
    //             xtype: 'panel',
    //             region: 'north',
    //             border: true,
    //             flex: 4,
    //             split: true,
    //             layout: 'center', // 항상 지정해주려고 하는 부모에 속성값을 입혀야한다 
    //             items: [{
    //                 xtype: 'button',
    //                 text: '버튼',
    //                 flex: 1,
    //                 listeners: {
    //                     click: function(btn) {
    //                         alert(btn.getText() + '을 클릭하였습니다.');
    //                     }
    //                 },
    //                 // handler: function(btn) {
    //                 //     alert('버튼을 클릭하였습니다.');
    //                 // }
    //             }]
    //         },{
    //             xtype: 'panel',
    //             region: 'center',
    //             border: true,
    //             flex: 3,

    //         },]
    //     },]
    // });
    

    // Ext.create('Ext.container.Viewport', {
    //     //layout: 'border','fit' border는 두개이상, fit은 하나있을때 좋음 - 
    //     //layout2 : 'center', 'absolute', 'accordion', 'anchor', 'border', 'card', 'column', 'fit', 'form', 'hbox', 'table', 'vbox', 'border', 'fit', 
    //     renderTo : Ext.getBody(),
    //     layout: 'border',
    //     border: true,
    //     items: [{
    //         xtype: 'panel',
    //         flex: 1,
    //         region: 'north',
    //         // title: 'North',
    //         layout: 'accordion', //layout은 있어야댐
    //         items: [{
    //             xtype: 'panel',
    //             flex: 1,
    //             border: true,
    //             region: 'west',
    //             title: 'North-West',
    //         },{
    //             xtype: 'panel',
    //             flex: 1,
    //             border: true,
    //             region: 'east',
    //             title: 'North-East',
    //         },{
    //             xtype: 'panel',
    //             flex: 1,
    //             border: true,
    //             region: 'center',
    //             title: 'North-Center',
            
    //         }]
    //     },{
    //         xtype: 'panel',
    //         flex: 1,
    //         region: 'south',
    //         // title: 'South',
    //         layout: 'border',
    //         items: [{
    //             xtype: 'panel',
    //             flex: 1,
    //             border: true,
    //             region: 'west',
    //             title: 'South-West',
    //         },{
    //             xtype: 'panel',
    //             flex: 1,
    //             border: true,
    //             region: 'east',
    //             title: 'South-East',
    //         },{
    //             xtype: 'panel',
    //             flex: 1,
    //             border: true,
    //             region: 'center',
    //             title: 'South-Center',
            
    //         }]
    //     },{
    //         xtype: 'panel',
    //         flex: 1,
    //         region: 'center',
    //         // title: 'Center',
    //         layout: 'border', 
    //         items: [{
    //             xtype: 'panel',
    //             flex: 1,
    //             border: true,
    //             region: 'west',
    //             title: 'Center-West',
    //         },{
    //             xtype: 'panel',
    //             flex: 1,
    //             border: true,
    //             region: 'east',
    //             title: 'Center-East',
    //         },{
    //             xtype: 'panel',
    //             flex: 1,
    //             border: true,
    //             region: 'center',
    //             title: 'Center-Center',
            
    //         }]

    //     },]
    // });

//     Ext.create('Ext.container.Viewport', {
//         renderTo: Ext.getBody(),
//         layout: 'fit',
//         border: true,
//         items: [{
//             xtype: 'panel',
//             title: 'Parent',
//             layout: 'hbox',
//             tbar: [{
//                 text: 'Before',
//                 handler: function(btn) {
//                     if(btn.up("panel").getLayout().getPrev()){
//                         btn.up("panel").setActiveItem(btn.up("panel").getLayout().getPrev());
//                     } else {
//                         alert('첫번째 페이지 입니다.');
//                     }
//                 }
//             },{
//                 text: 'Next',
//                 handler: function(btn) {
//                     if(btn.up("panel").getLayout().getNext()){
//                         btn.up("panel").setActiveItem(btn.up("panel").getLayout().getNext());
//                     } else {
//                         alert('마지막 페이지 입니다.');
//                     }
//                 }
//             }],
//             items: [{
//                 xtype: 'panel',
//                 // width: 300,
//                 // height: 300,
//                 // x : 150,
//                 // y : 300,
//                 border: true,
//                 title: 'Son',
//                 html: 'Hello, Son!',
//             },{
//                 xtype: 'panel',
//                 // width: 300,
//                 // height: 300,
//                 // x: 0,
//                 // y: 500,
//                 border: true,
//                 title: 'Daughter',
//                 html: 'Hello, Daughter!',
//             },{
//                 xtype: 'panel',
//                 // width: 300,
//                 // height: 300,
//                 // x: 300,
//                 // y: 500,
//                 border: true,
//                 title: 'Grandson',
//                 html: 'Hello, Grandson!',
//             },{
//                 xtype: 'panel',
//                 // width: 300,
//                 // height: 300,
//                 // x: 450,
//                 // y: 500,
//                 border: true,
//                 title: 'Granddaughter',
//                 html: 'Hello, Granddaughter!',
//             }]
//         }]
//     });
// });

    // const alerts = 'Hello, world';
    // alert(alerts);
    // console.log(alerts);
    // Ext.Msg.alert('alert', alerts); // 메세지 팝업을 띄어주는 ui

    // var panel = 
    // Ext.create('Ext.panel.Panel', {

    //     width: 300,
    //     height: 300,
    //     title: 'Hello, World!',
    //     floating: true,
    //     renderTo: Ext.getBody(),
    //     border: true,

    //     items:[{
    //         fieldLabel: 'Data item',
    //         xtype: 'textfield',
    //         flex: 1,
    //     },{
    //         xtype: 'button', //버튼
    //         text: '버튼!',
    //         flwx: 1,
    //     }]
