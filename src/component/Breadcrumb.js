import React from 'react'
import { Breadcrumb } from 'semantic-ui-react'
import { useHistory } from 'react-router'
import '../css/Breadcrumb.css'
const Breadcrumbs = (props) => {
  const history = useHistory();
  
  return(
    <Breadcrumb className="breadcrumb">
    <Breadcrumb.Section link onClick={()=>history.push('/')}>Home</Breadcrumb.Section>
    <Breadcrumb.Divider />
    <Breadcrumb.Section active >{props.category}</Breadcrumb.Section>
  </Breadcrumb>
  )

}


export default Breadcrumbs