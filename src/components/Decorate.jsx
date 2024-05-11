import React from 'react'

const Decorate = ({top,left,width,url,setCircle,rotate}) => {
  return (
    <div style={{ position: "relative" }}>
    <div
      style={{
        zIndex: -1,
        position: "absolute",
        top: top,
        left: left,
        width: width,
        transform: rotate
      }}
    >
      {setCircle && <div className="decorate1">
      
      </div>}
      <div>
      {url && <img src={url} alt="" />}
      </div>
    </div>
  </div>
  )
}

export default Decorate