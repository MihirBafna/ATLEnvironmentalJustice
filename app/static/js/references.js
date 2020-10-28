
function contentToHtml(text) {
    return text
    .split('\n\n')
    .map(paragraph => `<p class="citation">${paragraph}</p>`)
    .join('')
}

function parse_references(file) {
    
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById("file-script").innerHTML=contentToHtml(data);
    });
}
