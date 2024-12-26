
import Question from '../components/Question'

export default function Faqpage() {
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
        },
        {
            question: 'Is Netflix good for kids?',
            answer: 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.'
        },
        {
            question: 'How does the free trial work?',
            answer: 'Try us free for 30 days! If you enjoy your Netflix trial, do nothing, and your membership will automatically continue for as long as you choose to remain a member. Cancel anytime before your trial ends, and you won’t be charged. There’s no complicated contract, no cancellation fees, and no commitment. Cancel online anytime, 24 hours a day.'
        }
    ];

    return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100 sm:p-8 md:p-12 lg:p-24">
            <div className="flex flex-col items-center justify-center w-full max-w-5xl p-6 space-y-8 bg-white border rounded-lg shadow-md sm:space-y-10 md:p-10 lg:space-y-12">
                {/* Header Section */}
                <div className="text-center">
                    <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
                        Got any questions?
                    </h1>
                    <p className="mt-2 text-lg font-light sm:text-xl md:text-2xl">
                        We&apos;ve got answers.
                    </p>
                </div>

                {/* Button */}
                <div className="flex justify-center mt-4">
                    <button className="px-6 py-2 text-sm font-medium text-black transition bg-white border border-gray-300 rounded-lg shadow-sm sm:text-base md:text-lg hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2">
                        Book an Intro Call
                    </button>
                </div>

                {/* FAQ Grid */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8" id="questions">
                    {faqs.map((faq, index) => (
                        <div key={index} className="p-4 border rounded-lg shadow-sm bg-gray-50">
                            <Question question={faq.question} answer={faq.answer} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
