    // Function to animate the progress bars on page load
    window.onload = function() {
        const progressBars = document.querySelectorAll('.progress-bar');
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0'; // Reset width for animation
            setTimeout(() => {
                bar.style.width = width; // Set width to animate
            }, 100);
        });
    };