import { BrowerRouter,Routes,Route} from 'react-router-dom';
import Home from './page/Home';
import Signin from './pages/Signingnin';
import Signup from './pages/Signup';
import About from './pages/ About';
import Profile from './pages/ Profile';

export default function  App()  {
  return <BrowerRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/sign-in" element={<Signin/>}/>
    <Route path="sign-up" element={<Signup/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/profle" element={<Profile/>}/>
    </Routes>
  </BrowerRouter>
  
}