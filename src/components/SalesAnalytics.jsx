import React from 'react'


const SalesAnalytics = ({colorIcon, icon, txt, time, classNameColor, percent, number}) => {
  return (
    <div className='sales-analytics'>
      <a className={colorIcon}>{icon}</a>
      <h5>
        {txt} <br /> <span className='text-muted'>{time}</span>
      </h5>
      <small className={classNameColor}>{percent}</small>
      <h4>{number}</h4>
    </div>
  )
}

export default SalesAnalytics