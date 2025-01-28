import ProfileImage from '../assets/profileImage.jpg'
import '../App.css'

function Hero() {
  return (
    <div className="bg-black text-white text-center py-16">
      <div className="relative flex items-center justify-center">
        {/* Rotating Circle */}
        <div className="rotating-circle"></div>

        {/* Profile Image */}
        <img
          src={ProfileImage}
          alt="Profile"
          className="relative z-10 w-48 h-48  rounded-full object-cover"
        />
      </div>
      <h1 className="text-2xl mt-8 sm:text-4xl font-bold">
        I'm{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Roshan Prajapati
        </span>
        , Full-Stack Developer
      </h1>
      <p className="mt-4 text-xl sm:text-lg text-gray-300">
        I specialize in creating sleek, efficient, and user-friendly web
        applications to turn ideas into reality.
      </p>
      <div className="mt-8 space-x-4">
        <a
          href="https://github.com/Roshan21p"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline 
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Contact With me
        </a>

        <a
          href="https://drive.google.com/file/d/18nKJnlXk3q8llVIOZ-5z2kBqNRFNMIQY/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Resume
        </a>
      </div>
    </div>
  )
}

export default Hero
