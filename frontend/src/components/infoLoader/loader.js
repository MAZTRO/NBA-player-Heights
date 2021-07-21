import { useState, useEffect } from 'react'

import './loader.css'

let Loader = (props) => {
  let { data } = props
  const [height, setHeight] = useState('')

  useEffect(() => {

    return () => {
      //Unmount
    }
  }, [])

  const dataFiltered = data.filter(item => {
    if (item["h_in"] === height) {
      return true
    } else {
      return false
    }
  })

  return (
    <div className="loaderContainer">
      <input className="height" type="number" value={height} placeholder="Height" onChange={e => {setHeight(e.target.value)}}/>
      <div className="listCont">
        {
          dataFiltered.length > 0
          ? dataFiltered.map((ele, idx) => {
              return (
                <div className="playerBox" key={idx}>
                  <h2>{`${ele.first_name} ${ele.last_name}`}</h2>
                  <p>Height in inches: <span>{ele.h_in}</span></p>
                  <p>Height in meters: <span>{ele.h_meters}</span></p>
                </div>
              )
            })
          : <div className="playerBox">
              <h2>No matches found</h2>
            </div>
        }
      </div>
    </div>
  )
}

export default Loader
