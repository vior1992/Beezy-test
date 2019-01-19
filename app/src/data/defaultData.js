const defaultData = {
    books: [
        { 
            id: Date.now()+(1+Math.floor(Math.random() * 100) + 1),
            title: 'crepusculo',
            genre: 'novela romantica',
            price: '10',
            author: 'RR Martin'
        },

        { 
            id: Date.now()+Math.floor(Math.random() * 100) + 1,
            title: 'javascript',
            genre: 'comedia',
            price: '20',
            author: 'Bill gates'
        }
    ],

    genres: [
        { 
            id: Date.now()+(1+Math.floor(Math.random() * 100) + 1),
            name: 'novela romantica'
        },

        { 
            id: Date.now()+Math.floor(Math.random() * 100) + 1,
            name: 'comedia'
        }
    ]
}

//For run the app, uncomment this:
export default defaultData

//For run the test, uncomment this:
// module.exports = defaultData