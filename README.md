# Strasbourg Waste Sorter (SWS)

- [Strasbourg Waste Sorter (SWS)](#strasbourg-waste-sorter-sws)
  - [what is this ?](#what-is-this-)
  - [CI/CD](#cicd)
  - [Contribution guidelines](#contribution-guidelines)
  - [Code Viz](#code-viz)
  - [Contributors](#contributors)


## what is this ?

This repo holds the api and frontend code of a waste sorter app' that consists of recognizing waste items in order to tell in which bin they need to be thrown. Currently, we only support the Strasbourg area, but we plan on expanding to other cities in the future.

## CI/CD

There's a CI/CD pipeline in place that builds the Docker image and pushes it to the GCP Artifact Registry, all the way to deployment in a Cloud Run container (check out `./.github/workflows/cicd.yml`). Remember to build the app' before deploying it.

## Contribution guidelines

feel free to use this project as a base for your own projects, but please follow these guidelines:

dear past, present, and future contributors, you have my many thanks, but:

- please use comments to explain your code, even if it's obvious to you, it might not be to someone else
- you are free to arrange the code, the folder structure, the file names, etc. as you see fit if you're able to provide a good reason for it

that's all, thank you for your time !

## Code Viz

<https://mango-dune-07a8b7110.1.azurestaticapps.net/?repo=yactouat%2Fwaste_sorter_demo>

## Contributors

a big thanks goes to the contributors of this project:

<table>
<tbody>
    <tr>
        <td align="center"><a href="https://github.com/yactouat"><img src="https://avatars.githubusercontent.com/u/37403808?v=4" width="100px;" alt="yactouat"/><br /><sub><b>yactouat</b></sub></a><br /><a href="https://github.com/yactouat"></td>
        <td align="center"><a href="https://github.com/ritik2358"><img src="https://avatars.githubusercontent.com/u/98156555?v=4" width="100px;" alt="Ritik Raj"/><br /><sub><b>Ritik Raj</b></sub></a><br /><a href="https://github.com/ritik2358"></td>
    </tr>
</tbody>
</table>