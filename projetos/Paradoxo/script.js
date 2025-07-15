// Portfolio items - você pode substituir por seus próprios trabalhos
const portfolioItems = [
  {
    id: 1,
    title: "Pôster Exposição Coletiva",
    description:
      "Material gráfico A3 para presentear artistas participantes da exposição de arte contemporânea realizada no Paradoxo Casa Atelier.",
    category: "poster",
    type: "image",
    media: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=400&h=600",
    date: "Janeiro 2024",
    featured: true,
  },
  {
    id: 2,
    title: "Feed Instagram - Oficina Cultural",
    description:
      "Série de posts para divulgação de oficina cultural sobre arte urbana, mantendo a identidade visual do coletivo.",
    category: "social",
    type: "image",
    media: "https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
    date: "Fevereiro 2024",
    featured: true,
  },
  {
    id: 3,
    title: "Registro Audiovisual",
    description:
      "Vídeo documentando atividades do coletivo durante evento cultural, incluindo depoimentos dos artistas.",
    category: "video",
    type: "video",
    media: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    date: "Março 2024",
    featured: true,
  },
  {
    id: 4,
    title: "Identidade Visual Evento",
    description:
      "Desenvolvimento visual completo para ação cultural no centro da cidade, incluindo pôster, flyer e material digital.",
    category: "poster",
    type: "image",
    media: "https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=400&h=650",
    date: "Abril 2024",
  },
  {
    id: 5,
    title: "Stories Interativos",
    description: "Conteúdo para engajamento nas redes sociais com enquetes e quizzes sobre arte contemporânea.",
    category: "social",
    type: "image",
    media: "https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress&cs=tinysrgb&w=400&h=450",
    date: "Maio 2024",
  },
  {
    id: 6,
    title: "Experimentação Lambe-lambe",
    description:
      "Testes para intervenção urbana futura nas ruas do Rio de Janeiro, explorando técnicas de colagem urbana.",
    category: "experimental",
    type: "image",
    media: "https://images.pexels.com/photos/1366944/pexels-photo-1366944.jpeg?auto=compress&cs=tinysrgb&w=400&h=550",
    date: "Junho 2024",
  },
  {
    id: 7,
    title: "Pôster Oficina de Serigrafia",
    description: "Material A3 para divulgação de workshop de serigrafia realizado em parceria com artistas locais.",
    category: "poster",
    type: "image",
    media: "https://images.pexels.com/photos/1366943/pexels-photo-1366943.jpeg?auto=compress&cs=tinysrgb&w=400&h=480",
    date: "Julho 2024",
  },
  {
    id: 8,
    title: "Reels Promocional",
    description: "Vídeo curto para divulgação de evento no Instagram, com edição dinâmica e trilha sonora original.",
    category: "video",
    type: "video",
    media: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    date: "Agosto 2024",
  },
  {
    id: 9,
    title: "Campanha Digital Ambiental",
    description: "Série de posts para campanha de conscientização ambiental em parceria com coletivos locais.",
    category: "social",
    type: "image",
    media: "https://images.pexels.com/photos/1366946/pexels-photo-1366946.jpeg?auto=compress&cs=tinysrgb&w=400&h=580",
    date: "Setembro 2024",
  },
  {
    id: 10,
    title: "Arte Urbana Colaborativa",
    description: "Desenvolvimento de peça para intervenção urbana colaborativa no centro do Rio de Janeiro.",
    category: "experimental",
    type: "image",
    media: "https://images.pexels.com/photos/1366947/pexels-photo-1366947.jpeg?auto=compress&cs=tinysrgb&w=400&h=460",
    date: "Outubro 2024",
  },
  {
    id: 11,
    title: "Material Institucional",
    description: "Peças gráficas para comunicação interna do coletivo, incluindo cartões de visita e papel timbrado.",
    category: "poster",
    type: "image",
    media: "https://images.pexels.com/photos/1366948/pexels-photo-1366948.jpeg?auto=compress&cs=tinysrgb&w=400&h=520",
    date: "Novembro 2024",
  },
  {
    id: 12,
    title: "Conteúdo Educativo",
    description: "Posts informativos para redes sociais sobre história da arte brasileira e técnicas artísticas.",
    category: "social",
    type: "image",
    media: "https://images.pexels.com/photos/1366949/pexels-photo-1366949.jpeg?auto=compress&cs=tinysrgb&w=400&h=640",
    date: "Dezembro 2024",
  },
]

// Elementos DOM
const introScreen = document.getElementById("introScreen")
const galleryScreen = document.getElementById("galleryScreen")
const masonryGrid = document.getElementById("masonryGrid")
const filterBtns = document.querySelectorAll(".filter-btn")
const modal = document.getElementById("imageModal")
const modalMedia = document.getElementById("modalMedia")
const modalTitle = document.querySelector(".modal-title")
const modalDescription = document.querySelector(".modal-description")
const modalCategory = document.querySelector(".modal-category")
const modalDate = document.querySelector(".modal-date")
const featuredCards = document.getElementById("featuredCards")

// Elementos de pesquisa
const searchInput = document.getElementById("searchInput")
const searchClear = document.getElementById("searchClear")

