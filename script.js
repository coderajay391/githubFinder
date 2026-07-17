const getUser = async () => {
  const username = document.getElementById("username").value.trim();
  const result = document.getElementById("result");

  if (!username) {
    result.innerHTML = "<p>Please enter a username.</p>";
    return;
  }

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    if (data.message === "Not Found") {
      result.innerHTML = "<p>User not found.</p>";
    } else {
      result.innerHTML = `
        <div class="card">
          <img src="${data.avatar_url}" alt="Avatar">
          <h2>${data.login}</h2>
          <p><strong>Name:</strong> ${data.name || "N/A"}</p>
          <p><strong>Bio:</strong> ${data.bio || "N/A"}</p>
          <p><strong>Public Repos:</strong> ${data.public_repos}</p>
          <button class="btn"><a href="${data.html_url}" target="_blank">View Profile</a></button>
        </div>
      `;
    }
  } catch (error) {
    result.innerHTML = "<p>Error fetching data.</p>";
  }
};

// Keyboard input: press Enter in the input to search
document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("username");
  const searchBtn = document.getElementById("enter");

  if (!usernameInput || !searchBtn) return;

  usernameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchBtn.click();
    }
  });
});
