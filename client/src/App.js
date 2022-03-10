import react from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import memories from './static/memories.png';
import Form from './components/Form/Form.js';
import Posts from './components/Posts/Posts.js'
import useStyles from './styles.js';

const App = () => {
    const classes = useStyles();

    return (
        <Container maxwidth="lg">
            <AppBar className= {classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className= {classes.image} src={memories} alt="Memories" height="60" />
            </AppBar>

            <Grow in>
                <container>
                    <Grid container justify="space-between" alignItems="stretch" spacing="3">
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </container>
            </Grow>
        </Container>
    );
};

export default App;