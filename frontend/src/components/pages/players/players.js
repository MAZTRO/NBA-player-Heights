import { useState, useEffect } from 'react'
import LoaderSpinner from "react-loader-spinner";
import Loader from '../../infoLoader/loader'

import './player.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

let Player = (props) => {
  const [data, setData] = useState([])
  const [loading, setLoanding] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [status, setStatus] = useState(false)

  useEffect(() => {
    getInfo()

    return () => {
      //Unmount
    }
  }, [])

  let getInfo = (evt) => {
    if (evt) {
      if (evt.target.className === 'errorBtn') {
        setStatus(false)
      }
    }

    setLoanding(true)
    fetch('https://mach-eight.uc.r.appspot.com/')
      .then(res => res.json())
      .then(res => {
        setLoanding(false)
        if (res.values) {
          setData(res.values)
        } else {
          setData([])
        }
      })
      .catch(err => {
        console.log(err);
        setErrorMsg('Something went wrong, please try again later')
        setLoanding(false)
        setStatus(true)
      })
  }

  return (
    <div className="playersContainer">
      <header>
        <h1>Mach Eight Sample project</h1>
        <a href="https://www.nba.com/" target="_blank" rel="noopener noreferrer">
          <div className="nbaLogo"></div>
        </a>
        <h2>NBA player heights</h2>
      </header>

      <div className="listContainer">
        {
          loading
          ? <LoaderSpinner
              type="BallTriangle"
              color="#C9082A"
              height={100}
              width={100}
              className="spinner"
            />
          : status
            ? <div className="errorMsg">
                <h2>{errorMsg}</h2>
                <button className="errorBtn" onClick={e => {getInfo(e)}}>Try again</button>
              </div>
            : <Loader data={data}/>
        }
      </div>

      <footer>
        <a href="https://jonatam.me/" target="_blank" rel="noopener noreferrer">
          <button>By Jonatan Mazo</button>
        </a>
      </footer>
    </div>
  )
}

export default Player
