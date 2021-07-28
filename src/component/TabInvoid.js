import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Step } from 'semantic-ui-react'
import { FETCH_INVOID_REQ } from '../redux/Reducer/action.type'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import '../css/TabInvoid.css'
const TabInvoid = () => {
  const dispatch = useDispatch();
  const { token } = useSelector(state => state.auth)
  const { invoid,count } = useSelector(state => state.invoid)
  const [disable, setDisable] = useState(false)
  const [active, setActive] = useState('all')
  const handleClick = (status) => {
    // console.log('Status:',status);
    return dispatch({ type: FETCH_INVOID_REQ, token: token, status: status })
  }


  console.log(invoid);

  useEffect(() => {
    if (active == 'all') {
      return handleClick()
    }
    if (active == 'wait') {
      return handleClick('Wait')
    }
    if (active == 'success') {
      return handleClick('Success')
    }
    if (active == 'cancel') {
      return handleClick('Cancel')
    }
  }, [active])

  return (
    <Step.Group className="step-invoid" widths={4}  >
      <Step active={active === 'all'} onClick={() => setActive('all')} className="step-all"
      // as={Link} to={"/"}
      >
        <Icon name='shipping fast' disabled={active==='all'}  />
        <Step.Content >
          <Step.Title >All({count.all})</Step.Title>
          <Step.Description>ทั้งหมด</Step.Description>
        </Step.Content>
      </Step>
      <Step active={active === 'wait'} onClick={() => setActive('wait')} >
        <Icon name='box' disabled={active === 'wait'} color="blue" />
        <Step.Content>
          <Step.Title>Waiting({count.wait})</Step.Title>
          <Step.Description>รอดำเนินการ</Step.Description>
        </Step.Content>
      </Step>
      <Step active={active === 'success'} onClick={() => setActive('success')}>
        <Icon name='boxes' disabled={active === 'success'} color="green" />
        <Step.Content>
          <Step.Title>Success({count.success})</Step.Title>
          <Step.Description>สำเร็จแล้ว</Step.Description>
        </Step.Content>
      </Step>
      <Step active={active === 'cancel'} onClick={() => setActive('cancel')}>
        <Icon name='cancel' disabled={active === 'cancel'} color="red" />
        <Step.Content>
          <Step.Title>Cancel({count.cancel})</Step.Title>
          <Step.Description>ยกเลิกแล้ว</Step.Description>
        </Step.Content>
      </Step>
    </Step.Group>
  )
}

export default TabInvoid