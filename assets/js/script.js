$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('.tabs').tabs({ 'swipeable': true });
});

const btns = document.getElementsByClassName("click-btn");

function showOrHide(event)
{
    event.preventDefault();

    const projOne = document.getElementById("project1");
    const projTwo = document.getElementById("project2");
    //const projThree = document.getElementById("proj3");

    if (event.target.id === "btn-project1")
    {
        showElement(projOne);
        hideElement(projTwo);
    }
    if (event.target.id === "btn-project2")
    {
        showElement(projTwo);
        hideElement(projOne);
    }
}

function showElement(element) { 
    
     //element.style.display = "block"; 
    element.classList.remove("scale-out");
}
function hideElement(element) { 
    element.classList.add("scale-out");
    //element.style.display = "none"; 
}

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', showOrHide);
  }
