# Strasbourg Waste Sorter (SWS)

- [Strasbourg Waste Sorter (SWS)](#strasbourg-waste-sorter-sws)
  - [what is this ?](#what-is-this-)
  - [project structure](#project-structure)
  - [CI/CD](#cicd)
  - [Frontend contributions](#frontend-contributions)
  - [Code Viz](#code-viz)
  - [Discussions about the project](#discussions-about-the-project)
  - [Contribution guidelines](#contribution-guidelines)
  - [Contributors](#contributors)

## what is this ?

This repo holds the code of a waste sorter app' that consists of recognizing waste items in order to tell in which bin they need to be thrown. Currently, we only support [the Strasbourg area recycling color codes](./waste_sorting_strasbourg.png), but we plan to expand to other cities in the future.

## project structure

- the `api` folder contains a Flask API code that serves an inference endpoint for the waste items and the built frontend
  - to run the Flask app' locally, run `docker-compose up` from the root of the repo and go to <http://localhost:5000>
- the `frontend` folder contains a React app' that is built and served by the Flask API

## CI/CD

There's a CI/CD pipeline in place that builds the Docker image and pushes it to the GCP Artifact Registry, all the way to deployment in a Cloud Run container (check out `./.github/workflows/cicd.yml`). 

Remember to build the frontend app' before a PR to the main branch.

## Frontend contributions

When making a PR changing the React frontend, don't forget to run `npm run build` before pushing your changes, otherwise the deployed app' static assets won't change.

## Code Viz

<https://mango-dune-07a8b7110.1.azurestaticapps.net/?repo=yactouat%2FSWS_waste-sorter>

## Discussions about the project

https://github.com/yactouat/SWS_waste-sorter/discussions

## Contribution guidelines

Dear past, present, and future contributors:

- Please use comments to explain your code, even if it's obvious to you, it might not be to someone else.
- You are free to arrange the code, the folder structure, the file names, etc. as you see fit if you're able to provide a good reason for it in your PR ;)

That's all, thank you for your time !

## Contributors

a big thanks goes to the contributors of this project:

<table align="center">
<tbody>
    <tr>
      <td align="center"><a href="https://github.com/yactouat"><img src="https://avatars.githubusercontent.com/u/37403808" width="100px;" alt="yactouat"/><br /><sub><b>yactouat</b></sub></a></td>
      <td align="center"><a href="https://github.com/ritik2358"><img src="https://avatars.githubusercontent.com/u/98156555" width="100px;" alt="Ritik Raj"/><br /><sub><b>Ritik Raj</b></sub></a></td>
      <td align="center"><a href="https://github.com/aharonYK"><img src="https://avatars.githubusercontent.com/u/87654852" width="100px;" alt="Aharon Karsenti"/><br /><sub><b>Aharon Karsenti</b></sub></a></td>
    </tr>
    <tr>
      <td align="center"><a href="https://github.com/etnms"><img src="https://avatars.githubusercontent.com/u/91740611" width="100px;" alt="etnms"/><br /><sub><b>etnms</b></sub></a></td>
    </tr>
</tbody>
</table>