import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Input, Segment, Search } from 'semantic-ui-react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { SEARCH_WORD_REQ, SORT_WORD_REQ, CATEGORY_IN_REQ } from '../redux/Reducer/action.type';
export default function CartEmpty() {
    const { sort, search, category__in } = useSelector(state => state.product)
    const history = useHistory()
    const dispatch = useDispatch()
    const [word, setWord] = useState('');
    useEffect(() => {
        setWord(search)
    }, [search])
    const onblursearch = (e) => {
        e.preventDefault()
        if (e.target.value) {
            dispatch({ type: SEARCH_WORD_REQ, search: word })
            dispatch({ type: CATEGORY_IN_REQ, category_in: null });
            dispatch({ type: SORT_WORD_REQ, sort: null })
            return history.push(`/product/?search=${word}`)
        }
    }

    return (
        <Segment placeholder textAlign="center">
            <h1>ไม่มีสินค้าในตะกร้า</h1>
            <br />
            <Input type="text" placeholder='Search สินค้าเพิ่มเติม...' onBlur={(e) => onblursearch(e)} onChange={(e) => setWord(e.target.value)} />

        </Segment>
    )
}
