import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GetStarted from './components/auth/GetStarted.js'
import SignIn from './components/auth/SignIn.js'
import SignUp from './components/auth/SignUp.js'
import VerifyEmail from './components/auth/VerifyEmail.js'
import ForgotPassword from './components/auth/ForgotPassword.js'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />}/>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
