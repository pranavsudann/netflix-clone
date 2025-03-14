<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Netflix Clone</title>
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" href="favicon.ico">
    <link rel ="javascript" href="styl.js">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap">
</head>
<body>
    <!-- Navigation Bar -->
    <header class="header">
        <nav class="navbar">
            <div class="logo">
                <img src="netflix.png" alt="Netflix Logo">
            </div>
            <div class="nav-links">
                <a href="#" class="nav-link">Home</a>
                <a href="#" class="nav-link">TV Shows</a>
                <a href="#" class="nav-link">Movies</a>
                <a href="#" class="nav-link">Latest</a>
                <a href="#" class="nav-link">My List</a>
            </div>
            <div class="search-bar">
                <input type="text" placeholder="Search...">
                <button class="search-button">Search</button>
            </div>
            <div class="user-profile">
                <img src="profile.png" alt="Profile Icon">
            </div>
        </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <h1 class="hero-title">Unlimited movies, TV shows, and more.</h1>
            <p class="hero-subtitle">Watch anywhere. Cancel anytime.</p>
            <button class="cta-button">Get Started</button>
        </div>
    </section>

    <!-- Movie/Show Categories -->
    <section class="categories">
        <h2 class="category-title">Popular on Netflix</h2>
        <div class="category-list">
            <div class="category-item">
                <img src="movie1.png" alt="Interstellar">
                <p class="movie-title">Interstellar</p>
            </div>
            <div class="category-item">
                <img src="tvd.png" alt="Movie 2">
                <p class="movie-title">The Vampire Diaries</p>
            </div>
            <div class="category-item">
                <img src="bb.png" alt="Movie 3">
                <p class="movie-title">Breaking Bad</p>
            </div>
            <div class="category-item">
                <img src="darkk.png" alt="Movie 4">
                <p class="movie-title">Dark</p>
            </div>
            <div class="category-item">
                <img src="tvdd.png" alt="Movie 5">
                <p class="movie-title">The Walking Dead</p>
            </div>
            <div class="category-item">
                <img src="mh.png" alt="Movie 6">
                <p class="movie-title">La Casa De Papel</p>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <p>&copy; 2025 Netflix Clone by PranavSudan. All rights reserved.</p>
            <div class="footer-links">
                <a href="#" class="footer-link">Privacy</a>
                <a href="#" class="footer-link">Terms</a>
                <a href="#" class="footer-link">Contact</a>
            </div>
        </div>
    </footer>
</body>
</html>
