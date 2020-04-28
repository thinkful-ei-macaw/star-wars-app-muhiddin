import React from 'react';
import Item from '../Item/Item';



class Layout extends React.Component {
    state = {
      items: [],
      counts: 0
    }

  componentDidMount() {
    const item = "people";
    fetch(`https://swapi.py4e.com/api/${item}`)
    .then(response => response.json())
    .then((response) => {
        this.setState({
          counts: response.count,
          items: response.results
        });
        console.log(response)
    })
  }
    
  render() {
    console.log(this.state)
    return (
      <div>
        {this.state.items.map((item, index) => {
          return(
            <Item name={item.name} key={index}/>
          )
        })}
      </div>
    )
  }
}


export default Layout;