import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Step } from 'semantic-ui-react'

const TabInvoid = () => {
  const [disable,setDisable] = useState(true)
   const [active,setActive] = useState('all')
   const handleClick=(e)=>{
      console.log(e.target.nameContent);
   }
    return(
        <Step.Group className="step-invoid" widths={4}  >
          <Step  active={active==='all' }  onClick={()=> setActive('all')}  
          // as={Link} to={"/"}
          >
            <Icon name='shipping fast' disabled={active==='all'}  />
            <Step.Content>
              <Step.Title >All</Step.Title>
              <Step.Description>ทั้งหมด</Step.Description>
            </Step.Content>
          </Step>
          <Step active={active==='wait' }  onClick={()=> setActive('wait')} >
            <Icon name='box'  disabled={active==='wait'} />
            <Step.Content>
              <Step.Title>Waiting</Step.Title>
              <Step.Description>รอดำเนินการ</Step.Description>
            </Step.Content>
          </Step>
          <Step active={active==='success' }  onClick={()=> setActive('success')}>
            <Icon name='boxes' disabled={active==='success'}  />
            <Step.Content>
              <Step.Title>Success</Step.Title>
              <Step.Description>สำเร็จแล้ว</Step.Description>
            </Step.Content>
          </Step>
          <Step active={active==='cancel' }  onClick={()=> setActive('cancel')}>
            <Icon name='cancel'  disabled={active==='cancel'}  />
            <Step.Content>
              <Step.Title>Cancel</Step.Title>
              <Step.Description>ยกเลิกแล้ว</Step.Description>
            </Step.Content>
          </Step>
        </Step.Group>
      )
}

export default TabInvoid