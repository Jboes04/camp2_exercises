import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import TestRenderer from 'react-test-renderer';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


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
