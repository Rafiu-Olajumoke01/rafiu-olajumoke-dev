import React from 'react'

function Child({name, course, level}) {
  return (
    <div>
        <h1>{name}</h1>
        <h1>{course}</h1>
        <h1>{level}</h1>
    </div>
  )
}

export default Child