import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import '../css/Content.css';
import { useSelector } from 'react-redux';
import UnAuthUser from '../Route/UnAuthUser';
import AuthUser from '../Route/AuthUser';

const Content = () => {
    const { token } = useSelector(state => state.auth)
    return (

        <Grid columns='equal' className="AppContent">
            <Grid.Column>
                {/* <Segment>1</Segment> */}
            </Grid.Column>
            <Grid.Column width={12}>
               {!token ? <UnAuthUser /> : <AuthUser />}
            </Grid.Column>
            <Grid.Column>
             
                {/* <Segment>3</Segment> */}
            </Grid.Column>
        </Grid>
    );
}



export default Content