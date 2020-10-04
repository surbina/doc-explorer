
## Installation

This project was built using NodeJS 12.14.1 and yarn 1.16.0, be sure to run compatible versions.

First, start by installing dependencies:

```bash
yarn install
```

Once that's ready, you can run the project with the following command:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can also access a live version at [https://doc-explorer.vercel.app/](https://doc-explorer.vercel.app/)

## Dependencies

The project uses [NextJS](https://nextjs.org/) as the basic framework. The choice was based around two facts:

- NextJS allowed me to start real quick with an application
- NextJS comes packed with a server which allowed to implement a simple endpoint for data retrieval

The project uses [styled-components](https://styled-components.com/) this is more a matter of preference. However it may have been better to just copy the styles in the source code provided, although when I realized that I was already too deep into the project.

To handle async data fetching I'm using [React Query](https://react-query.tanstack.com/) which makes that task super easy. Together with React Query I'm using [Axios](https://github.com/axios/axios) as a low level fetch api for no particular reason other than preference.

Finally for the Lottie animations I'm using [Lottie React](https://github.com/LottieFiles/lottie-react), a library that provides React component to handle Lottie animations.

## Challenges

By far the most challenging part of this project has been the animations. I tried using the same library as the one used by the provided source code but it was misbehaving with NextJS so I switched for the library I'm currently using.

However this library also presents some problems:
- The `hover` prop in the `Player` component does not work at all.
- The `Player` never fired the completed state which I could have used to overcome the above bug.

I tried a couple more solution (like manually registering a hover event handler using the `lottieRef` prop) but none of them worked. Finally I decide to move on, although with a bittersweet taste in my mouth.
