import Image from "next/image";
import LogoImage from './logo.jpg'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <>
  <header className="bg-blue-600 text-white py-6">
    <div className="container mx-auto px-6">
      <h1 className="text-3xl font-bold">Abhishek Gupta</h1>
      <p className="mt-2 text-lg">Web &amp; App Developer</p>
      <p>Mobile: 9667758949</p>
      <p>Email: <Link href="mailto:abhi.fullstackdeveloper@gmail.com">abhi.fullstackdeveloper@gmail.com</Link></p>
    </div>
  </header>
  <main className="container mx-auto px-6 py-8">
    {/* Profile Overview */}
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Profile Overview</h2>
      <p className="text-gray-700">
        I’m Abhishek Gupta, a skilled web and app developer with a passion for
        creating dynamic and responsive applications. With 8+ years of experience
        in various technologies, I provide solutions that meet modern standards
        and client needs.
      </p>
    </section>
    {/* Technical Skills */}
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Frontend</h3>
          <ul className="list-disc list-inside">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React, Next.JS</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Backend</h3>
          <ul className="list-disc list-inside">
            <li>Node.js</li>
            <li>Express</li>
            <li>Python</li>
            <li>Django</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">AI</h3>
          <ul className="list-disc list-inside">
            <li>Opne AI</li>
            <li>Langchain</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Databases</h3>
          <ul className="list-disc list-inside">
            <li>MySQL</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>SQLite</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Tools &amp; Platforms</h3>
          <ul className="list-disc list-inside">
            <li>Git</li>
            <li>Docker</li>
            <li>AWS</li>
            <li>Firebase</li>
          </ul>
        </div>
      </div>
    </section>
    {/* Projects */}
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Digital Insurance Portal</h3>
          <p className="text-gray-700">
            Project Description: A portal for providing different types of Insurance
          </p>
          <p className="text-gray-700">
           Technology Used: React, Redux, Redux-saga, Node.js, MongoDB, Apollo GraphQl, Apollo Gatway,  Microservice.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Multivendor B to B, B to C, Multilanguage Ecommerce CRM</h3>
          <div>
            <p className="text-gray-700">
              This CRM contails the following features:
            </p>
            <ul>
              <li>Contains different Modules for like: E Commerce Product, Food Product and Downloadable Products</li>
              <li>Inventory Management</li>
              <li>Vendor Management</li>
              <li>Product Management</li>
              <li>Order Management</li>
              <li>Customer Management</li>
              <li>Payment Management</li>
              <li>We can use different languages like: English, Arabic</li>
            </ul>
          </div>
          <h3>Technology Used: </h3>
          <p className="text-gray-700">React, Redux, Redux-saga, Node.js, MongoDB, Apollo GraphQl, Apollo Gatway,  Microservice.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-2">Digital Food Recommendations Portal</h3>
          <p className="text-gray-700">
            Health Service Provider can directly chat with preuploaded pdf and ask for recommendations.
          </p>
          <p className="text-gray-700">Technology Used: React, Python, Langchain, OpenAI.</p>
        </div>
      </div>
    </section>
    {/* Contact */}
  </main>
</>

    </>
  )
}