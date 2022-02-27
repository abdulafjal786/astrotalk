import React from 'react'
import "./style.css"

export const Footer = () => {

// ask = ()=>{
//   let path = './footer'
//   let navigate = Footer
//   navigate.push(Footer)
// }

  return (
    <div className='footer'>
    <div className=''><img src={require('./assets/home.png')} width={20} height={20} margin={5} padding={5} alt=""/></div>
    <div className=''><img src={require('./assets/talk.png')} width={20} height={20} alt=""/></div>
    <div className=''><img  src={require('./assets/ask.png')} width={20} height={20} alt=""/></div>
    <div className=''><img src={require('./assets/reports.png')} width={20} height={20} alt=""/></div>
    <div className=''><img src={require('./assets/chat.png')} width={20} height={20} margin-left={10} padding={5} alt=""/></div>
    </div>
  )
}
