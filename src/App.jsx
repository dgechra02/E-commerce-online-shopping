import "./App.css";
import MainContent from "./components/MainContent";
import Products from "./Pages/Products";
import Product from "./Pages/Product";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router";
import PageLayout from "./components/PageLayout";
import Cart from "./Pages/Cart";

const router = createBrowserRouter([
  {
    index: "/",
    element: <PageLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={"home"} />,
      },
      { path: "home", element: <MainContent /> },
      {
        path: "products",
        children: [
          { index: true, element: <Products /> },
          { path: ":productId", element: <Product /> },
          { path: "*", element: <span>product not found</span> },
        ],
      },
      {path: "cart", element: <Cart />},
      {path: "*", element: <div>404 page not found</div>}
    ],
  },
  { path: "*", element: <div>Page Not Found</div> },
]);

// due to <Outlet /> children that are written after <PageLayout /> will save into it, so that we can use them through

export default function App() {
  return <RouterProvider router={router} />;
}

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const dataAPI = "https://mr.eshank.tech/api/amazon?limit=1000";

//   // const router = curebro

//   return (
//     <>
//     const app ={" "}
//       <div className="bg-gray-200 w-full min-h-[450svh] relative">
//         <Header
//           isSidebarOpen={isSidebarOpen}
//           setIsSidebarOpen={setIsSidebarOpen}
//         />
//         {/* <MainContent />
//         {isSidebarOpen && (
//           <Sidebar
//             isSidebarOpen={isSidebarOpen}
//             setIsSidebarOpen={setIsSidebarOpen}
//           />
//         )} */}
//         {/* <Products /> */}
//         <Product />
//       </div>
//     </>
//   );
// }
