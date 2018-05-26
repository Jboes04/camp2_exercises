import React, { Component } from 'react';
import './expenses';
import './users';
import './App.css';

// App has `expenses` and `users` as props


class App extends Component {
  // checkIff(element, item) {
  //   if(element.id === item.who) {
  //     return element.name;
  //   }
  // }

  render() {
    let exp = this.props.expenses;
    let users = this.props.users;

    return (
      <div className="App">
          <table>
            <thead>
              <th> What has been paid </th>
              <th> By Whom? </th>
            </thead>
            <tbody>
            {exp.map(item => (
              <tr key={item.what}>
              <td>{item.what}</td>
              <td>{users.find(element =>
               element.id === item.who).name}</td>
              </tr>
            ))}
            </tbody>
          </table>
      </div>
    );
  }
}

export default App;

//////////////////////////////////////////////////////:

/*import React, { Component } from 'react';
import './App.css';

function findUser(users, id) {
  const userFound = users.find((user) => {
    return user.id === id;
  });
  return (userFound) ? userFound.name : "No one";
}

function displayExpenses(props) {
  return props.expenses.map((expense, index) => {
    return (
      <tr key={index}>
        <td>{expense.what}</td>
        <td>{findUser(props.users, expense.who)}</td>
      </tr>
    );
  })
}

// App has `expenses` and `users` as props
class App extends Component {
  render() {
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>What has been paid</th>
              <th>by whom?</th>
            </tr>
          </thead>
          <tbody>
            {displayExpenses(this.props)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;*/
