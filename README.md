# Demo app for Event Sourcing architecture

> Demo application to demonstrate the power of the event sourcing architecture for DevelopersBR livestream

## Summary

- [Demo app for Event Sourcing architecture](#demo-app-for-event-sourcing-architecture)
  - [Summary](#summary)
  - [What is event sourcing](#what-is-event-sourcing)
    - [Related material](#related-material)
  - [Running the application](#running-the-application)
  - [Useful tooling](#useful-tooling)
  - [Challenge!](#challenge)
    - [How do I improve?](#how-do-i-improve)

## What is event sourcing

Event sourcing is a development pattern to solve audit problems and make our application more easily maintainable. It is described as:

> **A way to capture all changes to an application state as a sequence of events.**

There's not much jabber about it right now, however this pattern first emerged in one of Martin Fowler's [articles](https://martinfowler.com/eaaDev/EventSourcing.html) in 2005, for some reason it's been forgotten ever since.

I'm not describing it all here, however I have a series of related material (in portuguese) so you can study it for yourself.

### Related material

- [Tardis - A Nodejs library to control time](https://github.com/nxcd/tardis)
- [Paradox - A Nodejs library to aid event sourcing apps](https://github.com/nxcd/paradox)
- [What is event sourcing (talk in portuguese)](https://speakerdeck.com/khaosdoctor/controlando-o-tempo-com-typescript-e-event-sourcing)
- [Let's talk about event sourcing and how it can save your project (in portuguese)](https://imasters.com.br/banco-de-dados/event-sourcing-arquitetura-que-pode-salvar-seu-projeto)
- [An architecture guide to use event sourcing](https://github.com/nxcd/developer-handbook)
- [Livestream video where I build this application (in portuguese)](https://www.meetup.com/DevelopersBR/events/258948273)
- [Slides used in this livestream](https://speakerdeck.com/khaosdoctor/event-sourcing-livestream-developersbr)

## Running the application

This app uses Docker Compose as runner, it'll build and set all your containers, you just need to run `docker-compose up` in the root directory.

## Useful tooling

- [Doctor](https://github.com/nxcd/doctor)
- [Next](https://github.com/nxcd/next)

## Challenge!

This app version has some intentional "errors" and/or misleading designs in order to incentivate students to improve it.

### How do I improve?

Our branches are named `master` which is v1, we have `v2` with some additional improvements. If you want to make even more improvements, clone the project and go to the `v2` branch. Then do your thing and submit a PR for approval.

**DO NOT FORGET TO ADD WHAT YOU HAVE CHANGED IN THE [BACKEND CHANGELOG](./backend/CHANGELOG.md) OR [FRONTEND CHANGELOG](./frontend/CHANGELOG.md) FILES IN ORDER TO LET PEOPLE KNOW WHAT HAS BEEN DONE**

> PR's without changelogs will not be approved