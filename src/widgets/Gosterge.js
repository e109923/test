import React from 'react'
import Grid from '@material-ui/core/Grid';
import ReactSpeedometer from "react-d3-speedometer"

class Gosterge extends React.Component {
    constructor(props){
        super(props);
        this.state = { value: props.value };
      }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ value: (this.props.s1 + Math.random() * (this.props.s2 - this.props.s1)) }), 4000);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }
  
    render() {
        return (
        <Grid item justify="center" alignItems="center" md={this.props.size}>
        <h4>{this.props.title}</h4>
        <ReactSpeedometer 
            id={this.props.id}
            value={parseInt(this.state.value)} 
            minValue={this.props.min} 
            maxValue={this.props.max}
            needleTransitionDuration={2000}
            needleTransition="easeElastic"
        />
    </Grid>
        )
    }
  }


export default Gosterge
