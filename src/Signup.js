import { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
const Signup = () => {
   
    const [newname, setnewname]= useState("");
    const schema =yup.object().shape({
        fullname: yup.string().required("Full Name Required"),
        email: yup.string().email().required('Email Requied'),
        age: yup.number().positive().integer().min(18).required(""),
        password: yup.string().min(4).max(20).required("Password Requied"),
        confirmpassword: yup.string().oneOf([yup.ref("password"), null],"Password Did Not Match").required(),
    })
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) =>{
        console.log(data)
    }

    
       
    return ( 
        <div className="col-span-4 flex items-center justify-center bg-gradient-to-t from-emerald-300 to-emerald-400 h-screen">
        <div className="w-4/5 h-5/6 shadow-lg bg-gray-200 p-8 rounded-lg overflow-hidden">
        <h1 className="mb-3 text-2xl text-center">Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)} className=" flex flex-col items-center" >
        <p className='text-gray-700'>{errors.fullname?.message}</p>
        <input className='block rounded-lg border  p-2 my-2'  type="text" placeholder='Full Name' {...register("fullname")}/>
        <p className='text-gray-700'>{errors.email?.message}</p>
        <input className='block rounded-lg border p-2 my-2' type="text" placeholder='Email' {...register("email")}/>
        <p className='text-gray-700'>{errors.age?.message}</p>
        <input className='block rounded-lg border  p-2 my-2' type="number" placeholder='Age' {...register("age")}/>
        <p className='text-gray-700'>{errors.password?.message}</p>
        <input className='block rounded-lg border  p-2 my-2' type="password" placeholder='Password' {...register("password")}/>
        <p className='text-gray-700'>{errors.confirmpassword?.message}</p>
        <input className='block rounded-lg border  p-2 my-2' type="password" placeholder='Confirm Password' {...register("confirmpassword")}/>
        <button className='block rounded-r-full rounded-l-full border bg-sky-400 px-6 py-2 my-4' type="submit">Sign Up</button>
        {/* <input className='block rounded-lg border  px-2 py-2 my-2' type="submit" /> */}
        </form>                
                            
                            
                            
                            
                                
                
        </div>
</div> 
 );
}
 
export default Signup;