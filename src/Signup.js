import { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import {  login, logout } from "./redux/counter";
const Signup = () => {
    const pname = useSelector((state)=>state?.counter?.value?.usernam)
    
    const [newname, setnewname]= useState();
    const dispatch = useDispatch();
    const handlesubmit = (e) => {
        e.preventDefault();}
    return ( 
        <div className="col-span-4  bg-blue-400 h-screen">
            
        <div className="flex items-center justify-center">
                        
                        <div class="w-full  shadow-lg bg-gray-200 p-10 mx-5 mt-3 rounded-lg flex flex-col items-center ">
                            <h1 className="m-3 text-2xl">Login As: {pname}</h1>
                            
                            <form onSubmit={handlesubmit} className="flex flex-col space-y-3" >
                            <div className="my-4">
                            <label className="mr-2">Full Name</label>
                            <input className="p-1 border-2 rounded-lg" type="text" required onChange = {(e) => setnewname(e.target.value)}/>
                            </div>

                            <button onClick={()=>dispatch(login({usernam:newname})) } className="bg-zinc-400 m-2 px-5 py-2 rounded">Login</button>
                            <button onClick={()=>dispatch(logout())} className="bg-zinc-400 m-2 px-5 py-2 rounded">Logout</button>
                            </form>
                            
                            
                        </div>           
                
        </div>
</div> 
 );
}
 
export default Signup;