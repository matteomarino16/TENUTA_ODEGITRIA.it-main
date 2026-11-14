// Decorazioni natalizie sull'immagine principale (neve, palline, luci), solo con html.natale.
(function () {
    var root = document.documentElement;
    if (!root.classList.contains('natale')) return;
    var hero = document.getElementById('hero') || document.querySelector('.gallery-hero');
    if (!hero) return;
    if (getComputedStyle(hero).position === 'static') hero.style.position = 'relative';

    // Filo di luci sul bordo inferiore
    var lights = document.createElement('div');
    lights.className = 'natale-lights';
    lights.setAttribute('aria-hidden', 'true');
    hero.appendChild(lights);

    // Palline appese
    var baubles = document.createElement('div');
    baubles.className = 'natale-baubles';
    baubles.setAttribute('aria-hidden', 'true');
    baubles.style.top = (document.querySelector('header') ? document.querySelector('header').offsetHeight : 90) + 'px';
    for (var b = 0; b < 4; b++) baubles.appendChild(document.createElement('span'));
    hero.appendChild(baubles);

    // Neve (non per chi ha ridotto le animazioni)
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var box = document.createElement('div');
    box.className = 'natale-snow';
    box.setAttribute('aria-hidden', 'true');
    var count = window.innerWidth < 768 ? 28 : 55;
    for (var i = 0; i < count; i++) {
        var s = document.createElement('span');
        var size = 2 + Math.random() * 4;
        s.style.width = size + 'px';
        s.style.height = size + 'px';
        s.style.left = (Math.random() * 100) + '%';
        s.style.opacity = (0.45 + Math.random() * 0.5).toFixed(2);
        s.style.animationDuration = (9 + Math.random() * 12).toFixed(1) + 's';
        s.style.animationDelay = (-Math.random() * 20).toFixed(1) + 's';
        box.appendChild(s);
    }
    hero.appendChild(box);
})();
