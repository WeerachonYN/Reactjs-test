import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { useDispatch,useSelector } from 'react-redux';
import { PAGE_PRODUCT_REQ, SORT_WORD_REQ } from '../redux/Reducer/action.type';
import { useHistory } from 'react-router-dom';

const Sort = () => {
    const dispatch = useDispatch();
    const {sort,search,category_in} = useSelector(state => state.product)
    const history = useHistory()
    const handleClickSort = (sort) =>{
        dispatch({type:SORT_WORD_REQ,sort:sort})
        dispatch({type:PAGE_PRODUCT_REQ,page:1})
        if(category_in.length != 0&&search){
            return history.push(`/product/?search=${search}&category_in=${category_in}&sort=${sort}`)
        }else if(category_in.length != 0){
            return history.push(`/product/?category_in=${category_in}&sort=${sort}`)
        }else{
            return history.push(`/product/?sort=${sort}`)
        }
        
    }
    return (
       
        <Dropdown
            text='Filter'
            icon='filter'
            floating
            labeled
            button
            className='icon'
            floated='right'
            
            // pointing='right'
        >
            <Dropdown.Menu >
                <Dropdown.Header icon='money bill alternate outline' content='Filter by price' />
                <Dropdown.Divider />
                <Dropdown.Item value={sort} onClick={()=>handleClickSort('desc')}>มากไปน้อย</Dropdown.Item>
                <Dropdown.Item value={sort} onClick={()=>handleClickSort('asc')}>น้อยไปมาก</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
       
    );
}

export default Sort