// Estado atual
let currentFilter = "all"
let currentSearchTerm = ""
let shuffledItems = [...portfolioItems]
let isModalOpen = false
let iso
let allMasonryItems = []

// Import Isotope e imagesLoaded
const Isotope = window.Isotope
const imagesLoaded = window.imagesLoaded

// Função para embaralhar array
function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

// Função para filtrar itens por pesquisa
function filterItemsBySearch(items, searchTerm) {
  if (!searchTerm.trim()) return items

  const term = searchTerm.toLowerCase().trim()
  return items.filter(
    (item) =>
      item.title.toLowerCase().includes(term) ||
      item.description.toLowerCase().includes(term) ||
      getCategoryName(item.category).toLowerCase().includes(term),
  )
}

// Função para mostrar galeria
function showGallery() {
  console.log("showGallery chamada!")

  shuffledItems = shuffleArray(portfolioItems)
  console.log("Items embaralhados:", shuffledItems.length)

  introScreen.classList.add("hidden")
  console.log("Classe hidden adicionada ao introScreen")

  document.body.style.overflow = "hidden"
  console.log("Overflow do body definido para hidden.")

  setTimeout(() => {
    galleryScreen.classList.add("active")
    console.log("Classe active adicionada ao galleryScreen")

    galleryScreen.style.overflowY = "auto"
    console.log("Overflow-y da galleryScreen definido para auto.")

    renderFeaturedCards()
    renderGallery()
    console.log("renderGallery chamada")

    galleryScreen.scrollTop = 0
    console.log("Scroll da galeria resetado para o topo.")
  }, 400)
}

// Função para mostrar intro
function showIntro() {
  galleryScreen.classList.remove("active")

  setTimeout(() => {
    introScreen.classList.remove("hidden")
    history.pushState(null, "", window.location.pathname)

    document.body.style.overflow = "auto"
    console.log("Overflow do body restaurado para auto.")
    galleryScreen.style.overflowY = "hidden"
    console.log("Overflow-y da galleryScreen definido para hidden.")
  }, 400)
}

// Função para obter nome da categoria
function getCategoryName(category) {
  const names = {
    poster: "Pôster A3",
    social: "Social Media",
    video: "Audiovisual",
    experimental: "Experimental",
  }
  return names[category] || category
}

// Função para criar cards em destaque - SIMPLIFICADA
function renderFeaturedCards() {
  const featuredItems = portfolioItems.filter((item) => item.featured).slice(0, 3)

  featuredCards.innerHTML = featuredItems
    .map((item) => {
      let mediaElement
      if (item.type === "video") {
        mediaElement = `<video muted autoplay loop playsinline class="featured-card-image">
                        <source src="${item.media}" type="video/mp4">
                      </video>`
      } else {
        mediaElement = `<img src="${item.media}" alt="${item.title}" class="featured-card-image">`
      }

      return `
      <div class="featured-card" onclick="openModal(portfolioItems.find(p => p.id === ${item.id}))">
        ${mediaElement}
        <div class="featured-card-overlay">
          <h3 class="featured-card-title">${item.title}</h3>
        </div>
      </div>
    `
    })
    .join("")
}

// Função para criar item do portfólio
function createPortfolioItem(item, index) {
  const div = document.createElement("div")
  div.className = "masonry-item"
  div.dataset.category = item.category
  div.dataset.id = item.id

  let mediaElement
  if (item.type === "video") {
    mediaElement = `<video muted autoplay loop playsinline>
          <source src="${item.media}" type="video/mp4">
      </video>`
  } else {
    mediaElement = `<img src="${item.media}" alt="${item.title}">`
  }

  div.innerHTML = `
      ${mediaElement}
      <div class="item-overlay">
          <h3 class="item-title">${item.title}</h3>
      </div>
  `

  div.addEventListener("click", () => openModal(item))
  return div
}

// Função para renderizar galeria com pesquisa
function renderGallery(filter = "all", searchTerm = "") {
  console.log("renderGallery iniciada com filtro:", filter, "e pesquisa:", searchTerm)

  // Filtrar itens por pesquisa primeiro
  let filteredItems = filterItemsBySearch(shuffledItems, searchTerm)

  // Depois filtrar por categoria se não for "all"
  if (filter !== "all") {
    filteredItems = filteredItems.filter((item) => item.category === filter)
  }

  if (!iso) {
    // Primeira vez renderizando
    masonryGrid.innerHTML = ""
    allMasonryItems = []

    // Cria todos os itens inicialmente (sem filtro de pesquisa na primeira renderização)
    shuffledItems.forEach((item, index) => {
      const portfolioItemElement = createPortfolioItem(item, index)
      masonryGrid.appendChild(portfolioItemElement)
      allMasonryItems.push(portfolioItemElement)
    })

    imagesLoaded(masonryGrid, () => {
      console.log("Images loaded for isotope grid! Initializing Isotope.")
      iso = new Isotope(masonryGrid, {
        itemSelector: ".masonry-item",
        layoutMode: "masonry",
        masonry: {
          gutter: 10,
        },
        percentPosition: true,
        fitWidth: true,
        transitionDuration: "0.4s",
        hiddenStyle: {
          opacity: 0,
          transform: "scale(0.001)",
        },
        visibleStyle: {
          opacity: 1,
          transform: "scale(1)",
        },
      })

      // Aplica filtros iniciais
      applyFilters(filter, searchTerm)
      iso.layout()
      console.log("Isotope initialized and layout forced.")
    })
  } else {
    // Renderizações subsequentes
    applyFilters(filter, searchTerm)
    iso.layout()
    console.log("Isotope arranged and layout forced after filter.")
  }

  console.log("Galeria renderizada com filtros aplicados")
}

