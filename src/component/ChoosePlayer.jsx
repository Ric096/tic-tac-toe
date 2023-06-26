/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
// import { Navigate } from 'react-router-dom';
import { players } from './players';
import { useNavigate } from 'react-router-dom';

export function ChoosePlayer()  {
  

  let navigate = useNavigate();

  const player1 = (id) => {
    // let playerchoosed = players.filter(player => {
    //   player.playerId === id
    // });

    // console.log(playerchoosed)

    navigate('/game/'+id);
  }

  // const player = id => {
    
  //   let playerChoosed = players.filter(player => {
  //     player.id === id
  //   })

  //   navigate('/game/'+ JSON.stringify(playerChoosed))

  //   console.log(players[0].playerId === id);
  //   console.log(playerChoosed);
  // }
  
  const player2 = (id) => {
    console.log(id)
    navigate('/game/'+ id);
  }
  
    return (
    <div className='modal'>
        {/* <h1>Bienvenidos al Juego de Tic-Tac-Toe</h1> */}
        <p>En esta ventana elegiremos que jugador queremos ser, si la "X" o la "O"</p>
        <h4>Que jugador quieres ser</h4>
        <button onClick={() => player1(players[0].playerId)} className='player1'>Player 1 (❌)</button>
        <button onClick={() => player2(players[1].playerId)} className='player2'>Player 2 (⚪)</button>
    </div>
  )
}
