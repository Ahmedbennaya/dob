import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTestimonials } from '../redux/actions/testimonialActions';

const Testimonials = () => {
    const dispatch = useDispatch();
    const testimonials = useSelector(state => state.testimonial.testimonials);
    const loading = useSelector(state => state.testimonial.loading);
    const error = useSelector(state => state.testimonial.error);

    useEffect(() => {
        dispatch(fetchTestimonials());
    }, [dispatch]);

    if (loading) return <div className="text-center py-10">Loading testimonials...</div>;
    if (error) return <div className="text-center py-10 text-red-500">{error}</div>;

    return (
        <section className="py-24 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-5 lg:px-5">
                <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map(testimonial => (
                        <div key={testimonial._id} className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center">
                            <h3 className="text-2xl font-semibold mb-2">{testimonial.name}</h3>
                            <p className="text-gray-400 mb-4 text-center">{testimonial.message}</p>
                            <p className="text-yellow-400 text-lg">Rating: {testimonial.rating} ★</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;