import React from 'react';
import Hero from '@/components/Hero';
import Grid from '@/components/Grid';
import RecentProjects from '@/components/RecentProjects';
import Clients from '@/components/Clients';
import { FaHome } from "react-icons/fa";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from '@/data/index';
import Experience from '@/components/Experience';
import Approach from '@/components/Approach';
import Footer from '@/components/Footer';
import TechStack from '@/components/TechStack';
import {Games} from '@/components/Games'

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <img
        src="/bluepurple_gradient.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-[-2]"
      />
      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-5 backdrop-filter backdrop-blur-lg z-[-1]" />
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <TechStack />
        <Approach />
        <RecentProjects />
        {/* <Games /> */}
        <Experience />
        {/* <Clients /> */}
        <Footer />
      </div>
    </main>
  );
}
