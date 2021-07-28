import React, { useState, useEffect } from 'react'
import { Button, Comment, Divider, Form, Header, Label } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { useHistory } from 'react-router';
import { SET_COMMENT_REQ } from '../redux/Reducer/action.type'
const CommentProduct = (props) => {
    const { token } = useSelector(state => state.auth)
    const { comment, error } = useSelector(state => state.product)
    const [data, setData] = useState(null);
    const dispatch = useDispatch()
    const host = process.env.REACT_APP_API_HOST;
    const history = useHistory();
    const fetchComment = async (_id) => {
        try {
            const response = await axios.get(`/comment/${_id}/`)
            setData(response.data)
        }
        catch (error) {

            console.log(error.response.data);
        }
    }
    useEffect(() => {
        fetchComment(props.id)
    }, [props.id, comment])
    console.log('Data is', data);
    const handleSubmit = (e) => {
        e.preventDefault();
        const { message } = e.target.elements;
        // console.log(message.value);
        return dispatch({ type: SET_COMMENT_REQ, token: token, message: message.value, product: props.id })
    }
    // console.log(error.error.message);
    if (!data) {
        return <div />
    }
    return (
        <Comment.Group>
            <Header as='h3' dividing>
                Comments
            </Header>

            {data.map(item => <Comment key={item.id}>
                {item.user.images ? <Comment.Avatar src={host + item.user.images.image.small_square_crop} /> : <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />}
                <Comment.Content>
                    <Comment.Author as='a'>{item.user.username}</Comment.Author>
                    <Comment.Metadata>
                        <div>{item.datetime}</div>
                    </Comment.Metadata>
                    <Comment.Text>{item.message}</Comment.Text>

                </Comment.Content>
                <Divider />
            </Comment>)}

            <Form reply onSubmit={(e) => handleSubmit(e)}>
                <Form.TextArea name="message" />
                {error &&<Label basic color='red' pointing>
                    {error.error.message}
                </Label> 
                }
                {!token ? <Button type="buttom" content='คอมแม้น' labelPosition='left' icon='edit' primary onClick={() => history.push('/login/')} /> : <Button type="submit" content='คอมแม้น' labelPosition='left' icon='edit' primary />}
            </Form>
        </Comment.Group>
    )
}

export default CommentProduct