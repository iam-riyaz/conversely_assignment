import React, { useEffect, useState } from "react";
import axios from "axios";


function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  
  const navigate= useNavigate()



   



  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin= async()=>{
       try{

       const res= await axios.post("http://localhost:3000/auth/login",formData)
       const token= res?.data?.token || ""
       if(token.length>2)
       {
           const expiration = new Date().getTime() + (60 * 60 * 1000); // 1 hour from now
           sessionStorage.setItem('token', token);
           sessionStorage.setItem('tokenExpiration', expiration);
           navigate("/blogs")
       }

       }
       catch(err){
          console.log(err)
       }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin()
  };

//   useEffect(()=>{
//     const token = getToken();
//     if (token) {
//       navigate("/blogs")
//     } else {
//       navigate("/")
//     }
//   },[])
  return (
    <div>
      <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
      </div>
    </div>
  );
}
import { useNavigate } from "react-router-dom";

export default LoginPage;
