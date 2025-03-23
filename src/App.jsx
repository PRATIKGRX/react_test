import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [value, abc] = useState(20);
  const [task, setTask] = useState(['abc', 'def']);
  const [text,setText]=useState("");
  const [selectedIndex,setSelectedIndex]=useState(null);
  console.log(task);

  const addTask = (e) => {

    if(text.trim()=="")
    {
      alert("input first");
      return;
    }

    setTask(prevState=>{
      return [
        ...prevState,
        text
      ]
    }
  )
  
  setText("");
  }


  const editTask=()=>{
    console.log(selectedIndex)
    if(text.trim()=="")
      {
        alert("input first");
        return;
      }
     setTask(prevState=>{
      return prevState.map((value,index)=>{
        return index===selectedIndex?text:value
      })
     })
     setText("");
  }


  const deleteTask=(idx)=>{

    setTask(prevState=>{
      return prevState.filter((_, index) => index!==idx);
    })

  }

  return (
    <>
      <div className='p-20'>

        <div className=' flex gap-5'>
          <input type="text" className='border-1 border-black' value={text} onChange={(e)=>{setText(e.target.value)}}  />
          {selectedIndex !=null ?<>
          <button className='border-1 border-black px-5 py-2' onClick={editTask} >Edit</button>
          </>:<>
          <button className='border-1 border-black px-5 py-2' onClick={addTask} >Add</button>
          </>}
        </div>
        <table>
          <thead>
            <tr className='flex gap-5'>
              <th>SN</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* {task.map((element, index) => {
              <tr className='flex gap-5'>
                <td>{index+1}</td>
                <td>{element}</td>
                <td className='flex gap-5'>
                  <button>edit</button>
                  <button>delete</button>
                </td>
              </tr>
            })} */}

            {task.map((value, index) => (
              <tr className='flex gap-5'>
                <td>{index + 1}</td>
                <td>{value}</td>
                <td className='flex gap-5'>
                  <button onClick={()=>{setSelectedIndex(index);setText(value)}} >edit</button>
                  <button onClick={()=>{deleteTask(index)}}>delete</button>
                </td>
              </tr>
            ))}


          </tbody>
        </table>
      </div>
    </>
  )
}

export default App