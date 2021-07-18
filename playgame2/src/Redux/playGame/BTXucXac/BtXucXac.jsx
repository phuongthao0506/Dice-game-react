import React, { Component } from 'react'
import './BTXucXac.css'
import XucXac from './XucXac.jsx'
import ThongTinGame from './ThongTinGame.jsx'
import { connect } from 'react-redux';
import { PLAY_GAME, DAT_CUOC } from './type';


class BtXucXac extends Component {
    render() {
        let{datCuoc,playGame}=this.props
        return (
            <div className="game" >

                <div className="tittle-game text-center my-5 display-2">
                    Game Xúc Xắc
            </div>
                <div className="row text-center">
                    <div className="col-5">
                        <button className="btnGame" onClick={()=>{datCuoc(true)}}>
                            TÀI
                    </button>
                    </div>
                    <div className="col-2">
                      <XucXac/>
                    </div>
                    <div className="col-5">
                        <button className="btnGame" onClick={()=>{datCuoc(false)} }>
                            XỈU
                    </button>
                    
                    </div>
                </div>
                <div className="text-center">
                    <ThongTinGame/>
                    <button className="btn btn-danger display-4 p-2" onClick={()=>{playGame()}}> Play Game</button>
                </div>

            </div>
        )
    }
}
 
  const mapDispatchToProps =(dispatch)=> {
      return {
          datCuoc : (value)=>{
              let action ={
                type : DAT_CUOC,
                value
              }
              dispatch(action)
          },
         playGame : ()=>{
           dispatch(
               {
                   type : PLAY_GAME
               }
           )

         }
      }
      
  }
 
  
  

export default connect(null,mapDispatchToProps)(BtXucXac)