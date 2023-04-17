# Test FullStack

This project is a online store that uses public API and crawlers to fetch products data. The application is built with JavaScript and React, styled with Styled-components.

## Installation

Clone the project

```
git clone git@github.com:vinicius-shk/Teste-FullStack.git
```

Navigate to the cloned repository

```
cd Teste-FullStack
```

To install the project's dependencies, run the following command from the previous directory:

```
cd Backend && npm i && npm run db_start
cd Frontend && npm i
```

## Running the Development Server

To start the development server, run the following command:

```
on Frontend dir: npm start
on Backend dir: npm run dev
```

This will start a development server on http://localhost:3000/ and start the API service on port 3001. The application will automatically reload if you make changes to the code.

## Usage

The application has a header that allows users to request products based on categories. You can search for specific products on the displayed list to refine your search.
Please use the env.example file to build your own .env file.

## Contributing

If you would like to contribute to this project, please submit a pull request with your proposed changes.
