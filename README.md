## Morpheus: Matrix Analyzer 

### Introduction 
The purpose of this project is to develop programming algorithms for linear algebra concepts in order to make the field more accessible. The algorithms themselves are written in JavaScript and mirror techniques taught in the course itself. These techniques include but are not limited to matrix reduction to both upper triangular (U) and reduced row echelon form (R), and finding the the four fundamental subspaces: column space, nullspace, row space, and left nullspace. 

Coming additions will include calculations for the determinant, eigenvalues, and more. 

### Languages, Frameworks, Libraries, and Tools
- JavaScript is the primary language used to build the project but JSX, HTML, and CSS are also integral to the project. 
- React is the primary framework for the project which is further supported by libraries/tools including: 
  - Redux, its corresponding React bindings via React-Redux, Bootstrap, and Webpack, and many others. 
- The project was built using Create-React-App which provides the backbone making usage of npm incredibly easy and streamlined. 

### Testing 
- The Redux reducers are all fully tested using both the DeepFreeze and Expect libraries in unison with the npm testing suite that is runnable via  
    ```npm test``` 
