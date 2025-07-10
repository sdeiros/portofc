// Portfolio items com tipos de mídia
const portfolioItems = [
    {
        id: 1,
        title: "Pôster Exposição Coletiva",
        description: "Material gráfico A3 para presentear artistas participantes da exposição de arte contemporânea",
        category: "poster",
        type: "image",
        media: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=400&h=600",
        date: "Janeiro 2024"
    },
    {
        id: 2,
        title: "Feed Instagram",
        description: "Série de posts para divulgação de oficina cultural sobre arte urbana",
        category: "social",
        type: "image",
        media: "https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
        date: "Fevereiro 2024"
    },
    {
        id: 3,
        title: "Registro Audiovisual",
        description: "Vídeo documentando atividades do coletivo durante evento cultural",
        category: "video",
        type: "video",
        media: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
        date: "Março 2024"
    },
    {
        id: 4,
        title: "Identidade Visual Evento",
        description: "Desenvolvimento visual completo para ação cultural no centro da cidade",
        category: "poster",
        type: "image",
        media: "https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=400&h=650",
        date: "Abril 2024"
    },
    {
        id: 5,
        title: "Stories Interativos",
        description: "Conteúdo para engajamento nas redes sociais com enquetes e quizzes",
        category: "social",
        type: "image",
        media: "https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress&cs=tinysrgb&w=400&h=450",
        date: "Maio 2024"
    },
    {
        id: 6,
        title: "Experimentação Lambe-lambe",
        description: "Testes para intervenção urbana futura nas ruas do Rio de Janeiro",
        category: "experimental",
        type: "image",
        media: "https://images.pexels.com/photos/1366944/pexels-photo-1366944.jpeg?auto=compress&cs=tinysrgb&w=400&h=550",
        date: "Junho 2024"
    },
    {
        id: 7,
        title: "Pôster Oficina",
        description: "Material A3 para divulgação de workshop de serigrafia",
        category: "poster",
        type: "image",
        media: "https://images.pexels.com/photos/1366943/pexels-photo-1366943.jpeg?auto=compress&cs=tinysrgb&w=400&h=480",
        date: "Julho 2024"
    },
    {
        id: 8,
        title: "Reels Promocional",
        description: "Vídeo curto para divulgação de evento no Instagram",
        category: "video",
        type: "video",
        media: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
        date: "Agosto 2024"
    },
    {
        id: 9,
        title: "Campanha Digital",
        description: "Série de posts para campanha de conscientização ambiental",
        category: "social",
        type: "image",
        media: "https://images.pexels.com/photos/1366946/pexels-photo-1366946.jpeg?auto=compress&cs=tinysrgb&w=400&h=580",
        date: "Setembro 2024"
    },
    {
        id: 10,
        title: "Arte Urbana",
        description: "Desenvolvimento de peça para intervenção urbana colaborativa",
        category: "experimental",
        type: "image",
        media: "https://images.pexels.com/photos/1366947/pexels-photo-1366947.jpeg?auto=compress&cs=tinysrgb&w=400&h=460",
        date: "Outubro 2024"
    },
    {
        id: 11,
        title: "Material Institucional",
        description: "Peças gráficas para comunicação interna do coletivo",
        category: "poster",
        type: "image",
        media: "https://images.pexels.com/photos/1366948/pexels-photo-1366948.jpeg?auto=compress&cs=tinysrgb&w=400&h=520",
        date: "Novembro 2024"
    },
    {
        id: 12,
        title: "Conteúdo Educativo",
        description: "Posts informativos para redes sociais sobre história da arte",
        category: "social",
        type: "image",
        media: "https://images.pexels.com/photos/1366949/pexels-photo-1366949.jpeg?auto=compress&cs=tinysrgb&w=400&h=640",
        date: "Dezembro 2024"
    }
];

