/**
 * Created by xingxiao05 on 17/5/9.
 */
import { CHANGENAME } from './../type'
export function changeName(data) {
    return {
        type: CHANGENAME,
        data
    }
}