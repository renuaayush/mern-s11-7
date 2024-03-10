// import { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import Loader from "../../components/Loader";
// import { useLoginMutation } from "../../redux/api/usersApiSlice";
// import { setCredentials } from "../../redux/features/auth/authSlice";
// import { toast } from "react-toastify";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [login, { isLoading }] = useLoginMutation();

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
//     try {
//       const res = await login({ email, password }).unwrap();
//       console.log(res);
//       dispatch(setCredentials({ ...res }));
//       navigate(redirect);
//     } catch (err) {
//       toast.error(err?.data?.message || err.error);
//     }
//   };

//   return (
//     <div>
//       <section className="pl-[10rem] flex flex-wrap">
//         <div className="mr-[4rem] mt-[5rem]">
//           <h1 className="text-2xl font-semibold mb-4">Sign In</h1>

//           <form onSubmit={submitHandler} className="container w-[40rem]">
//             <div className="my-[2rem]">
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-white"
//               >
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="mt-1 p-2 border rounded w-full"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-white"
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 className="mt-1 p-2 border rounded w-full"
//                 placeholder="Enter password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>

//             <button
//               disabled={isLoading}
//               type="submit"
//               className="bg-pink-500 text-white px-4 py-2 rounded cursor-pointer my-[1rem]"
//             >
//               {isLoading ? "Signing In..." : "Sign In"}
//             </button>

//             {isLoading && <Loader />}
//           </form>

//           <div className="mt-4">
//             <p className="text-white">
//               New Customer?{" "}
//               <Link
//                 to={redirect ? `/register?redirect=${redirect}` : "/register"}
//                 className="text-pink-500 hover:underline"
//               >
//                 Register
//               </Link>
//             </p>
//           </div>
//         </div>
//         {/* <img
//           src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
//           alt=""
//           className="h-[65rem] w-[59%] xl:block md:hidden sm:hidden rounded-lg"
//         /> */}
//       </section>
//     </div>
//   );
// };

// export default Login;




// halfcode

// import { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import Loader from "../../components/Loader";
// import { useLoginMutation } from "../../redux/api/usersApiSlice";
// import { setCredentials } from "../../redux/features/auth/authSlice";
// import { toast } from "react-toastify";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [login, { isLoading }] = useLoginMutation();

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
//     try {
//       const res = await login({ email, password }).unwrap();
//       console.log(res);
//       dispatch(setCredentials({ ...res }));
//       navigate(redirect);
//     } catch (err) {
//       toast.error(err?.data?.message || err.error);
//     }
//   };

//   return (
//     <div>
//       <section className="pl-[10rem] flex flex-wrap relative">
//         <div className="mr-[4rem] mt-[5rem] z-10 relative">
//           <h1 className="text-2xl font-semibold mb-4">Sign In</h1>

//           <form onSubmit={submitHandler} className="container w-[40rem]">
//             <div className="my-[2rem]">
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-white"
//               >
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="mt-1 p-2 border rounded w-full"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-white"
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 className="mt-1 p-2 border rounded w-full"
//                 placeholder="Enter password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>

//             <button
//               disabled={isLoading}
//               type="submit"
//               className="bg-pink-500 text-white px-4 py-2 rounded cursor-pointer my-[1rem]"
//             >
//               {isLoading ? "Signing In..." : "Sign In"}
//             </button>

//             {isLoading && <Loader />}
//           </form>

//           <div className="mt-4">
//             <p className="text-white">
//               New Customer?{" "}
//               <Link
//                 to={redirect ? `/register?redirect=${redirect}` : "/register"}
//                 className="text-pink-500 hover:underline"
//               >
//                 Register
//               </Link>
//             </p>
//           </div>
//         </div>
//         {/* Image with Transparency */}
//         <img
//           src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
//           alt=""
//           className="h-[65rem] w-[59%] xl:block md:hidden sm:hidden rounded-lg absolute top-0 left-0 opacity-30"
//         />
//       </section>
//     </div>
//   );
// };

// export default Login;

// center right half

// import { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import Loader from "../../components/Loader";
// import { useLoginMutation } from "../../redux/api/usersApiSlice";
// import { setCredentials } from "../../redux/features/auth/authSlice";
// import { toast } from "react-toastify";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [login, { isLoading }] = useLoginMutation();

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
//     try {
//       const res = await login({ email, password }).unwrap();
//       console.log(res);
//       dispatch(setCredentials({ ...res }));
//       navigate(redirect);
//     } catch (err) {
//       toast.error(err?.data?.message || err.error);
//     }
//   };

//   return (
//     <div>
//       <section className="pl-[10rem] flex flex-wrap justify-center items-center relative h-screen">
//         <div className="mr-[4rem] mt-[5rem] z-10 relative">
//           <h1 className="text-2xl font-semibold mb-4">Sign In</h1>

//           <form onSubmit={submitHandler} className="container w-[40rem]">
//             <div className="my-[2rem]">
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-white"
//               >
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="mt-1 p-2 border rounded w-full"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <div className="mb-4">
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-white"
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 className="mt-1 p-2 border rounded w-full"
//                 placeholder="Enter password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>

