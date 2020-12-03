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
