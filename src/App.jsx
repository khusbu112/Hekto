import Home from "./Pages/Home"
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"
import RootLayout from "./components/Layout/Rootlayout"
import { Page } from "./Pages/Page"

function App() {
  let router = createBrowserRouter(createRoutesFromElements(

  < Route  element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
   <Route path="/Page" element={<Page/>}></Route>
 
  
   
    </Route>
 ))
 return (
   <>
   <RouterProvider router={router}></RouterProvider>
   
   </>
 )
}

export default App