//             <button
//               disabled={isLoading}
//               type="submit"
//               className="bg-pink-500 text-white px-4 py-2 rounded cursor-pointer my-[1rem]"
//             >
//               {isLoading ? "Signing In..." : "Sign In"}
//             </button>

//             {isLoading && <Loader />}
//           </form>

//           <div className="mt-4">
//             <p className="text-white">
//               New Customer?{" "}
//               <Link
//                 to={redirect ? `/register?redirect=${redirect}` : "/register"}
//                 className="text-pink-500 hover:underline"
//               >
//                 Register
//               </Link>
//             </p>
//           </div>
//         </div>
//         {/* Image with Transparency */}
//         <img
//           src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
//           alt=""
//           className="h-screen w-[50%] xl:block md:hidden sm:hidden rounded-lg absolute top-0 right-0 opacity-30"
//         />
//       </section>
//     </div>
//   );
// };

// export default Login;




// import { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import Loader from "../../components/Loader";
// import { useLoginMutation } from "../../redux/api/usersApiSlice";
// import { setCredentials } from "../../redux/features/auth/authSlice";
// import { toast } from "react-toastify";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [login, { isLoading }] = useLoginMutation();

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
//     try {
//       const res = await login({ email, password }).unwrap();
//       console.log(res);
//       dispatch(setCredentials({ ...res }));
//       navigate(redirect);
//     } catch (err) {
//       toast.error(err?.data?.message || err.error);
//     }
//   };

//   return (
//     <div className="h-screen flex items-center justify-center">
//       <div className="relative flex w-full">
//         <div className="w-1/2 flex justify-center">
//           <div>
//             <h1 className="text-2xl font-semibold mb-4">Sign In</h1>

//             <form onSubmit={submitHandler} className="w-80">
//               <div className="my-2">
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-white"
//                 >
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="mt-1 p-2 border rounded w-full"
//                   placeholder="Enter email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>

//               <div className="mb-4">
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium text-white"
//                 >
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   className="mt-1 p-2 border rounded w-full"
//                   placeholder="Enter password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>

//               <button
//                 disabled={isLoading}
//                 type="submit"
//                 className="bg-pink-500 text-white px-4 py-2 rounded cursor-pointer my-2"
//               >
//                 {isLoading ? "Signing In..." : "Sign In"}
//               </button>

//               {isLoading && <Loader />}

//               <div className="mt-4">
//                 <p className="text-white">
//                   New Customer?{" "}
//                   <Link
//                     to={redirect ? `/register?redirect=${redirect}` : "/register"}
//                     className="text-pink-500 hover:underline"
//                   >
//                     Register
//                   </Link>
//                 </p>
//               </div>
//             </form>
//           </div>
//         </div>

//         <div className="w-1/2">
//           <img
//             src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
//             alt=""
//             className="h-full w-full object-cover opacity-30"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



// import React, { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { motion } from "framer-motion"; // Import motion from framer-motion for animations
// import Loader from "../../components/Loader";
// import { useLoginMutation } from "../../redux/api/usersApiSlice";
// import { setCredentials } from "../../redux/features/auth/authSlice";
// import { toast } from "react-toastify";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null); // State to handle error messages

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [login, { isLoading }] = useLoginMutation();

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
//     try {
//       const res = await login({ email, password }).unwrap();
//       dispatch(setCredentials({ ...res }));
//       navigate(redirect);
//     } catch (err) {
//       setError(err?.data?.message || err.error);
//     }
//   };

//   return (
//     <div className="h-screen flex items-center justify-center">
//       <div className="relative flex w-full">
//         <div className="w-1/2 flex justify-center">
//           <div className="bg-white rounded-lg p-8 shadow-md">
//             <h1 className="text-2xl font-semibold mb-4 text-gray-800">Sign In</h1>

//             <form onSubmit={submitHandler} className="w-80">
//               <div className="my-2">
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-800"
//                 >
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="mt-1 p-2 border rounded w-full"
//                   placeholder="Enter email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>

//               <div className="mb-4">
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium text-gray-800"
//                 >
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   className="mt-1 p-2 border rounded w-full"
//                   placeholder="Enter password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>

//               {error && <p className="text-red-500 mb-4">{error}</p>}

//               <motion.button
//                 whileHover={{ scale: 1.05 }} // Scale up on hover animation
//                 whileTap={{ scale: 0.95 }} // Scale down on tap animation
//                 disabled={isLoading}
//                 type="submit"
//                 className="bg-pink-500 text-white px-4 py-2 rounded cursor-pointer my-2"
//               >
//                 {isLoading ? "Signing In..." : "Sign In"}
//               </motion.button>

//               {isLoading && <Loader />}

//               <div className="mt-4">
//                 <p className="text-gray-800">
//                   New Customer?{" "}
//                   <Link
//                     to={redirect ? `/register?redirect=${redirect}` : "/register"}
//                     className="text-pink-500 hover:underline"
//                   >
//                     Register
//                   </Link>
//                 </p>
//               </div>
//             </form>
//           </div>
//         </div>

