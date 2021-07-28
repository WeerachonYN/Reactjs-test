import axios from 'axios';
import { React, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Grid, Segment, Image, Container, Card, Icon, Reveal,Label } from 'semantic-ui-react'
import Gallery from '../component/Gallery';
import AwesomeSlider from 'react-awesome-slider';
import CardProduct from '../component/Card';
import 'react-awesome-slider/dist/styles.css';
import '../css/Gallary.css'
import { useHistory } from 'react-router';
export default function Counter() {
    let currentDate = new Date();
    const [currentUser, setCurrentUser] = useState({});

    const [counter, setCounter] = useState(0);
    const [sale, setSale] = useState(null);
    const { user } = useSelector(state => state.auth)
    const history = useHistory()
    const [category, setCategory] = useState();
    useEffect(() => {
        document.title = "HOME"
        queryData()
        setCurrentUser(user)
        queryProduct()

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


    if (!category) {
        return <h1>Loading...</h1>
    }
    console.log(sale.data.results[0].name);
    return (
        <div>
            <br /><br />
            <Container fluid >
                <AwesomeSlider >
                    {category.data.results.map(item => <div key={item.id}
                        data-src={item.image.full_size} />)}

                </AwesomeSlider>
                <br /> <br /> <br />
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
                                            <h2> ฿ {item.price}</h2>
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

                <br /> <br />
                <Card.Group>
                    {category.data.results.map(item =>
                        <Card key={item.key}>
                            <Card.Content>
                                <Card.Description>
                                    <Reveal animated='small fade'>
                                        <Reveal.Content visible>
                                        <Image className="image-cte"
                                                floated='right'
                                                size='big'
                                                src={item.image.full_size}
                                            />
                                        </Reveal.Content>
                                        <Reveal.Content hidden>
                                        <Image className="image-cte"
                                                floated='right'
                                                size='big'
                                                src={item.image.full_size}
                                            />
                                        </Reveal.Content>
                                    </Reveal>

                                </Card.Description>
                            </Card.Content>
                        </Card>)}

                </Card.Group>
            </Container>
            {/* <Gallery /> */}

        </div>
    );

}
