export default function selectionFilter({ series, films}) {
    return {
        series: [
            { 
                title: 'Children',
                data: series.filter((item) => item.genre === 'children')
            },
            { 
                title: 'Feel Good',
                data: series.filter((item) => item.genre === 'feel-good')
            },
            { 
                title: 'Comedies',
                data: series.filter((item) => item.genre === 'comedies')
            },
            { 
                title: 'Crime',
                data: series.filter((item) => item.genre === 'crime')
            },
            { 
                title: 'Documentaries',
                data: series.filter((item) => item.genre === 'documentaries')
            }
        ],
        films: [
            { 
                title: 'Children',
                data: films.filter((item) => item.genre === 'children')
            },
            { 
                title: 'Drama',
                data: films.filter((item) => item.genre === 'drama')
            },
            { 
                title: 'Romance',
                data: films.filter((item) => item.genre === 'romance')
            },
            { 
                title: 'Suspense',
                data: films.filter((item) => item.genre === 'suspense')
            },
            { 
                title: 'Thriller',
                data: films.filter((item) => item.genre === 'thriller')
            }
        ]
    }
}