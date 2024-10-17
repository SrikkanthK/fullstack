import React from 'react'
import { useState } from 'react'

export default function FunctionC(edison) {
 const [name,setName]=useState('kanagavel')
 const [education,setEducation]=useState('engineering')
 const [address,setAdress]=useState('chennai')
  console.log(edison,'edisonval is recieving')
  return (
    <div>
        <header className='head'>
            <h2>HI THERE! {name}</h2>
            <h3>I AM {edison.dennis.name}</h3>
        </header>
        <section className='sect1'>
          <p>{edison.dennis.education}</p>
          <p>{edison.dennis.address}</p>
        </section>
    </div>
  )
}