// Função para aplicar filtros combinados (categoria + pesquisa)
function applyFilters(categoryFilter, searchTerm) {
  if (!iso) return

  // Filtrar por pesquisa e categoria
  const filteredItems = filterItemsBySearch(shuffledItems, searchTerm)
  const validIds = new Set(filteredItems.map((item) => item.id.toString()))

  // Criar seletor que combina categoria e pesquisa
  let filterValue = "*"

  if (categoryFilter !== "all" || searchTerm.trim()) {
    filterValue = (itemElem) => {
      const itemId = itemElem.dataset.id
      const itemCategory = itemElem.dataset.category

      // Verificar se o item passa no filtro de pesquisa
      const passesSearch = !searchTerm.trim() || validIds.has(itemId)

      // Verificar se o item passa no filtro de categoria
      const passesCategory = categoryFilter === "all" || itemCategory === categoryFilter

      return passesSearch && passesCategory
    }
  }

  iso.arrange({ filter: filterValue })
  console.log("Filtros aplicados - Categoria:", categoryFilter, "Pesquisa:", searchTerm)
}

// Event listeners para pesquisa
searchInput.addEventListener("input", (e) => {
  currentSearchTerm = e.target.value

  // Mostrar/esconder botão de limpar
  if (currentSearchTerm.trim()) {
    searchClear.style.display = "flex"
  } else {
    searchClear.style.display = "none"
  }

  // Aplicar filtros com debounce
  clearTimeout(searchInput.debounceTimer)
  searchInput.debounceTimer = setTimeout(() => {
    renderGallery(currentFilter, currentSearchTerm)
  }, 300)
})

searchClear.addEventListener("click", () => {
  searchInput.value = ""
  currentSearchTerm = ""
  searchClear.style.display = "none"
  renderGallery(currentFilter, "")
})

// Função para abrir modal
function openModal(item) {
  if (isModalOpen) return

  isModalOpen = true

  let mediaElement
  if (item.type === "video") {
    mediaElement = `<video controls autoplay>
      <source src="${item.media}" type="video/mp4">
  </video>`
  } else {
    mediaElement = `<img src="${item.media}" alt="${item.title}">`
  }

  modalMedia.innerHTML = mediaElement
  modalTitle.textContent = item.title
  modalDescription.textContent = item.description
  modalCategory.textContent = getCategoryName(item.category)
  modalDate.textContent = item.date

  document.body.classList.add("modal-open")
  modal.style.display = "block"

  modal.offsetHeight

  setTimeout(() => {
    modal.classList.add("show")
  }, 10)

  const url = new URL(window.location)
  url.searchParams.set("projeto", item.id)
  history.pushState(null, "", url)
}

// Função para fechar modal
function closeModal() {
  if (!isModalOpen) return

  modal.classList.remove("show")

  setTimeout(() => {
    modal.style.display = "none"
    document.body.classList.remove("modal-open")
    isModalOpen = false

    const url = new URL(window.location)
    url.searchParams.delete("projeto")
    history.pushState(null, "", url)
  }, 400)
}

// Função para abrir projeto via URL
function openProjectFromURL() {
  const urlParams = new URLSearchParams(window.location.search)
  const projectId = urlParams.get("projeto")

  if (projectId) {
    const item = portfolioItems.find((p) => p.id == projectId)
    if (item) {
      showGallery()
      setTimeout(() => {
        openModal(item)
      }, 800)
    }
  }
}

// Event Listeners para filtros
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"))
    btn.classList.add("active")

    currentFilter = btn.dataset.filter
    renderGallery(currentFilter, currentSearchTerm)
  })
})

// Fechar modal com ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && isModalOpen) {
    closeModal()
  }
})

// Navegação do browser
window.addEventListener("popstate", () => {
  const urlParams = new URLSearchParams(window.location.search)
  if (!urlParams.get("projeto") && isModalOpen) {
    closeModal()
  }
})

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  shuffledItems = shuffleArray(portfolioItems)
  openProjectFromURL()

  if (!new URLSearchParams(window.location.search).get("projeto")) {
    renderGallery()
  }
})

// Tornar funções globais
window.showGallery = showGallery
window.showIntro = showIntro
window.closeModal = closeModal

// Debug
console.log("Elements check:", {
  introScreen: !!introScreen,
  galleryScreen: !!galleryScreen,
  masonryGrid: !!masonryGrid,
  portfolioItems: portfolioItems.length,
  searchInput: !!searchInput,
  featuredCards: !!featuredCards,
})
