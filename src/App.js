import { useContext } from "react";
import { DarkModeContext } from "./contexts/DarkModeContext";

import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import './style.scss'
import Home from "./pages/home/Home";
import Gallery from "./pages/gallery/Gallery";
import Navbar from "./components/navbar/Navbar";
import View from "./pages/view/View";

function App() {
  const {darkMode} = useContext(DarkModeContext)

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Outlet />
        </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout />
      ),
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/gallery',
          element: <Gallery />
        },
        {
          path: '/gallery/view/:id',
          element: <View />
        },
        {
          path: '/donation',
          element: <div>Donation</div>
        }
      ]
    },
  ])

  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
