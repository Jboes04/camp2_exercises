import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
<<<<<<< HEAD
import {shallow} from 'enzyme';
import TestRenderer from 'react-test-renderer';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
=======
>>>>>>> d1af6ac9e5f877a92a6a831a1b02ff5d6c0ec03e

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
<<<<<<< HEAD


//enzyme method
it('renders Hello World!', () => {
  const testRender = shallow (
    <App />
  );
  expect(testRender.text()).toEqual('Hello World!');
});

//snapshot method
it('renders a snapshot', () => {
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
});


//wapiti method
it('renders Hello World!', () => {
  return Wapiti.goto("http://localhost:3000/")
    .capture(() => document.querySelector("h1").textContent)
    .run()
    .then(result => {
      expect(result).toEqual("Hello World!");
    });
});
=======
>>>>>>> d1af6ac9e5f877a92a6a831a1b02ff5d6c0ec03e