// Elementos DOM
const introScreen = document.getElementById('introScreen');
const galleryScreen = document.getElementById('galleryScreen');
const masonryGrid = document.getElementById('masonryGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('imageModal');
const modalMedia = document.getElementById('modalMedia');
const modalTitle = document.querySelector('.modal-title');
const modalDescription = document.querySelector('.modal-description');
const modalCategory = document.querySelector('.modal-category');
const modalDate = document.querySelector('.modal-date');

// Estado atual
let currentFilter = 'all';
let shuffledItems = [...portfolioItems];
let isModalOpen = false;

// Função para embaralhar array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Função para mostrar galeria
function showGallery() {
    // Embaralhar itens a cada visualização
    shuffledItems = shuffleArray(portfolioItems);
    
    introScreen.classList.add('hidden');
    setTimeout(() => {
        galleryScreen.classList.add('active');
        renderGallery();
        // Scroll para o topo da galeria
        window.scrollTo(0, 0);
    }, 400);
}

// Função para mostrar intro
function showIntro() {
    galleryScreen.classList.remove('active');
    setTimeout(() => {
        introScreen.classList.remove('hidden');
        // Limpar URL
        history.pushState(null, '', window.location.pathname);
    }, 400);
}

// Função para obter nome da categoria
function getCategoryName(category) {
    const names = {
        'poster': 'Pôster A3',
        'social': 'Redes Sociais',
        'video': 'Vídeo',
        'experimental': 'Experimental'
    };
    return names[category] || category;
}

// Função para criar item do portfólio
function createPortfolioItem(item, index) {
    const div = document.createElement('div');
    div.className = 'masonry-item';
    div.style.animationDelay = `${Math.random() * 0.8}s`;
    div.dataset.category = item.category;
    div.dataset.id = item.id;
    
    let mediaElement;
    if (item.type === 'video') {
        mediaElement = `<video muted autoplay loop playsinline>
            <source src="${item.media}" type="video/mp4">
        </video>`;
    } else {
        mediaElement = `<img src="${item.media}" alt="${item.title}" loading="lazy">`;
    }
    
    div.innerHTML = `
        ${mediaElement}
        <div class="item-overlay">
            <h3 class="item-title">${item.title}</h3>
            <span class="item-category">${getCategoryName(item.category)}</span>
        </div>
    `;
    
    div.addEventListener('click', () => openModal(item));
    return div;
}

// Função para renderizar galeria
function renderGallery(filter = 'all') {
    masonryGrid.innerHTML = '';
    
    const filteredItems = filter === 'all' 
        ? shuffledItems 
        : shuffledItems.filter(item => item.category === filter);
    
    filteredItems.forEach((item, index) => {
        const portfolioItem = createPortfolioItem(item, index);
        masonryGrid.appendChild(portfolioItem);
    });
}

// Função para abrir modal com animações
function openModal(item) {
    if (isModalOpen) return;
    
    isModalOpen = true;
    
    let mediaElement;
    if (item.type === 'video') {
        mediaElement = `<video controls autoplay>
            <source src="${item.media}" type="video/mp4">
        </video>`;
    } else {
        mediaElement = `<img src="${item.media}" alt="${item.title}">`;
    }
    
    modalMedia.innerHTML = mediaElement;
    modalTitle.textContent = item.title;
    modalDescription.textContent = item.description;
    modalCategory.textContent = getCategoryName(item.category);
    modalDate.textContent = item.date;
    
    // Adicionar classes para animação
    document.body.classList.add('modal-open');
    modal.style.display = 'block';
    
    // Forçar reflow antes de adicionar classe show
    modal.offsetHeight;
    
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    
    // Atualizar URL para compartilhamento
    const url = new URL(window.location);
    url.searchParams.set('projeto', item.id);
    history.pushState(null, '', url);
}

// Função para fechar modal com animações
function closeModal() {
    if (!isModalOpen) return;
    
    modal.classList.remove('show');
    modal.classList.add('closing');
    
    setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('closing');
        document.body.classList.remove('modal-open');
        isModalOpen = false;
        
        // Limpar parâmetro da URL
        const url = new URL(window.location);
        url.searchParams.delete('projeto');
        history.pushState(null, '', url);
    }, 400);
}

// Função para abrir projeto via URL
function openProjectFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('projeto');
    
    if (projectId) {
        const item = portfolioItems.find(p => p.id == projectId);
        if (item) {
            showGallery();
            setTimeout(() => {
                openModal(item);
            }, 800);
        }
    }
}

// Event Listeners
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.dataset.filter;
        currentFilter = filter;
        
        // Re-embaralhar ao trocar filtro
        shuffledItems = shuffleArray(portfolioItems);
        renderGallery(filter);
    });
});

// Fechar modal com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isModalOpen) {
        closeModal();
    }
});

// Navegação do browser
window.addEventListener('popstate', () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (!urlParams.get('projeto') && isModalOpen) {
        closeModal();
    }
});

// Prevenir scroll quando modal está aberto
document.addEventListener('wheel', (e) => {
    if (isModalOpen) {
        e.preventDefault();
    }
}, { passive: false });

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Embaralhar itens iniciais
    shuffledItems = shuffleArray(portfolioItems);
    
    // Verificar se há projeto na URL
    openProjectFromURL();
});

// Tornar funções globais
window.showGallery = showGallery;
window.showIntro = showIntro;
window.closeModal = closeModal;