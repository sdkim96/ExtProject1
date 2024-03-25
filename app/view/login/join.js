Ext.define('MyApp.view.login.join', {
    layout: 'center',
    extend: 'Ext.container.Viewport',
    xtype: 'join',
    autoShow: true,
    html: '<h2>회원가입</h2>',

    items: [{
        xtype: 'panel',
        layout: 'center',
        title: '회원가입', 
        border: true,
        bodyPadding: 10, 

        items: [{
            xtype: 'form',
            margin: 20,
            bodyPadding: 10,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                margin: '10 0',
                anchor: '100%',
                labelWidth: 140
            },

            items: [{
                xtype: 'textfield',
                fieldLabel: '아이디',
                name: 'id',
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: '비밀번호',
                name: 'password',
                inputType: 'password',
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: '비밀번호 확인',
                name: 'passwordConfirm',
                inputType: 'password',
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: '이름',
                name: 'name',
                allowBlank: false
            }, {
                xtype: 'textfield',
                fieldLabel: '이메일',
                name: 'email',
                allowBlank: false
            }],
            bbar: [
                '->',
                {
                    text: '로그인 창으로 돌아가기',
                    handler: function(btn) {
                        btn.up('viewport').destroy();
                        Ext.widget('login');
                    }
                },
                {
                    text: '회원가입',
                    formBind: true, // Only enabled when the form is valid
                    handler: function() {
                        var form = this.up('form');
                        if (form.isValid()) {
                            // Adjusted data path to form and ensure JSON encoding
                            var formData = form.getForm().getValues();
                            var data = { users: formData };
                            console.log(data);
                            form.submit({
                                url: 'http://localhost:8000/user/create',
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                jsonData: data,
                                success: function(form, action) {
                                    Ext.Msg.alert('회원가입 성공', action.result.msg);
                                    window.location.href = '/';
                                },
                                failure: function(form, action) {
                                    Ext.Msg.alert('회원가입 실패', action.result.msg);
                                }
                            });
                        }
                    }
                }
            ]
        }]
    }]
});
