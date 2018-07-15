import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import {ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend, LabelList, ReferenceLine, ReferenceDot } from 'recharts';

const data03 = [{x: 0, y: 78.9, z:0}, {x: 17, y: 78.9, z:0},{x: 17, y: 21.1, z:0}, {x: 0, y: 21.1, z:0}]; //Box
const data04 = [{x: 100, y: 78.9, z:0}, {x: 83, y: 78.9, z:0},{x: 83, y: 21.1, z:0}, {x: 100, y: 21.1, z:0}]; //Right side
const data05 = [{x: 100, y: 63.2}, {x: 94.2, y:63.2},{x: 94.2, y: 36.8}, {x: 100, y: 36.8}]; //Right side
const data06 = [{x: 0, y: 63.2}, {x: 5.8, y:63.2},{x: 5.8, y: 36.8}, {x: 0, y: 36.8}]; //Sideline
const data07 = [{x: 11.5, y: 50, z:1}]; //PK Spot
const data08 = [{x: 88.5, y: 50, z:1}]; //PK Spot
const data09 = [{x: 50, y: 50, z:10}]; //Center Circle
const data10 = [{x: 0, y: 100},{x: 100, y: 100}]; //Sideline



function JointLineScatterChart(props) {
    const { classes } = props;
    let data01 = props.data;
    let scatters = [];
    var i,j,k,temparray,chunk = 3;
    for (i=0,j=data01.length,k=1; i<j; i+=chunk) {
        temparray = data01.slice(i,i+chunk);
        // do whatever
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var a = 0; a < 6; a++) {
          color += letters[Math.floor(Math.random() * 16)];
        }

        scatters.push(<Scatter name={'Sequence #'+k} data={temparray} fill={color} line shape="circle"><LabelList dataKey="g"/></Scatter>);
    }
    console.log("props", props);
    return (
        <Grid container spacing={12}>
            <Grid item xs={12} sm={12}>
                <ScatterChart width={570} height={400}>
                    <CartesianGrid stroke="#green" strokeDasharray="5 5" fill="green"/>
                <XAxis type="number" dataKey={'x'} name='X' stroke="#ffffff" hide={true}/>
                    <YAxis type="number" dataKey={'y'} name='Y' stroke="#ffffff" hide={true}/>
                <ZAxis dataKey={'z'} range={[0, 400]} name='Number' hide={true}/>
                    <Tooltip cursor={{strokeDasharray: '3 3'}}/>
                <ReferenceDot x={50} y={50} r={40} fill="green" stroke="white" /> }
                <ReferenceLine x={100} stroke="white"/>
                <ReferenceLine x={0} stroke="white"/>
                <ReferenceLine x={50} stroke="white"/>
                <ReferenceLine y={100} stroke="white"/>
                <ReferenceLine y={0} stroke="white"/>
                    {/* <Scatter name='Sequence #1' data={data01} fill='#D6A4A4' line shape="circle"><LabelList dataKey="g"/></Scatter> */}
                    {scatters}
                    <Scatter name='Field' data={data03} fill='#ffffff' line shape="circle"><LabelList dataKey="g" /></Scatter>
                    <Scatter name='Field' data={data04} fill='#ffffff' line shape="circle"><LabelList dataKey="g" /></Scatter>
                    <Scatter name='Field' data={data05} fill='#ffffff' line shape="circle"><LabelList dataKey="g" /></Scatter>
                    <Scatter name='Field' data={data06} fill='#ffffff' line shape="circle"><LabelList dataKey="g" /></Scatter>
                    <Scatter name='Field' data={data07} fill='#ffffff' line shape="circle"><LabelList /></Scatter>
                    <Scatter name='Field' data={data08} fill='#ffffff' line shape="circle"><LabelList /></Scatter>
                    <Scatter name='Field' data={data10} fill='#ffffff' line shape="circle"><LabelList dataKey="g" /></Scatter>
                </ScatterChart>
            </Grid>
        </Grid>
    );
}

JointLineScatterChart.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default JointLineScatterChart;