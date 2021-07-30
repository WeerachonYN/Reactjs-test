import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { Grid, Container, Divider, Header, Dimmer, Loader, Popup, Pagination, Segment, Image, Sticky, Menu } from 'semantic-ui-react';
import '../css/product.css'
import CardProduct from '../component/Card';
import { FETCH_PRODUCT_ALL_REQ, PAGE_PRODUCT_REQ, PRODUCT_END, PRODUCT_START } from '../redux/Reducer/action.type';
import { useDispatch, useSelector } from 'react-redux';
import Sort from '../component/Sort';
import Paginations from '../component/Paginations';
import Breadcrumbs from '../component/Breadcrumb';
import DimmerLoader from '../component/Dimmer';
import MenuSidebar from '../component/MenuSidebar';
import { useHistory } from 'react-router-dom';

const Product = () => {


    const { search, sort, page, loading, category_in, category_not_in, page_size, comment } = useSelector(state => state.product)
    const { dataAll, } = useSelector(state => state.category)
    const [data, setData] = useState(null)
    // const [page, setPage] = useState(1)
    const history = useHistory()
    // console.log('data_PROduct', category_in);
    const [category, setCategory] = useState('Product All');
    const dispatch = useDispatch();


    const fetchData = async (filterData) => {



        let config = {

            params: {
                is_enabled: true,
                search: search,
                sort: sort,
                category__in: filterData?.id,
                // category_not_in: category_not_in,
                page: page,
                page_size: 6
            }
        }
        dispatch({ type: PRODUCT_START })
        try {

            const response = await axios.get('/product/', config);
            setData(response.data)
            dispatch({ type: FETCH_PRODUCT_ALL_REQ, payload: response.data?.data.results || response })
            dispatch({ type: PRODUCT_END })
        } catch (error) {
            dispatch({ type: PRODUCT_END })
            console.log('ERROR PRODUCT ALL', error?.response.data || error);

        }
    }
    const onPageClick = (e, d) => {
        dispatch({ type: PAGE_PRODUCT_REQ, page: d.activePage })
        if (category_in.length != 0 && search && sort) {
            return history.push(`/product/?searh=${search}&category_id=${category_in}&sort=${sort}&page=${d.activePage}/`)
        } else if (category_in.length != 0 && sort) {
            return history.push(`/product/?category_id=${category_in}&sort=${sort}&page=${d.activePage}/`)
        } else if (category_in.length != 0){
            return history.push(`/product/?category_in=${category_in}&page=${d.activePage}/`)
        }
        else if (search){
            return history.push(`/product/?search=${search}&page=${d.activePage}/`)
        }
        else if (sort){
            return history.push(`/product/?sort=${sort}&page=${d.activePage}/`)
        }else{
            return history.push(`/product/?page=${d.activePage}/`)
        }

    }
    useEffect(() => {
        document.title = " METRO - PRODUCT"
        const filterData = dataAll.find((item) => {

            return item.id == category_in;
        })

        setCategory(filterData)
        fetchData(filterData)


    }, [search, sort, category_in, page])

    if (!data) {
        return <div>
            <DimmerLoader />
        </div>

    }
    console.log(data);
    const count = parseInt(data.data.count / 6) + 1

    return (
        <React.Fragment>
            <br />
            <Grid columns='equal'>
                <Grid.Column>
                    {category ? <Breadcrumbs category={category.name} /> : <Breadcrumbs category='Product All' />}
                </Grid.Column>
                <Grid.Column width={8} textAlign="right">
                    <div className="sort-div"><Sort /></div>
                </Grid.Column>
            </Grid>


            <Grid columns='equal' className="grid-product">
                <Grid.Column width={3} className="grid-row-product">
                    <Sticky context={<MenuSidebar />} >
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



                    <br />
                    <Container fluid>

                        <Grid className="grid-row-product">

                            <Grid.Row columns={3} className="grid-row-product" >
                                {data.data.results.map(item =>
                                    <Grid.Column key={item.id} className="grid-column">

                                        <CardProduct
                                            loading={loading}
                                            id={item.id}
                                            title={item.name}
                                            image={item.image.medium_square_crop}
                                            detail={item.detail}
                                            price={item.price}
                                            comment={item.comments?.length}

                                        />
                                       
                                        <br />
                                    </Grid.Column>
                                )}
                               {/* 1=0? true:false
                               1=0 ?? true
                               1=0 && true */}
                            </Grid.Row>

                        </Grid>
                     
                        {data.data.results.length !== 0 && <Container textAlign="center"><Pagination
                            onPageChange={(e, d) => onPageClick(e, d)}
                            boundaryRange={0}
                            defaultActivePage={1}
                            ellipsisItem={null}
                            firstItem={null}
                            lastItem={null}
                            siblingRange={1}
                            totalPages={count}
                            activePage={page}
                        /> </Container> }
                    </Container>
                </Grid.Column>

            </Grid>

        </React.Fragment>
    );


}
export default Product;