let projectDescription1 = document.getElementById("hidden1");
let projectImage1 = document.getElementById("teaImage");
let expandButton1 = document.getElementById("button1");

projectDescription1.style.display = 'none';
projectImage1.style.display = 'none';

const toggleButton1 = () => {
    if (projectDescription1.style.display === 'none' && projectImage1.style.display === 'none') {
        projectDescription1.style.display = '';
        projectImage1.style.display = '';
    } else {
        projectDescription1.style.display = 'none';
        projectImage1.style.display = 'none';
    }
}

expandButton1.onclick = toggleButton1

let projectDescription2 = document.getElementById("hidden2");
let projectImage2 = document.getElementById("craftsImage");
let expandButton2 = document.getElementById("button2");

projectDescription2.style.display = 'none';
projectImage2.style.display = 'none';

const toggleButton2 = () => {
    if (projectDescription2.style.display === 'none' && projectImage2.style.display === 'none') {
        projectDescription2.style.display = '';
        projectImage2.style.display = '';
    } else {
        projectDescription2.style.display = 'none';
        projectImage2.style.display = 'none';
    }
}

expandButton2.onclick = toggleButton2

let projectDescription3 = document.getElementById("hidden3");
let projectImage3 = document.getElementById("cheatSheet");
let expandButton3 = document.getElementById("button3");

projectDescription3.style.display = 'none';
projectImage3.style.display = 'none';

const toggleButton3 = () => {
    if (projectDescription3.style.display === 'none' && projectImage3.style.display === 'none') {
        projectDescription3.style.display = '';
        projectImage3.style.display = '';
    } else {
        projectDescription3.style.display = 'none';
        projectImage3.style.display = 'none';
    }
}

expandButton3.onclick = toggleButton3