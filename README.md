# eco-up-pdx

This is a project to help Portlanders reduce their environmental impact. I've decided to make it Portland-specific, since the resources available in Portland are different than those in other cities. As this project develops, people are welcome to fork it and make a project for their own cities. 

This project is in its very initial phase! Additional work + documentation coming soon.

## Week 3 Status:

### Work completed:

* Design and 'vision' of the site - the site will have a series of bar graphs showing the average emmission footprint of an American, with suggested habits that users can 'toggle' to see how much they can reduce their impact. 

* Picked frameworks: React and Semantic UI.

* Began playing around with site setup and am currently investigating how to achieve the bar graph main component. I have figured out how I want to interact with the bar graph component as a developer (which may become its own spinoff library), and now am figuring out how to make it happen.

* Scoped the project: originally, I planned to have a back end where users could log in to keep a gamified journal of their successes in reducing their impact. This might still happen (perhaps written as a mobile app in React Native), but will not be part of the PSU OSS 2017 work. 

### Work to do still:

* Write bar graph component for React to achieve the desired user interaction (targeting completion in week 4). UPDATE: Partially complete (see BarGraph.js and BarSegment.js). Still to-do: CSS styling, image overlays, text.

* Write 'panel' component for displaying information to users (targeting completion in week 5).

* Lots of research about carbon emmissions and effective ways individuals can reduce their impact - will happen throughout, but I plan to focus on the technical components before diving into research; if worse comes to worse, I can mock up some 'lorem ipsum' if not all the components are ready for real content.

* Write supporting functions and UI to allow users to see how changing their behaviors impacts their footprint (targeting bulk of work in week 6, completion in week 7).

* Research activisim and organizations people can join to achieve larger structural environmental goals; unfortunately, we can't just take-the-bus-and-drive-less our way out of this situation. I also need to figure out how to weave this through the website. 

* Stretch goal: release my bar graph component and related infrastructure as its own library.

## Built With

* [create-react-app](https://github.com/facebookincubator/create-react-app) - A React project starter to get going fast with React.
* [npm](https://www.npmjs.com/) - Dependency Management
* [Semantic UI React](https://react.semantic-ui.com/introduction) - A library of UI components to use with React. 

## Authors

* **Rachel Philip** - *Initial work* - [rgsphilip](https://github.com/rgsphilip)

<!--See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.-->

## License

This project is licensed under the MIT License - see the [COPYING](COPYING) file for details

## Acknowledgments

* Natan LaFontaine for the idea of the graphical theme throughout this site.
* [PurpleBooth](https://github.com/PurpleBooth) for a great README template