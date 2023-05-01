import coding from '../assets/coding.png'

function Home() {
  return (
    <>
      <div id="about" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
        <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10" style={{ marginTop: '100px' }}>
          <p className="text-3xl text-gray-700 font-bold mb-5">
            Hello 👋<br /><span>I'm Tubagus Ivan</span><br />A Software Engineer (Frontend Developer)
          </p>
          <p className="text-gray-500 text-lg">
            React and Tailwind CSS in action
          </p>
        </div>
        <div className='md:w-3/6 md:p-4'>
          <img data-aos="flip-right" data-aos-duration="1500" data-aos-offset="200" src={coding} alt="profile" />
        </div>
      </div>
    </>
  );
}
export default Home;