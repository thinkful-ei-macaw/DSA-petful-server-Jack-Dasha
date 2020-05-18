# Petful Server

https://petfuldj.herokuapp.com

# Live App

https://petful.jacklansing.now.sh

# Team

Dasha Akhten

Jack Lansing

# client repo : https://github.com/thinkful-ei-macaw/DSA-petful-client-Jack-Dasha

# server repo: https://github.com/thinkful-ei-macaw/DSA-petful-server-Jack-Dasha

### Tech Stack

- React
- HTML
- CSS
- Node.js
- Express

## API documentation

# GET /api/people

all people example (array):
{
"people": [
"Randy Lahey",
"Trevor Cory",
"Jim Lahey"
]
}

# POST /api/people

"POST /api/people HTTP/1.1" 200 123

{
"people": "name"
}

# GET /api/pets/cats and /api/pets/dogs

GET /api/pets/cats HTTP/1.1" 200 215
GET /api/pets/dogs HTTP/1.1" 200 683

cats example object
{

"nextCat": {

"age": 2,

"breed": "Bengal",

"description": "Orange bengal cat with black stripes lounging on concrete.",

"gender": "Female",

"imageURL": "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",

"name": "Steve French",

"story": "Thrown on the street"
}
}

dogs example object
{

"nextDog": {

"age": 3,

"breed": "Golden Retriever",

"description": "A smiling golden-brown golden retreiver listening to music.",

"gender": "Male",

"imageURL": "https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",

"name": "Zim",

"story": "Owner Passed away"
}
}
