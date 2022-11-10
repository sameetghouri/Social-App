import { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import {  login,  } from "./redux/counter";
const Signin = () => {
    const pname = useSelector((state)=>state?.counter?.value?.usernam)
    
    const [newname, setnewname]= useState("");
    const [pass, setpass] = useState("");
    const dispatch = useDispatch();

    const handlesubmit = (e) => {
        e.preventDefault();
        dispatch(login({usernam:newname}));
        setnewname('');
        setpass('');
        }
    return ( 
        <div className="col-span-4 flex items-center justify-center bg-gradient-to-t from-emerald-300 to-emerald-400 h-screen">
            
        
                        
                        <div className="w-4/5 h-2/3 shadow-lg bg-gray-200 p-10 m-4 rounded-lg flex flex-col items-center ">
                            <h1 className="m-3 text-2xl">Login As: {pname}</h1>
                            
                            <form onSubmit={handlesubmit} className="flex flex-col">

                            {!pname && <>
                                
                            <label className=" mt-4 mb-1 text-lg text-center">User Name</label>
                            <input className="p-2 rounded-lg shadow-lg" type="text" value={newname} required onChange = {(e) => setnewname(e.target.value)}/>
                            
                            <label className="mt-3 mb-1 text-lg text-center">Password</label>
                            <input className="p-2 rounded-lg shadow-lg" type="password" value={pass} required onChange = {(e) => setpass(e.target.value)}/>
                            
                            <button onClick={handlesubmit} className="bg-zinc-400 mt-10 mx-4  px-4 py-2 rounded-r-full rounded-l-full">Login</button>
                            </> }

                            
                            </form>
                            
                            
                                
                
        </div>
</div> 
     );
}
 
export default Signin;