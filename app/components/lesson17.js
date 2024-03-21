Ext.define('MyApp.components.Lesson17', {
    statics: {
        main: function() {
           Ext.create('Ext.panel.Panel', {
                title: 'Panel',
                width: 500,
                height: 500,
                renderTo: Ext.getBody(),
                layout: 'fit',
                items: [{
                    xtype: 'cartesian',
                    insidePadding: '50 0 0 0',

                    // flipXY: true, //x축과 y축을 바꿈
                    store: {
                        fields : ['score', 'subject'],
                        data :[{
                            score: 50,
                            subject: 'Math'
                        },{
                            score: 60,
                            subject: 'Science'
                        },{
                            score: 70,
                            subject: 'English'
                        },{
                            score: 80,
                            subject: 'History'
                        },{
                            score: 90,
                            subject: 'Art'
                        }]
                    },
                    axes : [{
                        type : 'numeric', //numeric3d 이렇게 하면 3d차트가 나옴
                        position: 'left',
                        title : 'Score',
                    },{
                        type : 'category',
                        position: 'bottom',
                    }],
                    series: [{
                        type: 'bar',
                        xField: 'subject',
                        yField: 'score',
                        label : {
                            field: 'score',
                            display: 'insideEnd'
                        },
                        renderer: function(sprite, config, data, index) {
                            var colors = ['red', 'blue', 'green', 'yellow', 'purple'];
                            return {
                                fillStyle: colors[index % colors.length]
                            };
                        }
                    }]
                }]
           });
        }
    }
});