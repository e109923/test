import Grid from '@material-ui/core/Grid';
import { color } from 'd3-color';
import { interpolateRgb } from 'd3-interpolate';
import React from 'react';
import LiquidFillGauge from 'react-liquid-gauge';


const Gauge = ({ radius = 200, value = 0, ...props }) => {
    const startColor = '#6495ed'; // cornflowerblue
    const endColor = '#14d5dc'; // crimson
    const interpolate = interpolateRgb(startColor, endColor);
    const fillColor = interpolate(value / 100);
    const gradientStops = [
        {
            key: '0%',
            stopColor: color(fillColor).darker(0.5).toString(),
            stopOpacity: 1,
            offset: '0%'
        },
        {
            key: '50%',
            stopColor: fillColor,
            stopOpacity: 0.75,
            offset: '50%'
        },
        {
            key: '100%',
            stopColor: color(fillColor).brighter(0.5).toString(),
            stopOpacity: 0.5,
            offset: '100%'
        }
    ];

    return (
        <LiquidFillGauge
            {...props}
            width={radius * 2}
            height={radius * 2}
            value={value}
            percent="%"
            textSize={1}
            textOffsetX={0}
            textOffsetY={0}
            textRenderer={({ value, width, height, textSize, percent }) => {
                value = Math.round(value);
                const radius = Math.min(height / 2, width / 2);
                const textPixels = (textSize * radius / 2);
                const valueStyle = {
                    fontSize: textPixels
                };
                const percentStyle = {
                    fontSize: textPixels * 0.6
                };

                return (
                    <tspan>
                        <tspan className="value" style={valueStyle}>{value}</tspan>
                        <tspan style={percentStyle}>{percent}</tspan>
                    </tspan>
                );
            }}
            riseAnimation
            waveAnimation
            waveFrequency={2}
            waveAmplitude={1}
            gradient
            gradientStops={gradientStops}
            circleStyle={{
                fill: fillColor
            }}
            waveStyle={{
                fill: fillColor
            }}
            textStyle={{
                fill: color('#444').toString(),
                fontFamily: 'Arial'
            }}
            waveTextStyle={{
                fill: color('#fff').toString(),
                fontFamily: 'Arial'
            }}
        />
    );
};




class Seviye extends React.Component {
    constructor(props){
        super(props);
        this.state = { value: props.value };
      }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ value: (this.props.s1 + Math.random() * (this.props.s2 - this.props.s1)) }), 5000);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }
  
    render() {
        return (
        <Grid item justify="center" alignItems="center" md={this.props.size}>
        <h4>{this.props.title}</h4>
            <Gauge
                id={this.props.id}
                style={{ margin: '0 auto 20px auto' }}
                radius={150}
                value={this.state.value}
            />     
    </Grid>
        )
    }
  }


export default Seviye
