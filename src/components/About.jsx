import React from 'react'
import banner3 from '../assets/banner3.svg'
const About = () => {
  return (
    <div>
      {/* About text */}
      <div className='bg-neutralSilver'>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
                <div className='w-full mx-auto'>
                    <div className="my-28 md:my-8 py-20 flex flex-col md:flex-row-reverse items-center justify-center">
                        <div>
                            <img src={banner3} alt="" />
                        </div>
                        <div className='md:w-3/5 mx-auto'>
                            <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>About GemPermit</h2>
                             <p>- GemPermit is an online platform that simplifies the process of obtaining licenses and permits for businesses. With GemPermit, businesses can obtain licenses and permits in just a few clicks.</p>
                             <br /><p>- The platform allows for easy application tracking, simplifying the process of obtaining licenses and permits.</p>
                             <br /><p>- The platform also provides 24/7 support, making it easier for businesses to obtain licenses and permits.</p>
                             <br /><p>- The platform also offers a variety of templates and guides to help businesses comply with all regulations and requirements.</p>
                             <br /><p>- The platform provides a clean and intuitive user interface, making it easy for businesses to navigate and complete the registration process.</p>
                             <br /><p>- The platform ensures that all necessary information is collected and submitted in the correct format, reducing the chances of errors and delays.</p>
                            <button className='btn-primary'>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default About
