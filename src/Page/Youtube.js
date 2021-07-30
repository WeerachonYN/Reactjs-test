import React from 'react'
import YouTube from 'react-youtube';
import { useState } from 'react';
import { Container, Segment, Header ,Button,Image} from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
export default function Youtube() {
  const history = useHistory()
  document.title = 'METRO - ABOUT'


  return (
    <Container fluid>
      <Segment.Group>
        <Segment>   <Header as='h2'>เกี่ยวกับเรา</Header></Segment>
        {/* <Segment textAlign="center"> <Image src='carousel/1.png' size="large" /></Segment> */}
        <Segment textAlign="center" >
         <h4>METRO เป็นตลาดอีคอมเมิร์ซที่ใหญ่ที่สุดในเอเชียตะวันออกเฉียงใต้และไต้หวัน</h4> 
          <p>ในปี ที่ผ่านมา METRO ได้เปิดตัวแพลตฟอร์ม ที่ถูกออกแบบมาเพื่อให้ชาวเอเชียตะวันออกเฉียงใต้ได้มีประสบการณ์ในการช้อปปิ้งออนไลน์ที่ง่าย </p>
          <p>ปลอดภัยและรวดเร็วแก่ลูกค้าและการสนับสนุนอย่างเต็มที่
            เราเชื่อว่าการช้อปปิ้งออนไลน์ควรเป็นสิ่งเข้าถึงได้ง่ายและสนุก และนี่คือวิสัยทัศน์ ที่ METRO จะนำเสนอ บนแพลตฟอร์มให้ลูกค้าทกๆวัน</p>
            <Button onClick={()=>history.push('/')} color="red">METRO</Button>
        </Segment>

       </Segment.Group> 


    </Container>
  )
}
