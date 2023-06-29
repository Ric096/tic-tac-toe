
import React from 'react';
import { players } from './players';
import { useNavigate } from 'react-router-dom';

export function ChoosePlayer()  {
  

  let navigate = useNavigate();

  const player1 = (id) => {
    navigate('/game/'+id);
  }

  const player2 = (id) => {
    navigate('/game/'+ id);
  }
  
    return (
    <div className='modal'>
        <p>En esta ventana elegiremos que jugador queremos ser, si la "X" o la "O"</p>
        <h4>Que jugador quieres ser</h4>
        <button onClick={() => player1(players[0].playerId)} className='player1'>Player 1 (❌)</button>
        <button onClick={() => player2(players[1].playerId)} className='player2'>Player 2 (⚪)</button>
    </div>
  )
}
