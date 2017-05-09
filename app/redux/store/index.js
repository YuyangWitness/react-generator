/**
 * Created by xingxiao05 on 17/5/9.
 */
import { createStore } from 'redux'
import rootReducer from './../reducers/index'

export default function configureStore(initState) {
    const store = createStore(rootReducer, initState,
        // 触发 redux-devtools
        window.devToolsExtension ? window.devToolsExtension() : undefined
    )

    return store;
}