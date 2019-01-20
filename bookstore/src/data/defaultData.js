const defaultData = {
    books: [
        { 
            id: Date.now()+(1+Math.floor(Math.random() * 100) + 1),
            title: 'Don Quixote',
            genre: 'fantasy',
            price: '19.00',
            author: 'Miguel De Cervantes'
        },

        { 
            id: Date.now()+Math.floor(Math.random() * 100) + 1,
            title: 'The Brothers Karamazov',
            genre: 'novel',
            price: '12',
            author: 'Fyodor Dostoyevsky'
        },

        { 
            id: Date.now()+Math.floor(Math.random() * 100) + 1,
            title: 'Javascript: The Good Parts',
            genre: 'tecnologies',
            price: '20.99',
            author: 'Douglas Crockford'
        }
    ],

    genres: [
        { 
            id: Date.now()+(1+Math.floor(Math.random() * 100) + 1),
            name: 'novel'
        },

        { 
            id: Date.now()+Math.floor(Math.random() * 100) + 1,
            name: 'fantasy'
        },

        { 
            id: Date.now()+Math.floor(Math.random() * 100) + 1,
            name: 'tecnologies'
        }
    ]
}

//For run the app, uncomment this:
export default defaultData

//For run the test, uncomment this:
// module.exports = defaultData