import React from 'react';

import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import Column2D from "fusioncharts/fusioncharts.charts";
import Line from "fusioncharts/fusioncharts.charts";


function LineChartComponent(props){
    const chartData = props.chartData,
        caption = props.caption,
        xaxisname = props.xaxisname,
        yaxisname = props.yaxisname

    ReactFC.fcRoot(FusionCharts, Line, FusionTheme)
   
    const chartConfigs = {
        type: "line", 
        width: "45%", 
        height: "550", 
        dataFormat: "json", 
        dataSource: {
          chart: {
            caption: caption,
            xAxisName: xaxisname,
            yAxisName: yaxisname,
            theme: "fusion"
          },
          // Chart Data
          data: chartData
        }
      };
    return (
        <ReactFC {...chartConfigs}></ReactFC>
    )
}

function BarChartComponent(props){
    const chartData = props.chartData,
        caption = props.caption,
        xaxisname = props.xaxisname,
        yaxisname = props.yaxisname

    ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme)
   
    const chartConfigs = {
        type: "column2D", 
        width: "45%", 
        height: "550", 
        dataFormat: "json", 
        dataSource: {
          chart: {
            caption: caption,
            xAxisName: xaxisname,
            yAxisName: yaxisname,
            theme: "fusion"
          },
          // Chart Data
          data: chartData
        }
      };
    return (
        <ReactFC {...chartConfigs}></ReactFC>
    )
}

export {
    LineChartComponent, BarChartComponent
}