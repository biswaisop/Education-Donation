"use client"
import { useEffect, useState } from 'react';

export default function Resources() {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/resources/list');
            const data = await response.json();
            setResources(data.data);
        }
        fetchData();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold">Educational Resources</h2>
            <ul className="mt-4">
                {resources.map(resource => (
                    <li key={resource._id} className="p-2 border-b">
                        <h3 className="font-semibold">{resource.title}</h3>
                        <p>{resource.description}</p>
                        <a href={resource.link} target="_blank" className="text-blue-500">View Resource</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
