import React from 'react'
import Card from './components/Card'
import { useTestContext } from './components/TestContext';

export const About = () => {

  const {name,setName}=useTestContext();
  const cards = [
    { title: "Card 1", description: "Description for card 1" },
    { title: "Card 2", description: "Description for card 2" },
    { title: "Card 3", description: "Description for card 3" },
    { title: "Card 4", description: "Description for card 4" },
    { title: "Card 5", description: "Description for card 5" },
    { title: "Card 6", description: "Description for card 6" },
    { title: "Card 7", description: "Description for card 7" },
    { title: "Card 8", description: "Description for card 8" },
    { title: "Card 9", description: "Description for card 9" },
    { title: "Card 10", description: "Description for card 10" }
  ];



  const id=5;
  

  const test=()=>{
    document.body.style.backgroundColor = "lightblue";
  };
  const test1=()=>{
    document.body.style.backgroundColor = "black";
  };
  return (
    <>

    {
      !id?<>
      
      
            <div className='grid grid-cols-3 gap-8'>
              {cards.map((element,index)=>(
                <Card key={index} title={element.title} description={element.description}/>
              ))}
            </div>
      
            <div>
              <h2>{name}</h2>
              <button onClick={()=>{setName("changed from about")}}>{id?"Edit":"Add"}</button>
      
            </div>
            
      
      </>:<>
      

      <h2>xaina</h2>
      
      </>
    }

      

    </>
  )
}
