import React, { useContext, useState } from "react";
import { Form, Link, useNavigate } from 'react-router-dom'
import { authContext } from "../Context/auth_context";
// import { authContext } from "../context/auth_context";
// import { authContext } from "../context/auth_context";

const SignIn = () => {

const {users, currentUser, setCurrentUser} = useContext(authContext);
const navigate = useNavigate()
const [error, setError] = useState("")
// console.log("All users by context",users);
  
  const [formData, setFormData] = useState({
        email:"joysaini@gmail.com",
        password:"123"
    })

    const inputHandler = (e) => {
        let nameData = e.target.name;
        let valueData = e.target.value;
        setFormData({...formData, [nameData]:valueData } );
    };
    

    const submitHandler = (e) => {
         e.preventDefault();

         if(!formData.email || !formData.password){
            setError("please fill of Field")
            return;
         }

         const isUserExists = users.find((item)=>{ return((item.email === formData.email) )});
        //  console.log(" isUserExists-",isUserExists);
         if(!isUserExists){
            setError("User not found")
            return;
         }
         if(isUserExists.password !== formData.password){
            setError("Incorrect Password")
            return;
         }
           setError("Sign In Successfully")
         
        //  const isUserExists = users.find((item)=>{ return((item.email === formData.email) && (item.password === formData.password))});
        //  if(isUserExists){
        //     alert("Sign In succedully")
        //     return;
        //  }
         
         setCurrentUser({
          email:isUserExists.email
         });
        //  console.log({name:formData.name,email:formData.email,password:formData.password})
        // console.log(formData)
        
    setFormData({
        email:"",
        password:""

    })
    
    navigate("/")
};



    return (
        // <div className="fixed top-0 right-0 left-0 bg-black">
        <section className=" flex justify-center items-center min-h-screen bg-amber-200 fixed top-0 right-0 left-0 bg-black/90">
            <form onSubmit={submitHandler} className={`w-[35vw] bg-white  border-zinc-500 text-center rounded-2xl mt-30`} style={{boxShadow:" rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
                <h2 className="text-5xl py-10 font-bold text-blue-700">Sign In</h2>

                <div className="flex flex-col items-center px-8 gap-3">
                    <input onChange={inputHandler}  name="email" value={formData.email}  type="email" placeholder="Email" className="text-lg outline-none w-[28vw]  py-3 px-6 rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_22px_40px_rgba(0,0,0,0.30)] hover:-translate-y-[1px] transition-all duration-300 focus:ring-1 focus:ring-blue-400  " />
                    <input onChange={inputHandler}  name="password" value={formData.password}  type="password" placeholder="password" className="text-lg outline-none w-[28vw]   py-3 px-6 rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_22px_40px_rgba(0,0,0,0.30)] hover:-translate-y-[1px] transition-all duration-300 focus:ring-1 focus:ring-blue-400 mb-6 " />
                    <button type="submit" className="text-lg text-white font-bold bg-blue-600 outline-none w-[28vw]  py-3 px-6 rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_22px_40px_rgba(0,0,0,0.30)] hover:-translate-y-[1px] transition-all duration-300 focus:ring-1 focus:ring-blue-400 ">Sign In</button>
                    {error && <span className="text-red-700 text-[16px] ">{error}</span> } 
                     <span className="text-lg pb-10">Don't have an account <Link to="/signup" className="text-blue-700">SignUp</Link></span>
                </div>

            </form>
        </section>
        // </div>
    )
};

export default SignIn