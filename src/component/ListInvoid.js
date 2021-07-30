import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Icon, Image, Confirm, Item, Label, List, Segment, disabled, Popup } from 'semantic-ui-react'
import { FETCH_INVOID_REQ, GET_INVOID_REQ, SUBMIT_VOID_REQ } from '../redux/Reducer/action.type'
import ListHorizontal from './List'
import { useSelector } from 'react-redux'
import '../css/ListInvoid.css'
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios'
import DataTime from './DataTime'
const ListInvoid = (props) => {
  const { token } = useSelector(state => state.auth)
  const [color, setColor] = useState('red');
  const [disable, setDisable] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleclickId = (_id) => {

    return history.push(`/invoid/${_id}/`)
  }
  const DatetimeForm = (updated) => {
    let date = new Date(updated);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dt = date.getDate();

    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }
    return (dt + '-' + month + '-' + year)
  }



  return (

    <Item >
      {/* <Item.Image src='/images/wireframe/image.png' /> */}

      <Item.Content>
        <Item.Header as='h2' ><a href={`/invoid/${props.id}/`}> No. {props.id}</a> </Item.Header>
        <Item.Meta className="meta-item">
          <List
            verticalAlign='middle'
            horizontal relaxed

          >
            {props.invoices_item.map(item =>
              <ListHorizontal
                id={item.id}
                name={item.product.name}
                image={item.product.image.medium_square_crop}
                price={item.product.price}
                quantity={item.quantity}
                product={item.product.id}
              />
            )}
          </List>

        </Item.Meta>
        <Item.Meta>
          <h3 color="red"> ยอดรวม  {(props.total).replace(/\d(?=(\d{3})+\.)/g, '$&,')} บาท</h3>
        </Item.Meta>
        <Item.Extra>
          <p> วันที่ {DatetimeForm(props.updated)}</p>

          {/* <p> เวลา   {(props.updated).toLocaleDateString()}</p> */}
        </Item.Extra>
        {/* ?  <Item.Description>{props.updated}</Item.Description> */}

        <Item.Extra>
          <Button primary floated='right' onClick={() => handleclickId(props.id)} >รายละเอียด <Icon name='right chevron' /></Button>
          {props.status === 'Cancel' || props.status === 'Success' ?
            <Button color='grey' floated='right' disabled="true"  >ยกเลิกคำสั่งซื้อ </Button>


            : <Button color='red' floated='right' onClick={() => setOpen(true)} >
              ยกเลิกคำสั่งซื้อ

            </Button>}


        </Item.Extra>
      </Item.Content>
      <Confirm size='mini'
        open={open}
        content='คุณต้องการยกเลิกคำสั่งซื้อ ใช่หรือไม่ ?'
        cancelButton='ไม่'
        confirmButton="ใช่"
        onCancel={() => setOpen(false)}
        onConfirm={() => {
          dispatch({ type: SUBMIT_VOID_REQ, token: token, id: props.id })
          setOpen(false)
        }}
      />
    </Item>

  )
}

export default ListInvoid