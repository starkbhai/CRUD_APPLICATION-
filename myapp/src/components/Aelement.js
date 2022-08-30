import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ConApi from '../Api/ConApi';

const Aelement = () => {

    const [onData,sOnData]=useState("");
    const [onDataBtn,sOnDataBtn]=useState("");
    const [addShow,sAddShow]=useState(false);


 const onChangeFun=(e)=>{
    const name  = e.target.id;
    const value = e.target.value;
    
    const collection ={
      ...onData,
        [name]:value
    };
    // console.log(collection)
    sOnData(collection);
    sOnDataBtn()

 }


     
         const submitBtn= (e)=>{
                e.preventDefault();
                // console.log("work")
            //    sOnDataBtn(onData);
                
                // console.log(onData);
              
              sAddShow(true);
               funDelete();
               sOnDataBtn( " ")
               
             }
    


            const funDelete=async()=>{
                await ConApi.post("/contacts",onData)
            
                 setTimeout(() => {
                    sAddShow(false)
                 }, 2000);
               };


            useEffect(()=>{
               
              },[])
       


  return (
    <>

     {addShow && 
 <div class="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800" role="alert">
  <span class="font-medium">Hurray !</span> Successfully ! Add a Element .
</div>
   
     }
    <div className='flex justify-center items-center w-full'>
         {/* {console.log(onDataBtn)} */}
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm border border-black w-[1200px] mt-10">
  <form  >
                    <div className="form-group mb-6">
                    <label htmlFor="exampleInputEmail1" className="form-label inline-block mb-2 text-gray-700">Name</label>
                    <input type="text" onChange={onChangeFun} value={onDataBtn} className="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name"
                        aria-describedby="emailHelp" placeholder="Enter Name"/>
                   
                    </div>
                    <div className="form-group mb-6">
                    <label htmlFor="exampleInputEmail1" className="form-label inline-block mb-2 text-gray-700">Email address</label>
                    <input type="email" onChange={onChangeFun}  value={onDataBtn}  className="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email"
                        aria-describedby="emailHelp" placeholder="Enter Email"/>
                    <small id="emailHelp" className="block mt-1 text-xs text-gray-600">We'll never share your email with anyone
                        else.</small>
                    </div>
                    <div className="form-group mb-6">
                    <label htmlFor="exampleInputPassword1" className="form-label inline-block mb-2 text-gray-700">Password</label>
                    <input type="text" onChange={onChangeFun}  value={onDataBtn}  placeholder="Type Your Number"  className="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="number"
                       />
                    </div>
                   
                    <button onClick={submitBtn}  className=" 
                    px-6
                    py-2.5
                    bg-blue-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out">Submit</button>
                    
                </form>
                
                </div>
    </div>
    </>
  )
}

export default Aelement
