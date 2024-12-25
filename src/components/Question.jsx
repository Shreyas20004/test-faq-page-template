import { BsPlusLg } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { useState } from 'react';

export default function Question(props) {
    const[showAnswer, setShowAnswer] = useState(false);
    return (
        <div className='mb-4 bg-white border border-gray-300 rounded-lg shadow-md'id='card'>
            <div className='flex items-center justify-between p-4 cursor-pointer'>
                <h2 className='text-lg font-medium'>{props.question}</h2>
                <div>
                    <ul>
                        {!showAnswer&&<li><button  onClick={()=>setShowAnswer(true)}><BsPlusLg/></button></li>}
                        {showAnswer&&<li><button onClick={()=>setShowAnswer(false)}><BiMinus/></button></li>}
                    </ul>
                </div>
            </div>
            <article className={`${showAnswer&&"p-4 border-t border-gray-300'"}`}>
                <p>{showAnswer&&props.answer}</p>
            </article>
            
        </div>
    );
}