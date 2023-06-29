import  { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { Square } from "./Square";
import { players } from "./players";
import { Turns } from './Turns';
import confetti from 'canvas-confetti';


const TURNS = {
  X:"❌",
  O:"⚪"
}

const WINNING_COMBOS = [
  [0,1,2], [3,4,5], [6,7,8], // Combos horizontales 
  [0,3,6], [1,4,7], [2,5,8], // Combos verticales 
  [0,4,8], [2,4,6] // combos en diagonal
]


export const Game = () => {
  
  const [board,setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(null);

  const [winner,setWinner] = useState(null)
  // winner => ("x"/"O") cuano hay ganador 
  // winner => (false) cuando hay empate

  const params = useParams();
  
  const choosedPlayer = players.filter((player) => {
    return player.playerId === params.id
  });

  useEffect(()=>{
    setTurn(choosedPlayer[0].action)
  },[]);

  // Chequeamos si tenemos algun ganador  
  const winnerCheck = (boardToCheck) => {
    for(let combo of WINNING_COMBOS){
      let [a,b,c] = combo;
      if(boardToCheck[a] && 
        boardToCheck[a] === boardToCheck[b] && boardToCheck[b] === boardToCheck[c]){
          return boardToCheck[a];
      }
    }
    return null;
  }

  // Chequeamos si el juego ya termino, asegurandonos que no quede ningun cuadrado que llenar
  const checkEndGame = (checkBoard) => {
    let fullBoard = checkBoard.every(square => square !== null);
    return fullBoard;
  }
  
  const updateBoard = (index) =>{
   // si ya tenemos elemento en el cuadro, no sobreescribir
    if(board[index] || winner) return

    // actualizamos los cuadros 
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    
    // cambiamos de turnos
    let newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    // revisar si tenemos ganador 
    const newWinner = winnerCheck(newBoard);
    if(newWinner){
      confetti();
      setWinner( newWinner );
    } else if(checkEndGame(newBoard)){ 
      setWinner(false); //empate 
    }
    
  }

  const restart = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <>      
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
    {
      winner !== null && (
        <section className='winner'>
          {
          <h2>
            {winner === false ? 'EMPATE..' :`Jugador ${winner} has ganado`}
          </h2>
          }
          <button onClick={restart}>VOLVER A JUGAR!</button>
        </section>

      ) 
    }
    </>
  )

}

