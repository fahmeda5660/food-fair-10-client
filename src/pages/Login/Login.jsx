import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { user, signIn, handleGoogleSignIn, handleGithubSignIn, loading, reload } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);

    const from = location.state?.from?.pathname || '/';

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    // if(user){
    //     navigate(from, {replace: true})
    // }
    const handleLogin = event => {
        event.preventDefault();
        setSuccess('');
        setError('');
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password);
        signIn(email, password)
            .then((userCredential) => {
                // Signed in 
                const loggedUser = userCredential.user;
                setError('');
                event.target.reset();
                setSuccess("logged in successfully")
                // console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
                console.log(errorMessage);
            });
    }

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                navigate(from, { replace: true })
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const githubSignIn = () => {
        handleGithubSignIn()
            .then(result => {
                navigate(from, { replace: true });
                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Please Login First!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
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
                            <div className="form-control mt-2">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="form-control mt-6 text-center">
                                <p>Forgot password? <Link className='text-warning underline underline-offset-4' to="/">Reset passsword.</Link></p>
                            </div>
                            <div className="form-control mt-2 text-center">
                                <p>Don't Have an Account? <Link className='text-warning underline underline-offset-4' to="/register">Register</Link></p>
                            </div>
                            <div className="divider">OR</div>
                            <div className="form-control mt-2">
                                <button onClick={googleSignIn} className="btn hover:bg-white bg-white text-black">Sign In With Google</button>
                            </div>
                            <div className="form-control mt-2">
                                <button onClick={githubSignIn} className="btn hover:bg-white bg-white text-black">Sign In With GitHub</button>
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

export default Login;