import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { Grid, Container ,List,Icon,Image,Header,Divider} from 'semantic-ui-react';
// import '../css/api-workshop2.css'
import CardProduct from '../component/Card';
import ListHorizontal from '../component/List';
import { FETCH_PRODUCT_ALL_REQ } from '../redux/Reducer/action.type';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
const Category = () => {
    const [data, setData] = useState()
    const { dataAll } = useSelector(state => state.category)
    const dispatch = useDispatch();
    const [category,setCategory] = useState(null);
    const {p_id} = useParams();
    const fetchData = async () => {
        try {
            const response = await axios.get('/product/', {
                params: {
                    is_enabled: true,
                    category__in:p_id,
                }
            });
            setData(response.data)

        } catch (error) {
            console.log('ERROR Category ALL', error.response.data);
        }
    }
    useEffect(() => {
        document.title = "CATEGORY"
        fetchData()
        const filterData = dataAll.find((item) => {
            return item.id == p_id;
          })
        //   console.log('filter ID',filterData);
         setCategory(filterData)
    }, [p_id])
    if(!category){
        return <div/>
    }
    return (
        <React.Fragment>
   <Divider horizontal>
   <Header as='h2'>
    <Image circular src={category.image.small_square_crop} /> 
    {category.name}
  </Header>
    </Divider>
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
export default Category;