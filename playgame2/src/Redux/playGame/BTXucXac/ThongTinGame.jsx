import React, { Component } from 'react'
import { connect } from 'react-redux'


 class ThongTinGame extends Component {
    render() {
        let {soBanThang,tongSoBanChoi,taiXiu}= this.props
        return (
            <div>
                <div className="display-4 text-center">
                    Bạn Chọn :
                    <span  className= "text-success"> {taiXiu?"Tài":"Xỉu"}</span>
                </div>
                <div className="display-4 text-center">
                    Bàn Thắng :
                    <span  className= "text-danger"> {soBanThang}</span>
                </div>
                <div className="display-4 text-center ">
                     Tổng số bàn chơi:
                    <span  className= "text-warning"> {tongSoBanChoi}</span>
                </div>
                
            </div>
        )
    }
}
 
const mapStateToProps = (state) => {
    return {
        soBanThang : state.XucXacReducer.soBanThang,
        tongSoBanChoi :state.XucXacReducer.tongSoBanChoi,
        taiXiu:state.XucXacReducer.taiXiu

    }
   
    
}

const mapDispatchToProps = {
    
}
export default connect (mapStateToProps,null)(ThongTinGame)