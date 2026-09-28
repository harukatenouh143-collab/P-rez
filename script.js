/**
 * Control del Modal Sorpresa e Interacción
 */
document.addEventListener('DOMContentLoaded', () => {
  const btnSurprise = document.getElementById('btn-surprise');
  const modal = document.getElementById('modal-surprise');
  const closeElements = modal.querySelectorAll('[data-close]');
  let lastFocusedElement = null;

  const openModal = () => {
    lastFocusedElement = document.activeElement;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    
    // Enfocar el botón de cerrar para navegación accesible por teclado
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();

    // Evitar desplazamiento de fondo
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    // Restaurar foco previo
    if (lastFocusedElement) lastFocusedElement.focus();
  };

  btnSurprise?.addEventListener('click', openModal);

  closeElements.forEach((element) => {
    element.addEventListener('click', closeModal);
  });

  // Cerrar modal al presionar la tecla Escape
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
});