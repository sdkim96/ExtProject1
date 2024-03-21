Ext.define('MyApp.components.Lesson20', {
    statics: {
        main: function() {
            Ext.create("Ext.panel.Panel", {
                width: 500,
                height: 500,
                layout: 'fit',
                renderTo: Ext.getBody(),
                items:[{
                    xtype: 'cartesian',
                    legend: {
                        docked: 'bottom'
                    },
                    innerpadding: 30,
                    store : {
                        fields : ['year', 'seoul', 'busan', 'daegu', 'incheon'],
                        data :[{
                            year : 2014,
                            seoul: 10143164,
                            busan: 3519403,
                            daegu: 2488841,
                            incheon: 2924067
                        }, {
                            year : 2015,
                            seoul: 10103233,
                            busan: 3519403,
                            daegu: 2488841,
                            incheon: 2924067
                        }, {
                            year : 2016,
                            seoul: 10012458,
                            busan: 3519403,
                            daegu: 2488841,
                            incheon: 2924067
                        },{
                            year : 2017,
                            seoul: 9930616,
                            busan: 3519403,
                            daegu: 2488841,
                            incheon: 2924067
                        }]
                    },
                    axes :[{
                        type : 'numeric',
                        position : 'left',
                        minimum : 0,
                        maximum: 15000000,
                        title: '지역별 인구수'
                    },{
                        type : 'category',
                        position : 'bottom',
                        fields : 'year',
                        title: '연도'
                    }],
                    series: [{
                        type: 'area',
                        marker : {
                            radius : 4
                        },
                        xField : 'year',
                        yField : 'seoul'
                    },{
                        type: 'area',
                        marker : {
                            radius : 4
                        },
                        xField : 'year',
                        yField : 'busan'
                    },{
                        type: 'area',
                        marker : {
                            radius : 4
                        },
                        xField : 'year',
                        yField : 'daegu'
                    },{
                        type: 'area',
                        marker : {
                            radius : 4
                        },
                        xField : 'year',
                        yField : 'incheon'
                    
                    }]
                }]
            })
        }
    }
});