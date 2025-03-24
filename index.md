<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fun with Shapes | 2D Shapes</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Fun with Shapes</h1>
    </header>
    
    <nav>
        <a href="index.html" class="active">2D Shapes</a>
        <a href="3d-shapes.html">3D Shapes</a>
    </nav>
    
    <main>
        <h2>2D Shapes Gallery</h2>
        <p>Click on any shape to see its name! Have fun exploring these two-dimensional wonders.</p>
        
        <div class="shapes-grid">
            <div class="shape-container" onclick="showShapeName(this, 'Circle')">
                <div class="shape circle"></div>
                <div class="shape-name"></div>
            </div>
            
            <div class="shape-container" onclick="showShapeName(this, 'Square')">
                <div class="shape square"></div>
                <div class="shape-name"></div>
            </div>
            
            <div class="shape-container" onclick="showShapeName(this, 'Rectangle')">
                <div class="shape rectangle"></div>
                <div class="shape-name"></div>
            </div>
            
            <div class="shape-container" onclick="showShapeName(this, 'Triangle')">
                <div class="shape triangle"></div>
                <div class="shape-name"></div>
            </div>
            
            <div class="shape-container" onclick="showShapeName(this, 'Pentagon')">
                <div class="shape pentagon"></div>
                <div class="shape-name"></div>
            </div>
            
            <div class="shape-container" onclick="showShapeName(this, 'Hexagon')">
                <div class="shape hexagon"></div>
                <div class="shape-name"></div>
            </div>
            
            <div class="shape-container" onclick="showShapeName(this, 'Star')">
                <div class="shape star"></div>
                <div class="shape-name"></div>
            </div>
            
            <div class="shape-container" onclick="showShapeName(this, 'Oval')">
                <div class="shape oval"></div>
                <div class="shape-name"></div>
            </div>
        </div>
    </main>
    
    <footer>
        <p>&copy; 2025 Fun with Shapes | A Delightful Shape Explorer</p>
    </footer>

    <script src="scripts.js"></script>
</body>
</html>
