'use client'

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, List, Users, BarChart2, Smartphone, FileText, Bell, Sliders, Paperclip, Tag } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <motion.div
    className="bg-gray-800 rounded-lg p-6 shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Icon className="w-8 h-8 text-blue-400 mb-4" />
    <h3 className="text-xl font-semibold text-blue-300 mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const GlowingButton: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <Link href={href}>
    <motion.button
      className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg"
      whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  </Link>
);

const Home: React.FC = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Effortless Organization",
      description: "Streamline your workflow with intuitive task management tools designed for efficiency."
    },
    {
      icon: List,
      title: "Prioritize Like a Pro",
      description: "Stay focused on what matters most with smart prioritization features."
    },
    {
      icon: Users,
      title: "Collaborate Seamlessly",
      description: "Work together in real-time, assigning tasks and sharing progress with your team."
    },
    {
      icon: BarChart2,
      title: "Visualize Your Progress",
      description: "Track your productivity with beautiful, insightful charts and analytics."
    },
    {
      icon: Smartphone,
      title: "Cross-Platform Access",
      description: "Access your tasks anytime, anywhere, on any device with our responsive design."
    },
    {
      icon: FileText,
      title: "Task Lists & Boards",
      description: "Organize your work your way with flexible task lists and Kanban-style boards."
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Stay on top of deadlines with intelligent, customizable notifications."
    },
    {
      icon: Sliders,
      title: "Customizable Workflows",
      description: "Tailor TaskFlow to fit your unique process with customizable workflows."
    },
    {
      icon: Paperclip,
      title: "File Attachments",
      description: "Keep all your project resources in one place by attaching files directly to tasks."
    },
    {
      icon: Tag,
      title: "Tags & Filters",
      description: "Categorize and find tasks quickly with powerful tagging and filtering options."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div
        className="stars absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)), radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)), radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0))",
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
          animation: "twinkle 5s infinite",
          opacity: 0.3,
        }}
      />
      <div className="relative z-10 container mx-auto px-4 py-16">
        <motion.h1
          className="text-5xl font-bold text-center text-blue-400 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          TaskFlow
        </motion.h1>
        <motion.p
          className="text-xl text-center text-gray-300 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Organize. Prioritize. Achieve.
        </motion.p>
        <motion.div
          className="flex justify-center space-x-6 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <GlowingButton href="/sign-up">Get Started</GlowingButton>
          <GlowingButton href="/sign-in">Sign In</GlowingButton>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes twinkle {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-2px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default Home;