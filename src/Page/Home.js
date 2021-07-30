import axios from 'axios';
import { React, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Grid, Image, Container, Card,Segment,Loader, Header, Reveal, Label } from 'semantic-ui-react'
import AwesomeSlider from 'react-awesome-slider';
import CardProduct from '../component/Card';
import 'react-awesome-slider/dist/styles.css';
import '../css/Gallary.css'
import { useHistory } from 'react-router';
import Gallery from '../component/Gallery';
import DimmerLoader from '../component/Dimmer';
import YoutubeGallary from '../component/YoutubeGallary';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default function Counter() {
    const [sale, setSale] = useState(null);
    const [productAll, setProductAll] = useState(null);
    const { user } = useSelector(state => state.auth)
    const history = useHistory()
    const [category, setCategory] = useState(null);
    useEffect(() => {
        document.title = "METRO - HOME"
        queryData()
        queryProduct()
        queryProductAll()
    }, [user])

    const queryData = async () => {
        try {
            const response = await axios.get('/category/');
            setCategory(response.data)
        }
        catch (error) {
            console.log(error);
        }
    }
    const queryProduct = async () => {
        let config = {

            params: {
                recommend: false,
            }
        }
        try {
            const response = await axios.get('/product/', config);
            setSale(response.data)
        }
        catch (error) {
            console.log(error);
        }
    }
    const queryProductAll = async () => {
        let config = {

            params: {
                page_size: 8,
            }
        }
        try {

            const response = await axios.get('/product/', config);
            setProductAll(response.data)
        }
        catch (error) {
            console.log(error);
        }
    }


    if (!category) {
        return <DimmerLoader />
    }
    if (!sale) {
        return <DimmerLoader/>
    }
    if (!productAll) {
        return <DimmerLoader/>
    }
    return (
        <div>
            <br /><br />
            <Container fluid >
                <AwesomeSlider >
                    <div data-src='carousel/1.png' />
                    <div data-src='carousel/2.png' />
                    <div data-src='carousel/3.png' />
                    <div data-src='carousel/4.png' />
                    <div data-src='carousel/5.png' />
                </AwesomeSlider>
                <br /> <br /> <br />
                <Header as='h3' block >
                    สินค้าแนะนำ
                </Header>
                <div className="gallery-wrapper">
                    <div className="gallery-scroll">
                        <div className="gallery">

                            {sale.data.results.map(item =>
                                <Card key={item.id} className="item-gallary" onClick={() => history.push(`/product/${item.id}/`)}>
                                    <Label attached='top left' color="yellow">แนะนำ</Label>
                                    <Image className="image-gallary" src={item.image.medium_square_crop} wrapped ui={false} />
                                    <Card.Content>
                                        <Card.Header>{item.name}</Card.Header>
                                        <Card.Meta >
                                            <h2> ฿ {(item.price).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</h2>
                                        </Card.Meta>
                                        <Card.Description>
                                            {item.detail}
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            )}


                            <br />
                        </div>
                    </div>
                </div>

                <br />
                <Header as='h3' block>
                    ประเภทสินค้า ทั้งหมด
                </Header>
                <Gallery />
                <br />
                <Header as='h3' block >
                    <Grid columns='equal'>
                        <Grid.Column>
                            สินค้าทั้งหมด
                        </Grid.Column>
                        <Grid.Column width={8} textAlign="right">
                            <a className='a-link' onClick={() => history.push('/product/')}>ดูเพิ่มเติม</a>
                        </Grid.Column>
                    </Grid>
                </Header>
                <Grid className="grid-row-product">

                    <Grid.Row columns={4} className="grid-row-product" >
                        {productAll.data.results.map(item =>
                            <Grid.Column key={item.id} className="grid-column">
                                <CardProduct
                                    id={item.id}
                                    title={item.name}
                                    image={item.image.medium_square_crop}
                                    detail={item.detail}
                                    price={item.price}
                                    comment={item.comments.length}
                                />
                                <br />
                            </Grid.Column>
                        )}
                    </Grid.Row>

                </Grid>
                {/* <Header as='h3' block >
                    รีวิวสินค้า
                </Header>
               
                <YoutubeGallary /> */}
            </Container>


        </div>
    );

}
