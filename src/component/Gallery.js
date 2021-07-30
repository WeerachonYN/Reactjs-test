import React from 'react'
import '../css/Counter.css'
import { Image ,Card,Reveal} from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { CATEGORY_IN_REQ, PAGE_PRODUCT_REQ, SORT_WORD_REQ } from '../redux/Reducer/action.type';
import { useSelector,useDispatch } from 'react-redux';

export default function Gallery(props) {
    const {search} =useSelector(state=>state.product)
    const dispatch = useDispatch();
    const history = useHistory();
    const handleClickHis=(_id)=>{
        dispatch({ type: CATEGORY_IN_REQ, category_in:_id  });
        dispatch({type:SORT_WORD_REQ,sort:null})
        dispatch({type:PAGE_PRODUCT_REQ,page:1})
        if(search){
          return history.push(`/product/?search=${search}&category_in=${_id}`)
        }else{
          return history.push(`/product/?category_in=${_id}`)
        }
       
    }
    return (
        <div className="grid-category">
        <Card className="item-category" onClick={()=> handleClickHis(1)}>
            <Card.Content className="content-category">
                <Reveal animated='small fade'>
                    <Reveal.Content visible>
                        <Image 
                            floated='right'
                            size='big'
                            src="category/1.jpg"
                        />
                    </Reveal.Content>
                    <Reveal.Content hidden>
                        <Image 
                            floated='right'
                            size='big'
                            src="category/2.jpg"
                        />
                    </Reveal.Content>
                </Reveal>
                <Card.Header className="card-Name" >เครื่องใช้ไฟฟ้าขนาดเล็ก</Card.Header>
            </Card.Content>
        </Card>
        <Card className="item-category" onClick={()=> handleClickHis(2)}>
            <Card.Content className="content-category">
                <Reveal animated='small fade'>
                    <Reveal.Content visible>
                        <Image 
                            floated='right'
                            size='big'
                            src="category/3.png"
                        />
                    </Reveal.Content>
                    <Reveal.Content hidden>
                        <Image 
                            floated='right'
                            size='big'
                            src="category/4.png"
                        />
                    </Reveal.Content>
                </Reveal>
                <Card.Header className="card-Name" >เครื่องกรองน้ำ</Card.Header>
            </Card.Content>
        </Card>
        <Card className="item-category" onClick={()=> handleClickHis(3)}>
            <Card.Content className="content-category">
                <Reveal animated='small fade'>
                    <Reveal.Content visible>
                        <Image 
                            floated='right'
                            size='big'
                            src="category/5.jpg"
                        />
                    </Reveal.Content>
                    <Reveal.Content hidden>
                        <Image 
                            floated='right'
                            size='big'
                            src="category/6.jpg"
                        />
                    </Reveal.Content>
                   
                </Reveal> 
                <Card.Header className="card-Name" >เครื่องซักผ้า</Card.Header>
            </Card.Content>
        </Card>
        <Card className="item-category" onClick={()=> handleClickHis(4)}>
            <Card.Content className="content-category">
                <Reveal animated='small fade'>
                    <Reveal.Content visible>
                        <Image 
                            floated='right'
                            size='big'
                            src="category/7.jpg"
                        />
                    </Reveal.Content>
                    <Reveal.Content hidden>
                        <Image 
                            floated='right'
                            size='big'
                            src="category/8.jpg"
                        />
                    </Reveal.Content>
                </Reveal>
                <Card.Header className="card-Name" >เครื่องปรับอากาศ</Card.Header>
            </Card.Content>
        </Card>
        <Card className="item-category" onClick={()=> handleClickHis(5)}>
            <Card.Content className="content-category">
                <Reveal animated='small fade'>
                    <Reveal.Content visible>
                        <Image 
                            floated='right'
                            size='big'
                            src="category/9.jpg"
                        />
                    </Reveal.Content>
                    <Reveal.Content hidden>
                        <Image 
                            floated='right'
                            size='big'
                            src="category/10.jpg"
                        />
                    </Reveal.Content>
                </Reveal>
                <Card.Header className="card-Name" >ตู้เย็น</Card.Header>
            </Card.Content>
        </Card>
        <Card className="item-category" onClick={()=> handleClickHis(6)}>
            <Card.Content className="content-category">
                <Reveal animated='small fade'>
                    <Reveal.Content visible>
                        <Image 
                            floated='right'
                            size='big'
                            src="category/11.jpg"
                        />
                    </Reveal.Content>
                    <Reveal.Content hidden>
                        <Image 
                            floated='right'
                            size='big'
                            src="category/12.jpg"
                        />
                    </Reveal.Content>
                </Reveal>
                <Card.Header className="card-Name" >พัดลม</Card.Header>
            </Card.Content>
        </Card>
        <Card className="item-category" onClick={()=> handleClickHis(7)}>
            <Card.Content className="content-category">
                <Reveal animated='small fade'>
                    <Reveal.Content visible>
                        <Image 
                            floated='right'
                            size='big'
                            src="category/13.jpg"
                        />
                    </Reveal.Content>
                    <Reveal.Content hidden>
                        <Image 
                            floated='right'
                            size='big'
                            src="category/14.jpg"
                        />
                    </Reveal.Content>
                </Reveal>
                <Card.Header className="card-Name" >พัดลม</Card.Header>
            </Card.Content>
        </Card>
        <Card className="item-category" onClick={()=> handleClickHis(8)}>
            <Card.Content className="content-category">
                <Reveal animated='small fade'>
                    <Reveal.Content visible>
                        <Image 
                            floated='right'
                            size='big'
                            src="category/15.jpg"
                        />
                    </Reveal.Content>
                    <Reveal.Content hidden>
                        <Image 
                            floated='right'
                            size='big'
                            src="category/16.png"
                        />
                    </Reveal.Content>
                </Reveal>
                <Card.Header className="card-Name" >เครื่องทำน้ำอุ่น</Card.Header>
            </Card.Content>
        </Card>
    </div>
    )
}
