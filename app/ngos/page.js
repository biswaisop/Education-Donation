"use client"
import { useEffect, useState } from 'react';

export default function NGOs() {
    const [ngoRequests, setNgoRequests] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/ngos/list');
            const data = await response.json();
            setNgoRequests(data.data);
        }
        fetchData();
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold">NGO Donation Requests</h2>
            <ul className="mt-4">
                {ngoRequests.map(request => (
                    <li key={request._id} className="p-2 border-b">
                        <h3 className="font-semibold">{request.ngoName}</h3>
                        <p>Needs: {request.itemsNeeded.join(', ')}</p>
                        <p>{request.description}</p>
                        <a href={`mailto:${request.contactEmail}`} className="text-blue-500">Contact</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
