import React from 'react'
import { Footer } from './Footer'
import { Header } from './Header'
import "./style.css"

export default function() {
//  let navigate = ask()
//   const route = ()=>{
//     let path = './footer'
//     route(path)
//   }
  return (
      <>
      <Header/>
    <div className='navbar'>
   <div className='wallet'><h4>Wallet Balance: 0</h4></div> 
   <div><button>Add Money</button></div> 
    </div>
    <div>
    <h4><b margin={5} padding={5}>Ask a Question</b></h4>
    <p className='ask'>Seek accurate answers to your life problems and get.
     guidance towards the right path.Wether the problem is related to love,self,life,business,money,education or work,our astrologers will do an in depth study of your birth chart to provide personalized responses along with remedies</p>
    <h4>Choose Category</h4>
    <select id="problem" name="problemlist" form="problemform">
  <option value="love">Love</option>
  <option value="self">Self</option>
  <option value="life">Life</option>
  <option value="business">Business</option>
  <option value="money">Money</option>
  <option value="education">Education</option>
  <option value="work">Work</option>
</select>
    </div>
    <div>
    <textarea className='textarea' maxLength={150}>Type a Question here</textarea>
        <h5>Ideas what to Ask (Select Any)</h5>
        <p><i class="fa-solid fa-seal-question"></i>When is the right for me to introduce my boyfriend/girlfriend?</p><hr/>
        <p><i className="fa-solid fa-messages-question"></i>Doubtful about talking my relationship to next level?</p><hr/>
        <p><i className="fa-solid fa-messages-question"></i>how will Imeet my potential life partener?</p><hr/>
        <p><i className="fa-solid fa-messages-question"></i>Will I ever meet my true love?</p><hr/>
        <p><i className="fa-solid fa-messages-question"></i>When will I get in relationship?</p><hr/>
        <p>Seeking accurate answers to difficult questions troubling your mind? Ask credible astrologers to know what future has in store for you</p>
    </div>
    <div className='list'>
        <ul>
            <li>Personalized responses provided by our team of Vedic astrologers within 24 hours.</li>
            <li>Qualified and experienced astrologers will look into your birth chart provide the right guidance.</li>
            <li>You can seek answers to any part of your life and for most pressing issues.</li>
            <li>Our team of Vedic astrologers will not just answers but also suggest a remedial solutions.</li>
        </ul>
    </div>
    <Footer/>
    </>
  )
}
