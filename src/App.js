import './App.css';
import AddMobileNumber from './components/AddMobileNumber';
import Otp from './components/Otp';
import AddReward from './components/AddReward';
import Loader from './components/Loader';
import NotLoyaltyPart from './components/NotLoyaltyPart';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AddMobileNumber />,
  },
   {
    path: "/otp",
    element: <Otp />,
  },
  {
    path: "/add-reward",
    element: <AddReward />,
  },
  {
    path: "/loader",
    element: <Loader />,
  },
  {
    path: "/no-loyalty-part",
    element: <NotLoyaltyPart />,
  },
]);

function App() {
  return (
    <div className="main-wrapper">
      <RouterProvider router={router} />
    </div>

  );
}






export default App;
