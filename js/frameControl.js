
    // fram display function for iframe
    function myFrame(file){
        
        document.getElementById('myFrame').src = file;
        // document.getElementById("myFrame")
    };

    //js to download my cv
    function downloadCV() {
        const link = document.createElement('a');
        link.href = 'Atlehang Semela cv2.pdf'; // Ensure this file is in the same directory or adjust the path
        link.download = 'Atlehang Semela cv2.pdf';
        link.click();
    }
    

    function navigateFrame(direction) {
        const iframe = document.getElementById('myFrame');
        if (direction === 'back') {
            window.history.back();
        } else if (direction === 'forward') {
            window.history.forward();
        }
    }
    
    

    function myFunction() {
        const toggle = document.getElementById('mode-toggle');
        document.body.classList.toggle('dark-mode', toggle.checked);
    }