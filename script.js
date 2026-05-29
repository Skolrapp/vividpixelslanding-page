const availabilityForm = document.querySelector("#availabilityForm");
const weddingDate = document.querySelector("#weddingDate");
const packageSelect = document.querySelector("#packageSelect");
const selectedCollection = document.querySelector("#selectedCollection");
const selectedCollectionNote = document.querySelector("#selectedCollectionNote");
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
const cachedGalleryEntries = [
  {
    status: "published",
    category: "wedding",
    name: "Joe & Rhoda",
    title: "Full-day wedding story",
    cover_image: "https://res.cloudinary.com/deh8fegux/image/upload/f_auto,q_auto/IMGL3727-Edit_xpkjwz",
    preview_image:
      "https://res.cloudinary.com/deh8fegux/image/upload/q_auto/f_auto/v1779718499/IMGL3012_ps6kab.jpg https://res.cloudinary.com/deh8fegux/image/upload/q_auto/f_auto/v1779718499/IMGL3016_tt55gl.jpg https://res.cloudinary.com/deh8fegux/image/upload/q_auto/f_auto/v1779718659/IMGL3025_cp0pow.jpg https://res.cloudinary.com/deh8fegux/image/upload/q_auto/f_auto/v1779718663/IMGL3062-Edit_qcl6jn.jpg https://res.cloudinary.com/deh8fegux/image/upload/q_auto/f_auto/v1779707563/IMGL3727-Edit_xpkjwz.jpg https://res.cloudinary.com/deh8fegux/image/upload/q_auto/f_auto/v1779718660/IMGL3693-Edit_lk6puf.jpg https://res.cloudinary.com/deh8fegux/image/upload/q_auto/f_auto/v1779718660/IMGL3681-Edit_nsp7lf.jpg https://res.cloudinary.com/deh8fegux/image/upload/q_auto/f_auto/v1779718660/IMGL3709-Edit_om2bjl.jpg https://res.cloudinary.com/deh8fegux/image/upload/q_auto/f_auto/v1779718661/IMGL3724_tgrqhf.jpg https://res.cloudinary.com/deh8fegux/image/upload/q_auto/f_auto/v1779718662/IMGL3758-Edit_k27fah.jpg https://res.cloudinary.com/deh8fegux/image/upload/q_auto/f_auto/v1779718662/IMGL3770-Edit_iakhcr.jpg https://res.cloudinary.com/deh8fegux/image/upload/q_auto/f_auto/v1779718663/IMGL3793-Edit_gzleqi.jpg https://res.cloudinary.com/deh8fegux/image/upload/q_auto/f_auto/v1779718662/IMGL3271_s0ap3p.jpg https://res.cloudinary.com/deh8fegux/image/upload/q_auto/f_auto/v1779718662/IMGL3274_u85ljc.jpg https://res.cloudinary.com/deh8fegux/image/upload/q_auto/f_auto/v1779718660/IMGL3289_z5mtxt.jpg https://res.cloudinary.com/deh8fegux/image/upload/q_auto/f_auto/v1779718663/IMGL3331_rf4ke5.jpg https://res.cloudinary.com/deh8fegux/image/upload/q_auto/f_auto/v1779718664/IMGL4051_hco7wu.jpg https://res.cloudinary.com/deh8fegux/image/upload/q_auto/f_auto/v1779718664/IMGL4018_eguopu.jpg",
    link: "https://vividpixelsstudio.pixieset.com/joeandrhoda/highlight/",
    button_text: "View Gallery",
  },
  {
    status: "published",
    category: "video",
    name: "Cinematic Highlights",
    title: "JOE & RHODA",
    cover_image: "https://res.cloudinary.com/deh8fegux/image/upload/f_auto,q_auto/IMGL3727-Edit_xpkjwz",
    link: "https://youtu.be/fmiMx9wi8dI",
    button_text: "Watch Video",
  },
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
    const collection = link.dataset.collection || selectedPackage;

    if (packageSelect) {
      packageSelect.value = selectedPackage === "Bespoke" ? "Photography" : "Photography + Film";
    }

    if (selectedCollection) {
      selectedCollection.value = collection;
    }

    const collectionName = selectedCollectionNote?.querySelector("strong");
    if (selectedCollectionNote && collectionName) {
      collectionName.textContent = collection;
      selectedCollectionNote.hidden = false;
    }
  });
});

availabilityForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(availabilityForm);
  const name = String(formData.get("name") || "").trim();
  const date = String(formData.get("date") || "").trim();
  const location = String(formData.get("location") || "").trim();
  const guests = String(formData.get("guests") || "").trim();
  const collection = String(formData.get("collection") || "").trim();
  const coverage = String(formData.get("coverage") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !date || !location || !guests || !coverage || !message) {
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
Wedding location: ${location}
Estimated guest count: ${guests}
Selected collection: ${collection || "Not selected yet"}
Coverage interest: ${coverage}
What matters most: ${message}`;

  window.location.href = `https://wa.me/255713550069?text=${encodeURIComponent(whatsappMessage)}`;
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

function renderDetailPage(entries, options = {}) {
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

  const { allowFallback = true, keepLoadingOnMissing = false } = options;
  const requestedSlug = new URLSearchParams(window.location.search).get("id") || "";
  const photoEntries = entries.filter((galleryEntry) => {
    const rawCategory = (galleryEntry.category || "wedding").toLowerCase();
    const category = rawCategory === "details" ? "portrait" : rawCategory;
    return category !== "video";
  });
  const matchedEntry = entries.find((galleryEntry) => getGallerySlug(galleryEntry) === requestedSlug);
  const entry = matchedEntry || (allowFallback ? photoEntries[0] : null);

  if (!entry) {
    if (keepLoadingOnMissing) return;

    detailName.textContent = "Gallery not found";
    detailDescription.textContent = "Return to the galleries page and choose a published story.";
    detailTitle.textContent = "Selected moments";
    detailPhotoGrid.innerHTML = "";
    galleryStoryPage?.classList.remove("is-loading");
    return;
  }

  const resolvedSlug = getGallerySlug(entry);
  if (allowFallback && requestedSlug && requestedSlug !== resolvedSlug) {
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
  detailTitle.textContent = "Selected moments";
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

function getPortfolioCardTitle(entry, category) {
  const title = (entry.card_title || entry.title || "").trim();
  if (!title || title.length > 54) return formatPortfolioType(category);
  return title;
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
      const cardTitle = escapeHtml(getPortfolioCardTitle(entry, category));
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
            ${isVideo ? `<span class="portfolio-type">${formatPortfolioType(category)}</span>` : ""}
            <div>
              <h3>${name}</h3>
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

  if (portfolioGrid) {
    renderPortfolioCards(cachedGalleryEntries);
    applyGalleryFilter(
      document.querySelector("[data-gallery-filter].is-active")?.dataset.galleryFilter || "all",
    );
    portfolioGrid.classList.remove("is-loading");
  }

  if (detailHero) {
    renderDetailPage(cachedGalleryEntries, {
      allowFallback: false,
      keepLoadingOnMissing: true,
    });
  }

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
      portfolioGrid.classList.remove("is-loading");
    }

    if (detailHero) {
      renderDetailPage(entries);
    }

  } catch (error) {
    console.warn(error);
    portfolioGrid?.classList.remove("is-loading");
    galleryStoryPage?.classList.remove("is-loading");
  }
}

loadGallerySheet();
