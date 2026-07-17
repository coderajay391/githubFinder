# GitHub User Finder - Documentation

## What this project does

This mini front-end app lets you type a GitHub username and fetch the corresponding public user profile using the GitHub REST API:

- GET `https://api.github.com/users/{username}`

It then renders:

- Avatar
- Login
- Name
- Bio
- Public repositories

## Files

- **index.html**: UI (input, Search button, result container) and script include
- **style.css**: Styling
- **script.js**: Fetch logic + keyboard interaction

## Keyboard support

- When the cursor is inside the username input (`#username`), pressing **Enter** triggers the Search button click.

## Error handling

- If the input is empty: shows `Please enter a username.`
- If the GitHub user is not found: shows `User not found.`
- If the network/API request fails: shows `Error fetching data.`

## Run instructions

Open:

- `frontend/spireX/githubUser/index.html`

in a browser.

## Notes

- GitHub API rate limits may apply.
- For production use, consider adding a backend/proxy to store an API token and avoid strict rate limits.
