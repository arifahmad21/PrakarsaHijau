
export const AboutUs = () => {

    return(
        <section>
            <div className='flex justify-center items-center my-14'><img src="/assets/Group 1.png" alt="Group1" /></div>
            <div className='flex flex-row m-12 w-auto font'>
             <h1 className='flex text-3xl font-semibold text-[#0B9586] mr-64 ml-20 w-auto whitespace-nowrap'>About Us</h1>
                <p className='flex mr-40 ml-20 text-l text-justify'>Prakarsa Hijau lahir dari keinginan kami untuk berkontribusi pada dunia yang lebih sehat dan berkelanjutan. Dalam era di mana isu lingkungan dan kesehatan semakin mendesak, kami hadir untuk memberikan inspirasi dan informasi praktis bagi siapa saja yang ingin mengambil langkah nyata menuju masa depan yang lebih hijau.
                 Moto kami:  &quot;Masa Depan Sehat Untuk Bumi dan Manusia&quot; menjadi landasan setiap langkah yang kami ambil. Kami percaya bahwa kesejahteraan bumi dan manusia tidak bisa dipisahkan; dengan menjaga lingkungan, kita juga menjaga kesehatan kita sendiri.</p>
             </div>

             <div className='flex flex-col m-12 w-auto'>
                <h1 className='flex text-3xl mt-12 font-semibold text-[#0B9586] ml-20'>Mengapa Prakarsa Hijau ?</h1>
                <p className='flex my-4 ml-20 mr-40 text-l text-justify'>Di Prakarsa Hijau, kami berkomitmen untuk menjadi sumber yang terpercaya dan inspiratif bagi siapa saja yang peduli terhadap masa depan bumi dan generasi mendatang. Kami mengajak Anda untuk bergabung dengan kami dalam perjalanan ini, mengambil langkah-langkah kecil maupun besar yang akan membuat perbedaan.</p>
             </div>

             <div className='flex flex-col m-12 w-auto'>
                <h1 className='flex text-3xl mt-12 font-semibold text-[#0B9586] ml-20'>Misi Kami</h1>
                <div className='grid grid-cols-3 ml-20 mr-40 my-4'>
                    <div className='border-2 border-gray-950 rounded-lg w-72 h-96'>
                        <img src="/assets/pict2.jpg" alt="pict1" className='h-48 w-full rounded-t-lg'/>
                        <h2 className='p-8 text-2xl font-semibold'>Edukasi dan Kesadaran</h2>
                    </div>
                    <div  className='border-2 border-gray-950 rounded-xl w-72'>
                        <img src="/assets/pict4.jpg" alt="pict2" className='h-48 w-full rounded-t-lg'/>
                        <h2 className='p-8 text-2xl font-semibold'>Gaya Hidup Sehat dan Berkelanjutan</h2>
                    </div>
                    <div  className='border-2 border-gray-950 rounded-xl w-72'>
                        <img src="/assets/pict1.jpg" alt="pict3" className='h-48 w-full rounded-t-lg' />
                        <h2 className='p-8 text-2xl font-semibold'>Berita dan Pemberitahuan</h2>
                    </div>
                </div>
             </div>
        </section>
    );
}