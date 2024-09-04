import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { mainAxiosInstance } from '../utils/api'
import BlogCard from '../components/BlogCard'
import { getToken } from '../utils/getToken'

function Blog() {

    const [blogData,setBlogData]= useState({})
    const {id}= useParams()
    const navigate= useNavigate()
    const [isEditable, setIsEditable] = useState(false);
  const textareaRef = useRef(null);
  const [textInput,setTextInput]= useState(null)

  const handleButtonClick = () => {
    setIsEditable(true);
    // Focus on the textarea after it becomes editable
    setTimeout(() => {
      textareaRef.current.focus();
    }, 0);
  };

    
    const getSingleBlog= async()=>{
        try{
              const res=  await mainAxiosInstance.get(`/posts/${id}`)
              setBlogData(res?.data?.data?.blog)
              setTextInput(res?.data?.data?.blog?.text)
        }
        catch(err){
            console.log(err)
        }
    }

    const handleSaveText= async ()=>{
     
        try{
           const res= await mainAxiosInstance.patch(`/posts/${id}`,{text:textInput})
           if(res)
           {
            getSingleBlog()
            setIsEditable(false)
            alert("Updated successfully")
           }
        }
        catch(err){
             alert("error accured while saving")
        }

    }

    const handleDelete = async()=>{
        try{

            const res= await mainAxiosInstance.delete(`/posts/${id}`)
            if(res)
            {
                navigate("/blogs")
            }

        }
        catch(err){

        }
    }



    useEffect(()=>{
       getSingleBlog()
    },[])

    useEffect(()=>{
        const token = getToken();
        if (!token) {
            navigate("/")
        } 
      },[])

  return (
    <div className='flex flex-col justify-center items-center bg-indigo-50 min-h-screen'>
       <h1 className='text-3xl font-semibold text-center'> 
        Single Blog
       </h1>
        <div className='w-11/12'>

        <div className='px-12 py-4 border border-gray-800 m-2 rounded-md'>
        <div className="w-full ">
            <button onClick={()=>navigate("/blogs")} className='text-lg py-2 px-4 rounded-lg mb-4 text-white font-semibold bg-gray-700'>Back</button>
      <textarea
        rows={4}
        ref={textareaRef}
        onChange={(e)=>setTextInput(e.target.value)}
        className={`w-full p-3 bg-white border border-gray-300 rounded-md ${isEditable ? 'resize-y' : 'resize-none'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        disabled={!isEditable}
        value={textInput}
      ></textarea>
      {isEditable?<button
        onClick={handleSaveText}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Save
      </button>:<button
        onClick={handleButtonClick}
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Edit
      </button>}
      <button
        onClick={handleDelete}
        className="mt-4 px-4 py-2 bg-red-600 text-white mx-2 rounded-md shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Delete
      </button>
    </div>

        {/* < textarea value={blogData?.text}  className="bg-neutral-50 shadow-lg text-gray-600 rounded-lg p-6 w-full mx-auto my-4 border  hover:bg-neutral-100 cursor-pointer">
      
        </textarea>
            <div  className='flex justify-end '>
            <button className='py-2 px-4 font-semibold ml-4 bg-blue-800 text-white rounded-lg' >edit </button>
            <button className='py-2 px-4 font-semibold ml-4 bg-red-700 text-white rounded-lg' >delete </button>    
            </div> */}
            
        </div>

        </div>


    </div>
  )
}

export default Blog