// Votes object to store counts
const votes = {
  "JavaScript": 0,
  "Python": 0,
  "Java": 0
};

// Vote function triggered on button click
function vote(language) {
  votes[language]++;
  updateVotes();
}

// Update UI vote counts
function updateVotes() {
  for (let lang in votes) {
    document.getElementById(lang).textContent = votes[lang];
  }
}

// Simulate real-time voting from other users
setInterval(() => {
  const languages = Object.keys(votes);
  const randomLang = languages[Math.floor(Math.random() * languages.length)];
  votes[randomLang]++;
  updateVotes();
}, 2000);

// Initial update
updateVotes();
