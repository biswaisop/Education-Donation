"use client"
import { useEffect, useState } from 'react';

export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-green-400 text-white">
            <h1 className="text-4xl font-bold mb-4">Education Resource Pool</h1>
            <p className="text-xl max-w-2xl text-center">
                Empowering underprivileged students and supporting NGOs by connecting them with essential educational resources and donation opportunities.
            </p>
            <div className="mt-8">
                <a href="/resources" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
                    Explore Resources
                </a>
                <a href="/ngos" className="ml-4 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
                    View NGO Requests
                </a>
            </div>
        </div>
    );
}
