import { Carousel } from 'react-responsive-carousel';
import { useSelector } from 'react-redux';
import { Container } from 'semantic-ui-react';
import { Placeholder } from 'semantic-ui-react';
import '../css/Carousel.css'
const Carousels = () => {
    const { data } = useSelector(state => state.product)
    const { loading } = useSelector(state => state.status)

    return (
        <div className="image-carousel">
            {loading ?
                (<Placeholder style={{ height: 500, width: 500 }}>
                    <Placeholder.Image />
                </Placeholder>)
                : (<Carousel width="600px" autoPlay={true} interval={2000}>
                    {data.product_image.map(element => (
                        <div key={element.id}>
                            <img src={element.image.medium_square_crop} />
                            {/* <p className="legend">Legend {element.id}</p> */}
                        </div>
                    ))}

                </Carousel>)}
        </div>
    );

}
export default Carousels