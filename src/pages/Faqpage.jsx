import './Faqpage.css'
import Question from '../components/Question'
export default function Faqpage() {

    return(
        <>
        <div className='mx-auto max-w-7xl'id='wrapper'>
            <div className='flex justify-between gap-x-36'>
                <div className="inline my-8 text-center">
                    <h1 className="text-6xl font-semibold">Got any questions?</h1>
                    <p className="mt-2 text-6xl font-light">We&apos;ve got answers.</p>
                </div>
                <div className="flex mt-8 ">
                    <button className="h-8 px-6 py-2 text-sm font-medium text-black bg-white rounded-lg shadow hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                        Book an Intro Call
                    </button>
                </div>
            </div>
           
            <div className='grid grid-cols-2 gap-4' id='questions'>
                    <div className='w-[25vw]'>
                        <Question question='What is Netflix?' answer='Netflix is a streaming service that offers a wide variety of TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.'/>
                        <Question question='How much does Netflix cost?' answer='Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $8.99 to $17.99 a month. No extra costs, no contracts.'/>
                        <Question question='Where can I watch?' answer='Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, such as smart TVs, smartphones, tablets, streaming media players, and game consoles.'/>
                    </div>
                    <div className='w-[25vw]'>
                        <Question question='What is Netflix?' answer='Netflix is a streaming service that offers a wide variety of TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.'/>
                        <Question question='How much does Netflix cost?' answer='Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $8.99 to $17.99 a month. No extra costs, no contracts.'/>
                        <Question question='Where can I watch?' answer='Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, such as smart TVs, smartphones, tablets, streaming media players, and game consoles.'/>
                    </div>
                </div>
        </div>
        </>
    );
}