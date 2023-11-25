# Top Wikipedia Articles

This project provides the user with a list of the 1000 top articles from Wikipedia for a specified date (default is yesterday).

This project was for a Staff Software Engineer position I was interviewing for. I didn't get the job. Oh well.

[Project description document (PDF)](./Frontend_Take_Home_Assessment.pdf)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Project Description

This project was built for Grow Therapy, based on the take-home assessment. All styling is based on the provided Figma designs.

The enhancement option that I chose was to add the ability to pin articles to the top of the page. Pinned articles are stored in the browser's `localStorage`.

A `Map` object is used to store the list of pinned articles in memory while the app is running. A `Map` allows us to keep the list of articles unique based on a given key.
