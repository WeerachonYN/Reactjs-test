import React from 'react'
import '../css/Gallary.css'
import { Image } from 'semantic-ui-react'
import { useEffect, useState } from 'react'
import axios from 'axios'
export default function Gallery() {
    const [category, setCategory] = useState();
    const queryData = async () => {
        try {
            const response = await axios.get('/category/');
            setCategory(response.data)
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        queryData()

    }, [])
    if (!category) {
        return <h1>Loading...</h1>
    }
    console.log(category);
    return (
        <div className="gallery-wrapper">
            <div className="gallery-scroll">
                <div className="gallery">
                    {category.data.results.map(item => <div key={item.id} className="item-gallary">
                        <Image className="image-gallary" src={item.image.medium_square_crop} />
                    </div>)}
                </div>
            </div>
        </div>
    )
}
