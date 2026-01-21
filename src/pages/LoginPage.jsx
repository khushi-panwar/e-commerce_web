import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router';

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const user = useSelector((state)=>state.auth.user);
    const navigate = useNavigate();
    
    const onSubmit =(data) => {
        if(!user){ 
            alert("user not found! Please sign up first");
            return;
        }
        
        const {email} = JSON.parse(localStorage.getItem("user"));
        if(data.email === email && data.password === user.password){
            // console.log("user matched ");
            navigate('/');
        }
        else{
            alert("Credentials didn't match , try again !!!")
        }
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-gray-100"
        >
            <form onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-6 rounded w-80 space-y-4">
                <h2 className="text-xl font-semibold text-center">Login</h2>

                {/* Email Input */}
                <input
                    placeholder='Email'
                    {...register("email", {
                        required: "Email required",
                        minLength: {
                            value: 3,
                            message: "Must be at least 3 characters"
                        }
                    })}
                    className="w-full border px-3 py-2 rounded"
                />
                {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}

                {/* Password Input */}
                <input
                    placeholder='Password'
                    type='password'
                    autoComplete=''
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters"
                        }
                    })}
                    className="w-full border px-3 py-2 rounded"
                />
                <button
                    className="w-full bg-blue-600 text-white py-2 rounded">
                    Login
                </button>

                <p className="text-sm text-center">
                    New user?{" "}
                    <Link to="/signup" className="text-blue-600">
                        Signup
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default LoginPage