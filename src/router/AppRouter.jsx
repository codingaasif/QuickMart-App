import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import PaymentForm from "../components/PaymentForm";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import ShoppingCart from "../components/ShoppingCart.jsx";
import LogoutPage from "../pages/LogoutPage.jsx";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/payment-form" element={<PaymentForm />} />
        <Route path="/sign-in-page" element={<SignInPage />} />
        <Route path="/sign-up-page" element={<SignUpPage />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/log-out-page" element={<LogoutPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
