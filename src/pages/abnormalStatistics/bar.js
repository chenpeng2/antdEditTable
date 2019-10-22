import React from 'react';
import ReactEcharts from 'echarts-for-react';  // or var ReactEcharts = require('echarts-for-react');
class LineChart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        var data1 = [20, 30, 20, 30, 20, 30, 20, 30, 20, 30];
        var data2 = [9, 30, 9, 60, 70, 20, 59, 20, 49, 20];
        var data3 = [20, 30, 20, 30, 20, 30, 20, 30, 20, 30];
        var data4 = [9, 30, 9, 60, 70, 20, 59, 20, 49, 20];
        var datacity = ['济南市', '青岛市', '淄博市', '枣庄', '东营', '烟台市', '潍坊市', '济宁市', '威海市', '泰安市'];
        var myOptions = {
            color: ['#388BFF', '#05C3FA', '#F6931C', '#FFD52E'],
            tooltip: {
                trigger: 'axis',
            },
            legend: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top:'8%',
                textStyle: {
                    fontSize: 13
                }
            },
            grid: { //图表的位置
                top: '20%',
                left: '3%',
                right: '4%',
                bottom: '5%',
                containLabel: true
            },
            yAxis: [{
                type: 'value',
                name: '次数',
                axisLabel: {
                    show: true,
                    interval: 'auto',
                    formatter: '{value} '
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                show: true

            }],
            xAxis: [{
                type: 'category',
                name: '设备名称',
                axisLabel: {
                    interval: 0,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                        fontSize: 10,
                        color: '#000'
                    },

                },
                data: datacity,
            }],
            series: [{
                name: '存量',
                type: 'bar',
                stack: 'sum',
                barWidth: '20px',
                data: data1

            },
                {
                    name: '新增',
                    type: 'bar',
                    barWidth: '20px',
                    stack: 'sum',
                    data: data2,

                },
                {
                    name: '拆除',
                    type: 'bar',
                    color: '#F6931C',
                    stack: 'sum',
                    barWidth: '20px',
                    data: data3

                },
                {
                    name: '整改',
                    type: 'bar',
                    color: '#FFD52E',
                    stack: 'sum',
                    barWidth: '20px',
                    data: data3

                },
            ]
        };
        return (
            <div className="chart-line">
                <ReactEcharts option={myOptions}/>
            </div>
        )
    }
}

export default LineChart
