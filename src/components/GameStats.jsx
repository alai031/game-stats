import React, { useState, useEffect } from 'react'
import {db} from '../firebase'
import { doc, updateDoc, onSnapshot} from "firebase/firestore";
import {UserAuth} from '../context/AuthContext';
import {AiOutlineClose} from 'react-icons/ai'
import unrankedIcon from '../images/unranked.webp'
import ironIcon from '../images/iron.webp'
import bronzeIcon from '../images/bronze.webp'
import silverIcon from '../images/silver.webp'
import goldIcon from '../images/gold.webp'
import platinumIcon from '../images/platinum.webp'
import emeraldIcon from '../images/emerald.webp'
import diamondIcon from '../images/diamond.webp'
import masterIcon from '../images/master.webp'
import grandmasterIcon from '../images/grandmaster.webp'
import challengerIcon from '../images/challenger.webp'

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
                    {stat.GameType == "League of Legends" ? <div className='max-h-[200px]'>
                                                                {/* top half */}
                                                                <div className='flex'>
                                                                <img 
                                                                  className='rounded-full w-[100px] h-[100px]'
                                                                  src={stat.GameProfilePic}
                                                                  alt=''
                                                                />
                                                                {stat.GameType} <br/>
                                                                {stat.GameUsername} <br/>
                                                                {stat.GameLevel} <br/>
                                                                {(stat.GameRank).includes("CHALLENGER") ? <div className='flex'>
                                                                                                            challenger icon  <br></br>

                                                                                                            <div className='flex-column text-center'>
                                                                                                              <img 
                                                                                                                className='max-w-[150px] max-h-[150px]'
                                                                                                                src={challengerIcon} 
                                                                                                                alt=''
                                                                                                              />
                                                                                                              <div className='relative bottom-4'>
                                                                                                                <p>{(stat.GameRank).substring(0, (stat.GameRank).indexOf(' ', 11))}</p>
                                                                                                                <p>{(stat.GameRank).substring( ((stat.GameRank).indexOf(' ', 11)) + 1)}</p>
                                                                                                              </div>
                                                                                                            </div>

                                                                                                          </div>
                                                                                                          : <div>Not challenger</div>}
                                                                {/* {stat.GameRank} <br/> */}
                                                                <p onClick={() => deleteStat(stat.GameUsername)} className='hover:cursor-pointer'><AiOutlineClose /></p>
                                                                </div>

                                                                {/* bot half */}
                                                                <div className='flex'>
                                                                </div>
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