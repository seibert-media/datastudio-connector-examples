# Data Studio Connector Examples

This repository contains sample implementations of Google Data Studio Connectors. Find [more information on what those are and how to conceptualize them in this blog post](https://blog.seibert-media.com/2018/10/30/google-apps-scripts-clasp-and-data-studio/). 

## Getting Started

These instructions will get you a copy of the collection setup and ready for development and testing purposes. See deployment for notes on how to deploy any changed versions you may derive to Data Studio.

### Prerequisites

These examples depend on [Google Clasp](https://github.com/google/clasp). 

```bash
npm install --global @google/clasp
```

Also, [login to you Google account and OAuth2 yourself](https://github.com/google/clasp#login) to clasp. 

### Installing

To get started using these examples, you'll need a Google Apps Script project. You can either create one manually at [script.google.com](https://script.google.com/home) or [use clasp to do it for you](https://github.com/google/clasp#create). 

You can then [clone the project](https://github.com/google/clasp#clone) to get it onto your development environment, and maybe check it into your own VCS. 

Run `npm install` in the directories to set up typing where required. 

## Running the tests

There are currently no tests. If you feel like we need some, feel free to contribute; especially if you want to really expand the scope of these examples.  

## Deployment

Save your changes to the project by executing a `clasp push`. Then make the connector available to your Data Studio by `clasp deploy`ing a version and referencing that in the Data Studio UI (see [the aforementioned blog post](https://blog.seibert-media.com/2018/10/30/google-apps-scripts-clasp-and-data-studio/) for a step by step guide).

After configuring your connector, check it out in the Reports section of Data Studio. 

## Built With

* [clasp](https://github.com/google/clasp) - literally (because it will transpile any JavaScript >= ES6 and TypeScript)

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Ingmar Drewing** and **Julian Felix Rost** - *Initial work* - [ingmardrewing](https://github.com/ingmardrewing), [j-frost](https://github.com/j-frost)

See also the list of [contributors](https://github.com/seibert-media/datastudio-connector-examples/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
