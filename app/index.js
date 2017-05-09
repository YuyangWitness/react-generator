/**
 * Created by xingxiao05 on 17/5/9.
 */
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { getData } from './../test/data'
import RouterMap from './router/router'
import configureStore from './redux/store/index'

const store = configureStore();


ReactDom.render(
    <Provider store={store}>
        <RouterMap/>
    </Provider>,
    document.getElementById('root')
)