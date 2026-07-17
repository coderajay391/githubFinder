# GitHub User Finder

A small front-end app that fetches and displays public GitHub profile details using the GitHub Users API.

## Features

- Search GitHub users by username
- Shows avatar, login, name, bio, and public repo count
- **Keyboard support**: press **Enter** while the input is focused to run the search

## Preview
<image src="./assets/githubFinder1.png"></image>
<image src="./assets/githubFinder2.png"></image>

## Demo
[Demo](assets/github-finder.m4)

## How it works

- `index.html` provides the input and search button
- `script.js` calls `https://api.github.com/users/{username}` and renders the result

## Run

Just open `frontend/spireX/githubUser/index.html` in your browser.

## Notes

- The GitHub API may rate-limit requests.
- If a user is not found, the app shows **User not found.**
