import React, { Component } from 'react';

class Card extends Component {
  render() {
    console.log(this.props);
    if(!this.props.persona) {
      return null;
    }

    return (
     <div>
       <p>
         {this.props.persona.name}
       </p>
      </div>
    );
  }
}

export default Card;
