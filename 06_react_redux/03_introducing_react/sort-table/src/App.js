/*import React, { Component } from 'react';
import './App.css';
import _ from "underscore";

const products =
[
  { "decathlon_id": 8282689, "title": "Corne chasse 14cm", "price": 9.99 },
  { "decathlon_id": 8354464, "title": "Basic L print Long Gold Fusion", "price": 9.99 },
  { "decathlon_id": 8380024, "title": "RUN ELIOPRIME", "price": 54.99 },
  { "decathlon_id": 8379970, "title": "Pantalon Gym", "price": 12.99 },
  { "decathlon_id": 8247793, "title": "PALMES WADERS", "price": 24.99 },
  { "decathlon_id": 8357549, "title": "MINIMIZER EDEN UNI  NOIR", "price": 19.99 },
  { "decathlon_id": 8326155, "title": "Pantalon Training mesh marine", "price": 44.99 },
  { "decathlon_id": 8329121, "title": "COUTEAU A PALOURDES", "price": 4.99 },
  { "decathlon_id": 8370749, "title": "Doudoune Hike 100 garçon bleu", "price": 9.99 },
  { "decathlon_id": 8298354, "title": "OREILLER CONFORT", "price": 6.99 },
  { "decathlon_id": 8044622, "title": "2 guêtres RIDING noir", "price": 14.99 },
  { "decathlon_id": 8249674, "title": "BOBINE FUN 2 3 4mm X 40 20 12m", "price": 6.99 },
  { "decathlon_id": 8353265, "title": "Justaucorps manche longue Gym.", "price": 34.99 }
]

function renderRows(products) {
  return products.map((product) => {
    return <tr><td>{product.decathlon_id}</td>
    <td>{product.title}</td>
    <td>{product.price}</td>
    </tr>
  });
}


class App extends Component {
listKey(product) {
    return <tr>{Object.keys(product).map((value) => <th key={value}>{value}</th>)}</tr>
  }

renderRows(products) {
    return products.map((product, index) => {
      return <tr key= {index}>{this.renderRow(product, index)}</tr>
    });
  }

renderRow(product, index) {
    return Object.values(product).map((value) => {
      return <td key={[value, index].join("-")}>{value}</td>
    });
  }

  render() {
    return (
      <div className="App">
        <table>
          <tbody>
            {this.listKey(products[0])}
            {this.renderRows(products)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;*/

import React, { Component } from 'react';
import './App.css';
import Line from './Line';
import _ from 'underscore';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sorter: "decathlon_id",
      desc: false
    };
  }

  getProducts() {
    const prod = _.sortBy(this.props.products, this.state.sorter);
    return this.state.desc ? prod.reverse() : prod;
  }

  handleClick(newSorter) {
    this.setState({
      sorter: newSorter,
      desc: (newSorter === this.state.sorter) && !this.state.desc
    });
  }

  renderHeader() {
    return (
      <thead>
        <tr>
          <th onClick={() => this.handleClick("decathlon_id")}>decathlon_id</th>
          <th onClick={() => this.handleClick("title")}>title</th>
          <th onClick={() => this.handleClick("price")}>price</th>
        </tr>
      </thead>
    );
  }

  renderBody() {
    return (
      <tbody>
      {this.getProducts().map((product) => {
        return (
          <Line
            key={product.decathlon_id}
            decathlon_id={product.decathlon_id}
            title={product.title}
            price={product.price}
          />
        );
      })}
      </tbody>
    )
  }

  render() {
    return (
      <div className="App">
        <table>
          {this.renderHeader()}
          {this.renderBody()}
        </table>
      </div>
    );
  }
}

export default App;
