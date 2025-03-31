import { useState,useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { parse } from 'postcss';
import { useTestContext } from './components/TestContext';
function Home() {
   const {name,setName}=useTestContext();
 
  const [task, setTask] = useState(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    return savedTasks.length>0?savedTasks:['abc', 'def'];
  });
  const [text,setText]=useState("");
  const testtext=useRef()

    const [selectedIndex,setSelectedIndex]=useState(null);
  
    // Save tasks to localStorage
    useEffect(() => {
          localStorage.setItem('tasks', JSON.stringify(task));
    }, [task]);

  const addTask = (e) => {

    // console.log(testtext.current.value);
    // return;

    if(testtext.current.value.trim()=="")
    {
      alert("input first");
      return;
    }

    setTask(prevState=>{
      return [
        ...prevState,
        testtext.current.value
      ]
    }
  )
  
  testtext.current.value="";
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
          {/* <input ref={testtext} type="text" className='border-1 border-black' value={text} onChange={(e)=>{setText(e.target.value)}}  /> */}
          <input ref={testtext} type="text" className='border-1 border-black'  />
          {selectedIndex !=null ?<>
          <button className='border-1 border-black px-5 py-2' onClick={editTask} >Edit</button>
          </>:<>
          <button className='border-1 border-black px-5 py-2' onClick={addTask} >Add</button>
          </>}
        </div>
        <table>
          <thead>
            <tr className='flex gap-5' >
              <th>SN</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {task.map((value, index) => (
              <tr className='flex gap-5' key={index}>
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

      <div>
        <h2>{name}</h2>
        <button onClick={()=>{setName("changed from home")}}>change</button>
      </div>
    </>
  )
}

export default Home