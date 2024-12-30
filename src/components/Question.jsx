/* eslint-disable react/prop-types */
import { BsPlusLg } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';

export default function Question({ question, answer, i , state }) {
    
    return (
        <div className='mb-4 bg-white border border-gray-300 rounded-lg shadow-md '>
            <div className='flex items-center justify-between p-4 cursor-pointer'>
                <h2 className='text-lg font-medium'>{question}</h2>
                <div>
                    <ul>
                        {state!=i&&<li><button><BsPlusLg/></button></li>}
                        {state==i&&<li><button><BiMinus/></button></li>}
                    </ul>
                </div>
            </div>
            <article className={`${state==i&&"p-4 border-t border-gray-300'"}`}>
                <p>{state==i&&answer}</p>
            </article>
            
        </div>
    );
}