import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Auth = () => {
    const { createUser, updateUserProfile, signInUser, singWithGoogle, setLoading } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const fromPath = location.state || "/";
    const axiosSecure = useAxiosSecure();

    // Create new user
    const handleCreateUser = async (e) => {
        e.preventDefault();
        const from = e.target;
        const name = from.name.value;
        const email = from.email.value;
        const photo = from.photo.value;
        const password = from.password.value;
        const confirm = from.confirm.value;
        // Regex for password rule
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        // Check password strength
        if (!passwordRegex.test(password)) {
            toast.error("Password must have uppercase, lowercase, and at least 6 characters.");
            return;
        }
        // Confirm password check
        if (password !== confirm) {
            toast.error("Passwords do not match.");
            return;
        }

        // Create user
        try {
            await createUser(email, password)
                // Update profile with name and photo
                .then(() => {
                    updateUserProfile(name, photo);
                    // jwt token generation
                    axiosSecure.post('/jwt', { email })
                        .then(res => {
                            console.log(res.data);
                        })
                });

            toast.success("User created successfully!");
            from.reset();
            navigate(fromPath, { replace: true });
        } catch (err) {
            if (err.code === "auth/email-already-in-use") {
                toast.error("Email already in use.");
            } else {
                toast.error(err.message);
            }

        } finally {
            setLoading(false);
        }
    };

    // Sign in user
    const handleSingInUser = async (e) => {
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;
        try {
            await signInUser(email, password);
            toast.success("Logged in successfully!");
            from.reset();
            navigate(fromPath, { replace: true });
        } catch (err) {
            //  Firebase error handling
            if (err.code === "auth/invalid-credential") {
                toast.error("Invalid email or password. Try again!");
            } else {
                toast.error(err.message);
            }
        } finally {
            setLoading(false);
        }
    }

    // Google sign in
    const handleGoogleSignIn = async () => {
        await singWithGoogle();
        setLoading(false);
        navigate(fromPath, { replace: true });
    };

    return (
        <div className='bg-custom-red-bg'>
            <div className="container mx-auto px-4 min-h-[calc(100vh-64px)] flex flex-col justify-center items-center">
                <h1 className='text-3xl font-bold text-custom-orange'>Welcome to DelightBites</h1>
                <p className='text-custom-gray mt-2'>Your culinary journey starts here</p>
                <Tabs>
                    <div className="card bg-base-100 w-sm md:w-lg mx-auto shadow-2xl mt-7">
                        <div className='px-6'>
                            <div className='py-6'>
                                <h1 className='text-2xl font-semibold leading-none tracking-tight'>Get Started</h1>
                                <p className='text-custom-gray mt-2 text-sm'>Login or sign up to begin</p>
                            </div>

                            {/* tab list */}
                            <TabList className="grid grid-cols-2 gap-4 mb-4">
                                <Tab className="btn w-full" selectedClassName="bg-gray-200">Login</Tab>
                                <Tab className="btn w-full" selectedClassName="bg-gray-200">Sing Up</Tab>
                            </TabList>
                        </div>

                        {/* Login */}
                        <TabPanel>
                            <form onSubmit={handleSingInUser} className="card-body">
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input name="email" type="email" autoComplete="email" className="input w-full" placeholder="Email" required />
                                    <label className="label">Password</label>
                                    <input name="password" type="password" autoComplete="current-password" className="input w-full" placeholder="Password" required />
                                    <div><Link className="link link-hover">Forgot password?</Link></div>

                                    <button onClick={handleGoogleSignIn}
                                        type="button"
                                        className="btn w-full mt-4 flex items-center justify-center gap-2 py-2 border rounded-md hover:bg-gray-50"
                                        aria-label="Continue with Google">
                                        <FcGoogle className="text-lg" />
                                        Continue with Google
                                    </button>

                                    <button className="btn btn-orange mt-4">Sing In</button>
                                </fieldset>
                            </form>
                        </TabPanel>

                        {/* sing up */}
                        <TabPanel>
                            <form onSubmit={handleCreateUser} className="card-body">
                                <fieldset className="fieldset">
                                    <label className="label">Name</label>
                                    <input name="name" type="text" required autoComplete="name" className="input w-full" placeholder="Your Name" />
                                    <label className="label">Email</label>
                                    <input name="email" type="email" required autoComplete="email" className="input w-full" placeholder="Email" />
                                    <label className="label">Photo</label>
                                    <input name="photo" type="url" required autoComplete="name" className="input w-full" placeholder="Photo url" />
                                    <label className="label">Password</label>
                                    <input name="password" type="password" required autoComplete="new-password" className="input w-full" placeholder="Password" />
                                    <label className="label">Confirm Password</label>
                                    <input name="confirm" type="password" required autoComplete="new-password" className="input w-full" placeholder="password" />

                                    <button onClick={handleGoogleSignIn}
                                        type="button"
                                        className="btn w-full mt-4 flex items-center justify-center gap-2 py-2 border rounded-md hover:bg-gray-50"
                                        aria-label="Continue with Google">
                                        <FcGoogle className="text-lg" />
                                        Continue with Google
                                    </button>

                                    <button className="btn btn-orange mt-4">Create Account</button>
                                </fieldset>
                            </form>
                        </TabPanel>

                    </div>
                </Tabs>
            </div>
        </div>
    );
};

export default Auth;