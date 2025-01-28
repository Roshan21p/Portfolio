import AboutImage from '../assets/profileImage.jpg'

function About() {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt=""
            className="sm:w-72 sm:h-80 w-64 h-64 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="lg:text-lg tetx-sm mb-8">
              I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences. <br /> I’ve worked on
              projects like LearnHub, a Learning Management System (LMS) and
              Pizzify, a dynamic e-commerce platform. <br />I am always excited
              to learn new technologies and improve my skills to keep up with
              the latest trends in the tech world.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
