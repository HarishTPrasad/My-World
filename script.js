   // Smooth scrolling for anchor links
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});







function downloadPDF() {
    // Replace this with the actual URL of your PDF file
    var pdfURL = "https://drive.google.com/file/d/1lj-nb5fMp3o-LZUmRjrJMQszbIw5Y6q6/view?usp=sharing";
    
    // Create an invisible anchor element
    var anchor = document.createElement("a");
    anchor.style.display = "none";
    anchor.href = pdfURL;
    anchor.download = "HarishPrasadResume.pdf"; // Change the filename as needed
    
    // Append the anchor to the document body and trigger the click event
    document.body.appendChild(anchor);
    anchor.click();
    
    // Clean up
    document.body.removeChild(anchor);
}