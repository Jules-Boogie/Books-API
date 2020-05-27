# Google Books Application

## Summary 
The Google Books App was created using ReactJs, ExpressJS, Google Books API Mongoose, and MongoDB. This Single Page Application (SPA) is comprised of 5 stateless components and 2 stateful components. The stateful components are the search page and the saved page. The search page lets a user search for books with a search term and returns all the results that match that search term. The results are displayed on a card that has two buttons to save the book or to view more information about the book. The save page shows all of the books that the user has saved. The saved page displays these books on a card that has a link to view more information or to delete the book from the saved list. Please see photos below. 



## App Photo
![App Photo]()



## Technologies Used
| Technologies | Description  |
|---------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------:|
| [Nodejs](https://nodejs.org/en/docs/)                                     |             Node.js is designed to build scalable network applications.                 |
| [React](https://reactjs.org/)                |   A declarative, component based Javascript library for building interactive user interface                 |
| [MongoDB](https://www.mongodb.com/)                |   NoSql database that stores data in JSON-like documents.                |
| [Mongoose](https://mongoosejs.com/)                |  Mongoose lets us model the data for mongodb.                |




## Code Snippet
It was very interesting to work on the save button on the books card. The code below shows how this was achieved. We splice the books array at the bookIndex and set the pointer book. Then we update the state of book which was set to an empty object initially. Then we save this book into our database and post it to the defined POST route. 
```
handleSaveBtn = (bookIndex) => {
        const books = [...this.state.books]
        const book = books.splice(bookIndex,1)
        console.log(book[0].volumeInfo.title)
        this.setState({book: book})
            APIsave.saveBook({
                title:book[0].volumeInfo.title,
                authors:book[0].volumeInfo.authors,
                description:book[0].volumeInfo.description,
                image:book[0].volumeInfo.imageLinks.smallThumbnail,
                link:book[0].volumeInfo.infoLink 
            })

            window.location.replace("/saved")

         })
    }
```

## Clone Repository
 - Clone this repo to your local machine using ```git@github.com:Jules-Boogie/employee-directory.git ``` with terminal in the directory of your choice. 



## Installation Procedures
```
$ npx create-react-app <myappname>
$ npm axios
$ npm mongoose
$ npm express


```


## Author Links

**Author:**
Juliet George

**Contact:**
[LinkedIn](https://www.linkedin.com/in/juliet-george-864950b8/)
