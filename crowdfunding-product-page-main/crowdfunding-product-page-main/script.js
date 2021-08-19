var backThisProject = document.getElementById("backThisProject");
var closeThisProject = document.getElementsByClassName("modal__nav__close-menu");

backThisProject.addEventListener("click", showProject);
closeThisProject[0].addEventListener("click", HideProject);

function showProject(){
    let modal = document.getElementsByClassName('modal');
    let header = document.getElementsByClassName('header');
    let introduce = document.getElementsByClassName('introduce');
    let data = document.getElementsByClassName('data');
    let project = document.getElementsByClassName('project');

    let arr = [];
    arr.push(header);
    arr.push(introduce);
    arr.push(data);
    arr.push(project);

    for (let i = 0; i < 4; i++)
    {
        arr[i][0].style.opacity = "0.5";
    }
    modal[0].style.display = "block";
}

function HideProject(){
    let modal = document.getElementsByClassName('modal');
    let header = document.getElementsByClassName('header');
    let introduce = document.getElementsByClassName('introduce');
    let data = document.getElementsByClassName('data');
    let project = document.getElementsByClassName('project');

    let arr = [];
    arr.push(header);
    arr.push(introduce);
    arr.push(data);
    arr.push(project);

    for (let i = 0; i < 4; i++)
    {
        arr[i][0].style.opacity = "1";
    }
    modal[0].style.display = "none";
    console.log(1)
}