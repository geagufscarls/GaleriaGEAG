<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galeria GEAG - Galeria de Insetos</title>
    <style>
        :root {
            --azul-bic: #1F75FE;
            --branco: #FFFFFF;
            --cinza-claro: #F5F5F5;
            --cinza-escuro: #333333;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background-color: var(--cinza-claro);
            color: var(--cinza-escuro);
        }
        
        header {
            background-color: var(--azul-bic);
            color: var(--branco);
            padding: 20px;
            text-align: center;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
        
        .logo {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 10px;
        }
        
        .subtitle {
            font-size: 1.2rem;
            opacity: 0.9;
        }
        
        .categories {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px;
            padding: 20px;
            background-color: var(--branco);
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        
        .category-btn {
            background-color: var(--azul-bic);
            color: var(--branco);
            border: none;
            padding: 10px 20px;
            border-radius: 30px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 500;
        }
        
        .category-btn:hover {
            background-color: #0D5BD9;
            transform: translateY(-2px);
        }
        
        .category-btn.active {
            background-color: #0D5BD9;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        
        .gallery-container {
            max-width: 1200px;
            margin: 30px auto;
            padding: 0 20px;
        }
        
        .carousel {
            position: relative;
            overflow: hidden;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            background-color: var(--branco);
        }
        
        .carousel-inner {
            display: flex;
            transition: transform 0.5s ease;
        }
        
        .carousel-item {
            min-width: 100%;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .image-container {
            width: 100%;
            height: 400px;
            overflow: hidden;
            border-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--cinza-claro);
        }
        
        .inset-image {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
        }
        
        .carousel-controls {
            display: flex;
            justify-content: space-between;
            padding: 15px 20px;
            background-color: var(--azul-bic);
        }
        
        .carousel-btn {
            background-color: var(--branco);
            color: var(--azul-bic);
            border: none;
            padding: 8px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s ease;
        }
        
        .carousel-btn:hover {
            background-color: var(--cinza-claro);
        }
        
        .carousel-indicators {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 15px;
        }
        
        .indicator {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: #CCCCCC;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .indicator.active {
            background-color: var(--azul-bic);
            transform: scale(1.2);
        }
        
        .info-btn {
            background-color: var(--azul-bic);
            color: var(--branco);
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 15px;
            font-weight: 500;
            transition: all 0.3s ease;
        }
        
        .info-btn:hover {
            background-color: #0D5BD9;
        }
        
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 1000;
            justify-content: center;
            align-items: center;
        }
        
        .modal-content {
            background-color: var(--branco);
            padding: 30px;
            border-radius: 10px;
            max-width: 600px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            position: relative;
        }
        
        .close-btn {
            position: absolute;
            top: 15px;
            right: 15px;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--cinza-escuro);
        }
        
        .inset-info {
            margin-top: 20px;
        }
        
        .info-item {
            margin-bottom: 10px;
            display: flex;
        }
        
        .info-label {
            font-weight: bold;
            min-width: 120px;
        }
        
        .info-value {
            flex: 1;
        }
        
        footer {
            background-color: var(--azul-bic);
            color: var(--branco);
            text-align: center;
            padding: 20px;
            margin-top: 40px;
        }
        
        @media (max-width: 768px) {
            .image-container {
                height: 300px;
            }
            
            .categories {
                padding: 15px 10px;
            }
            
            .category-btn {
                padding: 8px 15px;
                font-size: 0.9rem;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="logo">GEAG</div>
        <div class="subtitle">Galeria de Insetos</div>
    </header>
    
    <div class="categories">
        <button class="category-btn active" data-category="injurias">Injúrias</button>
        <button class="category-btn" data-category="coleopteros">Coleópteros</button>
        <button class="category-btn" data-category="lepidopteros">Lepidópteros</button>
        <button class="category-btn" data-category="himenopteros">Himenópteros</button>
        <button class="category-btn" data-category="dipteros">Dípteros</button>
    </div>
    
    <div class="gallery-container">
        <div class="carousel">
            <div class="carousel-inner">
                <!-- Itens do carrossel serão inseridos dinamicamente -->
            </div>
            <div class="carousel-controls">
                <button class="carousel-btn prev-btn">Anterior</button>
                <button class="carousel-btn next-btn">Próximo</button>
            </div>
            <div class="carousel-indicators">
                <!-- Indicadores serão inseridos dinamicamente -->
            </div>
        </div>
    </div>
    
    <div class="modal" id="infoModal">
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <div class="inset-info">
                <!-- Informações do inseto serão inseridas dinamicamente -->
            </div>
        </div>
    </div>
    
    <footer>
        <p>Galeria GEAG &copy; 2023 - Todos os direitos reservados</p>
    </footer>

    <script>
        // Dados de exemplo para a galeria
        const galleryData = {
            injurias: [
                {
                    id: 1,
                    image: "https://via.placeholder.com/600x400/1F75FE/FFFFFF?text=Inseto+1",
                    species: "Spodoptera frugiperda",
                    injury: "Desfolha",
                    author: "João Silva",
                    date: "15/03/2023",
                    location: "Lavoura de milho - RS",
                    description: "Lagarta que causa desfolha em plantas de milho, especialmente em estágios iniciais de desenvolvimento."
                },
                {
                    id: 2,
                    image: "https://via.placeholder.com/600x400/1F75FE/FFFFFF?text=Inseto+2",
                    species: "Diatraea saccharalis",
                    injury: "Broca do colmo",
                    author: "Maria Santos",
                    date: "22/04/2023",
                    location: "Cana-de-açúcar - SP",
                    description: "Lagarta que perfura o colmo da cana-de-açúcar, causando danos internos e redução na produtividade."
                },
                {
                    id: 3,
                    image: "https://via.placeholder.com/600x400/1F75FE/FFFFFF?text=Inseto+3",
                    species: "Bemisia tabaci",
                    injury: "Transmissão de vírus",
                    author: "Carlos Oliveira",
                    date: "10/05/2023",
                    location: "Tomateiro - MG",
                    description: "Mosca-branca que transmite vírus para plantas de tomate, causando amarelecimento e deformação foliar."
                }
            ],
            coleopteros: [
                {
                    id: 4,
                    image: "https://via.placeholder.com/600x400/1F75FE/FFFFFF?text=Besouro+1",
                    species: "Diabrotica speciosa",
                    injury: "Danos em raízes",
                    author: "Ana Costa",
                    date: "05/06/2023",
                    location: "Soja - PR",
                    description: "Besouro conhecido como vaquinha, cujas larvas causam danos às raízes de diversas culturas."
                },
                {
                    id: 5,
                    image: "https://via.placeholder.com/600x400/1F75FE/FFFFFF?text=Besouro+2",
                    species: "Anthonomus grandis",
                    injury: "Broca do botão floral",
                    author: "Pedro Almeida",
                    date: "18/07/2023",
                    location: "Algodão - BA",
                    description: "Besouro que ataca os botões florais do algodoeiro, causando queda e redução na produção."
                }
            ],
            lepidopteros: [
                {
                    id: 6,
                    image: "https://via.placeholder.com/600x400/1F75FE/FFFFFF?text=Borboleta+1",
                    species: "Helicoverpa armigera",
                    injury: "Danos em frutos",
                    author: "Fernanda Lima",
                    date: "12/08/2023",
                    location: "Soja - MT",
                    description: "Lagarta polífaga que ataca frutos e vagens de diversas culturas, causando danos diretos."
                }
            ],
            himenopteros: [
                {
                    id: 7,
                    image: "https://via.placeholder.com/600x400/1F75FE/FFFFFF?text=Vespa+1",
                    species: "Cotesia flavipes",
                    injury: "Parasitoide de lagartas",
                    author: "Ricardo Souza",
                    date: "25/09/2023",
                    location: "Cana-de-açúcar - SP",
                    description: "Vespa parasitoide utilizada no controle biológico de lagartas brocas da cana-de-açúcar."
                }
            ],
            dipteros: [
                {
                    id: 8,
                    image: "https://via.placeholder.com/600x400/1F75FE/FFFFFF?text=Mosca+1",
                    species: "Ceratitis capitata",
                    injury: "Danos em frutos",
                    author: "Juliana Rocha",
                    date: "03/10/2023",
                    location: "Frutíferas - SC",
                    description: "Mosca-das-frutas que deposita ovos em frutos maduros, causando danos e apodrecimento."
                }
            ]
        };

        // Elementos DOM
        const categoryButtons = document.querySelectorAll('.category-btn');
        const carouselInner = document.querySelector('.carousel-inner');
        const carouselIndicators = document.querySelector('.carousel-indicators');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const modal = document.getElementById('infoModal');
        const closeBtn = document.querySelector('.close-btn');
        const insetInfo = document.querySelector('.inset-info');

        // Variáveis de estado
        let currentCategory = 'injurias';
        let currentIndex = 0;

        // Inicialização
        document.addEventListener('DOMContentLoaded', () => {
            loadCategory(currentCategory);
            setupEventListeners();
        });

        // Configurar event listeners
        function setupEventListeners() {
            // Categorias
            categoryButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const category = button.getAttribute('data-category');
                    switchCategory(category, button);
                });
            });

            // Controles do carrossel
            prevBtn.addEventListener('click', showPrevItem);
            nextBtn.addEventListener('click', showNextItem);

            // Modal
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });

            window.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }

        // Trocar categoria
        function switchCategory(category, button) {
            currentCategory = category;
            currentIndex = 0;
            
            // Atualizar botões ativos
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Carregar nova categoria
            loadCategory(category);
        }

        // Carregar categoria
        function loadCategory(category) {
            const items = galleryData[category];
            
            // Limpar carrossel
            carouselInner.innerHTML = '';
            carouselIndicators.innerHTML = '';
            
            // Adicionar itens ao carrossel
            items.forEach((item, index) => {
                // Item do carrossel
                const carouselItem = document.createElement('div');
                carouselItem.className = 'carousel-item';
                carouselItem.innerHTML = `
                    <div class="image-container">
                        <img src="${item.image}" alt="${item.species}" class="inset-image">
                    </div>
                    <button class="info-btn" data-id="${item.id}">Ver Informações</button>
                `;
                carouselInner.appendChild(carouselItem);
                
                // Indicador
                const indicator = document.createElement('div');
                indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
                indicator.setAttribute('data-index', index);
                indicator.addEventListener('click', () => {
                    showItem(index);
                });
                carouselIndicators.appendChild(indicator);
            });
            
            // Atualizar posição do carrossel
            updateCarouselPosition();
            
            // Adicionar event listeners aos botões de informação
            document.querySelectorAll('.info-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const id = parseInt(btn.getAttribute('data-id'));
                    showInsetInfo(id);
                });
            });
        }

        // Mostrar item anterior
        function showPrevItem() {
            const items = galleryData[currentCategory];
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            updateCarouselPosition();
        }

        // Mostrar próximo item
        function showNextItem() {
            const items = galleryData[currentCategory];
            currentIndex = (currentIndex + 1) % items.length;
            updateCarouselPosition();
        }

        // Mostrar item específico
        function showItem(index) {
            currentIndex = index;
            updateCarouselPosition();
        }

        // Atualizar posição do carrossel
        function updateCarouselPosition() {
            carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            // Atualizar indicadores
            document.querySelectorAll('.indicator').forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentIndex);
            });
        }

        // Mostrar informações do inseto
        function showInsetInfo(id) {
            // Encontrar o inseto pelo ID
            let inset = null;
            for (const category in galleryData) {
                inset = galleryData[category].find(item => item.id === id);
                if (inset) break;
            }
            
            if (inset) {
                // Preencher informações no modal
                insetInfo.innerHTML = `
                    <h2>${inset.species}</h2>
                    <div class="info-item">
                        <div class="info-label">Injúria:</div>
                        <div class="info-value">${inset.injury}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Autor:</div>
                        <div class="info-value">${inset.author}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Data:</div>
                        <div class="info-value">${inset.date}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Local:</div>
                        <div class="info-value">${inset.location}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Descrição:</div>
                        <div class="info-value">${inset.description}</div>
                    </div>
                `;
                
                // Mostrar modal
                modal.style.display = 'flex';
            }
        }
    </script>
</body>
</html>