
const categoryLists = document.querySelectorAll('.category-list');

categoryLists.forEach((categoryList) => {
    let isDragging = false;
    let startX, scrollLeft;

    // Mouse Down Event
    categoryList.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - categoryList.offsetLeft;
        scrollLeft = categoryList.scrollLeft;
    });

    // Mouse Leave Event
    categoryList.addEventListener('mouseleave', () => {
        isDragging = false;
    });

    // Mouse Up Event
    categoryList.addEventListener('mouseup', () => {
        isDragging = false;
    });

    // Mouse Move Event
    categoryList.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - categoryList.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed
        categoryList.scrollLeft = scrollLeft - walk;
    });
});

// Search Bar Functionality
const searchBar = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', () => {
    const query = searchBar.value.trim();
    if (query) {
        alert(`Searching for: ${query}`);
        // You can replace this with an actual search function or API call
    } else {
        alert('Please enter a search term.');
    }
});

// Hover Effect on Movie Posters
const categoryItems = document.querySelectorAll('.category-item');

categoryItems.forEach((item) => {
    const img = item.querySelector('img');
    const title = item.querySelector('.movie-title');

    item.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.05)';
        title.style.color = '#e50914'; // Netflix red
    });

    item.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
        title.style.color = '#fff'; // Reset to white
    });
});

// Optional: Load More Movies on Scroll
window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 100) {
        // Simulate loading more movies
        const newMovies = [
            { src: 'movie6.jpg', title: 'Movie 6' },
            { src: 'movie7.jpg', title: 'Movie 7' },
            { src: 'movie8.jpg', title: 'Movie 8' },
            { src: 'movie9.jpg', title: 'Movie 9' },
            { src: 'movie10.jpg', title: 'Movie 10' },
        ];

        const categoryList = document.querySelector('.category-list');
        newMovies.forEach((movie) => {
            const newItem = document.createElement('div');
            newItem.classList.add('category-item');
            newItem.innerHTML = `
                <img src="${movie.src}" alt="${movie.title}">
                <p class="movie-title">${movie.title}</p>
            `;
            categoryList.appendChild(newItem);
        });
    }
});