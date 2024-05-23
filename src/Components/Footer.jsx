

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Flex</h3>
            <p className="mt-2 text-gray-500">Launch your own Software As A Service Application with Flex Solutions.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-900">Product</h4>
            <ul className="mt-2 space-y-2 text-gray-500">
              <li><a href="#">Features</a></li>
              <li><a href="#">Solutions</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Updates</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-900">Remaining</h4>
            <ul className="mt-2 space-y-2 text-gray-500">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Help Centre</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-900">Newsletter</h4>
            <form className="mt-2 flex space-x-2">
              <input type="email" placeholder="pat@shuffle.dev" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500">
          &copy; 2024 Flex. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
