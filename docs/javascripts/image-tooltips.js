document.addEventListener('DOMContentLoaded', function() {
    // Find all abbr elements with image URLs in their title attribute
    const abbrs = document.querySelectorAll('abbr[title^="!["]');
    
    abbrs.forEach(function(abbr) {
        const title = abbr.getAttribute('title');
        
        // Extract image URL from markdown image syntax ![alt](url)
        const urlMatch = title.match(/!\[.*?\]\((.*?)\)/);
        if (urlMatch && urlMatch[1]) {
            const imageUrl = urlMatch[1];
            
            // Create the image tooltip structure
            abbr.classList.add('img-tooltip');
            abbr.removeAttribute('title'); // Remove the title to prevent default tooltip
            
            // Create image element
            const img = document.createElement('img');
            img.src = imageUrl;
            img.classList.add('tooltip-image');
            img.alt = 'Tooltip Image';
            
            // Add the image to the abbr element
            abbr.appendChild(img);
        }
    });
});
