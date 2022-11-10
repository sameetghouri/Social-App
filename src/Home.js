import Footer from "./Footer";
import { useState, useEffect } from "react";
import {FiAperture} from 'react-icons/fi'

const Home = () => {
    const [array, setarray] = useState([])
    const [isloading, setisloading] = useState(true)
    
    console.log(array);
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-10-10&sortBy=publishedAt&apiKey=60ce0ef784a54d7ba7443946d164458f')
        .then(res=>res.json())
        .then(data => {
            setarray(data.articles );
            setisloading(false)})
    }, [])
    
console.log(array)
    return ( 
        <div className="col-span-4">
        <div className="h-screen grid grid-cols-5 md:grid-cols-8">
             
            <main className=" bg-emerald-300 col-span-5 md:col-span-6  ">
            <h1 className="text-4xl text-center pt-4 pb-2 text-gray-800">NewsFeed</h1>
            {isloading && <div className="flex mt-4 justify-center items-center gap-2 text-gray-800 text-3xl">
                            <span className="h-8 w-8 block rounded-full animate-spin text-white "><FiAperture /></span>
                            loading...</div>}
                            
            {array && array.map((item) =>{
               return( 
               <div className="bg-gray-100 m-3 p-4 rounded-lg shadow-md" >
               <h1 className="text-xl font-bold border-b-2 border-gray-300 text-center my-2 pb-2">{item.author}</h1>
               <h1 className="text-lg text-center mb-1 text-gray-800 font-semibold">{item.title}</h1>
               <p>{item.description}</p>
               
               
               
               </div>)
            })}
            </main>
            
            <Footer />
        </div>
        </div>
     );
}
export default Home;
