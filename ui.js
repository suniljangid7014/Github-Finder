class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    console.log(user);
    this.profile.innerHTML = `
<div class="card card-body container">
<div class="row">
  <div class="col-md-3">
    <img class="img-fluid rounded mb-3" src="${user.profile.avatar_url}" alt="" style="width: 28rem;">
    <a href="${user.profile.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
  </div>
  <div class="col-md-9 mt-3">
    <span class="badge badge-primary">Public Repos: ${user.profile.public_repos}</span>
    <span class="badge badge-secondary">Public Gists: ${user.profile.public_gists}</span>
    <span class="badge badge-success">Followers: ${user.profile.followers}</span>
    <span class="badge badge-info">Following: ${user.profile.following}</span>
    <br><br>
    <ul class="list-group">
      <li class="list-group-item">Name: ${user.profile.name}</li>
      <li class="list-group-item">Bio: ${user.profile.bio}</li>
      <li class="list-group-item">Company: ${user.profile.company}</li>
      <li class="list-group-item">Location: ${user.profile.location}</li>
      <li class="list-group-item">Member since: ${user.profile.created_at}</li>
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
