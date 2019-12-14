# Sprint Challenge: Authentication - Dad Jokes

## Description

In this challenge, you build a real wise-guy application. _Dad jokes_ are all the rage these days. Currently the application is trying to receive some `Dad Jokes`, however we are locked out.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment, please work on it alone. It is an opportunity to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

If the instructions are not clear, please seek support from your TL and Instructor on Slack.

The Minimum Viable Product must be completed in three hours.

Follow these steps to set up and work on your project:

- [x] Create a forked copy of this project.
- [ ] Add your _Team Lead_ as collaborator on Github.
- [x] Clone your forked version of the Repository.
- [x] Create a new Branch on the clone: git checkout -b `firstName-lastName`.
- [x] Implement the project on this Branch, committing changes regularly.
- [x] Push commits: git push origin `firstName-lastName`.

Follow these steps for completing your project.

- [x] Submit a Pull-Request to merge `firstName-lastName` branch into `master` on your fork. **Please don't make Pull Requests against Lambda's repository**.
- [x] Please don't merge your own pull request.
- [x] Add your _Team Lead_ as a Reviewer on the Pull-request
- [x] Your _Team Lead_ will count the challenge as done by merging the branch into _master_.

## Commits

Commit your code regularly and use descriptive messages. This helps both you (in case you ever need to return to old code) and your Team Lead.

## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

- [x] What is the purpose of using _sessions_?

When we use sessions, they give us with a way to have state on a web server. They allow us to store data for unique users with unique session IDs we can then persist page information across many requests.

- [x] What does bcrypt do to help us store passwords in a secure manner.

It hashes all data  which avoids storing of plain text. It is gated by a hash function which has a built in Bcrypt cost that can be changed to limit how many hashes can be generated per millisecond/second.

- [x] What does bcrypt do to slow down attackers?

It is gated by a hash function which has a built in Bcrypt cost that can be changed to limit how many hashes can be generated per millisecond/second. This means a brute force attack using tables filled whith possible matches would take decades to thousands of years to match to the actual password. 

- [x] What are the three parts of the JSON Web Token?

1) The Header: An algorithm used to encrypt the token and what type of token it is.

2) The Payload: The claims when using the token

3) The Signature: Uses the encoded header, encoded payload, the secret and uses the algorithm described by the header to create a unique signature that verifies the client sending the Object.

## Minimum Viable Product

Implement an User Authentication System. Hash user's passwords before saving them to the database. Use `JSON Web Tokens` or `Sessions and Cookies` to persist authentication across requests.

- [ ] Implement the `register` and `login` functionality inside `/auth/auth-router.js`. A `user` has `username` and `password`. Both properties are required.
- [ ] Implement the `authenticate` middleware inside `/auth/authenticate-middleware.js`.
- [ ] Write a **minimum o 2 tests** per API endpoint. Write more tests if you have time.

**Note**: the database already has the users table, but if you run into issues, the migrations are available.

## Stretch Problem

Build a front end to show the jokes.

- [ ] Add a React client that connects to the API and has pages for `Sign Up`, `Sign In` and showing a list of `Jokes`.
- [ ] Once you have the functionality down, style it!
