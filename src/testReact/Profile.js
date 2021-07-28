import React, { useState, useEffect } from 'react'
import Breadcrumbs from '../component/Breadcrumb'
import { Container, Grid, Image, Header, Label,Confirm, Icon, Segment, Popup, Form, Button, Reveal, Input } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import '../css/Profile.css'
import axios from 'axios'
import { useHistory } from 'react-router'
import isEmail from 'validator/lib/isEmail';
import { GET_USER_REQ } from '../redux/Reducer/action.type'
export default function Profile() {
    const { user, token } = useSelector(state => state.auth)
    const [edit, setEdit] = useState(null);
    const [error, setError] = useState(null);
    const [first_name, setFirst_name] = useState(null);
    const [last_name, setLast_name] = useState(null);
    const [email, setEmail] = useState(null);
    const host = process.env.REACT_APP_API_HOST;
    const dispatch = useDispatch();
    const history = useHistory();
    const [open_checkout, setOpen_checkout] = useState(false)
    const [open, setOpen] = useState(false)
    const [statefile, setStatefile] = useState(null)
    const handleConfirmUpdate =()=>{
        var validator = require('validator');
        const { first_name, last_name, email } = edit;
      
        if (validator.isEmail(email.value)) {
            const data = {
                email: email.value,
                first_name: first_name.value,
                last_name: last_name.value,
            }
            setOpen(false)
           return updateProfile(data, user.id)
        } else {
            setError('กรุณากรอกอีเมล์ให้ถูกต้อง')
            return setOpen(false)
        }
         
    }
    const updateProfile = async (data, _id) => {
        const config = {
            headers: {
                Authorization: `Bearer ${token.access}`
            }
        };
        await axios.patch(`/users/${_id}/`, data, config).then(val => {
            setError(false)
            dispatch({ type: GET_USER_REQ, payload: token })
            console.log('success', val.response.data);

        }).catch(e => {
            console.log('error', e.response?.data);
            setError(e.response?.data)

        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setOpen(true)
        setEdit(e.target.elements)
       
    }

    const handleonImagechange = (event) => {
        console.log(event.target.files[0]);
        setStatefile(event.target.files[0])
    }
    const handleUpdateImage = async () => {
        let fd = new FormData();
        fd.append('image', statefile, statefile.name)
        const data = {
            images: { image: fd }
        }
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token.access}`
            }
        };
        await axios.post(`/users/${user.id}/`, fd, config).then(val => {
            dispatch({ type: GET_USER_REQ, payload: token })
            console.log('success', val.response.data);
            console.log('Progress:' + (Math(ProgressEvent.loaded / ProgressEvent.total * 100) + '%'))
        }).catch(e => {
            console.log('error', e.response?.data);

        })
    }
    const handleCancel = () => {
        setOpen_checkout(false)
        setOpen(false)
    }
    const handleConfirm = () => {
        handleUpdateImage()
        setOpen_checkout(false)
    }
    useEffect(() => {
        setFirst_name(user.first_name)
        setLast_name(user.last_name)
        setEmail(user.email)
    }, [user])
    return (

        <Container fluid>

            <br />
            <Breadcrumbs category={'ข้อมูลผู้ใช้'} />
            <br />
            <Container>

                <Header as='h2' icon textAlign='center'>

                    {!user.images ? <Popup basic content='Change image' trigger={<Image className="image-profile" src='https://react.semantic-ui.com/images/wireframe/square-image.png' size='medium' circular onClick={() => setOpen_checkout(true)} />} />

                        : <Popup basic content='Change image' trigger={<Image onClick={() => setOpen_checkout(true)} name='users' className="image-profile" size='medium' src={host + user.images.image.small_square_crop} circular />} />}
                    <Header.Content as="h1">{user.username}</Header.Content>
                </Header>
                {!user ? <Image
                    centered
                    size='large'
                    src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png'
                /> : <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Field>
                        <label>First Name</label>
                        <input name="first_name" value={first_name} onChange={(e) => setFirst_name(e.target.value)} placeholder='First Name' />
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input name="last_name" value={last_name} onChange={(e) => setLast_name(e.target.value)} placeholder='Last Name' />
                    </Form.Field>
                    <Form.Field>
                        <label>Email</label>
                        <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                        {error && <Label basic color='red' pointing>
                            {error}
                        </Label>}
                    </Form.Field>

                    <Button type='submit' color="green">อัพเดท</Button>

                </Form>

                }
            </Container>
            <Confirm size='mini'
                open={open_checkout}
                header='Upload Image'
                content={<Input type="file" onChange={(event) => handleonImagechange(event)} />}

                cancelButton='ยกเลิก'
                confirmButton="ยืนยัน"
                onCancel={() => handleCancel()}
                onConfirm={() => handleConfirm('checkout')}
            />
            <Confirm size='mini'
                open={open}
                header='ข้อความยืนยันอัพเดทการอัพเดทข้อมูล'
                content='ยืนยันอัพเดทใช่หรือไม่ ?'

                cancelButton='ไม่ใช่'
                confirmButton="ใช่"
                onCancel={() => handleCancel()}
                onConfirm={() => handleConfirmUpdate()}
            />
        </Container>

    )
}
