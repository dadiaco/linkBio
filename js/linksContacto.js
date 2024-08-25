document.addEventListener('DOMContentLoaded', function() {
    const shadow = document.getElementById('shadow');
    const openModalButton = document.getElementById('contact');
    const closeModalButton = document.getElementById('close-button');
    const modal = document.getElementById('container-contact');

    function openModal() {
        modal.style.display = "block";
        shadow.style.display = "block";
    }

    function closeModal() {
        modal.style.display = "none";
        shadow.style.display = "none";
    }

    openModalButton.addEventListener('click', openModal);
    closeModalButton.addEventListener('click', closeModal);

    window.addEventListener('click', function(event) {
        if (event.target === shadow) {
            closeModal();
        }
    });
});