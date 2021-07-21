import React,{useState}from 'react'
import { Dropdown,Grid } from 'semantic-ui-react'
import { useDispatch,useSelector } from 'react-redux';
import { SORT_WORD_REQ } from '../redux/Reducer/action.type';

const Sort = () => {
    const dispatch = useDispatch();
    const [state,setState] = useState('asc');
    const {sort} = useSelector(state => state.product)
    const handleClickSort = (sort) =>{
        
        console.log('sort:',sort);
        return dispatch({type:SORT_WORD_REQ,sort:sort})
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