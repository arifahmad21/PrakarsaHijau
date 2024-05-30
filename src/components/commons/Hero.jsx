    export const Hero = () => {
    return (
     <section className="flex flex-row w-full h-screen bg-cover bg-[url('/assets/bg.png')]">
        <div className="flex mx-40 my-20 ">
          <div className='flex justify-center items-center my-14'><img src="/assets/Group 1.png" alt="Group1" /></div>
        </div>
        <div className=" mr-40 mt-80 ">
          <div className="flex flex-col">
            <h2 className="flex text-5xl text-[#11DCC6] font-semibold whitespace-nowrap mb-2">Green Economy</h2>
            <h5 className="flex text-2xl text-[#FFFFFF] font-semibold whitespace-nowrap">Masa Depan Sehat Untuk <br />Bumi dan Manusia</h5>
          </div>
          <div className="flex flex-row mt-4">
            <button className="bg-[#00A742] border-[#00A742] text-white font-semibold px-10 py-2 border rounded-3xl mr-4 hover:bg-[#136C59] hover:border-[#136C59]">Tips</button>
            <button className="bg-[#136C59] border-[#136C59] text-white font-semibold px-10 py-2 border rounded-3xl mr-4 hover:bg-[#00A742] hover:border-[#00A742]">News</button>
          </div>
        </div>
     </section>
    );
  }
  