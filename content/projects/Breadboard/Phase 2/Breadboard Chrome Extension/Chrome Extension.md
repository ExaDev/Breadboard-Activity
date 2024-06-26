---
title: Breadboard Chrome Extension
aliases: []
tags:
  - breadboard/phase/2
  - Chrome
  - chrome_extension
  - React
  - Vite
created: 2024-06-07T10:05:18
modified: 2024-06-25T19:21:56
---

## Breadboard Chrome Extension

A Chrome extension for using Breadboard with the Google Chrome API. Currently, the extension has a single purpose: to summarise web page content and select text. This version of the extension is exploratory. When feasible, a more generalised version will be created to be used with any board.

![Pasted image 20240529141346](projects/Breadboard/files/Pasted%20image%2020240529141346.png)

![333637740-a11a3778-4426-421b-8d26-df431da5abc5](projects/Breadboard/files/333637740-a11a3778-4426-421b-8d26-df431da5abc5.mov)

- [create-breadboard-chrome-extension-templates](https://github.com/ExaDev/breadboard/tree/create-breadboard-chrome-extension-templates/packages/breadboard-chrome-extensions)

Two basic chrome extensions that were built initially while exploring the available options for creating one. In this example, there are two extensions that are built with Vite/React/Typescript and Typescript/Webpack respectively. As a future direction for this branch, we would like to create a template repository for this and have commands such as "create-breadboard-chrome-extension -ts/webpack" or "create-breadboard-chrome-extension -react/vite" that would generate a template for a basic chrome extension using the specified tools and containing a basic breadboard, thus speeding up the initial process of getting started with chrome extensions and breadboard.

- [breadboard-chrome-extension-running-basic-board](https://github.com/ExaDev/breadboard/tree/breadboard-chrome-extension-running-basic-board/packages/breadboard-chrome-extension)

An initial chrome extension built with Vite, React and Typescript that runs a basic breadboard. Users can type a message into the extension's popup window and have the message logged back to them as they type it.

- [breadboaBd-chrome-extension-for-summarising-page](https://github.com/ExaDev/breadboard/tree/breadboard-chrome-extension-for-summarising-page/packages/breadboard-chrome-extension)

The most up-to-date and stable version of this project, that uses the Claude API and Breadboard to summarise either all the text in the current chrome tab or a selected piece of text. The summariser can be run both from the extension's main popup window and from the context menu after selecting a bit of text from a page, right-clicking and selecting the "Breadboard > Get summary" option in the context menu. Compared to the initial branches that were the starting point for this project, the summariser follows a different structure in terms of organising files which seemed like a better choice for a chrome extension built with Vite and React.

- [breadboard-sentiment-analysis-chrome-extension](https://github.com/ExaDev/breadboard/tree/breadboard-sentiment-analysis-chrome-extension/packages/breadboard-chrome-extension)

This follows the same structure as the summariser, but the focus here was to integrate a board that performs sentiment analysis on a selected piece of text.

## Reusable Boards

- [Claude summary](https://github.com/ExaDev/breadboard/blob/claude-summarisation-board-test/packages/breadboard-chrome-extension/src/breadboard/graphs/claudeBoard.json)
  [🔗](https://breadboard-ai.web.app/?board=https%3A%2F%2Fraw.githubusercontent.com%2FExaDev%2Fbreadboard%2Fclaude-summarisation-board-test%2Fpackages%2Fbreadboard-chrome-extension%2Fsrc%2Fbreadboard%2Fgraphs%2FclaudeBoard.json)
- [Sentiment analysis](https://github.com/ExaDev/breadboard/blob/breadboard-sentiment-analysis-chrome-extension/packages/breadboard-chrome-extension/src/breadboard/graphs/sentimentBoard.json)
  [🔗](https://breadboard-ai.web.app/?mode=build&board=https%3A%2F%2Fraw.githubusercontent.com%2FExaDev%2Fbreadboard%2Fbreadboard-sentiment-analysis-chrome-extension%2Fpackages%2Fbreadboard-chrome-extension%2Fsrc%2Fbreadboard%2Fgraphs%2FsentimentBoard.json)

> [!note] For [[SentimentAnalysis]] and [[Text Labelling]], a Hugging Face API key can be generated for free [here](https://huggingface.co/settings/tokens).
