
    // fram display function for iframe
    function myFrame(file){
        
        document.getElementById('myFrame').src = file;
        // document.getElementById("myFrame")
    };

    //js to download my cv
    function downloadCV(fileName) {
    // Create a link element
    const link = document.createElement('a');
    link.href = fileName;
    link.download = fileName; // Set the download attribute
    document.body.appendChild(link); // Append to body
    link.click(); // Trigger click to download
    document.body.removeChild(link); // Clean up

    // Dark Mode Function
    
    // const toggleSwitch = document.getElementById('mode-toggle');
    // function switchTheme() {
    //     if (toggleSwitch.checked) {
    //         document.documentElement.setAttribute('data-theme', 'dark');
    //         } else {
    //         document.documentElement.setAttribute('data-theme', 'light');
    //         }
    //     }
    //     toggleSwitch.addEventListener('change', switchTheme); 

    // function myFunction() {
    // var element = document.body;
    // element.classList.toggle("dark-mode");
    // }

    function navigateFrame(direction) {
        const iframe = document.getElementById('myFrame');
        if (direction === 'back') {
            window.history.back();
        } else if (direction === 'forward') {
            window.history.forward();
        }
    }
    
    }

    function myFunction() {
        const toggle = document.getElementById('mode-toggle');
        document.body.classList.toggle('dark-mode', toggle.checked);
    }