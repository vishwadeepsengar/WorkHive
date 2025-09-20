import React from 'react'
import SignIn from './Profile/SignIn'
import SignUp from './Profile/SignUp'
import { useLocation } from 'react-router-dom';

function Routing() {
//     const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
//   useEffect(() => {
//     if (user) {
//       toast.success(`Happy Abhyudaya ${unnn}🎉`);
//     }
//   }, []);
  return (
    <div>
  
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      
      </Routes>




    </div>
  )
}

export default Routing