import {React} from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { useHistory } from 'react-router'
import {useSelector} from 'react-redux'
function ButtonAnimated () {
    const cart = useSelector((state)=> state.cart)
    const history = useHistory();
    return(<div>
        <Button animated='vertical' color='red' onClick={()=>history.push('/cart/')}>
          <Button.Content hidden>Cart</Button.Content>
          <Button.Content visible>
            <Icon name='shop' />
            <label>{cart.reduce((sum,item) => sum + item.quantity, 0)}</label>
          </Button.Content>
        </Button>
    
      </div>)
}

export default ButtonAnimated