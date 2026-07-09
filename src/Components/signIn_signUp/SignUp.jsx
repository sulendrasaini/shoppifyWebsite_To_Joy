import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../Context/auth_context";
// import { authContext } from "../context/auth_context";

const SignUp = () => {
    
    const {users, setUsers} = useContext(authContext);
    const [error, setError] = useState("");

    const navigate = useNavigate()
    

    const [formData, setFormData] = useState({
        name:"joy",
        email:"joysaini@gmail.com",
        password:"123",
        confirm_password:"123"
    })
    
    
    // console.log(users);
    

    const inputHandler = (e) => {
        let nameData = e.target.name;
        let valueData = e.target.value;
        setFormData({...formData, [nameData]:valueData } );
    };
    

    const submitHandler = (e) => {
         e.preventDefault();

         if( !formData.name || !formData.email || !formData.password || !formData.confirm_password){
            setError("please fill all Field!")
            return;
         }

         if(formData.password !== formData.confirm_password){
            setError("Password does not match!");
            return;
        }

        const isUserExists = users.find((item)=>item.email === formData.email);

        if(isUserExists){
            setError("User Already exists!");
            return;
    
        }

        setUsers([...users, formData])
        
        //  console.log({name:formData.name,email:formData.email,password:formData.password})
        // console.log(formData)
        
        setFormData({
            name:"",
            email:"",
            password:"",
            confirm_password:""
        });
        
        setError(" ")
        
        navigate("/signin")
};




    return (
        <section className="flex justify-center items-center min-h-screen fixed top-0 right-0 left-0 bg-black/90">
            <form onSubmit={submitHandler} className={`w-[35vw] bg-white  border-zinc-500 text-center rounded-2xl mt-25`} style={{boxShadow:" rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
                <h2 className="text-[40px] pt-7 pb-5 font-bold text-blue-700">Sign Up</h2>

                <div className="flex flex-col items-center px-4 gap-3">

                    <input onChange={inputHandler} name="name" value={formData.name} type="text" placeholder="Name" className= "text-lg outline-none w-[28vw]  py-3 px-6 rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_22px_40px_rgba(0,0,0,0.30)] hover:-translate-y-[1px] transition-all duration-300 focus:ring-1 focus:ring-blue-400  " />
                    
                    <input onChange={inputHandler}  name="email" value={formData.email}  type="email" placeholder="Email" className="text-lg outline-none w-[28vw]  py-3 px-6 rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_22px_40px_rgba(0,0,0,0.30)] hover:-translate-y-[1px] transition-all duration-300 focus:ring-1 focus:ring-blue-400  "/>
                    <input onChange={inputHandler}  name="password" value={formData.password}  type="password" placeholder="Password" className="text-lg outline-none w-[28vw]  py-3 px-6 rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_22px_40px_rgba(0,0,0,0.30)] hover:-translate-y-[1px] transition-all duration-300 focus:ring-1 focus:ring-blue-400  "/>
                    <input onChange={inputHandler}  name="confirm_password" value={formData.confirm_password}  type="password" placeholder="Confirm Password" className = "text-lg outline-none w-[28vw]  py-3 px-6 rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_22px_40px_rgba(0,0,0,0.30)] hover:-translate-y-[1px] transition-all duration-300 focus:ring-1 focus:ring-blue-400  " />
                    <button type="submit" className="text-lg text-white font-bold bg-blue-600 outline-none w-[28vw]  py-3 px-6 rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.25)] hover:shadow-[0_22px_40px_rgba(0,0,0,0.30)] hover:-translate-y-[1px] transition-all duration-300 focus:ring-1 focus:ring-blue-400 mt-5">Sign Up</button>
                    {error && <span className="text-red-700 text-[16px] ">{error}</span> } 
                    <span className="text-lg pb-10">Already have an account <Link to="/signin" className="text-blue-700">SignIn</Link></span>

                </div>


             


            </form>
        </section>
    )
};

export default SignUp;