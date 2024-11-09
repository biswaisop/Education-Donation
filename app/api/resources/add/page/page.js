'use client';

import { useState } from 'react';

export default function AddResourcePage() {
    const [formData, setFormData] = useState({
        title: '',
        type: 'ebook',
        subject: '',
        grade: '',
        link: '',
        description: ''
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/api/resources/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            alert("Resource added successfully!");
        }
    };

    return (
        <div className="container mx-auto p-8">
            <h2 className="text-3xl font-bold mb-6">Add a New Resource</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input name="title" onChange={handleChange} placeholder="Title" className="w-full p-2 border rounded" />
                <input name="subject" onChange={handleChange} placeholder="Subject" className="w-full p-2 border rounded" />
                <input name="grade" onChange={handleChange} placeholder="Grade" className="w-full p-2 border rounded" />
                <input name="link" onChange={handleChange} placeholder="Resource Link" className="w-full p-2 border rounded" />
                <textarea name="description" onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded" />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Resource</button>
            </form>
        </div>
    );
}
