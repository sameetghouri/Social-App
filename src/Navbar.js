import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        
            <div className=" bg-gray-200 h-screen flex flex-col items-center pt-3 fixed w-1/5">
            <div className='w-full text-center mb-2  rounded px-2 py-4 text-4xl text-green-500 '><Link  to='/'>OKPK</Link></div>
            <div className='w-5/6 text-center my-2  hover:bg-gre rounded px-2 py-4 shadow-md  hover:shadow-lg '><Link  to='/'>NewsFeed</Link></div>
            <div className='w-5/6 text-center my-2  hover:bg-gre rounded px-2 py-4 shadow-md  hover:shadow-lg '><Link  to='/profile'>Profile</Link></div>
            <div className='w-5/6 text-center my-2  hover:bg-gre rounded px-2 py-4 shadow-md  hover:shadow-lg '><Link  to='/'>Notifications</Link></div>
            <div className='w-5/6 text-center my-2  hover:bg-gre rounded px-2 py-4 shadow-md  hover:shadow-lg '><Link  to='/'>Messages</Link></div>
            <div className='w-5/6 text-center my-2  hover:bg-gre rounded px-2 py-4 shadow-md  hover:shadow-lg '><Link  to='/signup'>Sign up</Link></div>
            <div className='w-5/6 text-center my-2  hover:bg-gre rounded px-2 py-4 shadow-md  hover:shadow-lg '><Link  to='/'>More</Link></div>
            </div>
            
            
            );
}
 
export default Navbar;