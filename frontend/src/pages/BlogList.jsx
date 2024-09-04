import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import { mainAxiosInstance } from '../utils/api'
import { useNavigate } from 'react-router-dom'
import { getToken } from '../utils/getToken'
import EmptyScreen from '../components/EmptyScreen'

function BlogList() {

    const [blogList,seBlogList] =useState([])
    const navigate= useNavigate()
    const [isCreatingNew, setIsCreatingNew]= useState(false)
    const [inputText,setInputText]= useState("")

    const fetchAllblogs= async()=>{
        try{

            const blogs= await mainAxiosInstance.get("/posts")

            seBlogList(blogs?.data?.data?.blogs)


        }
        catch(err){

              console.log(err)
        }
    }

    const handleClick= (id)=>{
        navigate(`/blogs/${id}`)
    }

    const handleCreatenNew= async ()=>{
    try{
       const res= await mainAxiosInstance.post("/posts",{text:inputText})
       if(res)
       {
        alert("New Blog Created Successfully")
        fetchAllblogs()
        setIsCreatingNew(false)
       }
    }
    catch(err){
      console.log(err)
      isCreatingNew(false)
    }
    }

    useEffect(  ()=>{

        fetchAllblogs()

        

    },[])

      useEffect(()=>{
    const token = getToken();
    if (token) {
      navigate("/blogs")
    } else {
      navigate("/")
    }
  },[])

  return (
    <div className='px-16 py-4 flex flex-col justify-center items-center w-full bg-indigo-50 min-h-screen'>
        <h2 className='text-3xl font-semibold'>Blog List</h2>
        {isCreatingNew ?
        
        <div className="w-full mt-10">
            <div>
      <textarea
        rows={4}
        onChange={(e)=>setInputText(e.target.value)}
        className={`w-full p-3 bg-white border border-gray-300 rounded-md resize-y  focus:outline-none focus:ring-2 focus:ring-indigo-500`}
      ></textarea>
            </div>
      <button
        onClick={handleCreatenNew}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Save
      </button>
      <button
        onClick={()=>setIsCreatingNew(false)}
        className="mt-4 px-4 py-2 mx-2 bg-red-600 text-white rounded-md shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Cancel
      </button>
       </div>:null}
        {blogList.length>0?<div className='w-full '>
            <button onClick={()=>setIsCreatingNew((pre)=>!pre)} className='my-3 mt text-xl font-semibold text-white bg-yellow-500 hover:bg-yellow-600 py-2 px-4 rounded-lg'>
        Create New Blog
        </button>
        <div className='h-[540px] overflow-y-auto'>
        {blogList.map((e)=>{
          return ( <div className='w-full' onClick={()=>handleClick(e?._id)}> <BlogCard  text= {e?.text}/></div>)
        })}
        </div>
        </div>:(blogList.length==0 && !isCreatingNew)?<EmptyScreen hnadleIsCreating={()=>setIsCreatingNew(true)}/>:null}
    </div>
  )
}

export default BlogList