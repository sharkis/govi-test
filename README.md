# React-Redux-Serverless-Typescript-Template

##### v 1.0.0 | © Cadence Holmes 2020 | MIT License

This is a starter template for React/Redux Typescript projects.

It's ready to be deployed to Vercel with serverless functionality, and it's set up for SCSS, Material-UI, RxJS, and React Router.

[Fork on CodeSandbox](https://codesandbox.io/s/react-redux-serverless-typescript-template-4sigy?file=/README.md)

### Serverless

In order for the serverless backend to work, you'll need to deploy the app to Vercel.

The serverless functions are found in the `/api` directory as an Express app.

In `/src/client/App.tsx` you'll find how to use Axios to make calls to the backend.

If the calls aren't being made from a Vercel deployment, you won't receive valid responses. Also, if you create a serverless function that tries to access an invalid value according to your Vercel project settings, the entire serverless API will fail.

So don't try to access unavailable or nonexistent environment variables.

# Coding Challenge

## React + Node
1. Display a loader while the vercel deployment/app loads
2. After after vercel app loads, go to a new React page that displays a plain circle. The circle can be any color/size, but must be clearly visible.
3. Add a button to the new page that allows a user to add a node/element in the form of a smaller circle to the main circle.
4. Each type the user presses the button to generate a new node, it should make a call to the API to grab a random number from 0-100 and a random letter (lowercase + uppercase) that is appended to the random number. E.g, "64V"
5. The button should display a loading indicator while API generates new node
6. A new circle added should be attached to the main circle visually and display the value retrieved from the API.
7. Once the new node (mini circle with random value) is attached, it should call the API with the list of random values previously generated and the API should return a hash (your choice) of all the values and return a random meme using the /get_memes API endpoint from https://imgflip.com/api
8. Display the new hash under the circle along with the meme
9. Display loader for hash while computing new one
## Restrictions
1. No repeats for the extra nodes from API (this might mean sending all existing values one each request, or you can use a session)
2. Do not combine the value generation endpoint with the hashing endpoint (these should be different endpoints)
## Notes
1. No need to display errors
2. Spend 1.5 hours max, we will grade on how far you get, so don't worry if you finish.
