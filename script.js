const projects = {
    frontend: [
      {
        title: "Online Education Platform",
        img: "images/education.png",
        desc: "This is an online education website that provides a variety of courses for learners of all levels. The platform connects students with expert tutors and offers an interactive learning experience using modern web technologies built with HTML, CSS, and JavaScript.",
        link: "https://github.com/Chafutwa/portfolio"
      },
      {
        title: "Landing Page",
        img: "images/landing.png",
        desc: "A responsive landing page for a fictional startup.",
        link: "https://github.com/Chafutwa/landing-page"
      }
    ],
    fullstack: [
      {
        title: "Diet Recommendation System",
        img: "images/diet.png",
        desc: "A diet recommendation web application using content-based approach with Scikit-Learn, HTML, CSS and JavaScript",
        link: "https://github.com/Chafutwa/Diet-Reccomendation-System"
      },
      {
        title: "E-Commerce Site",
        img: "images/ecommerce.png",
        desc: "A fullstack e-commerce site with user auth and payments.",
        link: "https://github.com/Chafutwa/ecommerce-site"
      }
    ],
    data: [
      {
        title: "Sales Dashboard",
        img: "images/sales-dashboard.png",
        desc: "A dashboard visualizing company sales with Plotly.",
        link: "https://github.com/Chafutwa/sales-dashboard"
      },
      {
        title: "Nutrition Analyzer",
        img: "images/nutrition-analyzer.png",
        desc: "A data science project analyzing food nutrients.",
        link: "https://github.com/Chafutwa/nutrition-analyzer"
      }
    ]
  };
  
  function showProjects(type) {
    const grid = document.getElementById("project-grid");
    grid.innerHTML = "";
  
    projects[type].forEach(project => {
      const card = `
        <div class="project-card">
          <img src="${project.img}" alt="${project.title}">
          <h3>${project.title}</h3>
          <p>${project.desc}</p>
          <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="github-btn">View on GitHub</a>
        </div>
      `;
      grid.innerHTML += card;
    });
  }
  