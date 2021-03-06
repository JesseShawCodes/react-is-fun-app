import React from 'react';

// No Title, No Author, Default Props (Default Argument Syntax)
export const Book = ({title="No Title Provided", author="No Author", pages=0, freeBookmark}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>By: {author}</p>
            <p>Pages: {pages}</p>
            <p>Free Bookmark Today: {freeBookmark ? "yes!" : "no! "}</p>
        </section>
    )
}
