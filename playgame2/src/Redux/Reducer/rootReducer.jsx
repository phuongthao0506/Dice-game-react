//import redux
import {combineReducers} from 'redux'
//import store con (gioHang)

import {XucXacReducer} from './XucXacReducer'




export const rootReducer = combineReducers({
// nơi chứa các reducer cho nghiêp vụ (store con )
    // + reducer giohang = coi như chứa state của giỏ hàng 

    XucXacReducer,

    
    
})