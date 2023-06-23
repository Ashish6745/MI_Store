import React, { useState } from 'react'

function Crud() {
    const[name,setName] = useState('');
    const[items,setItems] = useState([]);
    const[editIndex, setEditIndex] = useState('')
    function add(){
        setItems([...items,name]);
        setName('');
        console.log(name)
    }
    function handleDelete(index){
        // Using the splice we are deleting single element at a time by taking index of that element
        items.splice(index,1);
        // updating the state
        setItems([...items])
    }
    function handleEdit(index){
        // setting that value to input field again
       setName(items[index])
       // it will store the index
       setEditIndex(index)
    }
    function handleUpdate(idx){
      items.splice(editIndex,1,name);
      setItems([...items])
      setName('')
    }
  return (
    <div>
        <label className='mr-4 font-bold text-xl'>Name:-</label>
       <input  className='border-2 border-red-500 mt-9 w-[200px] rounded'
       placeholder='enter your name'
       onChange={(e)=>setName(e.target.value.toUpperCase())}
       value={name}
       />
       <button className='w-[120px] px-4 bg-red-500 rounded text-white ml-4' onClick={add}>Add value</button>
           {
            items.map((data,i) => (
              <div  className='bg-green-500 flex items-center justify-center mt-4 w-[40%] mx-auto py-12 rounded-lg'>
                <div class="relative">
    <img className="w-16 h-16 rounded-full" src="https://picsum.photos/id/35/200/300" alt=""/>
    <span className="top-0 left-12 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
</div>
                <p className='ml-4 text-xl font-bold'>{data}</p>
                <button onClick={()=>handleDelete(i)} type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-8 py-2 mr-2 mb-2 ml-4 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Delete</button>
                 
                <button onClick={()=>handleEdit(i)} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Edit</button>
                <button onClick={()=>handleUpdate(i)} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Update</button>
              </div>  
            ))
           }
    </div>
  )
}

export default Crud