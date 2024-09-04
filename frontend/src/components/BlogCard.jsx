import React from 'react'

function BlogCard({text}) {
  return (
 
         <div className="bg-neutral-50 shadow-lg rounded-lg p-6 w-full mx-auto my-4 border  hover:bg-neutral-100 cursor-pointer">
      <p className="text-gray-600">{text}</p>
    </div>

  )
}

export default BlogCard