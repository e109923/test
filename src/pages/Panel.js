import React from 'react'
import Grid from '@material-ui/core/Grid';
import Gosterge from '../widgets/Gosterge.js';
import Seviye from '../widgets/Seviye.js';

const Panel = props => {
    return (
        <Grid container spacing={2}>
            <Gosterge id="gosterge1" size={3} title="Kazan Basıncı" min={0} max={20} value={6} s1={5} s2={8} />
            <Seviye id="seviye1" size={3} title="Su Seviyesi" min={0} max={100} value={55} s1={45} s2={60} />
        </Grid>
    )
}

export default Panel
