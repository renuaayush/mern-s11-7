// import { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import Loader from "../../components/Loader";
// import { useRegisterMutation } from "../../redux/api/usersApiSlice";
// import { setCredentials } from "../../redux/features/auth/authSlice";
// import { toast } from "react-toastify";

// const Register = () => {
//   const [username, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [register, { isLoading }] = useRegisterMutation();

//   const { userInfo } = useSelector((state) => state.auth);

//   const { search } = useLocation();
//   const sp = new URLSearchParams(search);
//   const redirect = sp.get("redirect") || "/";

//   useEffect(() => {
//     if (userInfo) {
//       navigate(redirect);
//     }
//   }, [navigate, redirect, userInfo]);

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match");
//     } else {
//       try {
//         const res = await register({ username, email, password }).unwrap();
//         dispatch(setCredentials({ ...res }));
//         navigate(redirect);
//         toast.success("User successfully registered");
//       } catch (err) {
//         console.log(err);
//         toast.error(err.data.message);
//       }
//     }
//   };

//   return (
//     <section className="pl-[10rem] flex flex-wrap">
//       <div className="mr-[4rem] mt-[5rem]">
//         <h1 className="text-2xl font-semibold mb-4">Register</h1>

//         <form onSubmit={submitHandler} className="container w-[40rem]">
//           <div className="my-[2rem]">
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-white"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               className="mt-1 p-2 border rounded w-full"
//               placeholder="Enter name"
//               value={username}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>

//           <div className="my-[2rem]">
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-white"
//             >
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="mt-1 p-2 border rounded w-full"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="my-[2rem]">
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-white"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="mt-1 p-2 border rounded w-full"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <div className="my-[2rem]">
//             <label
//               htmlFor="confirmPassword"
//               className="block text-sm font-medium text-white"
//             >
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="confirmPassword"
//               className="mt-1 p-2 border rounded w-full"
//               placeholder="Confirm password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//           </div>

//           <button
//             disabled={isLoading}
//             type="submit"
//             className="bg-pink-500 text-white px-4 py-2 rounded cursor-pointer my-[1rem]"
//           >
//             {isLoading ? "Registering..." : "Register"}
//           </button>

//           {isLoading && <Loader />}
//         </form>

//         <div className="mt-4">
//           <p className="text-white">
//             Already have an account?{" "}
//             <Link
//               to={redirect ? `/login?redirect=${redirect}` : "/login"}
//               className="text-pink-500 hover:underline"
//             >
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//       <img
//         src="https://images.unsplash.com/photo-1576502200916-3808e07386a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80"
//         alt=""
//         className="h-[65rem] w-[59%] xl:block md:hidden sm:hidden rounded-lg"
//       />
//     </section>
//   );
// };

// export default Register;


// import { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import Loader from "../../components/Loader";
// import { useRegisterMutation } from "../../redux/api/usersApiSlice";
// import { setCredentials } from "../../redux/features/auth/authSlice";
// import { toast } from "react-toastify";

// const Register = () => {
//   const [username, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [register, { isLoading }] = useRegisterMutation();

//   const { userInfo } = useSelector((state) => state.auth);

//   const { search } = useLocation();
//   const sp = new URLSearchParams(search);
//   const redirect = sp.get("redirect") || "/";

//   useEffect(() => {
//     if (userInfo) {
//       navigate(redirect);
//     }
//   }, [navigate, redirect, userInfo]);

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match");
//     } else {
//       try {
//         const res = await register({ username, email, password }).unwrap();
//         dispatch(setCredentials({ ...res }));
//         navigate(redirect);
//         toast.success("User successfully registered");
//       } catch (err) {
//         console.log(err);
//         toast.error(err.data.message);
//       }
//     }
//   };

//   return (
//     <div className="h-screen flex items-center justify-center">
//       <div className="bg-white rounded-lg p-8 shadow-md">
//         <h1 className="text-2xl font-semibold mb-4 text-black">Register</h1> {/* Text color changed to black */}

//         <form onSubmit={submitHandler} className="w-80">
//           <div className="my-2">
//             <label
//               htmlFor="name"
//               className="block text-sm font-medium text-gray-800"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               className="mt-1 p-2 border rounded w-full"
//               placeholder="Enter name"
//               value={username}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>

//           <div className="my-2">
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-800"
//             >
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="mt-1 p-2 border rounded w-full"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="my-2">
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-800"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="mt-1 p-2 border rounded w-full"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <div className="my-2">
//             <label
//               htmlFor="confirmPassword"
//               className="block text-sm font-medium text-gray-800"
//             >
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="confirmPassword"
//               className="mt-1 p-2 border rounded w-full"
//               placeholder="Confirm password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//           </div>

