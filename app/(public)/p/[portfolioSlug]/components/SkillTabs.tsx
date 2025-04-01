"use client";

import { useState } from "react";
import Image from "next/image";

type CustomTextsProps = {
  skills?: string;
};

export default function SkillTabs({ customText }: { customText?: CustomTextsProps }) {
  const [activeTab, setActiveTab] = useState("frontend");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <section id="skills" className="text-center">
      <h2 className="title appear">Skills</h2>
      <p className="description appear">
        {customText?.skills || "A brief overview of my technical skills and expertise in various technologies."}
      </p>

      {/* Tab Navigation */}
      <div className="tabs appear">
        <button 
          className={`tab-button ${activeTab === "frontend" ? "active" : ""}`}
          onClick={() => handleTabClick("frontend")}
        >
          Frontend
        </button>
        <button 
          className={`tab-button ${activeTab === "backend" ? "active" : ""}`}
          onClick={() => handleTabClick("backend")}
        >
          Backend
        </button>
        <button 
          className={`tab-button ${activeTab === "devops" ? "active" : ""}`}
          onClick={() => handleTabClick("devops")}
        >
          DevOps
        </button>
        <button 
          className={`tab-button ${activeTab === "testing" ? "active" : ""}`}
          onClick={() => handleTabClick("testing")}
        >
          Testing
        </button>
        <button 
          className={`tab-button ${activeTab === "mobile" ? "active" : ""}`}
          onClick={() => handleTabClick("mobile")}
        >
          Mobile
        </button>
      </div>

      {/* Tab Content */}
      <div 
        id="frontend" 
        className={`tab-content ${activeTab === "frontend" ? "active" : ""}`}
      >
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-4 my-4">
          {/* React */}
          <div className="flex flex-col items-center justify-center appear">
            <Image
              src="https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
              alt="React Logo"
              width={512}
              height={512}
            />
            <div className="card-body relative">
              <h5 className="card-title text-center">React</h5>
            </div>
          </div>
          {/* Vue.js */}
          <div className="flex flex-col items-center justify-center appear">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
              alt="Vue Logo"
              width={512}
              height={512}
            />
            <div className="card-body relative">
              <h5 className="card-title text-center">Vue</h5>
            </div>
          </div>
          {/* jQuery */}
          <div className="flex flex-col items-center justify-center appear">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg"
              alt="jQuery Logo"
              width={512}
              height={512}
            />
            <div className="card-body relative">
              <h5 className="card-title text-center">jQuery</h5>
            </div>
          </div>
          {/* Electron */}
          <div className="flex flex-col items-center justify-center appear">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg"
              alt="Electron Logo"
              width={512}
              height={512}
            />
            <div className="card-body relative">
              <h5 className="card-title text-center">Electron</h5>
            </div>
          </div>
          {/* Next.js */}
          <div className="flex flex-col items-center justify-center appear">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
              alt="Next.js Logo"
              width={512}
              height={512}
            />
            <div className="card-body relative">
              <h5 className="card-title text-center">Next.js</h5>
            </div>
          </div>
          {/* Vite */}
          <div className="flex flex-col items-center justify-center appear">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
              alt="Vite Logo"
              width={512}
              height={512}
            />
            <div className="card-body relative">
              <h5 className="card-title text-center">Vite</h5>
            </div>
          </div>
          {/* Bootstrap */}
          <div className="flex flex-col items-center justify-center appear">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
              alt="Bootstrap Logo"
              width={512}
              height={512}
            />
            <div className="card-body relative">
              <h5 className="card-title text-center">Bootstrap</h5>
            </div>
          </div>
          {/* Tailwind */}
          <div className="flex flex-col items-center justify-center appear">
            <Image
              src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-1024x615-fdeis5r1.png"
              alt="Tailwind Logo"
              width={512}
              height={512}
            />
            <div className="card-body relative">
              <h5 className="card-title text-center">Tailwind</h5>
            </div>
          </div>
          {/* Nuxt.js */}
          <div className="flex flex-col items-center justify-center appear">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg"
              alt="Nuxt.js Logo"
              width={512}
              height={512}
            />
            <div className="card-body relative">
              <h5 className="card-title text-center">Nuxt.js</h5>
            </div>
          </div>
        </div>
      </div>

      <div 
        id="backend" 
        className={`tab-content ${activeTab === "backend" ? "active" : ""}`}
      >
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-4 my-4">
          {/* Node.js */}
          <div className="flex flex-col items-center justify-center appear">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
              alt="Node.js Logo"
              width={512}
              height={512}
            />
            <div className="card-body relative">
              <h5 className="card-title text-center">Node.js</h5>
            </div>
          </div>
          {/* Nest.js */}
          <div className="flex flex-col items-center justify-center appear">
            <Image
              src="https://static-00.iconduck.com/assets.00/nestjs-icon-2048x2040-3rrvcej8.png"
              alt="Nest.js Logo"
              width={512}
              height={512}
            />
            <div className="card-body relative">
              <h5 className="card-title text-center">Nest.js</h5>
            </div>
          </div>
          {/* Laravel */}
          <div className="flex flex-col items-center justify-center appear">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/985px-Laravel.svg.png"
              alt="Laravel Logo"
              width={512}
              height={512}
            />
            <div className="card-body relative">
              <h5 className="card-title text-center">Laravel</h5>
            </div>
          </div>
          {/* PHP */}
          <div className="flex flex-col items-center justify-center appear">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
              alt="PHP Logo"
              width={512}
              height={512}
            />
            <div className="card-body relative">
              <h5 className="card-title text-center">PHP</h5>
            </div>
          </div>
          {/* Java */}
          <div className="flex flex-col items-center justify-center appear">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
              alt="Java Logo"
              width={512}
              height={512}
            />
            <div className="card-body relative">
              <h5 className="card-title text-center">Java</h5>
            </div>
          </div>
          {/* Spring */}
          <div className="flex flex-col items-center justify-center appear">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
              alt="Spring Logo"
              width={512}
              height={512}
            />
            <div className="card-body relative">
              <h5 className="card-title text-center">Spring</h5>
            </div>
          </div>
        </div>
      </div>

      <div 
        id="devops" 
        className={`tab-content ${activeTab === "devops" ? "active" : ""}`}
      >
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-4 my-4">
          {/* AWS */}
          <div className="flex flex-col items-center justify-center appear">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
              alt="AWS Logo"
              width={512}
              height={512}
            />
            <div className="card-body relative">
              <h5 className="card-title text-center">AWS</h5>
            </div>
          </div>
          {/* DigitalOcean */}
          <div className="flex flex-col items-center justify-center appear">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/digitalocean/digitalocean-original.svg"
              alt="DigitalOcean Logo"
              width={512}
              height={512}
            />
            <div className="card-body relative">
              <h5 className="card-title text-center">DigitalOcean</h5>
            </div>
          </div>
          {/* Docker */}
          <div className="flex flex-col items-center justify-center appear">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg"
              alt="Docker Logo"
              width={512}
              height={512}
            />
            <div className="card-body relative">
              <h5 className="card-title text-center">Docker</h5>
            </div>
          </div>
          {/* GitHub Actions */}
          <div className="flex flex-col items-center justify-center appear">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg"
              alt="GitHub Actions Logo"
              width={512}
              height={512}
            />
            <div className="card-body relative">
              <h5 className="card-title text-center">GitHub Actions</h5>
            </div>
          </div>
          {/* Google Cloud */}
          <div className="flex flex-col items-center justify-center appear">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg"
              alt="Google Cloud Logo"
              width={512}
              height={512}
            />
            <div className="card-body relative">
              <h5 className="card-title text-center">Google Cloud</h5>
            </div>
          </div>
          {/* Nginx */}
          <div className="flex flex-col items-center justify-center appear">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg"
              alt="Nginx Logo"
              width={512}
              height={512}
            />
            <div className="card-body relative">
              <h5 className="card-title text-center">Nginx</h5>
            </div>
          </div>
          {/* Ubuntu */}
          <div className="flex flex-col items-center justify-center appear">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg"
              alt="Ubuntu Logo"
              width={512}
              height={512}
            />
            <div className="card-body relative">
              <h5 className="card-title text-center">Ubuntu</h5>
            </div>
          </div>
        </div>
      </div>

      <div 
        id="testing" 
        className={`tab-content ${activeTab === "testing" ? "active" : ""}`}
      >
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-4 my-4">
          {/* Jest */}
          <div className="flex flex-col items-center justify-center appear">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg"
              alt="Jest Logo"
              width={512}
              height={512}
            />
            <div className="card-body relative">
              <h5 className="card-title text-center">Jest</h5>
            </div>
          </div>
        </div>
      </div>

      <div 
        id="mobile" 
        className={`tab-content ${activeTab === "mobile" ? "active" : ""}`}
      >
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-4 my-4">
          {/* React Native */}
          <div className="flex flex-col items-center justify-center appear">
            <Image
              src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
              alt="React Native Logo"
              width={512}
              height={512}
            />
            <div className="card-body relative">
              <h5 className="card-title text-center">React Native</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 