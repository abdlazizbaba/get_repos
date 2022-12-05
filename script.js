// main variables 

let the_input = document.querySelector(".get-repos input")
let get_button = document.querySelector(".get-button")
let repos_data = document.querySelector(".show-data")

get_button.onclick = get_repos;
// Get Repos Function

function get_repos() {


    if (the_input.value == "") {
        repos_data.innerHTML = "<span> Please Write Github User name.</span>";
    }
    else {
        fetch('https://api.github.com/users/rsalmei/repos')
            .then((response) => response.json())
            .then((repos) => {
                repos_data.innerHTML = '';
    
                // Loop on repos

                repos.forEach(repo => {
                    // repos_data.innerHTML=`<span> Repo-Name : ${repo.full_name} </span> <p> Private : ${repo.private} </p>`
                    // console.log(repo.name)
                    // Repo Name  
                    let main_div = document.createElement("div");
                    let repo_name = document.createTextNode(repo.name)
                    // Private Repo  
                    let private_div = document.createElement("div");
                    let repo_private = document.createTextNode(repo.private)
                    
                    
                    
                    // The URL
                    repo.html_url
                    let url_div = document.createElement("a");
                    let repo_url = document.createTextNode("Visit")
                    
                    
                    // Repo Name 
                    main_div.appendChild(repo_name)
                    
                   
                    // Private Repo
                    private_div.appendChild(repo_private)
                
                    // The URL
                    url_div.appendChild(repo_url)
                    url_div.href = `https://github.com/rsalmei/${repo_name}` 
                    
                    url_div.setAttribute('target','_blank')
                    
                    main_div.appendChild(url_div)

                    // repos_data.appendChild(url_div)
                    repos_data.appendChild(main_div)
                    repos_data.appendChild(private_div)
                })

            })
    }


}