class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
<div class="card card-body container">
<div class="row">
  <div class="col-md-3">
    <img class="img-fluid rounded mb-3" src="${user.avatar_url}" alt="" style="width: 28rem;">
    <a href="${user.profile.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
  </div>
  <div class="col-md-9 mt-3">
    <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
    <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
    <span class="badge badge-success">Followers: ${user.followers}</span>
    <span class="badge badge-info">Following: ${user.following}</span>
    <br><br>
    <ul class="list-group">
      <li class="list-group-item">Name: ${user.name}</li>
      <li class="list-group-item">Bio: ${user.bio}</li>
      <li class="list-group-item">Company: ${user.company}</li>
      <li class="list-group-item">Location: ${user.location}</li>
      <li class="list-group-item">Member since: ${user.created_at}</li>
    </ul>

  </div>
</div>
</div>  
<h3 class="page-heading text-center mt-4">Latest Repos</h3>
<div id="repos"></div>
        `;
  }

  showRepos(repos) {
    let output = "";

    repos.forEach((repo) => {
      output += `
      
      <div class="card card-body container">
<div class="row">
  <div class="col-md-6">
    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
  </div>
  <div class="col-md-6">
  <span class="badge badge-secondary">Stars: ${repo.stargazers_count}</span>
  <span class="badge badge-success">Watchers: ${repo.watchers_count}</span>
  <span class="badge badge-info">Forks: ${repo.forks_count}</span>
  </div>
</div>
</div>  
      `;
    });

    document.getElementById('repos').innerHTML = output;
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }

  showAlert(message, className) {
    this.clearAlert();

    const div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(message));

    const container = document.getElementById("profile");
    const card = document.querySelector(".card");

    container.insertBefore(div, card);

    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }
}
