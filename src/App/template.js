import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from '../NavBar/index';
// import Footer from '../Footer/index';
import ContactPage from '../ContactPage/index';
import StartPage from '../StartPage/index';



export default function () {
  return <Router>
    <div className="App page corners padding transp">
      <header>
        <Navbar />
      </header>
      <main className="mt-5">
        <Route exact path="/" component={StartPage} />
        <Route path="/contact-page" component={ContactPage} />

      </main>
      {/* <Footer /> */}
    </div>
  </Router>
}