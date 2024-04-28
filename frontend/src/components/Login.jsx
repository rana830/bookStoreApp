import React from 'react'
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form"
function Login() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <div><dialog id="my_modal_3" className="modal">
    <div className="modal-box">
      <form onSubmit={handleSubmit(onSubmit)} method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 className="font-bold text-lg">Login!</h3>
     <div><span>Email</span>
     <br/>
     <input type="email" placeholder="Enter your Email" className="w-80 px-3 border rounded-md outline-none" {...register("email")}/>
     </div>
     {/* passwored */}
     <div><span>Password</span>
     <br/>
     <input type="text" placeholder="Enter your Password" className="w-80 px-3 border rounded-md outline-none" {...register("password")}/>
     </div>
     {/* button */}
     <div className='flex justify-around mt-4'>
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
        <p>Not registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
     </div>
    </div>
  </dialog></div>
  )
}

export default Login