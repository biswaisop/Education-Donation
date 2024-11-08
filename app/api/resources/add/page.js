import { useState, useEffect } from 'react';

export default function ResourcesPage() {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        async function fetchResources() {
            const response = await fetch('/api/resources/list');
            const data = await response.json();
            setResources(data.data);
        }
        fetchResources();
    }, []);

    return (
        <div className="container mx-auto p-8">
            <h2 className="text-3xl font-bold mb-6">Educational Resources</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map(resource => (
                    <li key={resource._id} className="p-4 border rounded-lg shadow bg-white">
                        <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                        <p className="mb-2">{resource.description}</p>
                        <a href={resource.link} target="_blank" className="text-blue-500 hover:underline">
                            Access Resource
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
