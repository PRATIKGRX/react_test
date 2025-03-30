import React from 'react'
import Card from './components/Card'

export const About = () => {

  const test=()=>{
   alert(1+1)
  };
  return (
    <>

      <h1>ABout </h1>

      <div className='grid grid-cols-3 gap-8'>
        <Card  description="test" abc={test} />
        <Card title="abc" description="test" abc={test} />
        <Card title="abc" description="test" abc={test} />
      </div>

    </>
  )
}
