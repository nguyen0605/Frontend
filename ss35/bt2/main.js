let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];

function openModal() {
    let modal = document.getElementById("bookmarkModal");
    modal.style.display = "flex";
    modal.style.flexDirection = "column";

}

function closeModal() {
    document.getElementById("bookmarkModal").style.display = "none";
}

function addBookmark() {
    let siteName = document.getElementById("siteName").value.trim();
    let siteURL = document.getElementById("siteURL").value.trim();
    if (siteName === "" || siteURL === "") {
        alert("Please fill in all fields");
        return;
    }
    bookmarks.push({ name: siteName, url: siteURL });
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    renderBookmarks();
    closeModal();
}

function deleteBookmark(index) {
    bookmarks.splice(index, 1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    renderBookmarks();
}

function renderBookmarks() {
    let list = document.getElementById("bookmarksList");
    list.innerHTML = "";
    bookmarks.forEach((bookmark, index) => {
        list.innerHTML += `
            <div class="bookmark">
                <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
                <i class="fa-solid fa-xmark" onclick="deleteBookmark(${index})"></i>
            </div>`;//target="_blank để mở trong tab mới"
    });
}

renderBookmarks();