function remove_clicked_class() {
    document.querySelectorAll('#map .cls-1').forEach((i) => {
        i.classList.remove('clicked');
    })
}
function hidden_all_content() {
    document.querySelectorAll('#map-contents .map-content').forEach((i) => {
        i.classList.add('hidden');
    })
}

document.querySelectorAll('#map .cls-1:not(.no-hover)').forEach((item) => {
    item.addEventListener('mouseover', () => {
        item.style.opacity = 0;
    })
    item.addEventListener('mouseleave', () => {
        item.style.opacity = 0.7;
    })

    item.addEventListener('click', () => {
        remove_clicked_class();
        hidden_all_content();
        item.classList.add('clicked');
        document.querySelector('#'+item.attributes['id'].value+'-text').classList.remove('hidden');
        document.querySelector('#close-map').classList.remove('hidden');
    })
})

document.querySelector('#close-map').addEventListener('click', (i) => {
    remove_clicked_class();
    hidden_all_content();
    document.querySelector('#close-map').classList.add('hidden');
    document.querySelector('#map-contents > #main-text.map-content').classList.remove('hidden');
})