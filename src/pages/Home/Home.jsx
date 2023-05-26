import React, { useContext } from 'react';
import bannerImage from '../../assets/banner.jpg'
import ChefData from '../ChefData/ChefData';
import { AuthContext } from '../../providers/AuthProvider';
import Service from '../Service/Service';
import Contact from '../../Contact/Contact';


const Home = () => {
    const {user}=useContext(AuthContext);
    // console.log(user, 'from home');
    return (
        <div>
            <div className='text-white text-left mb-6 flex items-center' style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", height: "100vh" }}>
                <div className=' text-center md:text-left lg:text-left container mx-auto'>
                    <h2 className='text-5xl font-bold'>Feeling Safe With Food Fair</h2>
                    <p className='text-xl font-medium py-4 leading-8'><i>When food is not safe, children cannot learn, adults cannot work. <br /> Human development cannot take place.Safe food is critical <br />  to promoting health and ending hunger. </i></p>
                    <button className="btn btn-warning text-xl font-medium text-white px-20 rounded-lg">Explore More</button>
                </div>
            </div>
            <ChefData></ChefData>
            <Service></Service>
            <Contact></Contact>
        </div>
    );
};

export default Home;