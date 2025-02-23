import React from 'react';
import aboutImage1 from '../assets/aboutImage1.jpg'; // Replace with actual image path
import aboutImage2 from '../assets/aboutImage2.jpg'; // Replace with actual image path

const AboutUs = () => {
    return (
        <section className="py-24 relative bg-gray-900 text-white">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                        <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                            <img className="rounded-xl object-cover" src={aboutImage1} alt="About Us" />
                        </div>
                        <img className="sm:ml-0 ml-auto rounded-xl object-cover" src={aboutImage2} alt="About Us" />
                    </div>
                    <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-8 flex">
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                <h2 className="text-white text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                    Empowering Each Other to Succeed
                                </h2>
                                <p className="text-gray-300 text-base font-normal leading-relaxed lg:text-start text-center">
                                    Every project we've undertaken has been a collaborative effort, where every person
                                    involved has left their mark. Together, we've not only constructed buildings but also
                                    built enduring connections that define our success story.
                                </p>
                            </div>
                            <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                                <div className="flex-col justify-start items-start inline-flex">
                                    <h3 className="text-white text-4xl font-bold font-manrope leading-normal">33+</h3>
                                    <h6 className="text-gray-300 text-base font-normal leading-relaxed">Years of Experience</h6>
                                </div>
                                <div className="flex-col justify-start items-start inline-flex">
                                    <h4 className="text-white text-4xl font-bold font-manrope leading-normal">125+</h4>
                                    <h6 className="text-gray-300 text-base font-normal leading-relaxed">Successful Projects</h6>
                                </div>
                                <div className="flex-col justify-start items-start inline-flex">
                                    <h4 className="text-white text-4xl font-bold font-manrope leading-normal">300+</h4>
                                    <h6 className="text-gray-300 text-base font-normal leading-relaxed">Happy Clients</h6>
                                </div>
                            </div>
                        </div>
                        <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                            <span className="px-1.5 text-white text-sm font-medium leading-6">Read More</span>
                        </button>
                    </div>
                </div>
                <div className="mt-16 w-full flex-col justify-center items-center gap-8 flex">
                    <h3 className="text-3xl font-bold">Contact Information</h3>
                    <div className="w-full flex-col justify-center items-center gap-4 flex">
                        <div className="flex items-center gap-4">
                            <span className="text-gray-300 text-lg">Phone:</span>
                            <span className="text-white text-lg">+216 22 220 053</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-gray-300 text-lg">Email:</span>
                            <span className="text-white text-lg">info@dobermanbreeding.com</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-gray-300 text-lg">Address:</span>
                            <span className="text-white text-lg">123 Doberman St, Dogtown, USA</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;