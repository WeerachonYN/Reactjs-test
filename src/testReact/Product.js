import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { Grid, Container, Divider, Header, Dimmer, Loader, Popup,Pagination, Segment, Image, Sticky, Menu } from 'semantic-ui-react';
import '../css/product.css'
import CardProduct from '../component/Card';
import { FETCH_PRODUCT_ALL_REQ } from '../redux/Reducer/action.type';
import { useDispatch, useSelector } from 'react-redux';
import Sort from '../component/Sort';
import Paginations from '../component/Paginations';
import Breadcrumbs from '../component/Breadcrumb';
import DimmerLoader from '../component/Dimmer';
import MenuSidebar from '../component/MenuSidebar';
const Product = () => {


    const { search, sort, category_in, category_not_in, page_size } = useSelector(state => state.product)
    const { dataAll, } = useSelector(state => state.category)
    const [data, setData] = useState(null)
    const [page, setPage] = useState(1)

    // console.log('data_PROduct', category_in);
    const [category, setCategory] = useState('Product All');
    const dispatch = useDispatch();


    const fetchData = async (filterData,page) => {



        let config = {

            params: {
                is_enabled: true,
                search: search,
                sort: sort,
                category__in: filterData?.id,
                // category_not_in: category_not_in,
                page: page,
                // page_size:page_size
            }
        }
        try {

            const response = await axios.get('/product/', config);
            setData(response.data)
            dispatch({ type: FETCH_PRODUCT_ALL_REQ, payload: response.data?.data.results || response })
        } catch (error) {
            console.log('ERROR PRODUCT ALL', error?.response.data || error);
        }
    }

    useEffect(() => {
        document.title = "PRODUCT"
        const filterData = dataAll.find((item) => {
            return item.id == category_in;
        })
        setCategory(filterData)
        fetchData(filterData,page)


    }, [search, sort, category_in,page])
    
    if (!data) {
        return <div>
            <DimmerLoader />
        </div>

    }
    const count = parseInt(data.data.count/6)+1
    
    return (
        <React.Fragment>
            <br />
            {category ? <Breadcrumbs category={category.name} /> : <Breadcrumbs category='Product All' />}
            <Grid columns='equal' className="grid-product">
                <Grid.Column width={3} className="grid-row-product">
                    <Sticky>
                        <MenuSidebar />
                    </Sticky>
                    <br />
                </Grid.Column>
                <Grid.Column className="grid-row-product">
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

                    <div className="sort-div"><Sort /></div>

                    <br />
                    <Container fluid>

                        <Grid className="grid-row-product">

                            <Grid.Row columns={3} className="grid-row-product" >
                                {data.data.results.map(item =>
                                    <Grid.Column key={item.id} className="grid-column">

                                        <CardProduct
                                            // isloading={item}
                                            id={item.id}
                                            title={item.name}
                                            image={item.image.medium_square_crop}
                                            detail={item.detail}
                                            price={item.price}

                                        />
                                        <br />
                                    </Grid.Column>
                                )}
                            </Grid.Row>

                        </Grid>
                        {data.data.results.length !== 0 ? <Container textAlign="center"><Pagination
                            onPageChange={(e, d) => setPage(d.activePage)}
                            boundaryRange={0}
                            defaultActivePage={1}
                            ellipsisItem={null}
                            firstItem={null}
                            lastItem={null}
                            siblingRange={1}
                            totalPages={count}
                            activePage={page}
                        /> </Container>: null}
                    </Container>
                </Grid.Column>

            </Grid>

        </React.Fragment>
    );


}
export default Product;