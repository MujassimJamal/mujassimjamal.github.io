// metadata.js

// Define the meta tags, stylesheets, and scripts as strings
const metaTags = `
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
`;

const stylesheets = `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link href='http://fonts.googleapis.com/css?family=Oswald:400,300,700' rel='stylesheet' type='text/css'>
`;

const scripts = `
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
    crossorigin="anonymous"></script>
`;

// Append the meta tags, stylesheets, and scripts to the document's head
document.head.innerHTML += metaTags;
document.head.innerHTML += stylesheets;
document.head.innerHTML += scripts;
