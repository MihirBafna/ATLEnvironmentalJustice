
function contentToHtml(text) {
    return text
    .split('\n\n')
        .map(paragraph => `<p class="info-page" "style="font-family: Helvetica Neue; padding:2%; text-align: left;">${paragraph}</p>`)
    .join('')
}

function parse_references(file) {
    
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById("file-script").innerHTML = '<p "style="font-family: Helvetica Neue; padding:2%; text-align: left;"' +contentToHtml(data) +'</p>';
    });
}
