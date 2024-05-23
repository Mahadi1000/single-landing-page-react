import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa';
import '../App.css'
const Hero = () => {
  return (
    <>
    <div className=" bg-[#F7F8F9]  w-full p-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 p-8">
          <h2 className='p-1 bg-green-400 text-white w-14 rounded-full text-sm'>Header</h2>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">A small business is only as good as its tools.</h1>
        <p className="text-gray-700 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span>Mauris pellentesque congue libero nec
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span>Suspendisse mollis tincidunt
          </li>
          <li className="flex items-center">
            <span className="text-green-500 mr-2">✔</span>Praesent varius justo vel justo pulvinar
          </li>
        </ul>
      </div>
      <div className="md:w-1/2 bg-white shadow-lg rounded-lg p-8 mt-8 md:mt-0">
        <div className="flex justify-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-green-500 w-10 h-10">
            <path d="M4 4h16v2H4V4zm0 7h16v2H4v-2zm0 7h16v2H4v-2z"/>
          </svg>
        </div>
        <h2 className="text-2xl font-semibold mb-4 text-center">Join our community</h2>
        <form className="space-y-4">    
          <input type="email" placeholder="Enter your email address" className="w-full p-3 border border-gray-300 rounded"/>
          <button type="submit" className="w-full bg-green-500 text-white p-3 rounded">Get Started</button>
          <div className="flex flex-col space-y-2">
            <button className="w-full flex items-center justify-center border border-gray-300 text-gray-800 p-3 rounded">
              <FaGoogle className="mr-2" /> Sign in with Google
            </button>
            <button className="w-full flex items-center justify-center border border-gray-300 text-black p-3 rounded">
              <FaFacebook className="mr-2" /> Sign in with Facebook
            </button>
            <button className="w-full flex items-center justify-center border border-gray-300 text-black p-3 rounded">
              <FaApple className="mr-2" /> Sign in with Apple
            </button>
          </div>
        </form>
        <p className="mt-4 text-gray-600 text-center">Already have an account? <a href="#" className="text-green-500">Sign In</a></p>
      </div >
     
    </div>
    <div className="absolute -bottom-16 left-0 w-full overflow-hidden invisible lg:visible leading-none">
        <svg className="relative block w-full h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.38,22.82,103.77,20.26,152,5.07,48.64-15.36,95.91-40.77,143-57.3,87.94-30.75,180.37-45.84,275.1-36.75C635.29,14.35,723.21,35.41,811,57.35c87.19,21.77,174.85,45.93,261,35.2,37.36-4.89,73.24-15.4,109-24.89,54.68-14,112.13-29.89,170-29.89,44.11,0,85.67,7.49,127,13.86V0Z" opacity=".25" className="text-[#f7f8f9e1] fill-current"></path>
          <path d="M0,0V15.81C47.59,38,103.68,59,152,73.42c45.72,13.61,88.34,25.69,136,32.07,60.26,8,119.51,6.8,179-3.25,48.82-8.22,97.73-19.65,146-26.72,95.5-14.41,191.41-6.18,286-18.36,69.37-8.84,136.58-25.79,205-36.87,38.87-6.24,76.19-12.31,114-18,24.43-3.73,49.67-7.79,74-11.32V0Z" opacity=".5" className="text-[#F7F8F9] fill-current"></path>
          <path d="M0,0V5.63C47.59,27.27,103.68,48.68,152,63.33c45.72,13.62,88.34,25.69,136,32.07,60.26,8,119.51,6.8,179-3.25,48.82-8.22,97.73-19.65,146-26.72,95.5-14.41,191.41-6.18,286-18.36,69.37-8.84,136.58-25.79,205-36.87,38.87-6.24,76.19-12.31,114-18,24.43-3.73,49.67-7.79,74-11.32V0Z" className="text-[#F7F8F9] fill-current"></path>
        </svg>
      </div>
    </>
  )
}

export default Hero