import React from 'react'

const AsideChips = ({icon, txt,messageStyle, message, logoutStyle}) => {
  return (
    <div className='aside-chips' id={logoutStyle}>
      <a>{icon}</a>
      <h3>{txt}</h3>
      <p style={messageStyle}>{message}</p>
    </div>
  )
}

export default AsideChips
