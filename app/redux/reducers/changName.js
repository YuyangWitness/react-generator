/**
 * Created by xingxiao05 on 17/5/9.
 */
import {CHANGENAME} from './../type'

const initState = {};

function changeName(state = initState, action) {

    if(action.type === CHANGENAME){
        return action.data;
    }else{
        return state;
    }
}

export default changeName