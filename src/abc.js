import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

const bookDetails = [
  {
    "book": "Rich Dad Poor Dad",
    "author": "Robert Kiyosaki"
  },
  {
    "book": "Atomic Habits",
    "author": "James Clear"
  },
  {
    "book": "Mindset",
    "author": "Carol S"
  }];

function Book(props) {
  return <div className='border-solid border-2 border-slate-400 w-56 flex justify-center'>
    <div className="bg-fuchsia-900 w-52 p-1 text-white m-1 font-serif ">
      <h2 className='text-base'>{props.bookName}</h2>
      <h4 className='text-xs'>{props.authorName}</h4>
    </div>
  </div>
}

root.render(
  <div>
    {bookDetails.map(function (data) {
      return <Book bookName={data.book} authorName={data.author}></Book>
    })}
  </div>
);


