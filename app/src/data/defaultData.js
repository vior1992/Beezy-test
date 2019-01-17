const defaultData = {
    defaultBook: [
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

    defaultGenre: [
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

export default defaultData