import React from 'react';
import Link from 'next/link'


export default function Home() {
  return  (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
          <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">TaskFlow</h1>
          <p className="text-lg text-center text-gray-700 mb-8">
            Organize. Prioritize. Achieve.
          </p>
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose TaskFlow?</h2>
              <ul className="list-disc list-inside text-left mx-auto max-w-md">
                <li>Effortless Organization</li>
                <li>Prioritize Like a Pro</li>
                <li>Collaborate Seamlessly</li>
                <li>Visualize Your Progress</li>
                <li>Cross-Platform Access</li>
              </ul>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Features You'll Love</h2>
              <ul className="list-disc list-inside text-left mx-auto max-w-md">
                <li>Task Lists & Boards</li>
                <li>Smart Notifications</li>
                <li>Customizable Workflows</li>
                <li>File Attachments</li>
                <li>Tags & Filters</li>
                <li>Integrations</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex justify-center space-x-4">
            <Link
              href="/sign-up"
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
            >
              Sign Up
            </Link>
            <Link
              href="/sign-in"
              className="px-6 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition duration-300"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
  );
}
