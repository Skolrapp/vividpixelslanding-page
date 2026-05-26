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
const siteHeader = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobileMenu");
const galleryFilterButtons = document.querySelectorAll("[data-gallery-filter]");
const portfolioGrid = document.querySelector("#galleryGrid");
const detailHero = document.querySelector("#detailHero");
const detailCover = document.querySelector("#detailCover");
const detailCategory = document.querySelector("#detailCategory");
const detailName = document.querySelector("#detailName");
const detailDescription = document.querySelector("#detailDescription");
const detailFullLink = document.querySelector("#detailFullLink");
const detailTitle = document.querySelector("#detailTitle");
const detailPhotoGrid = document.querySelector("#detailPhotoGrid");
const galleryStoryPage = document.querySelector("#galleryStoryPage");

const gallerySheetUrl =
  "https://docs.google.com/spreadsheets/d/1kKx2ZRvjnNcYvTL9Tu3R9yrae7F5WcMi/gviz/tq?tqx=out:csv&sheet=Gallery";
const fallbackPortfolioImages = [
  "assets/gallery/wedding-1.jpg",
  "assets/gallery/wedding-3.jpg",
  "assets/gallery/wedding-4.jpg",
  "assets/gallery/wedding-6.jpg",
  "assets/gallery/hero.jpg",
  "assets/gallery/wedding-5.jpg",
];

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

