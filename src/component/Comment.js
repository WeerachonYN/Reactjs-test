import React, { useState, useEffect } from 'react'
import { Button, Comment, Divider, Form, Container, Popup, Header, Label } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { useHistory } from 'react-router';
import '../css/Comments.css'
import { SET_COMMENT_REQ } from '../redux/Reducer/action.type'
import DatetimeForm from '../component/DataTime'
const host = process.env.REACT_APP_API_HOST;
const CommentProduct = (props) => {
    const { token, user } = useSelector(state => state.auth)
    const { comment, error } = useSelector(state => state.product)
    const [data, setData] = useState(null);
    const [count, setCount] = useState(0);
    const dispatch = useDispatch()
    const host = process.env.REACT_APP_API_HOST;
    const history = useHistory();
    let imageProps = {}
    useEffect(() => {

    }, [props.id])
    console.log('Count', count);
    const handleSubmit = (e) => {
        e.preventDefault();
        const { message } = e.target.elements;
        dispatch({ type: SET_COMMENT_REQ, token: token, message: message.value, product: props.id })
        return message.value = ''
    }
   
    // console.log(error.error.message);
    if (!comment) {
        return <div />
    }
    if (!user.images) {
        imageProps = {
            avatar: true,
            spaced: 'right',
            src:'https://react.semantic-ui.com/images/avatar/small/steve.jpg'
        }
    } else {
        imageProps = {
            avatar: true,
            spaced: 'right',
            src: host + user.images.image.thumbnail
        }
    }



    return (
        <Container  >
            <br />
            <Header as='h3' dividing>
                Comments
            </Header>
            <Comment.Group className="contain-comment">


                {comment.map(item => <Comment key={item.id}>
                    {item.user.images ? <Comment.Avatar src={host + item.user.images.image.small_square_crop} /> : <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />}
                    <Comment.Content>
                        <Comment.Author as='a'>{item.user.username}</Comment.Author>
                        <Comment.Metadata>
                            <div>{DatetimeForm(item.datetime)}</div>
                        </Comment.Metadata>
                        <Comment.Text>{item.message}</Comment.Text>
                    </Comment.Content>
                    <Divider />
                </Comment>)}
            </Comment.Group>
            <Form reply onSubmit={(e) => handleSubmit(e)}>
                <Form.TextArea name="message" />
                {error && <Label basic color='red' pointing>
                    {/* {error.error.message} */}
                </Label>
                }
                {!token ? <Button type="buttom" content='คอมแม้น' labelPosition='left' icon='edit' primary onClick={() => history.push('/login/')} />
                    : <Button type="submit" content='คอมแม้น' labelPosition='left' icon='edit' primary />}

                {token && <Popup
                    // content={user.first_name}
                    key={user.id}
                    header={user.username}
                    trigger={<Label as='a' image={imageProps} content={user.username} onClick={() => history.push('/profile/')} />}
                />}

            </Form>
        </Container>
    )
}

export default CommentProduct