Ext.define('MyApp.components.Lesson25_makingIDE', {
    statics:{
        main: function() {
            Ext.create("Ext.container.Viewport", {
                layout: 'border',
                items: [{
                    xtype: 'panel',
                    region: 'north',
                    border: true,
                    items: [{
                        xtype: 'button',
                        text: 'File'
                    },{
                        xtype: 'button',
                        text: 'Edit'
                    },{
                        xtype: 'button',
                        text: 'Selection'
                    },{
                        xtype: 'button',
                        text: 'View'
                    },{
                        xtype: 'button',
                        text: 'Go'
                    },{
                        xtype: 'button',
                        text: 'Run'
                    },{
                        xtype: 'button',
                        text: 'Terminal'
                    },{
                        xtype: 'button',
                        text: 'Help'
                    }]
                },{
                    xtype: 'panel',
                    title: 'Explorer',
                    region: 'west',
                    flex: 1,
                    border: true,
                    collapsible: true,
                    split: true,
                    items: [{
                        xtype: 'treepanel',
                        rootVisible: false,
                        root: {
                            text: 'root',
                            expanded: true,
                            children: [{
                                text: 'app',
                                expanded: true,
                                children: [{
                                    text: 'controller',
                                    children: [{
                                        text: 'MainController.js'
                                    }]
                                },{
                                    text: 'model',
                                    children: [{
                                        text: 'User.js'
                                    }]
                                },{
                                    text: 'store',
                                    children: [{
                                        text: 'User.js'
                                    }]
                                },{
                                    text: 'view',
                                    children: [{
                                        text: 'main',
                                        children: [{
                                            text: 'Main.js'
                                        }]
                                    }]
                                }]
                            }]
                        }
                    }]

                },{
                    xtype: 'panel',
                    // title: 'Editor-termainal',
                    region: 'center',
                    flex: 4,
                    border: true,
                    layout: 'border',
                    items: [{
                        xtype: 'panel',
                        title: 'Editor',
                        region: 'center',
                        flex: 3,
                        border: true,

                    },{
                        xtype: 'panel',
                        title: 'Terminal',
                        region: 'south',
                        flex: 1,
                        border: true,
                    }]
                }]
            });
        }
    }
})