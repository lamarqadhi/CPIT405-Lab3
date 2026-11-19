// Dark / Light Mode

const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "Switch to Light Mode";
    } else {
        themeButton.textContent = "Switch to Dark Mode";
    }

});

// Show More / Show Less

const aboutButton = document.getElementById("about-toggle");
const moreAbout = document.getElementById("more-about");

aboutButton.addEventListener("click", function() {

    if (moreAbout.hidden) {
        moreAbout.hidden = false;
        aboutButton.textContent = "Show Less";
    } else {
        moreAbout.hidden = true;
        aboutButton.textContent = "Show More";
    }

});

// Dynamic Projects

// 
const projects = [

    {
        title: "Munasfa",
        description: "A web application designed to simplify managing shared expenses and payments.",
        category: "Web",
        technologies: ["HTML", "CSS", "JavaScript"]
    },

    {
        title: "AIDeskClean",
        description: "An AI-powered file organization platform that helps users classify and organize files.",
        category: "Programming",
        technologies: ["Python", "Streamlit", "Ollama"]
    },

    {
        title: "ArtEx Exhibition System",
        description: "A Java-based system for managing art exhibitions, workshops, and bookings.",
        category: "Programming",
        technologies: ["Java", "MySQL", "Java Swing"]
    }

];


const projectList = document.getElementById("project-list");


function displayProjects(projectArray) {

    projectList.innerHTML = "";

    
    for (let project of projectArray) {

        const card = document.createElement("article");
        card.classList.add("project-card");

        const title = document.createElement("h3");
        title.textContent = project.title;

        const description = document.createElement("p");
        description.textContent = project.description;

        const category = document.createElement("p");
        category.textContent = "Category: " + project.category;
        category.classList.add("project-category");

        const technologies = document.createElement("p");
        technologies.textContent = "Technologies: " + project.technologies.join(", ");

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(category);
        card.appendChild(technologies);

        projectList.appendChild(card);
    }

}
displayProjects(projects);

// Project Filtering

const filterButtons = document.querySelectorAll(".filter-button");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedCategory = button.dataset.category;

        if (selectedCategory === "All") {

            displayProjects(projects);

        } else {

            const filteredProjects = projects.filter(function(project) {
                return project.category === selectedCategory;
            });

            displayProjects(filteredProjects);
        }

    });

});

// Print / Save as PDF

const printButton = document.getElementById("print-button");

printButton.addEventListener("click", function() {

    window.print();

});