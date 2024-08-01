import '../App.css'
import About from '../components/About';
import Companies from '../components/Companies';
import Home from '../components/Home';
import MyFooter from '../components/MyFooter';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Testimonial from '../components/Testimonial';

function Homepage() {
    return (
        <div>
            <Navbar />
            <Home />
            <Services />
            <About />
            <Testimonial />
            <Companies />
            <MyFooter />
        </div>
    )
}

export default Homepage;