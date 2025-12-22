document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    const pages = document.querySelectorAll('.page');
    const dayBtns = document.querySelectorAll('.day-btn');
    const tables = document.querySelectorAll('.schedule-table');
    const toggle = document.getElementById('themeToggle');
    const icon = toggle.querySelector('i');

    // Переключение страниц
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            navLinks.forEach(a => a.classList.remove('active'));
            pages.forEach(p => { 
                p.classList.remove('active'); 
                p.style.opacity = '0'; 
            });
            link.classList.add('active');
            const page = document.getElementById(link.dataset.page);
            page.classList.add('active');
            setTimeout(() => page.style.opacity = '1', 100);
        });
    });

    // Переключение дней в расписании
    dayBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            dayBtns.forEach(b => b.classList.remove('active'));
            tables.forEach(t => t.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.dataset.day).classList.add('active');
        });
    });

    // Переключение темы
    if (localStorage.getItem('theme') === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        icon.classList.replace('fa-moon', 'fa-sun');
    }

    toggle.addEventListener('click', () => {
        const isLight = document.documentElement.getAttribute('data-theme') === 'light';
        document.documentElement.setAttribute('data-theme', isLight ? 'dark' : 'light');
        icon.classList.toggle('fa-sun');
        icon.classList.toggle('fa-moon');
        localStorage.setItem('theme', isLight ? 'dark' : 'light');
    });
});
