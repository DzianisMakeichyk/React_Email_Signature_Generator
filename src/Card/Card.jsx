import React, { Component } from 'react';

class Card extends Component {
  render() {
    if(!this.props.persona) {
      return null;
    }
    const information = this.props.persona;

    return (
      <div>
        <table style={{fontFamily:'Times New Roman',borderCollapse: 'collapse', maxWidth:330, width:330}}>
          <tbody>
            <tr>
              <td>
                <div>
                  <img alt={information.name} width="100" src={information.img} />
                </div>
                <br />
                  <p style={{fontSize: 14, color: '#333333', fontFamily: 'Helvetica,arial,sans-serif', marginBottom: 8, lineHeight: 1, marginTop:0}}>{information.name}</p>
                  <p style={{fontSize:12, fontWeight: 'bold', color: '#333333', fontFamily: 'Helvetica,arial,sans-serif', lineHeight: 1, marginTop:0, marginBottom: 12}}>{information.position}</p>
                  <table style={{bordeCollapse: 'collapse'}}>
                    <tbody>
                    <tr>
                      <td>
                        <a href={'mailto=' + information.email_short +'@pencilsharpener.pl'} style={{fontSize: 10, display: 'block', fontFamily: 'Helvetica,arial,sans-serif', color: '#666666', textDecoration: 'none', lineHeight: 1.2}} target="_blank">
                          {information.email_short}@pencilsharpener.pl
                        </a>
                        <p style={{fontSize: 12, color:'#333333', fontFamily: 'Helvetica,arial,sans-serif', lineHeight: 1, marginBottom: 12}}>
                          <a style={{fontSize: 12, fontFamily: 'Helvetica,arial,sans-serif', lineHeight: 1}} href="tel:+48797657075" value="+48797657075" target="_blank">+48{information.phone}</a>
                        </p>
                      </td>
                    </tr>
                    </tbody>
                  </table>
              </td>
            </tr>
            <tr>
              <td>
                <div style={{fontSize: 10, lineHeight: 1.3, fontFamily: 'Helvetica,arial,sans-serif', color: '#afafaf', marginTop: 12, marginBottom: 12}}>Dzianis Makeichyk,<br />00-814 Warszawa<br />NIP 5272773256
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Card;
