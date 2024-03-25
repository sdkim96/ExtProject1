// EXTJS 에서 폴더명의 login 이라 하니 적용이 안되는것 같음

Ext.define('MyApp.view.login.login', {
    extend: 'Ext.container.Viewport',
    xtype: 'login',
    layout: 'center',

    items: [{
        xtype: 'form',
        margin: 20,
        title: '로그인',
        border: true,

        // width: 300,
        bodyPadding: 10,
        defaultType: 'textfield',
        items: [{
            fieldLabel: '아이디',
            name: 'id',
            allowBlank: false
        },{
            fieldLabel: '비밀번호',
            name: 'password',
            inputType: 'password',
            allowBlank: false
        }],
        buttons: [{
            text: '회원가입',
            handler: function(btn) {
                console.log('회원가입');
                btn.up('viewport').destroy();
                Ext.widget('join');
            }
        },'->',{
            text: '로그인',
            handler: function(btn) {
                var form = this.up('form').getForm();
                if (form.isValid()) {
                    form.submit({
                        url: '/login',
                        success: function(form, action) {
                            Ext.Msg.alert('로그인 성공', action.result.msg);
                            window.location.href = '/';
                        },
                        failure: function(form, action) {
                            Ext.Msg.alert('로그인 실패', action.result.msg);
                        }
                    });
                }
            }
        }]
    }]
})