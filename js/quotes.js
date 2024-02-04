const quotes = [
    {
        quote: 'Be yourself; everyone else is already taken.',
        author: 'Oscar Wilde',
    },
    {
        quote: 'So many books, so little time.',
        author: 'Frank Zappa',
    },
    {
        quote: 'A room without books is like a body without a soul.',
        author: 'Marcus Tullius Cicero',
    },
    {
        quote: 'You only live once, but if you do it right, once is enough.',
        author: 'Mae West',
    },
    {
        quote: 'To live is the rarest thing in the world. Most people exist, that is all.',
        author: 'Oscar Wilde',
    },
    {
        quote: 'We accept the love we think we deserve.',
        author: 'Stephen Chbosky',
    },
    {
        quote: 'Without music, life would be a mistake.',
        author: 'Friedrich Nietzsche',
    },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = `- ${todaysQuote.author} -`;