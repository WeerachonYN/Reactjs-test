import { Carousel } from 'react-responsive-carousel';
import { useSelector } from 'react-redux';
import { Container } from 'semantic-ui-react';
import { Placeholder } from 'semantic-ui-react';

const Carousels = () => {
    const { data } = useSelector(state => state.product)
    const { loading } = useSelector(state => state.status)

    return (
        <div>
            {loading ?
                (<Placeholder style={{ height: 400, width: 400 }}>
                    <Placeholder.Image />
                </Placeholder>)
                : (<Carousel width="400px" autoPlay={true} interval={2000}>
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