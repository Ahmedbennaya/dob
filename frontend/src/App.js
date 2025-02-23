import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import AvailablePuppies from './components/AvailablePuppies';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import AdminDashboard from './components/AdminDashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './input.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={AboutUs} />
              <Route path="/available-puppies" component={AvailablePuppies} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/testimonials" component={Testimonials} />
              <Route path="/blog" component={Blog} />
              <Route path="/contact" component={Contact} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/admin" component={AdminDashboard} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;