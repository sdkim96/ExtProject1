Ext.define('MyApp.components.Lesson23', {
    statics: {
        main: function() {
            Ext.create("Ext.panel.Panel", {
                width: 500,
                height: 500,
                layout: 'fit',
                renderTo: Ext.getBody(),
                items: [{
                    xtype: 'usergrid' // 사용자 정의 grid xtype 사용
                }]
            });
        }
    }
});
