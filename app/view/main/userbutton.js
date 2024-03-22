Ext.define('MyApp.view.main.UserButton', {
    extend: 'Ext.button.Button',
    xtype: 'userbutton',
    text: '버튼',
    handler: function(btn) {
        Ext.Msg.alert('버튼', '버튼을 클릭했습니다.');
    },
});