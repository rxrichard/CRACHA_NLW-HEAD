const linksSocialMedia = {
  github:"rxrichard",
  youtube:"channel/UCbMw6tocrp1fvt8gm40bbDw",
  facebook:"rxrichard",
  instagram:"rx.richard",
  twitter:"rxrichard",
}

function changeSocialMediaLink() {
  /* document.querySelector('#userName').textContent = "Richard"

  userName.textContent = "Richard Bastos" //ao identificar que é um ID, ele usa o DOM automaticamente

*/
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }

}
changeSocialMediaLink()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
      .then(data => {
        
        userImage.src = data.avatar_url
        userName.textContent = data.name
        userLink.href = data.html_url
        userLogin.textContent = data.login
        bio.textContent = data.bio
      
    })
}

getGitHubProfileInfos()