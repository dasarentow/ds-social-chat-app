import { useEffect, useState } from "react";

import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "app/context/AuthContext";
import LoginD from "components/LoginD";
import RegisterPage from "components/RegisterPage";
import SignUp from "components/Register";
import SignIn from "components/SignIn";
import PersonalLogin from "components/PersonalLogin";
import SignOut from "components/SignOut";
import Home from "pages/Home";
import PageNotFound from "pages/PageNotFound";
import ProfileScreen from "components/ProfileScreen";
import ChatHomeScreen from "features/chatDS/screens/ChatHomeScreen";
import GetTopicFeed from "features/chatDS/screens/GetTopicFeed";


function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  const helmetContext = {};

  const [message, setMessage] = useState("");

  return (
    <div className="">
      <HelmetProvider context={helmetContext}>
        <QueryClientProvider client={client}>
          <ToastContainer />
          <Router>
            <AuthProvider>
              <Routes>
                <Route>
                  <Route path="/login" element={<LoginD />} />
                  <Route path="/" element={<ChatHomeScreen />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/registerme" element={<SignUp />} />
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/psignin/:slug?" element={<PersonalLogin />} />
                  <Route path="/signout" element={<SignOut />} />
                  <Route path="*" element={<PageNotFound />} />

                  <Route path="/profile" element={<ProfileScreen />} />

                  <Route path="/">
                    <Route index element={<ChatHomeScreen />} />
                    <Route path=":slug?" element={<GetTopicFeed />} />
                  </Route>






                </Route>
              </Routes>
              {/* </Layout> */}
            </AuthProvider>
          </Router>
        </QueryClientProvider>
      </HelmetProvider>
    </div>
  );
}

export default App;
