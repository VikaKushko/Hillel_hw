class AlbumPage {
  constructor() {
    this.albumPhotosElement = document.getElementById("albumPhotos");
    this.urlParams = new URLSearchParams(window.location.search);
    this.albumId = this.urlParams.get("id");
  }

  async renderAlbumPhotos() {
    try {
      const photos = await this.getAlbumPhotos();
      photos.forEach((photo) => {
        const photoColumn = document.createElement("div");
        photoColumn.classList.add("col-md-4", "mb-4");
        const photoCard = document.createElement("div");
        photoCard.classList.add("card");
        const img = document.createElement("img");
        img.src = photo.thumbnailUrl;
        img.classList.add("card-img-top");
        photoCard.appendChild(img);
        photoColumn.appendChild(photoCard);
        this.albumPhotosElement.appendChild(photoColumn);
      });
    } catch (error) {
      console.error("Error fetching photos:", error);
    }
  }

  async getAlbumPhotos() {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${this.albumId}`,
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const albumPage = new AlbumPage();
  albumPage.renderAlbumPhotos();
});
