# The Canvas Of The Web

- This works best with parcel as it is a super compiler
- Dcoumentation is really limted at the moment

 

## Requirements

*if you note any new ones create a PR updating the [readme.md](http://readme.md) file*

- React
- TailwindCss

## How to use

Have a .npmrc file with the following inside

```bash
//npm.pkg.github.com/:_authToken=PesonalAccessToken
@codebenderhq:registry=https://npm.pkg.github.com
```

### Packages required

the canvas project itself installed like so, note the latest version [here](https://github.com/codebenderhq/canvas/packages/1006868)

```bash
npm install @codebenderhq/canvas@0.1.1
```

you will need to have tailwindcss installed on your local project for the components to work

```bash
npm install  -D tailwindcss@latest postcss@latest autoprefixer@latest
```

create a  .postcsrcc file or a json version of it if you prefer that, and paste the following in it

```bash
{
  "plugins": {
    "autoprefixer": {},
    "tailwindcss" : {},
 
  }
}
```

if you want to customize you tailwind configuration have a look [here](https://tailwindcss.com/docs/installation#create-your-configuration-file)

you will also need react installed

```bash
npm install react
```

## Getting Started

This is still in development so the imports are limited

when working with tailwindcss you need to include tailwind into your [CSS](https://tailwindcss.com/docs/installation#include-tailwind-in-your-css) , import the below in your root js file to include the CSS in your project

```bash
@codebenderhq/canvas/src/theme/{themeName}/style/index.css
```

if there are some custom components you would like to use private to you you can create your own CSS file including tailwindcss like [so](https://tailwindcss.com/docs/installation#include-tailwind-in-your-css) 

### Local Playground
*more to be shared soon* 
## Contributions

The best place to get your hands dirty from new to old you are all welcomed

Since this is a new project, and is still early, anything and everything is a great first thing to do, as time goes this will be updated to be more accessible without having to ask questions

### Contact

if you run into any problems from setup to just a stupid question 

you can contact [@codebenderhq](https://twitter.com/codebenderhq)

FYI: first time maintainer
