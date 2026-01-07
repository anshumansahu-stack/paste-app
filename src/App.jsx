import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Paste from "./components/Paste";
import ViewPaste from "./components/ViewPaste";
import { Toaster } from 'react-hot-toast';
import './App.css';

// --- LAYOUT COMPONENT ---
// This acts as the "Shell" of your application.
// It holds the Background, the Navbar, and the Toaster.
const Layout = () => {
  return (
    <div className="w-full min-h-screen relative flex flex-col">
        
        {/* 1. Global Background Image (Fixed) */}
        <div 
            className="fixed inset-0 w-full h-full bg-cover bg-no-repeat bg-center -z-20"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')" }}
        />
        
        {/* 2. Dark Overlay (Fixed) */}
        <div className="fixed inset-0 w-full h-full bg-black/60 -z-10" />

        {/* 3. The Navigation Bar */}
        <Navbar />

        {/* 4. The Page Content (Home, Paste, or ViewPaste loads here) */}
        <div className="flex-grow w-full">
            <Outlet />
        </div>
        
        {/* 5. Notification Toast */}
        <Toaster position="top-right"/>
    </div>
  );
};

// --- ROUTER CONFIGURATION ---
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Apply Layout to all routes inside
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pastes",
        element: <Paste />,
      },
      {
        path: "/pastes/:id",
        element: <ViewPaste />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;             