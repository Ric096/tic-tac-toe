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

  const [turn, setTurn] = useState(TURNS.X);
  
  
  const params = useParams();
  
  const choosedPlayer = players.filter((player) => {
    return player.playerId === params.id
  });

  // useEffect(()=>{
  //   setTurn(choosedPlayer[0].action)
  // },[choosedPlayer]);
  
  const updateBoard = (index) =>{
   
    if(board[index]) return 

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    let newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    console.log(turn === TURNS.O);
  }

  const restart = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
  }

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
              {element}
            </Square>
          )
        })
      }
    </div>
    <section className='turns'>
      <Turns isSelected={turn === TURNS.X}>
        {TURNS.X}
      </Turns>
      <Turns isSelected={turn === TURNS.O}>
        {TURNS.O}
      </Turns>
    </section>
    </>
  )

}

