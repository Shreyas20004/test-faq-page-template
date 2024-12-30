import { useState } from 'react';
import Question from '../components/Question';

export default function Faqpage() {
    const [state, setState] = useState(null);

    const toggle = (id) => {
        return () => {
            if (state === id) {
                setState(null);
            } else {
                setState(id);
            }
        };
    };

    const faqs = [
        {
            question: 'What is Netflix?',
            answer: 'Netflix is a streaming service that offers a wide variety of TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.'
        },
        {
            question: 'How much does Netflix cost?',
            answer: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $8.99 to $17.99 a month. No extra costs, no contracts.'
        },
        {
            question: 'Where can I watch?',
            answer: 'Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, such as smart TVs, smartphones, tablets, streaming media players, and game consoles.'
        },
        {
            question: 'How do I cancel?',
            answer: 'Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
        },
        {
            question: 'What can I watch on Netflix?',
            answer: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
        }
    ];

    return (
        <div className='mx-auto max-w-7xl' id='wrapper'>
            <div className='flex justify-between gap-x-36'>
                <div className="inline my-8 text-center">
                    <h1 className="text-6xl font-semibold">Got any questions?</h1>
                    <p className="mt-2 text-6xl font-light">We&apos;ve got answers.</p>
                </div>
            </div>

            <div className="flex justify-center mt-4">
                <button className="px-6 py-2 text-sm font-medium text-black transition bg-white border border-gray-300 rounded-lg shadow-sm sm:text-base md:text-lg hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2">
                    Book an Intro Call
                </button>
            </div>

            <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:gap-8 " id="questions">
                {faqs.map((faq, i) => (
                    <div key={i} className="p-4 border rounded-lg shadow-sm bg-gray-50" onClick={toggle(i)}>
                        <Question question={faq.question} answer={faq.answer} i={i} state={state} />
                    </div>
                ))}
            </div>
        </div>
    );
}