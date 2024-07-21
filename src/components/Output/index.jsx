import React from 'react'
import Heading from '../Heading'

export default function Output() {
  return (
    <div  className='mt-5' >

    <Heading text={"Todos List"}/>
    <div className='card m-5 text-center '>
        <ul>
          <li>Task 1</li>
          <li>Task 2</li>
          <li>Task 3</li>
        </ul>
    </div>
    </div>
  )
}
