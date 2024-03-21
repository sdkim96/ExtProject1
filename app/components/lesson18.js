Ext.define('MyApp.components.Lesson18', {
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
                    // insidePadding: '50 0 0 0',

                    // flipXY: true, //x축과 y축을 바꿈
                    store: {
                        fields : ['age', 'vote', 'vote2'],
                        data :[{
                            age: '20대',
                            vote: 65.8,
                            vote2: 33.7
                        },{
                            age: '30대',
                            vote: 66.5,
                            vote2: 33.1
                        },{
                            age: '40대',
                            vote: 55.6,
                            vote2: 44.1
                        },{
                            age: '50대',
                            vote: 37.4,
                            vote2: 62.5
                        },{
                            age: '60대',
                            vote: 27.5,
                            vote2: 72.4
                        }]
                    },
                    axes : [{
                        type : 'numeric', //numeric3d 이렇게 하면 3d차트가 나옴
                        position: 'left',
                        title : '(%)',
                    },{
                        type : 'category',
                        position: 'bottom',
                    }],
                    series: [{
                        type: 'bar',
                        xField: 'age',
                        yField: ['vote', 'vote2'],
                        label : {
                            field: ['vote', 'vote2'],
                            display: 'insideEnd'
                        },
                        // renderer: function(sprite, config, data, index) {
                        //     var colors = ['red', 'blue'];
                        //     return {
                        //         fillStyle: colors[index % colors.length]
                        //     };
                        // }
                    }]
                }]
           });
        }
    }
});