//           <button
//             disabled={isLoading}
//             type="submit"
//             className="bg-pink-500 text-white px-4 py-2 rounded cursor-pointer my-2"
//           >
//             {isLoading ? "Registering..." : "Register"}
//           </button>

//           {isLoading && <Loader />}

//           <div className="mt-4">
//             <p className="text-gray-800">
//               Already have an account?{" "}
//               <Link
//                 to={redirect ? `/login?redirect=${redirect}` : "/login"}
//                 className="text-pink-500 hover:underline"
//               >
//                 Login
//               </Link>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;




//orignal code

import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader";
import { useRegisterMutation } from "../../redux/api/usersApiSlice";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";

const Register = () => {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await register({ username, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate(redirect);
        toast.success("User successfully registered");
      } catch (err) {
        console.log(err);
        toast.error(err.data.message);
      }
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://embed.tawk.to/65ec9ea19131ed19d9775c00/1hoi4nbdl";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Random image URL
  const backgroundImageUrl = "https://source.unsplash.com/featured/?ecommerce";

  return (
    <div
      className="h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white rounded-lg p-8 shadow-md">
        <h1 className="text-2xl font-semibold mb-4 text-black">Register</h1>

        <form onSubmit={submitHandler} className="w-80">
          <div className="my-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-800"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 p-2 border rounded w-full"
              placeholder="Enter name"
              value={username}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="my-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-800"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 border rounded w-full"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="my-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 border rounded w-full"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="my-2">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-800"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="mt-1 p-2 border rounded w-full"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className="bg-pink-500 text-white px-4 py-2 rounded cursor-pointer my-2"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>

          {isLoading && <Loader />}

          <div className="mt-4">
            <p className="text-gray-800">
              Already have an account?{" "}
              <Link
                to={redirect ? `/login?redirect=${redirect}` : "/login"}
                className="text-pink-500 hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;






// import React, { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import Loader from "../../components/Loader";
// import { useRegisterMutation } from "../../redux/api/usersApiSlice";
// import { setCredentials } from "../../redux/features/auth/authSlice";
// import { toast } from "react-toastify";

// const Register = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState(null);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [register, { isLoading }] = useRegisterMutation();

//   const { userInfo } = useSelector((state) => state.auth);

//   const { search } = useLocation();
//   const sp = new URLSearchParams(search);
//   const redirect = sp.get("redirect") || "/";

//   useEffect(() => {
//     if (userInfo) {
//       navigate(redirect);
//     }
//   }, [navigate, redirect, userInfo]);

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       setError("Passwords do not match");
//     } else {
//       try {
//         const res = await register({ username, email, password }).unwrap();
//         dispatch(setCredentials({ ...res }));
//         navigate(redirect);
//         toast.success("User successfully registered");
//       } catch (err) {
//         console.error("Registration error:", err);
//         setError(err?.data?.message || "An error occurred during registration");
//       }
//     }
//   };

//   return (
//     <div className="h-screen flex items-center justify-center">
//       <div className="bg-white rounded-lg p-8 shadow-md">
//         <h1 className="text-2xl font-semibold mb-4 text-black">Register</h1>

//         <form onSubmit={submitHandler} className="w-80">
//           <div className="my-2">
//             <label htmlFor="username" className="block text-sm font-medium text-gray-800">Username</label>
//             <input
//               type="text"
//               id="username"
//               className="mt-1 p-2 border rounded w-full"
//               placeholder="Enter username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>

//           <div className="my-2">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-800">Email Address</label>
//             <input
//               type="email"
//               id="email"
//               className="mt-1 p-2 border rounded w-full"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="my-2">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-800">Password</label>
//             <input
//               type="password"
//               id="password"
//               className="mt-1 p-2 border rounded w-full"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <div className="my-2">
//             <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-800">Confirm Password</label>
//             <input
//               type="password"
//               id="confirmPassword"
//               className="mt-1 p-2 border rounded w-full"
//               placeholder="Confirm password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//           </div>

//           {error && <p className="text-red-500 mb-4">{error}</p>}

//           <button
//             disabled={isLoading}
//             type="submit"
//             className="bg-pink-500 text-white px-4 py-2 rounded cursor-pointer my-2"
//           >
//             {isLoading ? "Registering..." : "Register"}
//           </button>

//           {isLoading && <Loader />}

//           <div className="mt-4">
//             <p className="text-gray-800">
//               Already have an account?{" "}
//               <Link
//                 to={redirect ? `/login?redirect=${redirect}` : "/login"}
//                 className="text-pink-500 hover:underline"
//               >
//                 Login
//               </Link>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;