//         <div className="w-1/2">
//           <motion.img
//             whileHover={{ scale: 1.1 }} // Scale up on hover animation
//             whileTap={{ scale: 0.9 }} // Scale down on tap animation
//             src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
//             alt=""
//             className="h-full w-full object-cover rounded-lg shadow-md"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;






// import React, { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { motion } from "framer-motion"; // Import motion from framer-motion for animations
// import Loader from "../../components/Loader";
// import { useLoginMutation } from "../../redux/api/usersApiSlice";
// import { setCredentials } from "../../redux/features/auth/authSlice";
// import { toast } from "react-toastify";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null); // State to handle error messages

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [login, { isLoading }] = useLoginMutation();

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
//     try {
//       const res = await login({ email, password }).unwrap();
//       dispatch(setCredentials({ ...res }));
//       navigate(redirect);
//     } catch (err) {
//       setError(err?.data?.message || err.error);
//     }
//   };

//   return (
//     <div className="h-screen flex items-center justify-center">
//       <div className="bg-white rounded-lg p-8 shadow-md">
//         <h1 className="text-2xl font-semibold mb-4 text-gray-800">Sign In</h1>

//         <form onSubmit={submitHandler} className="w-80">
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

//           <div className="mb-4">
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

//           {error && <p className="text-red-500 mb-4">{error}</p>}

//           <motion.button
//             whileHover={{ scale: 1.05 }} // Scale up on hover animation
//             whileTap={{ scale: 0.95 }} // Scale down on tap animation
//             disabled={isLoading}
//             type="submit"
//             className="bg-pink-500 text-white px-4 py-2 rounded cursor-pointer my-2"
//           >
//             {isLoading ? "Signing In..." : "Sign In"}
//           </motion.button>

//           {isLoading && <Loader />}

//           <div className="mt-4">
//             <p className="text-gray-800">
//               New Customer?{" "}
//               <Link
//                 to={redirect ? `/register?redirect=${redirect}` : "/register"}
//                 className="text-pink-500 hover:underline"
//               >
//                 Register
//               </Link>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;



// import React, { useState, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { motion } from "framer-motion";
// import Loader from "../../components/Loader";
// import { useLoginMutation } from "../../redux/api/usersApiSlice";
// import { setCredentials } from "../../redux/features/auth/authSlice";
// import { toast } from "react-toastify";
// import ReCAPTCHA from "react-google-recaptcha";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [login, { isLoading }] = useLoginMutation();

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
//     try {
//       const res = await login({ email, password }).unwrap();
//       dispatch(setCredentials({ ...res }));
//       navigate(redirect);
//     } catch (err) {
//       setError(err?.data?.message || err.error);
//     }
//   };

//   const backgroundImageUrl =
//     "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fDE2MzI1MzU3MTk&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

//   return (
//     <div
//       className="h-screen flex items-center justify-center"
//       style={{
//         backgroundImage: `url(${backgroundImageUrl})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="bg-white rounded-lg p-8 shadow-md">
//         <h1 className="text-2xl font-semibold mb-4 text-gray-800">Sign In</h1>

//         <form onSubmit={submitHandler} className="w-80">
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

//           <div className="mb-4">
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

//           {error && <p className="text-red-500 mb-4">{error}</p>}

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             disabled={isLoading}
//             type="submit"
//             className="bg-pink-500 text-white px-4 py-2 rounded cursor-pointer my-2"
//           >
//             {isLoading ? "Signing In..." : "Sign In"}
//           </motion.button>

//           {isLoading && <Loader />}

//           <div className="mt-4">
//             <p className="text-gray-800">
//               New Customer?{" "}
//               <Link
//                 to={redirect ? `/register?redirect=${redirect}` : "/register"}
//                 className="text-pink-500 hover:underline"
//               >
//                 Register
//               </Link>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;




import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import Loader from "../../components/Loader";
import { useLoginMutation } from "../../redux/api/usersApiSlice";
import { setCredentials } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const onChange = (value) => {
    // This function will be called when the user successfully verifies the captcha
    setIsCaptchaVerified(true);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!isCaptchaVerified) {
      setError("Please verify the captcha.");
      return;
    }
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (err) {
      setError(err?.data?.message || err.error);
    }
  };

    // Load Tawk.to script when component mounts
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

  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fDE2MzI1MzU3MTk&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

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
        <h1 className="text-2xl font-semibold mb-4 text-gray-800">Sign In</h1>

        <form onSubmit={submitHandler} className="w-80">
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

          <div className="mb-4">
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

          {error && <p className="text-red-500 mb-4">{error}</p>}

          
          <ReCAPTCHA
            sitekey="6LfDtWUpAAAAABOkwj2Sf6IUe4Md-1KDh9J-Br_T"
            onChange={onChange}
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isLoading}
            type="submit"
            className="bg-pink-500 text-white px-4 py-2 rounded cursor-pointer my-2"
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </motion.button>

          {isLoading && <Loader />}

          <div className="mt-4">
            <p className="text-gray-800">
              New Customer?{" "}
              <Link
                to={redirect ? `/register?redirect=${redirect}` : "/register"}
                className="text-pink-500 hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </form>

        
       
      </div>
    </div>
  );
};

export default Login;
