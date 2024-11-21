import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const AboutMe = () => {
  return (
    <div>
      <header className="bg-base-200">
        <Header></Header>
      </header>
      <section className='bg-white mx-auto py-12 w-10/12 about-us'>
        <div className='mx-auto px-4 container'>
          <h2 className='mb-8 font-bold text-3xl text-center'>About Us</h2>
          <div className='flex md:flex-row flex-col items-center'>
            <div className='md:w-1/2'>
              <img src='https://i.ibb.co/42gBncJ/SD-29868-1.jpg' alt='' />
            </div>
            <div className='md:pl-8 md:w-1/2'>
              <h3 className='mb-4 font-semibold text-2xl'>About Me</h3>
              <p className='mb-4'>
                Hi, I'm [Your Name], a passionate software developer with a
                strong background in web development and a keen interest in
                creating innovative solutions to everyday problems. With years
                of experience in various programming languages and frameworks, I
                am dedicated to building high-quality, efficient, and
                user-centric applications.
              </p>
              <h3 className='mb-4 font-semibold text-2xl'>Skills</h3>
              <ul className='mb-4 list-disc list-inside'>
                <li>
                  Frontend Development: React, TailwindCSS, HTML, CSS,
                  JavaScript
                </li>
                <li>Backend Development: Node.js, Express.js</li>
                <li>Database Management: MongoDB, Firebase</li>
                <li>Version Control: Git, GitHub</li>
              </ul>
              <h3 className='mb-4 font-semibold text-2xl'>Other Projects</h3>
              <ul className='list-disc list-inside'>
                <li>
                  <strong>Unique Cricketer:</strong> A website dedicated to
                  cricket players, providing detailed statistics and player
                  information.
                </li>
                <li>
                  <strong>Luxury Real Estate:</strong> A platform showcasing
                  luxury real estate including penthouses, beachfront
                  properties, resorts, private islands, villas, and mansions.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-neutral">
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default AboutMe
