import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const {user, createUser, profileUpdate, handleGoogleSignIn } = useContext(AuthContext);

    const [error, setError] = useState(" ");
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();
    if(user){
        navigate('/');
    }
    const handleRegister = async event => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        // console.log(name,photo,email,password);

        // validate
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add at least one uppercase');
            return;
        }
        else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please add at least two numbers');
            return
        }
        else if (password.length < 6) {
            setError('Please add at least 6 characters in your password')
            return;
        }

        await createUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const createdUser = userCredential.user;
                event.target.reset();
                // console.log(createdUser);
                setError('');
                event.target.reset();
                setSuccess("Registration done")
                profileUpdate(name, photo, createdUser)
                    .then(() => {
                        // console.log(" Profile updated!");
                    }).catch((error) => {
                        // console.log("An error occurred");
                    });
                    navigate('/');
            })
            .catch((error) => {
                const errorMessage = error.message;
                // console.log(errorMessage);
                setError(errorMessage)
            });
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Please Register!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" required className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" required className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo URL" required className="input input-bordered" />
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div className="form-control mt-2 text-center">
                                <p>Already Have an Account? <Link className='text-warning underline underline-offset-4' to="/login">Login</Link></p>
                            </div>
                            <div className="divider">OR</div>
                            <div className="form-control mt-2">
                                <button onClick={handleGoogleSignIn} className="btn hover:bg-white bg-white text-black">Continue With Google</button>
                            </div>
                        </form>
                    </div>
                    <div className='mt-8'>
                        <p className='text-danger'>{error}</p>
                        <p className='text-success'>{success}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;