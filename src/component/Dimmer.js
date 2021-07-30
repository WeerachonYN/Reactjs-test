import React from 'react'
import { Dimmer, Image, Loader, Segment } from 'semantic-ui-react'
import '../css/Dimmer.css'
export default function DimmerLoader() {


    return (
        <Segment className="drimmer">
            <Dimmer active inverted>
                <Loader size='large'>Loading</Loader>
            </Dimmer>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Segment>
    )

}