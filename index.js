// Function to handle smooth scrolling for navigation links
function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

// Add event listeners to the navigation links
const navLinks = document.querySelectorAll(".navbar-menu ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    const target = this.getAttribute("href");
    smoothScroll(target); // Scroll to the target section
  });
});

// To Toggle between the close and bar icon to show dropdown
const toggleBtn = document.querySelector(".toggle-menu");
const toggleIcon = document.querySelector(".toggle-menu i");
const toggleMenu = document.querySelector(".toggle-options");

toggleBtn.onclick = () => {
  toggleMenu.classList.toggle("open-menu");
  const isOpen = toggleMenu.classList.contains("open-menu");
  toggleIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

// skills
const skills = [
  {
    category: "Programming Languages",
    items: ["HTML", "CSS", "JavaScript", "Python", "GraphQL", "Go Programming"],
  },
  {
    category: "Frameworks / Libraries",
    items: [
      "Bootstrap",
      "ReactJS",
      "Redux",
      "Redux Toolkit",
      "React Router",
      "Axios",
      "ExpressJS",
    ],
  },
  {
    category: "Runtime Environment",
    items: ["Node.js"],
  },
  {
    category: "Devops",
    items: ["Docker", "Kubernetes", "Helm", "Git", "Jenkins"],
  },
  {
    category: "Package Managers",
    items: ["Yarn", "NPM"],
  },
  {
    category: "Build Tools",
    items: ["Webpack"],
  },
];

function createSkillsSection(skillsData) {
  const skillsContainer = document.getElementById("skills-container");

  skillsData.forEach((skillCategory) => {
    const categoryTitle = document.createElement("h3");
    categoryTitle.textContent = skillCategory.category;

    const categoryList = document.createElement("ul");

    skillCategory.items.forEach((skillItem) => {
      const listItem = document.createElement("li");
      listItem.textContent = skillItem;
      categoryList.appendChild(listItem);
    });

    const categorySection = document.createElement("div");
    categorySection.classList.add("skill-type");
    categorySection.appendChild(categoryTitle);
    categorySection.appendChild(categoryList);

    skillsContainer.appendChild(categorySection);
  });
}

createSkillsSection(skills);

// Projects

const projectDetails = [
  {
    index: "01",
    name: "Cara E-commerce website",
    logo: "images/caraecommerce.png",
    websiteLink: "https://harshitha-e-commerce.netlify.app/",
    projectLink:
      "https://github.com/harshithareddy123456/CaraE-commercewebsite",
    technology: "HTML,CSS,Javascript",
    desc: "Basic E-commerce website using HTML,CSS,Javascript",
  },
  {
    index: "02",
    name: "Comfystore",
    logo: "images/comfystore.png",
    websiteLink: "https://harshitha-comfystore.netlify.app/",
    projectLink: "https://github.com/harshithareddy123456/Comfystore",
    technology: "HTML,CSS,Javascript",
    desc: "Develop an interactive interior design application using HTML, CSS, and JavaScript for showcasing projects, providing customization tools, and facilitating user inquiries.",
  },
];

function createProjectElement(project) {
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project");

  const projectLogo = document.createElement("img");
  projectLogo.src = project.logo;
  projectLogo.alt = project.name;
  projectLogo.width = "600";
  projectLogo.height = "400";
  projectLogo.classList.add("project-logo");
  projectContainer.appendChild(projectLogo);

  const projectTitle = document.createElement("h3");
  projectTitle.textContent = project.name;
  projectTitle.classList.add("project-title");
  projectContainer.appendChild(projectTitle);

  const projectDesc = document.createElement("p");
  projectDesc.textContent = project.desc;
  projectDesc.classList.add("project-desc");
  projectContainer.appendChild(projectDesc);

  const projectTech = document.createElement("p");
  projectTech.textContent = `Technology: ${project.technology}`;
  projectTech.classList.add("project-tech");
  projectContainer.appendChild(projectTech);

  const projectLinks = document.createElement("div");
  projectLinks.classList.add("project-links");

  const websiteLink = document.createElement("a");
  websiteLink.href = project.websiteLink;
  websiteLink.target = "_blank";
  websiteLink.textContent = "Visit Website";
  websiteLink.classList.add("project-link");
  projectLinks.appendChild(websiteLink);

  const projectLink = document.createElement("a");
  projectLink.href = project.projectLink;
  projectLink.target = "_blank";
  projectLink.textContent = "GitHub Repo";
  projectLink.classList.add("project-link");
  projectLinks.appendChild(projectLink);

  projectContainer.appendChild(projectLinks);

  return projectContainer;
}

function createProjectsSection(projectsData) {
  const projectsContainer = document.getElementById("projects-container");

  projectsData.forEach((project) => {
    const projectElement = createProjectElement(project);
    projectsContainer.appendChild(projectElement);
  });
}

createProjectsSection(projectDetails);

// experience

const experienceDetails = [
  {
    name: "Accenture",
    logo: "images/accenture.jpg",
    role: "Application Development Senior Analyst",
    year: "Jul 2021 – Current",
    location: "Bengaluru",
    points: [
      "➤ Led the development of Compliance as Code responsive user interfaces utilizing a powerful stack including ReactJS, GraphQL with Go, and PostgreSQL. Implemented micro frontend concepts to seamlessly integrate compliance solutions within project workflows. The result was a remarkable 25% increase in user retention rates and a substantial 75% reduction in compliance issues. This transformative approach not only enhanced user experience but also significantly mitigated risks, ensuring seamless production of projects while adhering to industry standards and regulations",
      "➤ Utilized babel, webpack and npm to manage dependencies, bundle assets, and optimize frontend development workflow, ensuring efficient and streamlined processes for delivering high-quality applications",
      "➤ Integrated APIs efficiently using GraphQL, enabling seamless data fetching, manipulation, and real-time updates for enhanced user experiences.",
      "➤ Engineered a ChatGPT-inspired application using Python and Azure OpenAI, with React and GraphQL frontend, coupled with Go and PostgreSQL backend for optimal performance and scalability.",
      "➤ Implemented state management solutions like Redux and MobX, ensuring efficient data flow and simplified UI state handling.",
      "➤ Conducted comprehensive unit testing and participated in code reviews to maintain high code quality and deliver bug-free applications.",
      "➤ Designed and deployed AWS-based Kubernetes clusters, effectively enabling seamless containerized application deployment and scaling.",
      "➤ Successfully designed and deployed Kubernetes-based web applications utilizing Pods, Deployments, Services,and ConfigMaps, achieving high availability and scalability.",
      "➤ Developed a centralized static web application using HTML5, CSS3, Javascript serving as a hub for multiple projects, enhancing user convenience and accessibility.",
      "➤ Spearheaded the implementation of DevOps practices, setting up CI/CD pipelines using Jenkins, Docker, and Kubernetes, resulting in a 40% reduction in development cycle times.",
      "➤ Proficient in Git for version control, establishing effective branching strategies and CI/CD pipelines with the DevOps team.",
      "➤ I  took the initiative to spearhead the development of compliance-as-code solutions successfully from the ground up for UI development, assembling a team of developers to accomplish this task.",
    ],
  },
];

function createExperienceElement(experience) {
  const experienceElement = document.createElement("div");
  experienceElement.innerHTML = `
               <div class="leftInfo">
               <p class="role">${experience.role}</p>
               <img src="${experience.logo}" alt="${
    experience.name
  } Logo" style="max-width: 200px;">
                <h2>${experience.name}</h2>
                <p class="year">${experience.year}</p>
                <p class="location">${experience.location}</p>
               </div>
                <ul>
                    ${experience.points
                      .map((point) => `<li>${point}</li>`)
                      .join("")}
                </ul>
            `;
  return experienceElement;
}

const experienceContainer = document.getElementById("experience-container");
experienceDetails.forEach((experience) => {
  const experienceElement = createExperienceElement(experience);
  experienceContainer.appendChild(experienceElement);
});

//education

const educationDetails = [
  {
    name: "Dayananda Sagar College Engineering",
    board: "Bachelor Of Engineering(BE)",
    course: "Electronics and Communication Engineering",
    year: "June 2017 – Jul 2021",
    points: "8.34 CGPA",
  },
];

function createEducationDetails(educationData) {
  const educationDetails = document.getElementById("education-details");

  educationData.forEach((edu) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.textAlign = "center";
    card.style.fontSize = "30px";

    const createDetailElement = (text) => {
      const detail = document.createElement("p");
      detail.textContent = ` ${text}`;
      return detail;
    };

    card.appendChild(createDetailElement(edu.name));
    card.appendChild(createDetailElement(edu.board));
    card.appendChild(createDetailElement(edu.course));
    card.appendChild(createDetailElement(edu.year));
    card.appendChild(createDetailElement(edu.points));

    educationDetails.appendChild(card);
  });
}

createEducationDetails(educationDetails);

//Scroll To Top
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;
function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

// Add this JavaScript code to your index.js or inside a <script> tag at the end of your HTML body

// Function to add the 'fade-up' class to elements in the viewport
function addFadeUpAnimation(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-up");
      // Once the animation is applied, we don't need to observe this element anymore
      observer.unobserve(entry.target);
    }
  });
}

// Intersection Observer configuration
const options = {
  root: null, // Use the viewport as the root
  rootMargin: "0px", // No margin around the viewport
  threshold: 0.3, // Trigger when 30% of the element is in the viewport
};

// Create the Intersection Observer instance
const observer = new IntersectionObserver(addFadeUpAnimation, options);

// Get all elements with the class 'fade-up' and start observing them
const fadeUpElements = document.querySelectorAll(".fade-up");
fadeUpElements.forEach((element) => {
  observer.observe(element);
});
