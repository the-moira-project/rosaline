import * as React from "react";
import { Routes, Route} from "react-router-dom";
// css and theme imports
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./utils/theme";
// component imports
import Navbar from "./components/Navbar/Navbar.js";
// import Home from "./components/Home/Home.js";
import SignIn from "./components/SignIn/SignIn.js";
// import Register from "./components/Register/Register.js";
import Account from "./components/Account/Account.js";
// import Dashboard from "./components/Dashboard/Dashboard.js";
// import Settings from "./components/Settings/Settings.js";
// import SignOut from "./components/SignOut/SignOut.js";

function App() {
  return (
    <>
      <CssBaseline />

      <ThemeProvider theme={theme}>
        <Navbar />

        {/* switch display with available routes */}
       <Routes>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/signin" element={<SignIn />} />
          {/* <Route exact path="/Register" component={Register} /> */}
          <Route exact path="/Account" element={<Account />} />
          {/* <Route exact path="/Dashboard" component={Dashboard} />
          <Route exact path="/Settings" component={Settings} />
          <Route exact path="/SignOut" component={SignOut} /> */}
          </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
