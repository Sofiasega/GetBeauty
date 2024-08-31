document.addEventListener('DOMContentLoaded', () => {
    // Inicializa el modal de búsqueda
    const searchModalElement = document.getElementById('searchModal');
    const searchModal = new bootstrap.Modal(searchModalElement, {
        backdrop: 'static', // Evita que el modal se cierre al hacer clic fuera de él
        keyboard: false // Evita que el modal se cierre con la tecla Esc
    });

    // Abre el modal al hacer clic en el icono de búsqueda
    const searchIcon = document.getElementById('search-icon');
    searchIcon.addEventListener('click', (event) => {
        event.preventDefault(); // Evita que el enlace haga scroll o cambie de página
        searchModal.show();
    });

    // Aplica filtros y ordenación cuando se presiona el botón de búsqueda
    document.getElementById('search-button').addEventListener('click', () => {
        applyFiltersAndSorting(); // Llama a la función para aplicar filtros y ordenación
        // Opcional: puedes cerrar el modal aquí si quieres
        // searchModal.hide();
    });

    // Evita el cierre del modal cuando se hace clic dentro del modal
    searchModalElement.addEventListener('click', (event) => {
        event.stopPropagation(); // Previene que el clic dentro del modal cierre el modal
    });

    // Evita que el modal se cierre al hacer clic fuera del modal
    // Esto debería estar manejado por la configuración 'backdrop: static'
    // Si deseas añadir lógica adicional, puedes usar el siguiente código:
    document.addEventListener('click', (event) => {
        if (!searchModalElement.contains(event.target) && !event.target.matches('#search-icon')) {
            const modalInstance = bootstrap.Modal.getInstance(searchModalElement);
            if (modalInstance) {
                modalInstance.hide();
            }
        }
    });
});
