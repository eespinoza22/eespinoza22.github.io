function toggleCV(id) {
    var cv = document.getElementById(id);
    cv.style.display = (cv.style.display === 'none' || cv.style.display === '') ? 'block' : 'none';
}