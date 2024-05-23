

const Pricing = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-base font-semibold tracking-wide text-green-600 uppercase mb-2">Pricing</h2>
        <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">Flexible pricing plan for your startup</p>
        <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">Pricing that scales with your business immediately.</p>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h3 className="text-green-600 text-sm font-semibold uppercase">Pricing</h3>
            <h4 className="mt-2 text-2xl font-extrabold text-green-600">Basic Plan</h4>
            <p className="mt-2 text-gray-600">
              <span className="text-4xl font-extrabold">$10</span>/mth
            </p>
            <p className="mt-2 text-gray-500">Billed annually</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L9 14.414 4.293 9.707a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="ml-2">Complete documentation</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L9 14.414 4.293 9.707a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="ml-2">Working materials in Figma</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L9 14.414 4.293 9.707a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="ml-2">100GB cloud storage</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L9 14.414 4.293 9.707a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="ml-2">500 team members</span>
              </li>
            </ul>
            <button className="mt-6 w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600">Request a Demo</button>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h3 className="text-green-600 text-sm font-semibold uppercase">Pricing</h3>
            <h4 className="mt-2 text-2xl font-extrabold text-green-600">Freelancer Plan</h4>
            <p className="mt-2 text-gray-600">
              <span className="text-4xl font-extrabold">$99</span>/mth
            </p>
            <p className="mt-2 text-gray-500">Billed annually</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L9 14.414 4.293 9.707a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="ml-2">Complete documentation</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L9 14.414 4.293 9.707a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="ml-2">Working materials in Figma</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L9 14.414 4.293 9.707a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="ml-2">100GB cloud storage</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L9 14.414 4.293 9.707a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="ml-2">500 team members</span>
              </li>
            </ul>
            <button className="mt-6 w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600">Request a Demo</button>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h3 className="text-green-600 text-sm font-semibold uppercase">Pricing</h3>
            <h4 className="mt-2 text-2xl font-extrabold text-green-600">Enterprise Plan</h4>
            <p className="mt-2 text-gray-600">
              <span className="text-4xl font-extrabold">$199</span>/mth
            </p>
            <p className="mt-2 text-gray-500">Billed annually</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L9 14.414 4.293 9.707a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="ml-2">Complete documentation</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L9 14.414 4.293 9.707a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="ml-2">Working materials in Figma</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L9 14.414 4.293 9.707a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="ml-2">100GB cloud storage</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414L9 14.414 4.293 9.707a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="ml-2">500 team members</span>
              </li>
            </ul>
            <button className="mt-6 w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600">Request a Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
