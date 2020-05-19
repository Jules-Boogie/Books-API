# Google Books Application


## Summary 
 This app is a place where users can 



## App Photo
![App Photo](https://github.com/Jules-Boogie/employee-directory/blob/master/employees/public/Capture.PNG)



## Technologies Used
| Technologies | Description  |
|---------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------:|
| [Nodejs](https://nodejs.org/en/docs/)                                     |             Node.js is designed to build scalable network applications.                 |
| [React](https://reactjs.org/)                |   A declarative, component based Javascript library for building interactive user interface                 |




## Code Snippet
The handleSearchField function is added to the search button as an Onclick event. What it does is to go through every person in the stores employee array and compare the current person's name to the search value in the search box. It stores the returned value into the searchResult variable which is then set as the key to employee in the setState object below. 
```
handleSearchField = (event) =>{
         event.preventDefault(); 
         var searchResult = this.state.employee.filter(person => person.firstName.toLowerCase() === this.state.search)
                this.setState({
                    employee: searchResult
                })
     }

```

## Clone Repository
 - Clone this repo to your local machine using ```git@github.com:Jules-Boogie/employee-directory.git ``` with terminal in the directory of your choice. 



## Installation Procedures
```
$ npx create-react-app <myappname>
$ npm axios


```


## Author Links

**Author:**
Juliet George

**Contact:**
[LinkedIn](https://www.linkedin.com/in/juliet-george-864950b8/)
