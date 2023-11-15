import React,{useState} from 'react';
import ApplyNowDetails from './ApplyNowDetails';
import Success from './Success';
import "./Main.css"

export default function MainApplyNow({OffFire }) {
    const [changeEvent , setChangeEVent ] = useState('ApplyNow')
  return (
    <main className='Main'  id="yourModalId" >
      {changeEvent ?
      (
      <ApplyNowDetails setChangeEVent={setChangeEVent} OffFire={OffFire}/>
      )
       :(
        <Success OffFire={OffFire}/>
       ) }
    </main>
  )
}
