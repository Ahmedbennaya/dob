import React from 'react';

const Blog = () => {
    const articles = [
        {
            title: "Caring for Your Doberman",
            excerpt: "Learn the essential tips for taking care of your Doberman, including diet, exercise, and grooming.",
            date: "2023-10-01",
            link: "/blog/caring-for-your-doberman"
        },
        {
            title: "Training Your Doberman",
            excerpt: "Discover effective training techniques to ensure your Doberman is well-behaved and obedient.",
            date: "2023-09-15",
            link: "/blog/training-your-doberman"
        },
        {
            title: "Doberman Health Tips",
            excerpt: "Understand the common health issues in Dobermans and how to prevent them.",
            date: "2023-08-20",
            link: "/blog/doberman-health-tips"
        }
    ];

    return (
        <div className="bg-gray-900 text-white p-6">
            <h1 className="text-3xl font-bold mb-4">Doberman Care Blog</h1>
            <div className="space-y-4">
                {articles.map((article, index) => (
                    <div key={index} className="border-b border-gray-700 pb-4">
                        <h2 className="text-2xl font-semibold">{article.title}</h2>
                        <p className="text-gray-400">{article.excerpt}</p>
                        <p className="text-gray-500 text-sm">{article.date}</p>
                        <a href={article.link} className="text-blue-400 hover:underline">Read more</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;