#!/bin/bash

# Array of project names
projects=(
"Day 1 - Digital Clock"
"Day 2 - Stopwatch"
"Day 3 - Countdown Timer"
"Day 4 - Random Quote Generator"
"Day 5 - Tip Calculator"
"Day 6 - Background Color Changer"
"Day 7 - To-Do List"
"Day 8 - Character Counter"
"Day 9 - Palindrome Checker"
"Day 10 - Dice Roller"
"Day 11 - Rock Paper Scissors"
"Day 12 - Weather Fetcher"
"Day 13 - BMI Calculator"
"Day 14 - Currency Converter"
"Day 15 - Random Joke Generator"
"Day 16 - Image Carousel"
"Day 17 - Drawing Pad"
"Day 18 - Keyboard Event Tester"
"Day 19 - Password Strength Checker"
"Day 20 - Light Dark Mode Toggle"
"Day 21 - Quiz App"
"Day 22 - Form Validator"
"Day 23 - Memory Game"
"Day 24 - Random Background Gradient"
"Day 25 - Emoji Picker"
"Day 26 - Notes App"
"Day 27 - Movie Search"
"Day 28 - Meme Generator"
"Day 29 - Music Player"
"Day 30 - Whack-a-Mole Game"
)

# Loop through the projects array
for project in "${projects[@]}"
do
    # Replace spaces with underscores for folder name
    folder_name="${project// /_}"
    
    # Make project folder
    mkdir -p "$folder_name"
    
    # Create index.html
    cat > "$folder_name/index.html" <<EOL
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$project</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>$project</h1>

    <script src="script.js"></script>
</body>
</html>
EOL

    # Create style.css
    cat > "$folder_name/style.css" <<EOL
/* $project styles */
body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 2em;
}
EOL

    # Create script.js
    cat > "$folder_name/script.js" <<EOL
// $project logic
console.log("$project loaded");
EOL

done

echo "All 30 projects created successfully!"
