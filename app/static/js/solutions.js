new fullpage("#fullPage", {
    autoScrolling: true,
    navigation: true,
    navigationPosition: 'left',
    bigSectionsDestination: top,
    // css3: false,
    navigationTooltips: ['What To Do?', 'Government', 'Organizations', 'Social Media' ]
})
$(document).on('click', '#start', function () {
    fullpage_api.moveSectionDown();
});
function contentToHtml(text) {
    return text
    .split('\n\n')
    .map(paragraph => paragraph.length > 20 ? `<p class="solutions-page">${paragraph}</p>`: `<h1 class="subtitle">${paragraph}</h1>`)
    .join('')
}

function parse_references(file) {
    
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById("file-script").innerHTML=contentToHtml(data);
    });
}
