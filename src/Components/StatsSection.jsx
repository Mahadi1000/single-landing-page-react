
const StatsSection = () => {
  return (
    <section className="py-36">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-sm p-2  bg-inherit font-semibold tracking-wide text-green-500 uppercase mb-2">Numbers</h2>
      <p className="mt-1 text-4xl font-extrabold text-[#2A3342] sm:text-5xl lg:text-6xl">We believe in the power of data</p>
      <p className="max-w-xl mt-5 mx-auto text-xl text-[#556987]">Flex is the only business platform that lets you run your business on one platform, seamlessly across all digital channels.</p>
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-3xl font-extrabold text-[#2A3342]">235.000</p>
          <p className="mt-1 text-base text-[#556987]">Projects completed</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-3xl font-extrabold text-[#2A3342]">$10m</p>
          <p className="mt-1 text-base text-[#556987]">APR</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-3xl font-extrabold text-[#2A3342]">+50.000</p>
          <p className="mt-1 text-base text-[#556987]">Hours Saved Annually</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <p className="text-3xl font-extrabold text-[#2A3342]">3.500</p>
          <p className="mt-1 text-base text-[#556987]">Unique Users</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default StatsSection