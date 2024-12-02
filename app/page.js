import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[90vh]">
        <div className="flex flex-col gap-4 items-center justify-center font-sans">
          <p className="text-3xl font-bold">
            The best URL Shortener in the world
          </p>
          <p className="px-28 text-center">
            The simplest URL Shortner in the world. We are the most reliable and secure URL Shortner in the world. Most importantly, we are free to use. We understand the importance of shortening URLs and we are here to help you.
          </p>
          <div className='flex gap-3 justify-center'>
            <Link href="/shorten"><button className='btnn bg-purple-600 shadow-lg p-3 py-1 rounded-lg font-bold text-white'>Try Now</button></Link>
            <Link href="/github"><button className='btnn bg-purple-600 shadow-lg p-3 py-1 rounded-lg font-bold text-white'>GitHub</button></Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image src={"/vector.png"} alt="An image of vector" width={1000} height={10} className="mix-blend-darken p-5" />
        </div>
      </section>
    </main>
  );
}
