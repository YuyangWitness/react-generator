/**
 * Created by xingxiao05 on 17/5/9.
 */
import React from 'react'
import { Route, BrowserRouter as Router,  } from 'react-router-dom'
import Home from './../containers/Home'
import App from './../containers/App'
import About from './../containers/About'

class RouterMap extends React.Component {
    render(){
        return (
            <Router>
                <App>
                    <Route exact path="/" component={Home} />
                    <Route path="/about/:id" component={About}/>
                </App>
            </Router>

        )
    }
}

export default RouterMap