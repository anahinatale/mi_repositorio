import * as React from "react";
import { Button, Card, Icon} from 'semantic-ui-react'

class ItemCount extends Components{
    constructor(props){
        super(props)
        this.state = {counter: 1}
    }

    substract (){
        this.setState({counter: this.state.counter - 1});
    }

    add (){
        this.setState({counter: this.state.counter + 1});
    }
render (){
    return (
        <div>
             <Card>
      <Card.Content>
       <h1>Producto</h1>
       <h2>{this.state.counter}</h2>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button onClick={this.substract.bind(this)}><Icon name='minus' /></Button>
          <Button onClick={this.add.bind(this)}><Icon name='plus' /></Button>
        </div>
      </Card.Content>
    </Card>

        </div>
    )
  }

}

export default ItemCount;
