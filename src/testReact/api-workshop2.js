import axios from 'axios';
import React from 'react'
import { Grid,Container } from 'semantic-ui-react';
// import '../css/api-workshop2.css'
import CardProduct from '../component/Card';
class Api_work2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []

        }

    }



    componentDidMount() {
        axios.get("/product/")
            .then(response => {
                const products = response.data.data.results;
                this.setState({ products })

            }).catch((e) => {

                console.log(e);
                // alert(e.message)

            })

    }

    render() {

        return (
            <React.Fragment>
              
                <h1>Product All</h1>
                {/* <div className="grid"> */}
                 <Container >
                <Grid >
                {/* <Container > */}
                    <Grid.Row columns={4} >
                        {this.state.products.map(item =>
                            <Grid.Column key={item.id} >
                                < CardProduct
                                    // isloading={item}
                                    id={item.id}
                                    title={item.name}
                                    image={item.image.medium_square_crop}
                                    detail={item.detail}
                                />
                            </Grid.Column>
                        )}
                    </Grid.Row>
                    {/* </Container> */}
                </Grid>
                {/* </div> */}
                   </Container>
            </React.Fragment>
        );
    }

}
export default Api_work2;