import React, { useState, useEffect } from 'react'
import {db} from '../firebase'
import { doc, updateDoc, onSnapshot} from "firebase/firestore";
import {UserAuth} from '../context/AuthContext';
import {AiOutlineClose} from 'react-icons/ai'

const GameStats = () => {
  const { user } = UserAuth();
  const statRef = doc(db, 'users', `${user?.email}`)
  const [gameStats, setGameStats] = useState([])

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
        setGameStats(doc.data()?.savedGames);
    })
  }, [user?.email]);

  const deleteStat = async (GameUsername) => {
    try {
        const result = gameStats.filter((stat) => stat.GameUsername !== GameUsername);
        await updateDoc(statRef, {
            savedGames: result,
        });
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div className='w-full'>
            {gameStats.map((stat) => (
                <div className='bg-blue-300 min-h-[200px] my-3'>
                    {stat.GameType == "League of Legends" ? <div>
                                                                {stat.GameType} <br/>
                                                                {stat.GameUsername} <br/>
                                                                {stat.GameLevel} <br/>
                                                                {stat.GameRank} <br/>
                                                                <p onClick={() => deleteStat(stat.GameUsername)} className='hover:cursor-pointer'><AiOutlineClose /></p>
                                                            </div> 
                                                        :   <div>
                                                            </div>
                    }
                </div>
            ))}
    </div>
  )
}

export default GameStats