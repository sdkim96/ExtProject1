Ext.define('MyApp.components.Lesson14', {
    statics: {
        main: function() {
            layout = 'fit';

            Ext.create('Ext.panel.Panel', {
                width: 500,
                height: 500,
                title: 'Panel',
                renderTo: Ext.getBody(),
                items: [{
                    xtype: 'treepanel',
                    title: 'TreePanel',
                    store: {
                        root: {
                            text: 'Servers',
                            expanded: false,
                        },
                        proxy: {
                            type: 'ajax',
                            url: 'app/data/tree.json',
                            reader: {
                                type: 'json',
                                // root: 'children'
                            }
                        }
                    }

                }]
            })
        }
    }
});