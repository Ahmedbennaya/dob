import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPuppies } from '../redux/actions/puppyActions';
import { fetchTestimonials } from '../redux/actions/testimonialActions';

const AdminDashboard = () => {
    const dispatch = useDispatch();
    const puppies = useSelector(state => state.puppy.puppies);
    const testimonials = useSelector(state => state.testimonial.testimonials);
    const loadingPuppies = useSelector(state => state.puppy.loading);
    const loadingTestimonials = useSelector(state => state.testimonial.loading);
    const errorPuppies = useSelector(state => state.puppy.error);
    const errorTestimonials = useSelector(state => state.testimonial.error);

    useEffect(() => {
        dispatch(fetchPuppies());
        dispatch(fetchTestimonials());
    }, [dispatch]);

    const handleDeletePuppy = (puppyId) => {
        // Logic to delete a puppy
    };

    const handleDeleteTestimonial = (testimonialId) => {
        // Logic to delete a testimonial
    };

    if (loadingPuppies || loadingTestimonials) return <div className="text-center py-10">Loading...</div>;
    if (errorPuppies || errorTestimonials) return <div className="text-center py-10 text-red-500">Error loading data</div>;

    return (
        <div className="bg-gray-900 text-white min-h-screen p-6">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Available Puppies</h2>
                <ul>
                    {puppies.map(puppy => (
                        <li key={puppy._id} className="flex justify-between items-center bg-gray-800 p-4 mb-2 rounded">
                            <div>
                                <h3 className="text-xl">{puppy.name}</h3>
                                <p>Age: {puppy.age} | Gender: {puppy.gender}</p>
                                <p>Price: ${puppy.adoptionPrice}</p>
                            </div>
                            <button onClick={() => handleDeletePuppy(puppy._id)} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
                <ul>
                    {testimonials.map(testimonial => (
                        <li key={testimonial._id} className="flex justify-between items-center bg-gray-800 p-4 mb-2 rounded">
                            <div>
                                <h3 className="text-xl">{testimonial.name}</h3>
                                <p>{testimonial.message}</p>
                            </div>
                            <button onClick={() => handleDeleteTestimonial(testimonial._id)} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default AdminDashboard;