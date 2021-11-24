import { useState } from "react";
import Modal from "./Modal";

function Navbar({startGame, setStart, handleRestart}) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return ( 
    <nav className='flex justify-between'>
      <Modal isOpen={isModalOpen}>
        <div className='flex justify-center items-center py-10'>
          <div className='w-1/2 flex flex-col gap-5  items-center'>
          <button 
            onClick={() => {handleRestart(); setIsModalOpen(false)}}
            className='px-9 py-2 bg-memory-orange hover:bg-memory-lightorange text-white text-center rounded-full'>
              Restart
          </button>
          <button 
            onClick={() => setStart(false)}
            className='px-6 py-2 bg-memory-gray hover:bg-memory-softblue text-memory-black hover:text-white text-center rounded-full'>
            New Game
          </button>
          <button 
            onClick={() => setIsModalOpen(false)}
            className='text-center italic'>
            Close Menu
          </button>
          </div>
        </div>
      </Modal>
      <button
        disabled={!startGame}
        onClick={() => setStart(false)}
        className='text-memory-black text-3xl md:text-5xl'>
        memory
      </button>
      <div className='hidden md:flex gap-5'>
        <button 
          onClick={() => handleRestart()}
          className='px-6 md:text-xl bg-memory-orange hover:bg-memory-lightorange text-white text-center rounded-full'>
            Restart
        </button>
        <button 
          onClick={() => setStart(false)}
          className='px-6 py-2 md:text-xl bg-memory-gray hover:bg-memory-softblue text-memory-black hover:text-white text-center rounded-full'>
          New Game
        </button>
      </div>
      <button 
        onClick={setIsModalOpen}
        className='md:hidden text-white bg-memory-orange px-5 py-2 text-lg rounded-full'>
        Menu
      </button>
  </nav>
   );
}

export default Navbar;