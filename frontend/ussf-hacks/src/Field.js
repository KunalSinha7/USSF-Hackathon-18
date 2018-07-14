import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import {ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend, LabelList, ReferenceLine } from 'recharts';

const data01 = [{x:10, y:30, z:30, g:21}, {x:30, y:50, z:30, g:10}, {x:45, y:25, z:30, g:10}];
const data03 = [{x: 0, y: 78.9, z:0}, {x: 17, y: 78.9, z:0},{x: 17, y: 21.1, z:0}, {x: 0, y: 21.1, z:0}];
const data04 = [{x: 100, y: 78.9, z:0}, {x: 83, y: 78.9, z:0},{x: 83, y: 21.1, z:0}, {x: 100, y: 21.1, z:0}];
const data05 = [{x: 100, y: 63.2}, {x: 94.2, y:63.2},{x: 94.2, y: 36.8}, {x: 100, y: 36.8}];
const data06 = [{x: 0, y: 63.2}, {x: 5.8, y:63.2},{x: 5.8, y: 36.8}, {x: 0, y: 36.8}];
const data07 = [{x: 11.5, y: 50, z:1}];
const data08 = [{x: 88.5, y: 50, z:1}];
const data09 = [{x: 50, y: 50, z:1}];
const data10 = [{x: 0, y: 100},{x: 100, y: 100}];

function JointLineScatterChart(props) {
    const { classes } = props;
    return (
        <Grid container spacing={12}>
            <Grid item xs={12} sm={12}>
                <ScatterChart width={550} height={400} margin={{left: -20}}>
                    <CartesianGrid stroke="#ffffff" strokeDasharray="5 5" />
                <XAxis type="number" dataKey={'x'} name='stature' stroke="#ffffff"/>
                    <YAxis type="number" dataKey={'y'} name='weight' stroke="#ffffff"/>
                <ZAxis dataKey={'z'} range={[0, 400]} name='score' unit='km'/>
                    <Tooltip cursor={{strokeDasharray: '3 3'}}/>
                <ReferenceLine x={100} stroke="black"/>
                <ReferenceLine x={0} stroke="black"/>
                <ReferenceLine x={50} stroke="black"/>
                <ReferenceLine y={100} stroke="black"/>
                <ReferenceLine y={0} stroke="black"/>
                    <Scatter name='Cluster #1' data={data01} fill='#D6A4A4' line shape="circle"><LabelList dataKey="g"/></Scatter>
                    <Scatter name='Field' data={data03} fill='#383838' line shape="circle"><LabelList dataKey="g" /></Scatter>
                    <Scatter name='Field' data={data04} fill='#383838' line shape="circle"><LabelList dataKey="g" /></Scatter>
                    <Scatter name='Field' data={data05} fill='#383838' line shape="circle"><LabelList dataKey="g" /></Scatter>
                    <Scatter name='Field' data={data06} fill='#383838' line shape="circle"><LabelList dataKey="g" /></Scatter>
                    <Scatter name='Field' data={data07} fill='#383838' line shape="circle"><LabelList /></Scatter>
                    <Scatter name='Field' data={data08} fill='#383838' line shape="circle"><LabelList /></Scatter>
                    <Scatter name='Field' data={data09} fill='#383838' line shape="circle"><LabelList /></Scatter>
                    <Scatter name='Field' data={data10} fill='#383838' line shape="circle"><LabelList dataKey="g" /></Scatter>
                </ScatterChart>
            </Grid>
        </Grid>
    );
}


JointLineScatterChart.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default JointLineScatterChart;