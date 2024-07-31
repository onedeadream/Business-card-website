from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()

origins = [
    "http://localhost:3000",  # Замените на URL вашего клиента
    "https://yourdomain.com",  # Или добавьте другие разрешенные домены
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

data = [
    {
        'id': 1,
        'title': 'Java-Script',
        'body': 'Язык программирирования'
    },
    {
        'id': 2,
        'title': 'Python',
        'body': 'Язык программирования'
    },
    {
        'id': 3,
        'title': 'React.js',
        'body': 'Фрейморк для JavaScript'
    },
    {
        'id': 4,
        'title': 'HTML',
        'body': 'Язык разметки'
    },
    {
        'id': 5,
        'title': 'CSS',
        'body': 'Язык стилей'
    },
    {
        'id': 6,
        'title': 'Java-Script',
        'body': 'Язык программирирования'
    },
    {
        'id': 7,
        'title': 'Python',
        'body': 'Язык программирования'
    },
    {
        'id': 8,
        'title': 'React.js',
        'body': 'Фрейморк для JavaScript'
    },
    {
        'id': 9,
        'title': 'HTML',
        'body': 'Язык разметки'
    },
    {
        'id': 10,
        'title': 'CSS',
        'body': 'Язык стилей'
    },
    {
        'id': 11,
        'title': 'Java-Script',
        'body': 'Язык программирирования'
    },
    {
        'id': 12,
        'title': 'Python',
        'body': 'Язык программирования'
    },
    {
        'id': 13,
        'title': 'React.js',
        'body': 'Фрейморк для JavaScript'
    },
    {
        'id': 14,
        'title': 'HTML',
        'body': 'Язык разметки'
    },
    {
        'id': 15,
        'title': 'CSS',
        'body': 'Язык стилей'
    },
    {
        'id': 16,
        'title': 'Java-Script',
        'body': 'Язык программирирования'
    },
    {
        'id': 17,
        'title': 'Python',
        'body': 'Язык программирования'
    },
    {
        'id': 18,
        'title': 'React.js',
        'body': 'Фрейморк для JavaScript'
    },
    {
        'id': 19,
        'title': 'HTML',
        'body': 'Язык разметки'
    },
    {
        'id': 20,
        'title': 'CSS',
        'body': 'Язык стилей'
    },
    {
        'id': 21,
        'title': 'Java-Script',
        'body': 'Язык программирирования'
    },
    {
        'id': 22,
        'title': 'Python',
        'body': 'Язык программирования'
    },
    {
        'id': 23,
        'title': 'React.js',
        'body': 'Фрейморк для JavaScript'
    },
    {
        'id': 24,
        'title': 'HTML',
        'body': 'Язык разметки'
    },
    {
        'id': 25,
        'title': 'CSS',
        'body': 'Язык стилей'
    },
    {
        'id': 26,
        'title': 'Java-Script',
        'body': 'Язык программирирования'
    },
    {
        'id': 27,
        'title': 'Python',
        'body': 'Язык программирования'
    },
    {
        'id': 28,
        'title': 'React.js',
        'body': 'Фрейморк для JavaScript'
    },
    {
        'id': 29,
        'title': 'HTML',
        'body': 'Язык разметки'
    },
    {
        'id': 30,
        'title': 'CSS',
        'body': 'Язык стилей'
    },
    {
        'id': 31,
        'title': 'Java-Script',
        'body': 'Язык программирирования'
    },
    {
        'id': 32,
        'title': 'Python',
        'body': 'Язык программирования'
    },
    {
        'id': 33,
        'title': 'React.js',
        'body': 'Фрейморк для JavaScript'
    },
    {
        'id': 34,
        'title': 'HTML',
        'body': 'Язык разметки'
    },
    {
        'id': 35,
        'title': 'CSS',
        'body': 'Язык стилей'
    },
    {
        'id': 36,
        'title': 'Java-Script',
        'body': 'Язык программирирования'
    },
    {
        'id': 37,
        'title': 'Python',
        'body': 'Язык программирования'
    },
    {
        'id': 38,
        'title': 'React.js',
        'body': 'Фрейморк для JavaScript'
    },
    {
        'id': 39,
        'title': 'HTML',
        'body': 'Язык разметки'
    },
    {
        'id': 40,
        'title': 'CSS',
        'body': 'Язык стилей'
    },
    {
        'id': 41,
        'title': 'Java-Script',
        'body': 'Язык программирирования'
    },
    {
        'id': 42,
        'title': 'Python',
        'body': 'Язык программирования'
    },
    {
        'id': 43,
        'title': 'React.js',
        'body': 'Фрейморк для JavaScript'
    },
    {
        'id': 44,
        'title': 'HTML',
        'body': 'Язык разметки'
    },
    {
        'id': 45,
        'title': 'CSS',
        'body': 'Язык стилей'
    }
]


@app.get("/getPosts")
async def root(
    limit: int = Query(default=None), 
    page: int = Query(default=None)
    ):
    
    if limit is None and page is None:
        return {'results': data, 'lenght': len(data)}
    
    if limit is None:
        limit = len(data) 

    if page is None:
        page = 1 
    
    start_index = (page - 1) * limit
    end_index = start_index + limit

    
    
    data_json = data[start_index:end_index]
    return data_json
