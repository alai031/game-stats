import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {UserAuth} from '../context/AuthContext';
import search_summoner from '../context/script';
import {
    CheckIcon,
    ClockIcon,
    CurrencyDollarIcon,
    UserCircleIcon,
  } from '@heroicons/react/24/outline';
import {db} from '../firebase'
import {arrayUnion, doc, updateDoc} from 'firebase/firestore'

const AddGame = () => {
  const { user } = UserAuth();
  const [saved, setSaved] = useState(false)
  const [searchedName, setSearchedName] = useState('')
  const [summonerName, setSummonerName] = useState('')
  const [summonerLvl, setSummonerLvl] = useState('')
  const [searching, setSearching] = useState(false)
  const [summonerProfilePic, setSummonerProfilePic] = useState('')
  const [gameOption, setGameOption] = useState('')
  const [soloRank, setSoloRank] = useState('')
  const [usernameFound, setUsernameFound] = useState(false)
  const navigate = useNavigate()

  const statID = doc(db, 'users', `${user?.email}`)

  const handleSubmit = async (e) => {
    e.preventDefault()
    /* setError('') */
    try{
        var summonerInfo = await search_summoner(searchedName)
        //console.log(summonerInfo)
        setSummonerName(summonerInfo.name)
        setSummonerLvl(summonerInfo.level)
        setSummonerProfilePic(summonerInfo.profilePicUrl)
        setSoloRank(summonerInfo.soloRank)
        setSearching(true)
        setUsernameFound(true)
    } catch (error) {
        //setSearching(false)
        setUsernameFound(false)
    }
  };

  const saveStat = async () => {
    if (user?.email) {
        setSaved(true)
        try{
            await updateDoc(statID, {
                savedGames: arrayUnion({
                    GameType: gameOption,
                    GameUsername: summonerName,
                    GameLevel: summonerLvl,
                    GameRank: soloRank, 
                    GameProfilePic: summonerProfilePic
                })
            })
            navigate('/account')
        } catch (error) {
            alert('Failed to save game stat to db');
        } 
    } else {
        alert('Please log in to save a game stat');
    }
  }

  return (
    <div className='w-full bg-gray-700'>
          <div className='top-0 left-0 w-full'>
            <div className='flex w-full px-y py-24 z-50'>
                <div className='min-w-[450px] min-h-[600px] mx-auto bg-black/75 text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>
                    Add a Game Stat
                    </h1>

                    <form onSubmit={handleSubmit}>
                        <div className="flex-column rounded-md bg-gray-400 mt-4 p-4 md:p-6">
                            {/* Choose Game */}
                            <div className="mb-4">
                                <label htmlFor="customer" className="mb-2 block text-sm font-medium">
                                    Choose game
                                </label>
                                <div className="relative text-black">
                                    <select
                                        onChange={e => setGameOption(e.target.value)}
                                        id="customer"
                                        name="customerID"
                                        className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-black"
                                        defaultValue=""
                                        aria-describedby="customer-error"
                                    >
                                        <option value="" disabled>
                                            Select a game
                                        </option>
                                        <option value="League of Legends" className='text-black'>
                                            League of Legends
                                        </option>
                                        <option value="Teamfight Tactics" className='text-black'>
                                            Teamfight Tactics (TFT)
                                        </option>
                                    </select>
                                    <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                                </div>
                            </div>
                            
                            {gameOption == "" ? <></> 
                                : <div>
                                    {/* Game Name */}
                                    <div className="mb-4">
                                        <label htmlFor="amount" className="mb-2 block text-sm font-medium">
                                            Enter your {gameOption} Username
                                        </label>
                                        <div className="relative mt-2 rounded-md">
                                            <div className="relative text-black">
                                                <input
                                                    onChange={(e) => setSearchedName(e.target.value)} 
                                                    id="gameName"
                                                    name="gameName"
                                                    type="string"
                                                    placeholder="Game Name"
                                                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                                                    aria-describedby="amount-error"
                                                />
                                                <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Player info */}
                                    {searching ? <div className='flex'>
                                                    {usernameFound ? <div className='w-full'>
                                                                        Is this your account? <br/>
                                                                        <img src={summonerProfilePic}
                                                                            alt="summonerProfilePic"
                                                                            className='pt-3 rounded-full'
                                                                            width='100'
                                                                        />
                                                                        Username: {summonerName} <br/>
                                                                        Level: {summonerLvl} <br />
                                                                        Solo Queue  Rank: {soloRank} <br />

                                                                        <div className='flex'>
                                                                            {/* Add stats button */}
                                                                            <button 
                                                                                className='mx-auto shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white px-8 py-2 mt-6'
                                                                                onClick={saveStat}
                                                                            >
                                                                                Add stats
                                                                            </button>
                                                                        </div>
                                                                    </div> 
                                                                    : <div className='text-blue-600 font-medium'>
                                                                        Error: Username not found. Try again.
                                                                    </div>
                                                    }
                                                </div> 
                                                :
                                                <></>
                                    }

                                    {/* Submit button */}
                                    <button className='flex mx-auto shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white px-8 py-2 mt-6'>
                                        Search for player
                                    </button>

                                </div>
                            }
                        </div>
                    </form>

                </div>
                </div>
            </div>
          </div>
      </div>
  )
}

export default AddGame