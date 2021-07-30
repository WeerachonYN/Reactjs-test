import React from 'react'
import '../css/Youtube.css'
import YouTube from 'react-youtube';
import { Label ,Card} from 'semantic-ui-react';
export default function YoutubeGallary() {
    const opts = {
        height: '300',
        width: '300',
        playerVars: {
          autoplay: 0,
        },
      }
    return (
        <div className="vdo-wrapper">
        <div className="vdo-scroll">
            <div className="vdo">

                    <Card  className="item-vdo" >
                        {/* <Label attached='top left' color="orange">รีวิว</Label> */}
                        <YouTube videoId="FVvLpixjM1o" opts={opts} />
                        {/* <Card.Content>
                         
                            <Card.Header>{item.name}</Card.Header>
                        </Card.Content> */}
                    </Card>
               
                


                <br />
            </div>
        </div>
    </div>
    )
}
