import React, { useEffect, useState } from 'react'
import ConApi from '../Api/ConApi'
import { useParams } from 'react-router-dom'

const View = () => {
    const[singleData,sSingleData]=useState([]);
    const id = useParams();
    console.log(id);
 
    useEffect(()=>{
         const single=()=>{
            ConApi.get(`/contacts/${id.ides}`).then((resp)=>{
                sSingleData([resp.data]);
                console.log(singleData)
            })
         }

         single();
    },[])

  return (
    <div>   
         <div className="flex flex-col justify-center   items-center mt-[80px]">
            <div className='flex flex-row justify-evenly w-[950px] mb-6 '>
                <h3 className='shadow-lg  px-6 py-3 font-medium text-white  bg-black shadow-black'>Name</h3>
                <h3 className='shadow-lg  px-6 py-3 font-medium text-white  bg-black shadow-black'>Email</h3>
                <h3 className='shadow-lg  px-6 py-3 font-medium text-white  bg-black shadow-black'>Number</h3>
              
            </div>
            <div className="flex   item-center rounded-lg  shadow-lg   shadow-black">

            {singleData &&  singleData?.map((v)=>{
                return (

                   
                  
                            <div className="p-6 flex justify-evenly w-[800px] ">
                            <h5 className="text-gray-900 text-xl font-medium mb-2   bg-white px-5 py-3  shadow-2xl  border shadow-black ">{v.name}</h5>
                            <h5 className="text-gray-900 text-xl font-medium mb-2    bg-white px-5 py-3  shadow-2xl  border shadow-black">{v.email}</h5>
                            <h5 className="text-gray-900 text-xl font-medium mb-2    bg-white px-5 py-3  shadow-2xl  border shadow-black">{v.number}</h5>
                        
                            </div>


                 

                )
            })}
               </div>
         </div>
    </div>
  )
}

export default View
