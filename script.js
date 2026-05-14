const reviewForm = document.querySelector("#reviewForm");
const reviewList = document.querySelector("#reviewList");
const availabilityForm = document.querySelector("#availabilityForm");
const weddingDate = document.querySelector("#weddingDate");
const packageSelect = document.querySelector("#packageSelect");
const gallerySlide = document.querySelector("#gallerySlide");
const galleryCategory = document.querySelector("#galleryCategory");
const galleryTitle = document.querySelector("#galleryTitle");
const galleryThumbs = document.querySelector("#galleryThumbs");
const galleryPrev = document.querySelector("#galleryPrev");
const galleryNext = document.querySelector("#galleryNext");

const galleryPhotos = [
  {
    src: "assets/gallery/wedding-1.jpg",
    alt: "Vivid Pixels wedding gallery preview",
    category: "Wedding Preview",
    title: "A glimpse into the emotion, beauty, and story of the day",
  },
  {
    src: "assets/gallery/wedding-2.jpg",
    alt: "Vivid Pixels wedding gallery preview",
    category: "Wedding Preview",
    title: "A glimpse into the emotion, beauty, and story of the day",
  },
  {
    src: "assets/gallery/wedding-3.jpg",
    alt: "Vivid Pixels wedding gallery preview",
    category: "Wedding Preview",
    title: "A glimpse into the emotion, beauty, and story of the day",
  },
  {
    src: "assets/gallery/wedding-4.jpg",
    alt: "Vivid Pixels wedding gallery preview",
    category: "Wedding Preview",
    title: "A glimpse into the emotion, beauty, and story of the day",
  },
  {
    src: "assets/gallery/wedding-5.jpg",
    alt: "Vivid Pixels wedding gallery preview",
    category: "Wedding Preview",
    title: "A glimpse into the emotion, beauty, and story of the day",
  },
  {
    src: "assets/gallery/wedding-6.jpg",
    alt: "Vivid Pixels wedding gallery preview",
    category: "Wedding Preview",
    title: "A glimpse into the emotion, beauty, and story of the day",
  },
];

let currentGalleryIndex = 0;

function showGalleryPhoto(index) {
  if (!gallerySlide || !galleryCategory || !galleryTitle) return;

  currentGalleryIndex = (index + galleryPhotos.length) % galleryPhotos.length;
  const photo = galleryPhotos[currentGalleryIndex];
  gallerySlide.style.opacity = "0";

  window.setTimeout(() => {
    gallerySlide.src = photo.src;
    gallerySlide.alt = photo.alt;
    galleryCategory.textContent = photo.category;
    galleryTitle.textContent = photo.title;
    gallerySlide.style.opacity = "1";
    document.querySelectorAll(".slide-thumb").forEach((thumb, thumbIndex) => {
      thumb.classList.toggle("is-active", thumbIndex === currentGalleryIndex);
    });
  }, 120);
}

if (galleryThumbs && gallerySlide) {
  galleryPhotos.forEach((photo, index) => {
    const button = document.createElement("button");
    button.className = `slide-thumb${index === 0 ? " is-active" : ""}`;
    button.type = "button";
    button.setAttribute("aria-label", `Show ${photo.category} photo`);
    button.innerHTML = `<img src="${photo.src}" alt="">`;
    button.addEventListener("click", () => showGalleryPhoto(index));
    galleryThumbs.appendChild(button);
  });
}

galleryPrev?.addEventListener("click", () => showGalleryPhoto(currentGalleryIndex - 1));
galleryNext?.addEventListener("click", () => showGalleryPhoto(currentGalleryIndex + 1));

if (weddingDate) {
  weddingDate.min = new Date().toISOString().split("T")[0];
  weddingDate.addEventListener("input", () => {
    weddingDate.setCustomValidity("");
  });
}

document.querySelectorAll("[data-package]").forEach((link) => {
  link.addEventListener("click", () => {
    const selectedPackage = link.dataset.package;

    if (packageSelect) {
      packageSelect.value = selectedPackage;
    }
  });
});

availabilityForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(availabilityForm);
  const name = String(formData.get("name") || "").trim();
  const date = String(formData.get("date") || "").trim();
  const selectedPackage = String(formData.get("package") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !date || !selectedPackage || !message) {
    availabilityForm.reportValidity();
    return;
  }

  const today = new Date().toISOString().split("T")[0];
  if (date < today) {
    weddingDate?.setCustomValidity("Please choose today or a future date.");
    weddingDate?.reportValidity();
    return;
  }

  weddingDate?.setCustomValidity("");

  const whatsappMessage = `Hi Vivid Pixels, I would like to request availability for my wedding.

Name: ${name}
Wedding date: ${date}
Package: ${selectedPackage}
Details: ${message}`;

  window.location.href = `https://wa.me/255713550069?text=${encodeURIComponent(whatsappMessage)}`;
});

reviewForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(reviewForm);
  const name = String(formData.get("name") || "").trim();
  const rating = Number(formData.get("rating") || 5);
  const message = String(formData.get("message") || "").trim();

  if (!name || !message) return;

  const review = document.createElement("article");
  review.className = "review-card";
  review.innerHTML = `
    <div class="stars" aria-label="${rating} out of 5 stars">${"★".repeat(rating)}${"☆".repeat(5 - rating)}</div>
    <p></p>
    <strong></strong>
  `;

  review.querySelector("p").textContent = message;
  review.querySelector("strong").textContent = name;
  reviewList.prepend(review);
  reviewForm.reset();
});
