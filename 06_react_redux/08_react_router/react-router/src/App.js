import React from 'react';

import {
  Route,
  Link
} from 'react-router-dom'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Article = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

const Articles = (props) => (
  <div>
    <h2>Articles</h2>
    <ul>
      <li>
        <Link to={`${props.match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${props.match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${props.match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${props.match.path}/:topicId`} component={Article}/>
    <Route exact path={props.match.path} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const BasicExample = () => (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/article">Article</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/article" component={Articles}/>
    </div>
)
export default BasicExample
