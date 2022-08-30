import React, { useEffect, useState } from 'react'
import ConApi from '../Api/ConApi';
import {Link, useParams} from 'react-router-dom'

const Main = () => {
// const dId = useParams();
const [data,sData]=useState();
const [deleteshow,sDelete]=useState(false)

// const[value , sValue] =useState(false);


 const deleteBtn= (val)=>{
    // const ide = e.target.val
    ConApi.delete(`/contacts/${val}`)
    sDelete(true);
   
    // getFun();
 }
 


    const getFun=()=>{
        ConApi.get("/contacts").then((response)=>{

            // sValue(false);
            sData(response.data)
            // console.log(data);
            setTimeout(() => {
                sDelete(false)
            }, 1000);
         })
    }
         
    // getFun();
    useEffect(()=>{
        getFun();
    },[deleteshow]);

 

  return (

    <>
<div className='w-[1310px]'>
      {deleteshow &&     <div class=" w-full p-3 mb-0 mt-2 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
            <span class="font-medium">Deletd!</span> Successfully Deletd Element .
            </div>
        }

    <div>
                    <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-4 inline-block min-w-[1300px] sm:px-6 lg:px-8 ml-14 ">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-center">
                        <thead className="border-b bg-gray-800">
                            <tr>
                            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                Index
                            </th>
                            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                Name
                            </th>
                            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                Email
                            </th>
                            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                Number
                            </th>
                            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                                options
                            </th>
                            </tr>
                        </thead >
                        
                          {data && data.map((v,index)=>{
                                            return (
                                                <>
                                                <tbody key={index}>
                                                  <tr  className="bg-white border-b"  key={index}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index+1}</td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {v.name}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {v.email}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        {v.number}
                                                    </td>
                                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap flex justify-evenly items-center ">
                                                    <Link to={`/view/${v.id}`} className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-400 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer ' > View</Link>
                                                    <Link to={`/updated/${v.id}`}   className='inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-400 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer ' > Edit</Link>
                                                    <a onClick={()=>{ deleteBtn(v.id)}}  val={v.id}  className='inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-400 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer ' > Delte</a>
                                                    
                                                    </td>
                                                </tr >  
                                                </tbody>
                                                </>
                                            )
                                        })}

                          
                        {/* </tbody> */}
                        </table>
                    </div>
                    </div>
                </div>
                </div>

              
    </div>
    </div>
    </>
  )
}

export default Main
