function Navbar() {
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container  py-2 flex items-center sm:justify-between justify-center">
        <div className="text-2xl font-bold hidden md:block">My Portfolio</div>

        <div className="flex space-x-4 sm:space-x-6 items-center ">
          <a href="#home" className="hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400">
            About Me
          </a>
          <a href="#project" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>

        <a
          href="https://www.linkedin.com/in/roshan-prajapati-960100308"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline 
          transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Connect Me
        </a>
      </div>
    </nav>
  )
}

export default Navbar
