Ext.define('MyApp.view.login.updatePassword', {
    extend: 'Ext.window.Window',
    xtype: 'updatePassword',
    title: '비밀번호 변경',
    width: 350,
    height: 250,
    autoShow: true,
    modal: true,
    
    items: [{
        xtype: 'form',
        margin: 20,
        items: [{
            xtype: 'textfield',
            fieldLabel: '기존 비밀번호',
            name: 'oldPassword',
            inputType: 'password',
            allowBlank: false
        },{
            xtype: 'textfield',
            fieldLabel: '신규 비밀번호',
            name: 'newPassword',
            inputType: 'password',
            allowBlank: false
        },{
            xtype: 'textfield',
            fieldLabel: '비밀번호 확인',
            name: 'newPasswordConfirm',
            inputType: 'password',
            allowBlank: false
        }]
    }],
    bbar : [{
        xtype: 'button',
        text: '변경',
    },{
        xtype: 'button',
        text: '닫기',
    }]
})