document.addEventListener('DOMContentLoaded',function(){
    const openModalButton = document.getElementById('contact');
    const closeModalButton = document.getElementById('close-button');
    const modal = document.getElementById('container-contact');

    openModalButton.addEventListener('click',function(){
        modal.style.display = "block";
    })
    closeModalButton.addEventListener('click',function(){
        modal.style.display = "none";
    })
})