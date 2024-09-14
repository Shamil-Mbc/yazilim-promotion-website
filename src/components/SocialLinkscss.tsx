* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body {
    height: 100%;
    font-family: Arial, sans-serif;
}

.split-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 80px; /* Bar yüksekliği */
    display: flex;
    z-index: 1000;
}

.left-side, .right-side {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;
}

.left-side {
    background-color: #7289da; /* Discord rengi */
}

.right-side {
    background-color: #2c2f33; /* Koyu renk */
}

.left-side a, .right-side a {
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 10px 20px;
    border: 2px solid white;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.left-side a:hover, .right-side a:hover {
    background-color: white;
    color: #7289da; /* Discord rengi */
}

.right-side a:hover {
    color: #2c2f33; /* Koyu renk */
}

@media (max-width: 768px) {
    .left-side a, .right-side a {
        font-size: 1rem;
    }
}