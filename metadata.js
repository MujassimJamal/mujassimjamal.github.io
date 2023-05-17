// metadata.js

// Create the meta tag
const metaTag = document.createElement('meta');
metaTag.setAttribute('charset', 'utf-8');
metaTag.setAttribute('name', 'viewport');
metaTag.setAttribute('content', 'width=device-width, initial-scale=1');

// Create the link elements
const bootstrapLink = document.createElement('link');
bootstrapLink.rel = 'stylesheet';
bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css';
bootstrapLink.integrity = 'sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ';
bootstrapLink.crossOrigin = 'anonymous';

const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css?family=Oswald:400,300,700';

// Create the script element
const bootstrapScript = document.createElement('script');
bootstrapScript.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js';
bootstrapScript.integrity = 'sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe';
bootstrapScript.crossOrigin = 'anonymous';

// Append the elements to the document's head
document.head.appendChild(metaTag);
document.head.appendChild(bootstrapLink);
document.head.appendChild(fontLink);
document.head.appendChild(bootstrapScript);