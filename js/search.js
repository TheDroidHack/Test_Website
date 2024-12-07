document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get('query');
    const resultsContainer = document.getElementById('results');
  
    const tutorials = [
      { title: "Python", description: "Learn Python, the most popular programming language for web and data science.", image: "images/tutorial-image.jpg", link: "/python/what_is_python.html" },
      { title: "Java", description: "Master Java to create robust web and mobile applications.", image: "images/tutorial-image.jpg", link: "#" },
      { title: "Kotlin", description: "Get started with Kotlin, the modern language for Android development.", image: "images/tutorial-image.jpg", link: "#" },
      { title: "C++", description: "Explore C++ for high-performance software and game development.", image: "images/tutorial-image.jpg", link: "#" },
      { title: "Ethical Hacking", description: "Secure systems and networks with ethical hacking techniques.", image: "images/tutorial-image.jpg", link: "/ethical_hacking/what_is_ethical_hacking.html" },
    ];
  
    if (query) {
      const filteredTutorials = tutorials.filter(tutorial =>
        tutorial.title.toLowerCase().includes(query.toLowerCase())
      );
  
      if (filteredTutorials.length > 0) {
        filteredTutorials.forEach(tutorial => {
          const card = `
            <div class="col">
              <div class="card h-100">
                <img src="${tutorial.image}" class="card-img-top" alt="${tutorial.title}">
                <div class="card-body">
                  <h5 class="card-title">${tutorial.title}</h5>
                  <p class="card-text">${tutorial.description}</p>
                  <a href="${tutorial.link}" class="btn btn-primary">Learn ${tutorial.title}</a>
                </div>
              </div>
            </div>
          `;
          resultsContainer.innerHTML += card;
        });
      } else {
        resultsContainer.innerHTML = `<p class="text-center">No tutorials found for "${query}"</p>`;
      }
    } else {
      resultsContainer.innerHTML = `<p class="text-center">Please enter a search term.</p>`;
    }
  });
  