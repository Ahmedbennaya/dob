import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPuppies } from '../redux/actions/puppyActions';

const AvailablePuppies = () => {
    const dispatch = useDispatch();
    const { puppies, loading, error } = useSelector(state => state.puppy);

    useEffect(() => {
        dispatch(fetchPuppies());
    }, [dispatch]);

    const renderPuppies = () => {
        if (loading) {
            return <p>Loading...</p>;
        }

        if (error) {
            return <p>{error}</p>;
        }

        return puppies.map(puppy => (
            <div key={puppy._id} className="border rounded-lg p-4 m-2 bg-gray-800 text-white">
                <img src={puppy.image} alt={puppy.name} className="w-full h-48 object-cover rounded" />
                <h2 className="text-xl font-bold">{puppy.name}</h2>
                <p>Age: {puppy.age} months</p>
                <p>Gender: {puppy.gender}</p>
                <p>Health Details: {puppy.healthDetails}</p>
                <p>Adoption Price: ${puppy.adoptionPrice}</p>
                <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Adopt Me
                </button>
            </div>
        ));
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold text-center text-white mb-4">Available Puppies</h1>
            <div className="flex flex-wrap justify-center">
                {renderPuppies()}
            </div>
        </div>
    );
};

export default AvailablePuppies;