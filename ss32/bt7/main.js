function openModal(src) {
    let modal = document.getElementById("imageModal");
    let modalImg = document.getElementById("modalImg");
    modal.style.display = "flex";
    modalImg.src = src;
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}