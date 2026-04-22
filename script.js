// Lightbox simples para galeria
document.addEventListener('DOMContentLoaded', () => {
    const gridImgs = document.querySelectorAll('.grid img, .cover img, .member img');
    const lb = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');

    gridImgs.forEach(img => {
        img.addEventListener('click', (e) => {
            lb.style.display = 'flex';
            lbImg.src = img.src;
        });
    });

    lb.addEventListener('click', () => {
        lb.style.display = 'none';
        lbImg.src = '';
    });
});