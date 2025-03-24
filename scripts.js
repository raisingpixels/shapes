// Function for 2D shapes
function showShapeName(container, name) {
    const shapeElement = container.querySelector('.shape');
    const nameElement = container.querySelector('.shape-name');
    
    // Add pop animation
    shapeElement.classList.remove('pop');
    void shapeElement.offsetWidth; // Trigger reflow
    shapeElement.classList.add('pop');
    
    // Display the name
    nameElement.textContent = name;
}

// Function for 3D shapes
document.addEventListener('DOMContentLoaded', function() {
    // Only run on 3D shapes page
    if (document.querySelector('.shape-3d')) {
        const shapeContainers = document.querySelectorAll('.shape-container');
        
        shapeContainers.forEach(container => {
            const shapeName = container.dataset.shape;
            const shapeElement = container.querySelector('.shape-3d');
            const nameElement = container.querySelector('.shape-name');
            
            container.addEventListener('click', () => {
                // Display the name
                nameElement.textContent = shapeName;
                
                // Toggle rotation
                shapeElement.classList.toggle('rotating');
            });
        });
    }
});
