document.querySelectorAll('.navBtn').forEach(button => {
    button.addEventListener('click', () => { window.location.href = button.dataset.link });
});
        

