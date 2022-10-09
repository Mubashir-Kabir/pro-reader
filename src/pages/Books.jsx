import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Book } from '../componants/Book';

const Books = () => {
    const books=useLoaderData().books
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {
                    books.map(book=><Book key={book.isbn13} book={book}></Book>)
                }
            </div>
            
        </div>
    );
};

export default Books;