menuToggle?.addEventListener("click", () => {
  const isOpen = siteHeader?.classList.toggle("is-menu-open");
  menuToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteHeader?.classList.remove("is-menu-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

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

function parseCsv(csvText) {
  const rows = [];
  let row = [];
  let cell = "";
  let isQuoted = false;

  for (let index = 0; index < csvText.length; index += 1) {
    const character = csvText[index];
    const nextCharacter = csvText[index + 1];

    if (character === '"' && isQuoted && nextCharacter === '"') {
      cell += '"';
      index += 1;
    } else if (character === '"') {
      isQuoted = !isQuoted;
    } else if (character === "," && !isQuoted) {
      row.push(cell);
      cell = "";
    } else if ((character === "\n" || character === "\r") && !isQuoted) {
      if (character === "\r" && nextCharacter === "\n") {
        index += 1;
      }
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += character;
    }
  }

  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }

  return rows.filter((csvRow) => csvRow.some((value) => value.trim()));
}

function getGalleryRows(csvText) {
  const rows = parseCsv(csvText);
  const headerIndex = rows.findIndex((row) => row[0]?.trim().toLowerCase() === "status");

  if (headerIndex === -1) return [];

  const headers = rows[headerIndex].map((header) => header.trim());

  return rows.slice(headerIndex + 1).map((row) =>
    headers.reduce((entry, header, index) => {
      entry[header] = row[index]?.trim() || "";
      return entry;
    }, {}),
  );
}

function formatPortfolioType(category) {
  const labels = {
    wedding: "Wedding Gallery",
    engagement: "Engagement",
    portrait: "Portrait",
    video: "Wedding Film",
  };

  return labels[category] || "Gallery";
}

function getCoverImage(entry, index) {
  const coverImage = entry.cover_image || "";

  if (!coverImage || coverImage.includes("example.com")) {
    return fallbackPortfolioImages[index % fallbackPortfolioImages.length];
  }

  return coverImage;
}

function getPreviewImages(entry) {
  const rawPreviewImages = entry.preview_images || entry.preview_image || "";

  return rawPreviewImages
    .split(/\s+/)
    .map((url) => url.trim())
    .filter(Boolean)
    .filter((url) => /^https?:\/\//i.test(url));
}

function getGallerySlug(entry) {
  return (entry.slug || entry.name || entry.title || "gallery")
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderDetailPage(entries) {
  if (
    !detailHero ||
    !detailCover ||
    !detailCategory ||
    !detailName ||
    !detailDescription ||
    !detailFullLink ||
    !detailTitle ||
    !detailPhotoGrid
  ) {
    return;
  }

  const requestedSlug = new URLSearchParams(window.location.search).get("id") || "";
  const photoEntries = entries.filter((galleryEntry) => {
    const rawCategory = (galleryEntry.category || "wedding").toLowerCase();
    const category = rawCategory === "details" ? "portrait" : rawCategory;
    return category !== "video";
  });
  const entry =
    entries.find((galleryEntry) => getGallerySlug(galleryEntry) === requestedSlug) ||
    photoEntries[0];

  if (!entry) {
    detailName.textContent = "Gallery not found";
    detailDescription.textContent = "Return to the galleries page and choose a published story.";
    detailTitle.textContent = "No preview available.";
    detailPhotoGrid.innerHTML = "";
    galleryStoryPage?.classList.remove("is-loading");
    return;
  }

  const resolvedSlug = getGallerySlug(entry);
  if (requestedSlug && requestedSlug !== resolvedSlug) {
    window.history.replaceState(null, "", `${window.location.pathname}?id=${resolvedSlug}`);
  }

  const entryIndex = entries.indexOf(entry);
  const rawCategory = (entry.category || "wedding").toLowerCase();
  const category = rawCategory === "details" ? "portrait" : rawCategory;
  const previewImages = getPreviewImages(entry);
  const fallbackImage = fallbackPortfolioImages[entryIndex % fallbackPortfolioImages.length];
  const coverImage = getCoverImage(entry, entryIndex);
  const displayImages = previewImages.length ? previewImages : [coverImage, fallbackImage];
  const link = entry.link || "https://vividpixelsstudio.pixieset.com";

  document.title = `${entry.name || "Gallery Story"} | Vivid Pixels`;
  detailCover.src = coverImage;
  detailCover.alt = `${entry.name || "Vivid Pixels"} gallery cover`;
  detailCategory.textContent = formatPortfolioType(category);
  detailName.textContent = entry.name || "Vivid Pixels";
  detailDescription.textContent =
    entry.description || entry.title || "A selected preview from the Vivid Pixels archive.";
  detailFullLink.href = link;
  detailFullLink.textContent = entry.button_text || "View Full Gallery";
  detailTitle.textContent = entry.title || "Gallery preview.";
  detailPhotoGrid.innerHTML = displayImages
    .map(
      (image, photoIndex) => `
        <figure class="story-tile story-tile-${photoIndex % 12}">
          <img src="${escapeHtml(image)}" alt="${escapeHtml(entry.name || "Vivid Pixels")} preview ${photoIndex + 1}" loading="lazy" />
        </figure>
      `,
    )
    .join("");
  galleryStoryPage?.classList.remove("is-loading");
}

function getVideoEmbedUrl(link) {
  try {
    const url = new URL(link);

    if (url.hostname.includes("youtu.be")) {
      const videoId = url.pathname.replace("/", "");
      return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
    }

    if (url.hostname.includes("youtube.com")) {
      const videoId = url.searchParams.get("v");
      if (videoId) return `https://www.youtube.com/embed/${videoId}`;

      const shortsMatch = url.pathname.match(/\/shorts\/([^/?]+)/);
      if (shortsMatch?.[1]) return `https://www.youtube.com/embed/${shortsMatch[1]}`;

      const embedMatch = url.pathname.match(/\/embed\/([^/?]+)/);
      if (embedMatch?.[1]) return `https://www.youtube.com/embed/${embedMatch[1]}`;
    }

    if (url.hostname.includes("vimeo.com")) {
      const videoId = url.pathname.split("/").filter(Boolean).pop();
      return videoId ? `https://player.vimeo.com/video/${videoId}` : "";
    }
  } catch (error) {
    return "";
  }

  return "";
}

function renderPortfolioCards(entries) {
  if (!portfolioGrid || !entries.length) return;

  let videoIndex = 0;

  portfolioGrid.innerHTML = entries
    .map((entry, index) => {
      const rawCategory = (entry.category || "wedding").toLowerCase();
      const normalizedCategory = rawCategory === "details" ? "portrait" : rawCategory;
      const category = ["wedding", "engagement", "portrait", "video"].includes(normalizedCategory)
        ? normalizedCategory
        : "wedding";
      const isVideo = category === "video";
      const image = escapeHtml(getCoverImage(entry, index));
      const fallbackImage = escapeHtml(fallbackPortfolioImages[index % fallbackPortfolioImages.length]);
      const link = escapeHtml(entry.link || "https://vividpixelsstudio.pixieset.com");
      const detailUrl = escapeHtml(`gallery-detail.html?id=${getGallerySlug(entry)}`);
      const name = escapeHtml(entry.name || "Vivid Pixels");
      const title = escapeHtml(entry.title || "Wedding story");
      const description = escapeHtml(
        entry.description ||
          "A cinematic highlight from the celebration, shaped with emotion, atmosphere, and the key moments of the day.",
      );
      const buttonText = escapeHtml(entry.button_text || (isVideo ? "Watch Video" : "View Gallery"));

      if (isVideo) {
        const embedUrl = escapeHtml(getVideoEmbedUrl(entry.link || ""));

        if (embedUrl) {
          const isReversed = videoIndex % 2 === 1;
          videoIndex += 1;

          return `
            <article class="portfolio-card portfolio-video portfolio-embed${isReversed ? " is-reversed" : ""}" data-gallery-type="${category}">
              <div class="video-frame">
                <iframe
                  src="${embedUrl}"
                  title="${title}"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="video-card-copy">
                <span class="portfolio-type">${formatPortfolioType(category)}</span>
                <p>${name}</p>
                <h3>${title}</h3>
                <small>${description}</small>
              </div>
            </article>
          `;
        }
      }

      return `
        <article class="portfolio-card${isVideo ? " portfolio-video" : ""}" data-gallery-type="${category}">
          <a class="portfolio-open" href="${detailUrl}">
            <img src="${image}" alt="${name} gallery preview" onerror="this.src='${fallbackImage}'" />
            ${isVideo ? '<span class="play-badge" aria-hidden="true">▶</span>' : ""}
            <span class="portfolio-type">${formatPortfolioType(category)}</span>
            <div>
              <p>${name}</p>
              <h3>${title}</h3>
              <span>${buttonText}</span>
            </div>
          </a>
        </article>
      `;
    })
    .join("");
}

function applyGalleryFilter(filter) {
  document.querySelectorAll("[data-gallery-type]").forEach((card) => {
    const type = card.dataset.galleryType;
    const shouldHide = filter === "all" ? type === "video" : type !== filter;
    card.classList.toggle("is-hidden", shouldHide);
  });
}

galleryFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.galleryFilter || "all";

    galleryFilterButtons.forEach((filterButton) => {
      filterButton.classList.toggle("is-active", filterButton === button);
    });

    applyGalleryFilter(filter);
  });
});

async function loadGallerySheet() {
  if (!portfolioGrid && !detailHero) return;

  try {
    const response = await fetch(gallerySheetUrl);

    if (!response.ok) {
      throw new Error("Gallery sheet is not reachable.");
    }

    const csvText = await response.text();
    const entries = getGalleryRows(csvText).filter(
      (entry) => entry.status?.toLowerCase() === "published",
    );

    if (!entries.length) {
      throw new Error("No published gallery rows found.");
    }

    if (portfolioGrid) {
      renderPortfolioCards(entries);
      applyGalleryFilter(
        document.querySelector("[data-gallery-filter].is-active")?.dataset.galleryFilter || "all",
      );
    }

    if (detailHero) {
      renderDetailPage(entries);
    }

  } catch (error) {
    console.warn(error);
  }
}

loadGallerySheet();
