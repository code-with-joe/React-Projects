import React, { useState } from 'react'

function App () {
  const [count, setCount] = useState(true)
  const [board, setBoard] = useState(Array(9).fill(''))
  const [winner, setWinner] = useState(null)

  const handleClick = index => {
    if (!board[index] && !winner) {
      const newBoard = board.slice()
      newBoard[index] = count ? 'X' : 'O'
      setBoard(newBoard)
      setCount(!count)
      checkWinner(newBoard)
    }
  }

  const checkWinner = board => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a])
        return
      }
      if (board.every(cell => cell)) {
        setWinner('Draw')
      }
    }
  }

  const newGame = () => {
    setBoard(Array(9).fill(''))
    setCount(true)
    setWinner(null)
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex justify-center items-center flex-col gap-5 w-[400px] h-[500px] bg-pink-300 rounded-xl'>
        <h1 className='text-black text-2xl font-bold'>Tic Tac Toe 🎮</h1>

        <div className='grid grid-cols-3 w-[240px] h-[240px] bg-white rounded-xl overflow-hidden'>
          {board.map((value, index) => (
            <div
              key={index}
              className={`w-[80px] h-[80px] flex items-center justify-center border-black text-5xl border cursor-pointer`}
              onClick={() => handleClick(index)}
            >
              {value}
            </div>
          ))}
        </div>

        {winner ? (
          <div className='text-black text-xl font-bold '>
            {winner === 'Draw' ? "it's a Draw" : `${winner} Wins!`}
          </div>
        ) : (
          <div className='text-black text-xl font-bold '>
            Player {count ? 'X' : 'O'}'s turn
          </div>
        )}
        <button
          className='mt-4 px-4 py-2 bg-blue-500 text-white rounded'
          onClick={newGame}
        >
          Restart
        </button>
      </div>
    </div>
  )
}

export default App
