/**
 * hamburger.js
 * Script de menu hamburger responsive — à inclure dans toutes les pages
 * Usage : <script src="hamburger.js"></script> avant </body>
 *
 * Pré-requis HTML dans chaque page :
 *   1. <div class="nav-overlay" id="navOverlay"></div>  (juste après <body>)
 *   2. <ul class="nav-links" id="navLinks">...</ul>
 *   3. <div class="hamburger" id="hamburger"><span></span><span></span><span></span></div>
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const hamburger  = document.getElementById('hamburger');
    const navLinks   = document.getElementById('navLinks');
    const navOverlay = document.getElementById('navOverlay');

    if (!hamburger || !navLinks) return; // Sécurité

    function openMenu() {
      hamburger.classList.add('active');
      navLinks.classList.add('active');
      if (navOverlay) navOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
      if (navOverlay) navOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    // Toggle au clic du burger
    hamburger.addEventListener('click', function () {
      hamburger.classList.contains('active') ? closeMenu() : openMenu();
    });

    // Fermer en cliquant sur l'overlay
    if (navOverlay) {
      navOverlay.addEventListener('click', closeMenu);
    }

    // Fermer en cliquant sur un lien de navigation
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Fermer avec la touche Échap
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });

    // Fermer si redimensionnement vers desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) closeMenu();
    });
  });
})();