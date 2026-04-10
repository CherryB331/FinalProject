document.querySelectorAll('.navBtn').forEach(button => {
    button.addEventListener('click', () => { window.location.href = button.dataset.link });
});


fetch("https://worldtimeapi.org/api/ip")
  .then(res => res.json())
  .then(data => {
    const apiTime = new Date(data.datetime);
    document.getElementById('datetime').textContent = apiTime.toLocaleString();
  });