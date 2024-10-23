document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.querySelector('.cta-btn');
    
    // Alert for starting course
    startButton.addEventListener('click', function() {
        alert("Welcome! Get ready to start your language learning journey.");
    });

    // Simple animation for features section
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.addEventListener('mouseover', () => {
            feature.style.transform = "scale(1.05)";
            feature.style.transition = "0.3s";
        });

        feature.addEventListener('mouseout', () => {
            feature.style.transform = "scale(1)";
        });
    });
});
