import React, { Component } from 'react'
import { connect } from 'react-redux'

 class XucXac extends Component {
   
     renderXucXac = ()=>{
        return  this.props.hinhAnhXucXac.map (xucXac =>{
           return   <img src={xucXac.hinhAnh} alt=""  className="w-25 ml-2" />
         })
     }


    render() {
         
        return (
            <div>
               {this.renderXucXac()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        hinhAnhXucXac: state.XucXacReducer.hinhAnhXucXac
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, null)(XucXac)
