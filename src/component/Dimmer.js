import React from 'react'
import { Button, Dimmer, Image, Loader, Segment } from 'semantic-ui-react'
import '../css/Dimmer.css'
export default function DimmerLoader() {


    return (
        <div className="dimmer-loader">
            <Dimmer.Dimmable as={Segment} dimmed='active'>
                <Dimmer active='active' inverted>
                    <Loader>Loading</Loader>
                </Dimmer>

                <p>
                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                </p>
                <p>
                    <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                </p>
            </Dimmer.Dimmable>
        </div>
    )

}