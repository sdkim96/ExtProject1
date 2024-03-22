Ext.define('MyApp.components.Lesson24', {
    statics: {
        main: function() {
            Ext.create("Ext.container.Viewport", {
                layout: 'border',
                items: [{
                    title : '컴포넌트 변경',
                    region : 'north',
                    border: true,
                    items : [{
                        xtype : 'button',
                        text : '그리드',
                        handler : function(btn) {
                            const page = btn.up('viewport').down('component[region=center]');
                            page.removeAll(true);
                            page.add(Ext.apply({ 
                                xtype : 'usergrid'
                            }));
                        }
                    },{
                        xtype : 'button',
                        text : '버튼',
                        handler : function(btn) {
                            const page = btn.up('viewport').down('component[region=center]');
                            page.removeAll(true);
                            page.add(Ext.apply({ 
                                xtype : 'userbutton'
                            }));
                        }
                    },{
                        xtype : 'button',
                        text : 'HTML',
                        handler : function(btn) {
                            const page = btn.up('viewport').down('component[region=center]');
                            page.removeAll(true);
                            page.add(Ext.apply({ 
                                xtype : 'userhtml'
                            }));
                        }
                    }]
                },{
                    xtype : 'panel',
                    width : 200,
                    region : 'west',
    
                },{
                    xtype : 'panel',
                    flex : 1,
                    region : 'center',
                    border : true,
                }] 
            });
        }
    }
});