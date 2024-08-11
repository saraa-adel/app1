import Layout from './Component/Layout/Layout.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Procedures from './Component/Procedures/Procedures.jsx'
import BeforeAfter from './Component/BeforeAfter/BeforeAfter.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export default function App() {

  let routers = createBrowserRouter([
    {path:'' ,element: <Layout/>, children: [
      {index: true ,element: <Procedures/>},
      {path: 'before-after' ,element: <BeforeAfter/>},
    ]}
  ])


  return <>
    <RouterProvider router={routers}></RouterProvider>
  </>
}