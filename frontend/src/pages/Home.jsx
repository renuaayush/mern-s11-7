// import { Link, useParams } from "react-router-dom";
// import { useGetProductsQuery } from "../redux/api/productApiSlice";
// import Loader from "../components/Loader";
// import Message from "../components/Message";
// import Header from "../components/Header";
// import Product from "./Products/Product";

// const Home = () => {
//   const { keyword } = useParams();
//   const { data, isLoading, isError } = useGetProductsQuery({ keyword });

  

//   return (
//     <>
//       {!keyword ? <Header /> : null}
//       {isLoading ? (
//         <Loader />
//       ) : isError ? (
//         <Message variant="danger">
//           {isError?.data.message || isError.error}
//         </Message>
//       ) : (
//         <>
//           <div className="flex justify-between items-center">
//             <h1 className="ml-[20rem] mt-[10rem] text-[3rem]">
//               Special Products
//             </h1>

//             <Link
//               to="/shop"
//               className="bg-pink-600 font-bold rounded-full py-2 px-10 mr-[18rem] mt-[10rem]"
//             >
//               Shop
//             </Link>
//           </div>

//           <div>
//             <div className="flex justify-center flex-wrap mt-[2rem]">
//               {data.products.map((product) => (
//                 <div key={product._id}>
//                   <Product product={product} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// };

// export default Home;




import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Header from "../components/Header";
import Product from "./Products/Product";
import { useEffect } from "react";

const Home = () => {
  const { keyword } = useParams();
  const { data, isLoading, isError } = useGetProductsQuery({ keyword });

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

  return (
    <>
      {!keyword ? <Header /> : null}
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {isError?.data.message || isError.error}
        </Message>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <h1 className="ml-[20rem] mt-[10rem] text-[3rem]">
              Special Products
            </h1>

            <Link
              to="/shop"
              className="bg-pink-600 font-bold rounded-full py-2 px-10 mr-[18rem] mt-[10rem]"
            >
              Shop
            </Link>
          </div>

          <div>
            <div className="flex justify-center flex-wrap mt-[2rem]">
              {data.products.map((product) => (
                <div key={product._id}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
