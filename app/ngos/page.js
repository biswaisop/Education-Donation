"use client"

import { useState, useEffect } from 'react';

export default function NGOsPage() {
    const [ngoRequests, setNgoRequests] = useState([]);

    useEffect(() => {
        async function fetchNGORequests() {
            const response = await fetch('/api/ngos/list');
            const data = await response.json();
            setNgoRequests(data.data);
        }
        fetchNGORequests();
    }, []);

    return (
        <div className="container mx-auto p-8">
            <h2 className="text-3xl font-bold mb-6">NGO Donation Requests</h2>
            <ul className="space-y-4">
                {ngoRequests.map(request => (
                    <li key={request._id} className="p-4 border rounded-lg shadow bg-white">
                        <h3 className="text-xl font-semibold mb-1">{request.ngoName}</h3>
                        <p className="text-gray-700 mb-2">Needs: {request.itemsNeeded.join(', ')}</p>
                        <p className="mb-2">{request.description}</p>
                        <a href={`mailto:${request.contactEmail}`} className="text-blue-500 hover:underline">
                            Contact
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
