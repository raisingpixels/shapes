<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Shapes</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
        }
        
        .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        header {
            background-color: #2c3e50;
            color: white;
            padding: 1rem 0;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        nav ul {
            display: flex;
            list-style: none;
            justify-content: center;
        }
        
        nav ul li {
            margin: 0 15px;
        }
        
        nav ul li a {
            color: white;
            text-decoration: none;
            font-size: 1.1rem;
            padding: 5px 10px;
            transition: all 0.3s ease;
        }
        
        nav ul li a:hover {
            background-color: #34495e;
            border-radius: 4px;
        }
        
        .active {
            background-color: #34495e;
            border-radius: 4px;
        }
        
        h1 {
            text-align: center;
            margin: 30px 0;
            color: #2c3e50;
        }
        
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 30px;
        }
        
        .shape-container {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .shape-container:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .shape {
            width: 120px;
            height: 120px;
            margin-bottom: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .shape-name {
            font-weight: bold;
            color: #2c3e50;
            text-align: center;
            height: 20px;
        }
        
        /* 2D Shapes */
        .circle {
            width: 100px;
            height: 100px;
            background-color: #3498db;
            border-radius: 50%;
        }
        
        .square {
            width: 100px;
            height: 100px;
            background-color: #e74c3c;
        }
        
        .rectangle {
            width: 120px;
            height: 80px;
            background-color: #2ecc71;
        }
        
        .triangle {
            width: 0;
            height: 0;
            border-left: 50px solid transparent;
            border-right: 50px solid transparent;
            border-bottom: 100px solid #f1c40f;
        }
        
        .pentagon {
            position: relative;
            width: 90px;
            height: 85px;
            background-color: #9b59b6;
            clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
        }
        
        .hexagon {
            width: 100px;
            height: 60px;
            background-color: #1abc9c;
            position: relative;
        }
        
        .hexagon:before,
        .hexagon:after {
            content: "";
            position: absolute;
            width: 0;
            height: 0;
            border-left: 50px solid transparent;
            border-right: 50px solid transparent;
        }
        
        .hexagon:before {
            top: -30px;
            border-bottom: 30px solid #1abc9c;
        }
        
        .hexagon:after {
            bottom: -30px;
            border-top: 30px solid #1abc9c;
        }
        
        .oval {
            width: 120px;
            height: 60px;
            background-color: #e67e22;
            border-radius: 50%;
        }
        
        .trapezoid {
            width: 120px;
            height: 0;
            border-bottom: 80px solid #95a5a6;
            border-left: 20px solid transparent;
            border-right: 20px solid transparent;
        }
        
        /* 3D Scene */
        canvas {
            width: 100%;
            height: 200px;
            cursor: pointer;
        }
        
        /* Footer */
        footer {
            text-align: center;
            margin-top: 50px;
            padding: 20px 0;
            background-color: #2c3e50;
            color: white;
        }
        
        @media (max-width: 600px) {
            .grid {
                grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            }
            
            .shape {
                width: 100px;
                height: 100px;
            }
        }
    </style>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="index.html" class="active">2D Shapes</a></li>
                <li><a href="3d-shapes.html">3D Shapes</a></li>
            </ul>
        </nav>
    </header>
    
    <div class="container">
        <h1>Interactive 2D Shapes</h1>
        <p>Click on any shape to see its name. Explore different geometric forms and their properties.</p>
        
        <div class="grid">
            <div class="shape-container" onclick="showShapeName(this, 'Circle')">
                <div class="shape">
                    <div class="circle"></div>
                </div>
                <div class="shape-name"></div>
            </div>
            
            <div class="shape-container" onclick="showShapeName(this, 'Square')">
                <div class="shape">
                    <div class="square"></div>
                </div>
                <div class="shape-name"></div>
            </div>
            
            <div class="shape-container" onclick="showShapeName(this, 'Rectangle')">
                <div class="shape">
                    <div class="rectangle"></div>
                </div>
                <div class="shape-name"></div>
            </div>
            
            <div class="shape-container" onclick="showShapeName(this, 'Triangle')">
                <div class="shape">
                    <div class="triangle"></div>
                </div>
                <div class="shape-name"></div>
            </div>
            
            <div class="shape-container" onclick="showShapeName(this, 'Pentagon')">
                <div class="shape">
                    <div class="pentagon"></div>
                </div>
                <div class="shape-name"></div>
            </div>
            
            <div class="shape-container" onclick="showShapeName(this, 'Hexagon')">
                <div class="shape">
                    <div class="hexagon"></div>
                </div>
                <div class="shape-name"></div>
            </div>
            
            <div class="shape-container" onclick="showShapeName(this, 'Oval')">
                <div class="shape">
                    <div class="oval"></div>
                </div>
                <div class="shape-name"></div>
            </div>
            
            <div class="shape-container" onclick="showShapeName(this, 'Trapezoid')">
                <div class="shape">
                    <div class="trapezoid"></div>
                </div>
                <div class="shape-name"></div>
            </div>
        </div>
    </div>
    
    <footer>
        <p>&copy; 2025 Interactive Shapes - Educational Geometry Resource</p>
    </footer>
    
    <script>
        function showShapeName(element, name) {
            const nameElement = element.querySelector('.shape-name');
            if (nameElement.textContent === name) {
                nameElement.textContent = '';
            } else {
                nameElement.textContent = name;
            }
        }
    </script>
</body>
</html>
