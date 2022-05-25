
function isComingFilm() {
    document.getElementById("isComingFilm").style.display  = "grid";
    document.getElementById("serial").style.display  = "none";
    document.getElementById("allFilm").classList.add("off");
    document.getElementById("allFilm").classList.remove("on");
    document.getElementById("isComing").classList.remove("off");
    document.getElementById("isComing").classList.add("on");
    
}

function allFilm() {
    document.getElementById("isComingFilm").style.display  = "none";
    document.getElementById("serial").style.display  = "grid";
    document.getElementById("allFilm").classList.add("on");
    document.getElementById("allFilm").classList.remove("off");
    document.getElementById("isComing").classList.remove("on");
    document.getElementById("isComing").classList.add("off");
}

function nextPage(){
    document.getElementById("page2").style.display = "grid";
    document.getElementById("page1").style.display = "none";
    document.getElementById("pagination-2").classList.add("active");
    document.getElementById("pagination-1").classList.remove("active");
}

