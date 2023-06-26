import  { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { Square } from "./Square";
import { players } from "./players";
import { Turns } from './Turns';


const TURNS = {
  X:"❌",
  O:"⚪"
}


export const Game = () => {
  
  const [board,setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState('');


  const params = useParams();
  
  let choosedPlayer = players.filter((player) => {
    return player.playerId === params.id
  });

  useEffect(()=>{
    setTurn(choosedPlayer[0].action)
  },[choosedPlayer]);
  

  // const navigate = useNavigate();

  // const elements = Array(9).fill(null);

  // const handleC = () => {
  //   navigate('/');
  // }

  const updateBoard = () =>{

  }

 
  // console.log(playerId)
  return (
    <>      
      {/* <button onClick={handleC}>Inicio</button> */}
      <div className="game-container">  
      {
        board.map((element,index) => {
          return (
            <Square key={index}
                    index={index}
                    updateBoard={updateBoard}
            >
              {
                // choosedPlayer.map((player)=>{
                //   return player.action;
                // })
              element
              }
            </Square>
          )
        })
      }
    </div>
    <section className='turns'>
      <Turns isSelected={choosedPlayer[0].action === TURNS.X}>
        {TURNS.X}
      </Turns>
      <Turns isSelected={choosedPlayer[0].action === TURNS.O}>
        {TURNS.O}
      </Turns>
    </section>
    </>
  )
}
