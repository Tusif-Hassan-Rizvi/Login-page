let slidelog = document.getElementById('slidelog');
let logbtn = document.getElementById('logbtn');

slidelog.style.display = 'none';

logbtn.addEventListener('click', () => {
    slidelog.style.display = 'block';

    setTimeout(() => {
        slidelog.style.display = 'none';
    }, 500);

    logbtn.style.backgroundColor='white';
    logbtn.style.color='green';

    setTimeout(() => {
        logbtn.style.background='none';
        logbtn.style.color='white';
    }, 100);
});


