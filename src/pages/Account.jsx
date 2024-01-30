import React from 'react'
import { Link } from 'react-router-dom'
import GameStats from '../components/GameStats'

const Account = () => {
  return (
    <div className='w-full h-[100%] bg-gray-700 flex'>
      <div className='w-full px-y py-24 z-50'>
            <div className='flex-column max-w-[850px] min-h-[600px] mx-auto bg-gray-400 text-white'>
              
              <div className='flex items-center w-full h-[200px] bg-black'>
                <div className='pl-16'>
                  <div className='w-[130px] h-[130px] rounded-full bg-white'>
                    {/* profile pic */}
                  </div>
                </div>
              </div>

              <div className='flex justify-end'>
                <button className='shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white px-8 py-2 mt-6 mr-6'>
                  <Link to='/addGame'>
                    Add a new game stat
                  </Link>
                </button>
              </div>

              {/* Game stats */}
              <div className='flex w-full'>
                <GameStats />
              </div>

            </div>
          </div>
    </div>
  )
}

export default Account