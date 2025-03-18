
# Check if src directory exists
if [ ! -d "src" ] || [ ! -d "public" ]; then
    echo "Error: Can't proceed delete without src or public folder"
    exit 1
fi

# Prompt for confirmation
echo "@shinsouhitoshi1203 / reset.sh"
echo "---------------------------------------"
echo "Warning: This will reset your src and public folder + your index.html."
echo "This action should be done for creating a blank project with Vite."
read -p "Are you sure you want to continue? (y/N): " confirm

if [ "$confirm" != "y" ] && [ "$confirm" != "Y" ]; then
    echo "sigh . . . . . . . ."
    exit 0
fi



#RESET INDEX.HTML
rm -rf "./index.html"
cat > ./index.html << 'EOL'
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>  [YOUR TITLE]  </title>
</head>

<body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
</body>

</html>
EOL


#CLEAR ALL BS ICONS IN PUBLIC FOLDER
rm -rf public/*


#CLEAR ALL FILES IN SRC FOLDER
# Remove all files and directories in src
rm -rf src/*


#!  RESET SRC FOLDER WITH ONLY TWO FILES MAIN.JSX AND APP.JSX

# Create src directory if it doesn't exist
mkdir -p src

# Create App.jsx
cat > src/App.jsx << 'EOL'
function App() {
    return (
    <>
        
    </>
    );
}

export default App;
EOL

# Create main.jsx
cat > src/main.jsx << 'EOL'
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const $ = document.querySelector.bind(document);

const root = ReactDOM.createRoot($('#root'));

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
EOL

echo "You have reset your Vite + React project"