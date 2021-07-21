import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { Grid, Container, Divider, Header, Image } from 'semantic-ui-react';
import '../css/product.css'
import CardProduct from '../component/Card';
import { FETCH_PRODUCT_ALL_REQ } from '../redux/Reducer/action.type';
import { useDispatch, useSelector } from 'react-redux';
import Sort from '../component/Sort';
const Product = () => {


    const { search, sort, category_in, category_not_in, page, page_size } = useSelector(state => state.product)
    const { dataAll, } = useSelector(state => state.category)
    const [data, setData] = useState(null)
    // console.log('data_PROduct', category_in);
    const [category, setCategory] = useState(null);
    const dispatch = useDispatch();
    const fetchData = async (filterData) => {

        

        let config = {
           
            params: {
                is_enabled: true,
                search: search,
                sort: sort,
                category__in: filterData?.id,
                // category_not_in: category_not_in,
                // page:page,
                // page_size:page_size
            }
        }
        try {

            const response = await axios.get('/product/', config);
            setData(response.data)
            dispatch({ type: FETCH_PRODUCT_ALL_REQ, payload: response.data.data.results })
        } catch (error) {
            console.log('ERROR PRODUCT ALL', error.response.data);
        }
    }

    useEffect(() => {
        document.title = "PRODUCT"
        const filterData = dataAll.find((item) => {
            return item.id == category_in;
        })
        setCategory(filterData)
        fetchData(filterData)
      

    }, [search, sort, category_in])


    return (
        <React.Fragment>

            <br />
            <Divider horizontal>
                {category ? <Header as='h2'>
                    <Image circular src={category.image.small_square_crop} />
                    {category.name}
                </Header>
                    : <Header as='h2'>
                        Product ALL
                    </Header>}
            </Divider>
            {/* <br /> */}
            <div className="sort-div"> <Sort /></div>
           
            <br />
            <Container >

                <Grid >

                    <Grid.Row columns={4} >
                        {data?.data.results.map(item =>
                            <Grid.Column key={item.id} className="grid-column">
                                < CardProduct
                                    // isloading={item}
                                    id={item.id}
                                    title={item.name}
                                    image={item.image.medium_square_crop}
                                    detail={item.detail}

                                />
                                <br />
                            </Grid.Column>
                        )}
                    </Grid.Row>

                </Grid>

            </Container>
        </React.Fragment>
    );


}
export default Product;