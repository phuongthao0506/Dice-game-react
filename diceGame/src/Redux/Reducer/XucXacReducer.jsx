import { PLAY_GAME, DAT_CUOC } from '../playGame/BTXucXac/type.js';

const xucXacState = {
    taiXiu: true, // tai :(3-11) true, xiu // false 
    hinhAnhXucXac: [
        { giaTri: 1, hinhAnh: './img/img/imgGameXucXac/1.png' },
        { giaTri: 3, hinhAnh: './img/img/imgGameXucXac/3.png' },
        { giaTri: 6, hinhAnh: './img/img/imgGameXucXac/6.png' }
    ],
    soBanThang: 0,
    tongSoBanChoi: 0
}



export const XucXacReducer = (state = xucXacState, action) => {
    switch (action.type) {
        case DAT_CUOC:
            state.taiXiu = action.value
            console.log(state.taiXiu);
            return { ...state }
        case PLAY_GAME:
           let newHinhAnhXucXac = playGame()
            state.hinhAnhXucXac = newHinhAnhXucXac
            state.tongSoBanChoi += 1
            let gt = giaTri(newHinhAnhXucXac)
            
            if (gt <12 && state.taiXiu|| gt>12 && !state.taiXiu) {
                state.soBanThang += 1
            }




            return { ...state }



        default:
            return { ...state }
    }


}
let playGame = () => {
    // tao arr moi
    let newArr = []
    for (let i = 0; i < 3; i++) {
        // tao so ngau nhien 
        let so = Math.floor(Math.random() * 6) + 1
        let newXucXac = { giaTri: so, hinhAnh: `./img/img/imgGameXucXac/${so}.png` }
        newArr.push(newXucXac)
    }
    return newArr
}
let giaTri = (arrHinhAnhXucXac) => {
    return arrHinhAnhXucXac.reduce((gt, xucXac) => {
        return gt += xucXac.giaTri
    }, 0)
}

