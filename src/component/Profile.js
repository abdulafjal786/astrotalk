import React from 'react'
import { Header } from './Header'
// import {useEffect } from 'react';
// import {HiChevronLeft} from "react-icons/hi";
function Profile(props) {
  // const[FirstName,setFirstName] = useEffect("") 
  // const playsound = (event) => {
  //  let data = FirstName
  //   console.log("mydata",data);

  //   fetch("https://staging-api.astrotak.com/api/relative", {
  //     method: 'POST',
  //     headers: {
  //       'Ocp-Apim-Subscription-Key': '3751687d3f494502a2b7af3f62f675dc',
  //       'X-Microsoft-OutputFormat': 'audio-24khz-96kbitrate-mono-mp3',
  //       'Content-Type': 'application/ssml+xml',
  //     },// body: date
  //   })
  // }
  return (
    <>
    <Header/>
    <div className='profil'>
    <div className='myprofile'>My Profile</div>
    <div className='orderhistory'>Order-History</div>
    </div>
    <div className='bsp'>
        <div className='bp'><button className='btn1'>Basic Profile</button></div>
        <div className='ffp'><button className='btn2'>Friends and Family Profile</button></div>
    </div>
    {/* <HiChevronLeft/> */}
    <h3 className='add'><i class="fa-solid fa-angle-left"></i>Add New Profile</h3>
    <form>
  <label>
    Name:<br/>
    <input className='name' type="text" name="name" 
    // value={FirstName} nChange={e => setFirstName(e.target.value)}

    />
  </label>
  <label>
    Date of Birth:<br/>
   <div className='dob'> 
   <input id='dd' type="number" value="DD" required />
   <input id='mm' type="number" value="MM" required/>
   <input id='yyyy' type="number" value="YYYY" required/>
    </div>
  </label><br/>
  <label>
    Time of Birth:<br/>
    <div className='tob'>
    <input type="number" id="quantity" value="HH" />
    <input type="number" id="quantity" value="MM" />
    <input type="number" id="quantity" value="" />
    </div>
    
  </label><br/>
  <label>
    Place of Birth:<br/>
    <input type="text" id='pob' name="name" />
  </label><br/>
  <div className='option'>
  <label className='label1'>
    Gender:<br/>
    <select className='select1'>
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="other">Other</option>
</select>
  </label><br/>
  <label className='label2'>
    Relation:<br/>
    <select className='select2'>
  <option value="father">Father</option>
  <option value="mother">Mother</option>
  <option value="brother">Brother</option>
  <option value="sister">Sister</option>
  <option value="other">Other</option>
</select>
  </label>
  </div>
</form>
<div className='save'><button className='btn3'>Save Changes</button>
</div>
    </>
  );
}
export default Profile;
