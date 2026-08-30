// ===== Biblioteca de recursos (filtros) =====
// Se ejecuta primero y de forma aislada: es el contenido más importante
// de la página de recursos, así que no debe depender de que el resto
// del script funcione sin errores.
try {
  var grid = document.querySelector('#resource-grid');
  if (grid && window.RESOURCES) {
    var render = function (list) {
      grid.innerHTML = list.map(function (r) {
        return '<article class="card"><div class="icon">' + r.icon + '</div><span class="tag-pill">' + r.cat + '</span><span class="tag-pill">' + r.format + '</span><h3>' + r.title + '</h3><p>' + r.desc + '</p><small>' + r.age + '</small></article>';
      }).join('');
    };
    render(window.RESOURCES);

    Array.prototype.forEach.call(document.querySelectorAll('.filter'), function (b) {
      b.addEventListener('click', function () {
        Array.prototype.forEach.call(document.querySelectorAll('.filter'), function (x) {
          x.classList.remove('active');
          x.setAttribute('aria-pressed', 'false');
        });
        b.classList.add('active');
        b.setAttribute('aria-pressed', 'true');
        var f = b.dataset.filter;
        render(f === 'all' ? window.RESOURCES : window.RESOURCES.filter(function (r) { return r.cat === f; }));
      });
    });
  }
} catch (err) {
  console.error('Error al renderizar la biblioteca de recursos:', err);
}

// ===== Menú móvil =====
try {
  var header = document.querySelector('.header');
  var menu = document.querySelector('.menu');

  if (menu && header) {
    var closeMenu = function () {
      header.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
      menu.textContent = '☰';
    };
    var openMenu = function () {
      header.classList.add('open');
      menu.setAttribute('aria-expanded', 'true');
      menu.textContent = '✕';
    };

    menu.addEventListener('click', function () {
      header.classList.contains('open') ? closeMenu() : openMenu();
    });

    // Cierra el menú al elegir una sección
    Array.prototype.forEach.call(header.querySelectorAll('nav a'), function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Cierra con Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });

    // Cierra al hacer clic fuera del menú
    document.addEventListener('click', function (e) {
      if (header.classList.contains('open') && !header.contains(e.target)) {
        closeMenu();
      }
    });
  }
} catch (err) {
  console.error('Error al inicializar el menú móvil:', err);
}

// ===== Año dinámico en el footer =====
try {
  Array.prototype.forEach.call(document.querySelectorAll('.year'), function (el) {
    el.textContent = new Date().getFullYear();
  });
} catch (err) {
  console.error('Error al actualizar el año:', err);
}
