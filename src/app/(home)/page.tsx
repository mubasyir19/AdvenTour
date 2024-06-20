import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TypewriterTitle from '@/components/TypewriterTitle';

export default function Home() {
  return (
    <main className='relative h-screen bg-home bg-cover bg-center'>
      <Navbar />
      <div className='absolute left-1/2 top-40 flex h-fit w-fit -translate-x-1/2 transform justify-center rounded-xl'>
        {/* <Image src="/full-logo.png" width={345} height={96} alt="full logo" /> */}
        {/* <div className="">
          <Image
            src="/logo.png"
            width={548}
            height={629}
            alt="logo"
            className="mx-auto h-28 w-28"
          />
          <div className="my-auto text-center text-white">
            <p
              className="text-3xl font-bold text-white"
              style={passeroOne.style}
            >
              MangroveClassify
            </p>
            <p
              style={quickSand.style}
              className="text-base font-semibold md:text-lg"
            >
              Discover. Identify. Protect.
            </p>
          </div>
        </div> */}
      </div>
      <section className='flex h-full w-full items-center justify-center bg-black bg-opacity-60'>
        <div className='text-center'>
          <div className='mx-auto mb-16'>
            <Image src='/img/logo.png' width={548} height={629} alt='logo' className='mx-auto w-40' />
            <div className='my-auto text-white'>
              <p
                className='text-3xl font-semibold text-white'
                // style={passeroOne.style}
              >
                <span className=''>Adven</span>
                <span className='text-prime-yellow'>Tour</span>
              </p>
              <p className='text-lg font-semibold'>Tour make and adventour.</p>
            </div>
          </div>
          <TypewriterTitle />
          <div className='mt-10'>
            <button
              className='rounded-lg border-2 border-prime-yellow px-4 py-2 font-semibold text-prime-yellow hover:bg-prime-yellow hover:text-black'
              // style={quickSand.style}
            >
              Get Started
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
    // <main className='h-screen bg-home bg-center bg-cover'>
    //   <div className='bg-gradient-to-t from-black bg-opacity-50 w-full h-full flex justify-center items-center'>
    //     <div className=''>
    //       <Image src='/img/logo.png' height={200} width={200} alt='logo' className='mx-auto' />
    //       <div className='text-center text-white'>
    //         <h1 className='text-5xl mt-2 font-semibold'>
    //           Adven<span className='text-[#ECD400]'>Tour</span>
    //         </h1>
    //         <p className='mt-3'>Tour made an adventure</p>
    //       </div>
    //     </div>
    //   </div>
    // </main>
  );
}
