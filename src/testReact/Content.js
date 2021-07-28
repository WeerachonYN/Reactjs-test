import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import '../css/Content.css';
import { useSelector } from 'react-redux';
import UnAuthUser from '../Route/UnAuthUser';
import AuthUser from '../Route/AuthUser';
import MenuSidebar from '../component/MenuSidebar';
import { useEffect } from 'react';

const Content = () => {
    const { token } = useSelector(state => state.auth)
    useEffect(() => {
        
        // if (Date.now() >= token.expires_in * 1000) {
        //     return console.log(Date.now() );
        //   }
    
         
      
    }, [])
    return (

        <Grid columns='equal' className="AppContent">
            <Grid.Column>
            
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