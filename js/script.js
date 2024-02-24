class AlbumPage {
  constructor() {
    this.albumListElement = document.getElementById("albumList");
  }

  async renderAlbums() {
    try {
      const albums = await this.getAlbums();
      albums.forEach((album) => {
        const albumItem = document.createElement("a");
        albumItem.classList.add("list-group-item", "list-group-item-action");
        albumItem.href = `album.html?id=${album.id}`;
        albumItem.textContent = album.title;
        this.albumListElement.appendChild(albumItem);
      });
    } catch (error) {
      console.error("Error fetching albums:", error);
    }
  }

  async getAlbums() {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const albumPage = new AlbumPage();
  albumPage.renderAlbums();
});
