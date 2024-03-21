Ext.define('MyApp.components.Lesson19', {
    statics: {
        main: function() {
            layout = 'fit';
            Ext.create("Ext.panel.Panel", {
                title: "Lesson 19",
                width: 500,
                height: 500,
                layout: layout,
                renderTo: Ext.getBody(),
                items: [{
                    xtype: 'cartesian',
                    store: {
                        fields: ['month', 'weight'],
                        data : [{
                            month : '1월',
                            weight : 90
                        },{
                            month : '2월',
                            weight : 85
                        },{
                            month : '3월',
                            weight : 88
                        },{
                            month : '4월',
                            weight : 92
                        },{
                            month : '5월',
                            weight : 85
                        },{
                            month : '6월',
                            weight : 90
                        },{
                            month : '7월',
                            weight : 95
                        },{
                            month : '8월',
                            weight : 88
                        },{
                            month : '9월',
                            weight : 92
                        },{
                            month : '10월',
                            weight : 85
                        },{
                            month : '11월',
                            weight : 90
                        },{
                            month : '12월',
                            weight : 95
                        }]
                    },
                    axes: [{
                        type: 'numeric',
                        position: 'left',
                        title: 'Weight'
                    },{
                        type: 'category',
                        position: 'bottom'
                    }],
                    series : {
                        type: 'line',
                        smooth: true,
                        marker: {
                            radius: 4
                        },
                        xField: 'month',
                        yField: 'weight',
                        label: {
                            field : 'weight',
                            display : 'insideEnd'
                        }
                    }
                }]
            })
        }
    }
});