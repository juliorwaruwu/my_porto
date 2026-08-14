import { state } from './state.js';

export const translations = {
    en: {
        homeTitle: 'Hello I am Julior',
        homeSubtitle: 'I\'m a',
        rotatingTexts: ['Full-Stack Developer', 'Mobile Developer', 'Data Analytics Enthusiast', 'Software Engineer'],
        greeting: ['Welcome to my portfolio', 'Let\'s build something amazing', 'Full-Stack Developer', 'Problem Solver', 'Code Enthusiast'],
        exploreBtn: 'Explore Projects',
        homeDesc: 'Full-Stack Developer & Data Analytics Enthusiast crafting modern, scalable web and mobile applications that solve real-world problems.',
        mobile: 'Mobile', mobileDesc: 'Flutter & Cross-Platform',
        backend: 'Backend', backendDesc: 'Java & Spring Boot',
        database: 'Database', databaseDesc: 'MySQL & PostgreSQL',
        skillsTitle: 'Technical Inventory',
        skillsDesc: 'A comprehensive overview of my technical skills, tools, and technologies I\'ve mastered.',
        projectsTitle: 'Featured Projects',
        projectsDesc: 'A showcase of my recent work demonstrating skills in full-stack development, mobile development, and data analytics.',
        experienceTitle: 'Professional Experience',
        aboutTitle: 'About Me',
        aboutDesc: 'Get to know the person behind the code. My journey, passions, and what drives me to create exceptional software.',
        contactTitle: 'Get In Touch',
        contactDesc: 'I\'m always open to discussing new projects or creative ideas. Let\'s connect and build something amazing together.',
        settingsTitle: 'Settings',
        settingsDesc: 'Customize your experience. Change themes, languages, and appearance to match your preferences.',
        supportTitle: 'Support Center',
        supportDesc: 'Need help? Find answers to common questions or reach out to our support team.',
        startConv: 'Start Conversation',
        aboutRole: 'Full-Stack Developer | Mobile Developer | Data Analytics Enthusiast',
        aboutBio1: 'Full-Stack Developer with a passion for building modern, scalable applications. Experienced in designing and developing web and mobile solutions using React, Flutter, Spring Boot, and Laravel.',
        aboutBio2: 'Skilled in data analytics, software architecture, and creating intuitive user experiences. Continuously exploring emerging technologies to build impactful digital products.',
        aboutBio3: 'I believe great software delivers meaningful value and exceptional user experiences.',
        mission: 'To create innovative software solutions that address real-world challenges while continuously expanding my technical expertise.',
        vision: 'To become a well-rounded software engineer who builds impactful digital products that deliver meaningful value and exceptional user experiences.',
        passion: 'Building modern, scalable applications using clean architecture and intuitive design. Every project is an opportunity to learn and grow.',
        exp1Title: 'Data Analyst Intern',
        exp1Company: 'DK Law Indonesia',
        exp1Desc: 'Supporting data analysis and software investigation projects by processing datasets, identifying patterns, and transforming information into actionable insights.',
        exp2Title: 'Dormitory Person in Charge',
        exp2Company: 'Jakarta International University',
        exp2Desc: 'Coordinating dormitory operations and ensuring effective communication between students and university management.',
        exp3Title: 'Head of Volleyball Club',
        exp3Company: 'Jakarta International University',
        exp3Desc: 'Leading organizational planning, coordinating training sessions, and managing team development for the volleyball club.',
        exp4Title: 'Software Development Projects',
        exp4Company: 'Academic & Personal Projects',
        exp4Desc: 'Designed and developed multiple full-stack web and mobile applications using React, Flutter, Spring Boot, Laravel, and MySQL.'
    },
    id: {
        homeTitle: 'Halo saya Julior',
        homeSubtitle: 'Saya seorang',
        rotatingTexts: ['Full-Stack Developer', 'Mobile Developer', 'Pecinta Data Analytics', 'Software Engineer'],
        greeting: ['Selamat datang di portofolio saya', 'Mari bangun sesuatu yang luar biasa', 'Pengembang Full-Stack', 'Pemecah Masalah', 'Pecinta Kode'],
        exploreBtn: 'Jelajahi Proyek',
        homeDesc: 'Full-Stack Developer & Pecinta Data Analytics yang menciptakan aplikasi web dan mobile modern dan skalabel.',
        mobile: 'Mobile', mobileDesc: 'Flutter & Cross-Platform',
        backend: 'Backend', backendDesc: 'Java & Spring Boot',
        database: 'Database', databaseDesc: 'MySQL & PostgreSQL',
        skillsTitle: 'Inventaris Teknis',
        skillsDesc: 'Ikhtisar lengkap keterampilan teknis, alat, dan teknologi yang telah saya kuasai.',
        projectsTitle: 'Proyek Unggulan',
        projectsDesc: 'Tampilan pekerjaan terbaru yang mendemonstrasikan keterampilan dalam pengembangan full-stack, mobile, dan data analytics.',
        experienceTitle: 'Pengalaman Profesional',
        aboutTitle: 'Tentang Saya',
        aboutDesc: 'Kenali orang di balik kode. Perjalanan, hasrat, dan apa yang mendorong saya membuat perangkat lunak luar biasa.',
        contactTitle: 'Hubungi Saya',
        contactDesc: 'Saya selalu terbuka untuk membahas proyek baru atau ide kreatif. Mari terhubung dan bangun sesuatu yang luar biasa.',
        settingsTitle: 'Pengaturan',
        settingsDesc: 'Sesuaikan pengalaman Anda. Ubah tema, bahasa, dan tampilan sesuai preferensi Anda.',
        supportTitle: 'Pusat Dukungan',
        supportDesc: 'Butuh bantuan? Temukan jawaban atas pertanyaan umum atau hubungi tim dukungan kami.',
        startConv: 'Mulai Percakapan',
        aboutRole: 'Full-Stack Developer | Mobile Developer | Pecinta Data Analytics',
        aboutBio1: 'Full-Stack Developer dengan passion membangun aplikasi modern dan skalabel. Berpengalaman dalam mengembangkan solusi web dan mobile menggunakan React, Flutter, Spring Boot, dan Laravel.',
        aboutBio2: 'Mahir dalam data analytics, arsitektur perangkat lunak, dan menciptakan pengalaman pengguna yang intuitif. Terus menjelajahi teknologibaru untuk membangun produk digital berdampak.',
        aboutBio3: 'Saya percaya perangkat lunak yang baik memberikan nilai bermakna dan pengalaman pengguna yang luar biasa.',
        mission: 'Menciptakan solusi perangkat lunak inovatif yang mengatasi tantangan dunia nyata sambil terus memperluas keahlian teknis.',
        vision: 'Menjadi insinyur perangkat lunak serba bisa yang membangun produk digital berdampak dengan nilai bermakna dan pengalaman pengguna luar biasa.',
        passion: 'Membangun aplikasi modern dan skalabel menggunakan arsitektur bersih dan desain intuitif. Setiap proyek adalah kesempatan untuk belajar.',
        exp1Title: 'Data Analyst Intern',
        exp1Company: 'DK Law Indonesia',
        exp1Desc: 'Mendukung proyek analisis data dan investigasi perangkat lunak dengan memproses dataset, mengidentifikasi pola, dan mengubah informasi menjadi wawasan.',
        exp2Title: 'Penanggung Jawab Asrama',
        exp2Company: 'Jakarta International University',
        exp2Desc: 'Mengoordinasikan operasi asrama dan memastikan komunikasi efektif antara mahasiswa dan manajemen universitas.',
        exp3Title: 'Ketua Klub Voli',
        exp3Company: 'Jakarta International University',
        exp3Desc: 'Memimpin perencanaan organisasi, mengoordinasikan sesi latihan, dan mengelola pengembangan tim.',
        exp4Title: 'Proyek Pengembangan Perangkat Lunak',
        exp4Company: 'Proyek Akademik & Pribadi',
        exp4Desc: 'Merancang dan mengembangkan berbagai aplikasi web dan mobile full-stack menggunakan React, Flutter, Spring Boot, Laravel, dan MySQL.'
    },
    ja: {
        homeTitle: 'こんにちは、ジュリオです',
        homeSubtitle: '私は',
        rotatingTexts: ['フルスタック開発者', 'モバイル開発者', 'データアナリティクス愛好家', 'ソフトウェアエンジニア'],
        greeting: ['ポートフォリオへようこそ', '素晴らしいものを一緒に作りましょう', 'フルスタック開発者', '問題解決者', 'コード愛好家'],
        exploreBtn: 'プロジェクトを探す',
        homeDesc: 'フルスタック開発者兼データアナリティクス愛好家。現代的でスケーラブルなWebおよびモバイルアプリケーションを構築しています。',
        mobile: 'Mobile', mobileDesc: 'Flutter & Cross-Platform',
        backend: 'Backend', backendDesc: 'Java & Spring Boot',
        database: 'Database', databaseDesc: 'MySQL & PostgreSQL',
        skillsTitle: '技術在庫',
        skillsDesc: '習得した技術スキル、ツール、テクノロジーの包括的な概要。',
        projectsTitle: '注目のプロジェクト',
        projectsDesc: 'フルスタック開発、モバイル開発、データアナリティクスのスキルを示す最近の仕事。',
        experienceTitle: 'プロの経験',
        aboutTitle: '自己紹介',
        aboutDesc: 'コードの裏側の人物をご紹介します。私の旅、情熱、原動力について。',
        contactTitle: '連絡する',
        contactDesc: '新しいプロジェクトやクリエイティブなアイデアについて Always open to discussing. Let\'s connect and build something amazing.',
        settingsTitle: '設定',
        settingsDesc: 'エクスペリエンスをカスタマイズ。テーマ、言語、外観を変更できます。',
        supportTitle: 'サポートセンター',
        supportDesc: 'ヘルプが必要ですか？よくある質問の答えを見つけるか、サポートチームに連絡してください。',
        startConv: '会話を始める',
        aboutRole: 'フルスタック開発者 | モバイル開発者 | データアナリティクス愛好家',
        aboutBio1: '現代的でスケーラブルなアプリケーションを構築することに情熱を持つフルスタック開発者。React、Flutter、Spring Boot、Laravelを使用したWebおよびモバイルソリューションの設計と開発に経験があります。',
        aboutBio2: 'データアナリティクス、ソフトウェアアーキテクチャ、直感的なユーザーエクスペリエンスの作成に精通。最新テクノロジーを継続的に探索しています。',
        aboutBio3: '優れたソフトウェアは有意義な価値と優れたユーザーエクスペリエンスを提供すると信じています。',
        mission: '現実の課題を解決する革新的なソフトウェアソリューションを開発し、技術的専門知識を継続的に拡大すること。',
        vision: '有意義な価値と優れたユーザーエクスペリエンスを提供する影響力のあるデジタルプロダクトを構築する、万能なソフトウェアエンジニアになること。',
        passion: 'クリーンなアーキテクチャと直感的なデザインで現代的でスケーラブルなアプリケーションを構築すること。',
        exp1Title: 'データアナリストインターン',
        exp1Company: 'DK Law Indonesia',
        exp1Desc: 'データセットを処理し、パターンを特定し、情報を実用的なインサイトに変換してデータ分析プロジェクトを支援。',
        exp2Title: '寮管理責任者',
        exp2Company: '東京国際大学',
        exp2Desc: '寮の運営を調整し、学生と大学管理の間のコミュニケーションを確保。',
        exp3Title: 'バレーボールクラブ部長',
        exp3Company: '東京国際大学',
        exp3Desc: '組織計画のリード、練習セッションの調整、チーム開発の管理。',
        exp4Title: 'ソフトウェア開発プロジェクト',
        exp4Company: '学術および個人プロジェクト',
        exp4Desc: 'React、Flutter、Spring Boot、Laravel、MySQLを使用した複数のフルスタックWebおよびモバイルアプリケーションを開発。'
    },
    ko: {
        homeTitle: '안녕하세요, 줄리어입니다',
        homeSubtitle: '저는',
        rotatingTexts: ['풀스택 개발자', '모바일 개발자', '데이터 분석 애호가', '소프트웨어 엔지니어'],
        greeting: ['포트폴리오에 오신 것을 환영합니다', '멋진 것을 함께 만들어요', '풀스택 개발자', '문제 해결사', '코드 애호가'],
        exploreBtn: '프로젝트 둘러보기',
        homeDesc: '풀스택 개발자兼 데이터 분석 애호가. 현대적이고 확장 가능한 웹 및 모바일 애플리케이션을 구축합니다.',
        mobile: 'Mobile', mobileDesc: 'Flutter & Cross-Platform',
        backend: 'Backend', backendDesc: 'Java & Spring Boot',
        database: 'Database', databaseDesc: 'MySQL & PostgreSQL',
        skillsTitle: '기술 재고',
        skillsDesc: '숙달한 기술 스킬, 도구 및 기술의 포괄적인 개요.',
        projectsTitle: '주목할 프로젝트',
        projectsDesc: '풀스택 개발, 모바일 개발, 데이터 분석 기술을 보여주는 최근 작업.',
        experienceTitle: '경력 사항',
        aboutTitle: '소개',
        aboutDesc: '코드 뒤에 있는 사람을 만나보세요. 저의 여정, 열정, 원동력에 대한 소개.',
        contactTitle: '연락하기',
        contactDesc: '새로운 프로젝트나 창의적인 아이디어에 대해 Always open to discussing. Let\'s connect and build something amazing.',
        settingsTitle: '설정',
        settingsDesc: '경험을 사용자 정의합니다. 테마, 언어 및 모양을 변경하세요.',
        supportTitle: '지원 센터',
        supportDesc: '도움이 필요하신가요? 일반적인 질문에 대한 답을 찾거나 지원팀에 문의하세요.',
        startConv: '대화 시작',
        aboutRole: '풀스택 개발자 | 모바일 개발자 | 데이터 분석 애호가',
        aboutBio1: '현대적이고 확장 가능한 애플리케이션을 구축하는 것에 열정을 가진 풀스택 개발자. React, Flutter, Spring Boot, Laravel을 사용한 웹 및 모바일 솔루션 설계 및 개발 경험이 있습니다.',
        aboutBio2: '데이터 분석, 소프트웨어 아키텍처, 직관적인 사용자 경험 구축에 능숙. 최신 기술을 지속적으로 탐색하고 있습니다.',
        aboutBio3: '훌륭한 소프트웨어는 의미 있는 가치와 탁월한 사용자 경험을 제공한다고 믿습니다.',
        mission: '실제 문제를 해결하는 혁신적인 소프트웨어 솔루션을 만들고 기술 전문 지식을 지속적으로 확장하는 것.',
        vision: '의미 있는 가치와 탁월한 사용자 경험을 제공하는 영향력 있는 디지털 제품을 구축하는 만능 소프트웨어 엔지니어가 되는 것.',
        passion: '깔끔한 아키텍처와 직관적인 디자인으로 현대적이고 확장 가능한 애플리케이션을 구축하는 것.',
        exp1Title: '데이터 분석 인턴',
        exp1Company: 'DK Law Indonesia',
        exp1Desc: '데이터셋을 처리하고 패턴을 식별하며 정보를 실행 가능한 통찰력으로 변환하여 데이터 분석 프로젝트를 지원.',
        exp2Title: '기숙사 담당자',
        exp2Company: '자카르타 국제 대학교',
        exp2Desc: '기숙사 운영을 조율하고 학생과 대학교 관리팀 간의 의사소통을 보장.',
        exp3Title: '배구 클럽 회장',
        exp3Company: '자카르타 국제 대학교',
        exp3Desc: '조직 계획을 이끌고, 훈련 세션을 조율하고, 팀 개발을 관리.',
        exp4Title: '소프트웨어 개발 프로젝트',
        exp4Company: '학술 및 개인 프로젝트',
        exp4Desc: 'React, Flutter, Spring Boot, Laravel, MySQL을 사용하여 여러 풀스택 웹 및 모바일 애플리케이션을 개발.'
    },
    es: {
        homeTitle: 'Hola, soy Julior',
        homeSubtitle: 'Soy un',
        rotatingTexts: ['Desarrollador Full-Stack', 'Desarrollador Móvil', 'Entusiasta de Analítica de Datos', 'Ingeniero de Software'],
        greeting: ['Bienvenido a mi portafolio', 'Construyamos algo increíble', 'Desarrollador Full-Stack', 'Resolutor de problemas', 'Entusiasta del código'],
        exploreBtn: 'Explorar Proyectos',
        homeDesc: 'Desarrollador Full-Stack y entusiasta de analítica de datos creando aplicaciones web y móviles modernas y escalables.',
        mobile: 'Mobile', mobileDesc: 'Flutter & Cross-Platform',
        backend: 'Backend', backendDesc: 'Java & Spring Boot',
        database: 'Database', databaseDesc: 'MySQL & PostgreSQL',
        skillsTitle: 'Inventario Técnico',
        skillsDesc: 'Una visión general de mis habilidades técnicas, herramientas y tecnologías que he dominado.',
        projectsTitle: 'Proyectos Destacados',
        projectsDesc: 'Una muestra de mi trabajo reciente demostrando habilidades en desarrollo full-stack, móvil y analítica de datos.',
        experienceTitle: 'Experiencia Profesional',
        aboutTitle: 'Sobre Mí',
        aboutDesc: 'Conoce a la persona detrás del código. Mi viaje, pasiones y lo que me impulsa a crear software excepcional.',
        contactTitle: 'Contacto',
        contactDesc: 'Siempre estoy abierto a discutir nuevos proyectos o ideas creativas. Conectemos y construyamos algo increíble.',
        settingsTitle: 'Configuración',
        settingsDesc: 'Personaliza tu experiencia. Cambia temas, idiomas y apariencia según tus preferencias.',
        supportTitle: 'Centro de Soporte',
        supportDesc: '¿Necesitas ayuda? Encuentra respuestas a preguntas frecuentes o contacta a nuestro equipo de soporte.',
        startConv: 'Iniciar Conversación',
        aboutRole: 'Desarrollador Full-Stack | Desarrollador Móvil | Entusiasta de Analítica de Datos',
        aboutBio1: 'Desarrollador Full-Stack con pasión por crear aplicaciones modernas y escalables. Experiencia en diseño y desarrollo de soluciones web y móviles usando React, Flutter, Spring Boot y Laravel.',
        aboutBio2: 'Experto en analítica de datos, arquitectura de software y creando experiencias de usuario intuitivas. Explorando continuamente nuevas tecnologías.',
        aboutBio3: 'Creo que el software excepcional brinda valor significativo y experiencias de usuario excepcionales.',
        mission: 'Crear soluciones de software innovadoras que aborden desafíos del mundo real mientras expando mi experiencia técnica.',
        vision: 'Convertirme en un ingeniero de software integral que construya productos digitales impactantes con valor significativo.',
        passion: 'Construir aplicaciones modernas y escalables con arquitectura limpia y diseño intuitivo.',
        exp1Title: 'Pasante de Analista de Datos',
        exp1Company: 'DK Law Indonesia',
        exp1Desc: 'Procesando datasets, identificando patrones y transformando información en información procesable para proyectos de análisis de datos.',
        exp2Title: 'Responsable de Dormitorio',
        exp2Company: 'Universidad Internacional de Yakarta',
        exp2Desc: 'Coordinando operaciones del dormitorio y garantizando comunicación efectiva entre estudiantes y administración.',
        exp3Title: 'Presidente del Club de Voleibol',
        exp3Company: 'Universidad Internacional de Yakarta',
        exp3Desc: 'Liderando planificación organizativa, coordinando sesiones de entrenamiento y gestionando el desarrollo del equipo.',
        exp4Title: 'Proyectos de Desarrollo de Software',
        exp4Company: 'Proyectos Académicos y Personales',
        exp4Desc: 'Desarrollé múltiples aplicaciones web y móviles full-stack usando React, Flutter, Spring Boot, Laravel y MySQL.'
    },
    de: {
        homeTitle: 'Hallo, ich bin Julior',
        homeSubtitle: 'Ich bin ein',
        rotatingTexts: ['Full-Stack-Entwickler', 'Mobile-Entwickler', 'Datenanalyse-Enthusiast', 'Software-Ingenieur'],
        greeting: ['Willkommen in meinem Portfolio', 'Lassen Sie etwas Großartiges bauen', 'Full-Stack-Entwickler', 'Problemlöser', 'Code-Enthusiast'],
        exploreBtn: 'Projekte Erkunden',
        homeDesc: 'Full-Stack-Entwickler und Datenanalyse-Enthusiast der moderne, skalierbare Web- und Mobile-Anwendungen erstellt.',
        mobile: 'Mobile', mobileDesc: 'Flutter & Cross-Platform',
        backend: 'Backend', backendDesc: 'Java & Spring Boot',
        database: 'Database', databaseDesc: 'MySQL & PostgreSQL',
        skillsTitle: 'Technisches Inventar',
        skillsDesc: 'Ein Überblick über meine technischen Fähigkeiten, Tools und Technologien die ich gemeistert habe.',
        projectsTitle: 'Ausgewählte Projekte',
        projectsDesc: 'Eine Auswahl meiner letzten Arbeiten die meine Fähigkeiten in Full-Stack-, Mobile-Entwicklung und Datenanalyse zeigen.',
        experienceTitle: 'Berufserfahrung',
        aboutTitle: 'Über Mich',
        aboutDesc: 'Lernen Sie die Person hinter dem Code kennen. Meine Reise, Leidenschaften und Antrieb.',
        contactTitle: 'Kontakt',
        contactDesc: 'Immer offen für neue Projekte oder kreative Ideen. Lassen Sie uns verbinden und etwas Großartiges schaffen.',
        settingsTitle: 'Einstellungen',
        settingsDesc: 'Passen Sie Ihre Erfahrung an. Ändern Sie Themen, Sprachen und Aussehen nach Ihren Vorlieben.',
        supportTitle: 'Support-Center',
        supportDesc: 'Brauchen Sie Hilfe? Finden Sie Antworten auf häufig gestellte Fragen oder kontaktieren Sie unser Support-Team.',
        startConv: 'Unterhaltung Starten',
        aboutRole: 'Full-Stack-Entwickler | Mobile-Entwickler | Datenanalyse-Enthusiast',
        aboutBio1: 'Full-Stack-Entwickler mit Leidenschaft für moderne, skalierbare Anwendungen. Erfahren in der Entwicklung von Web- und Mobile-Lösungen mit React, Flutter, Spring Boot und Laravel.',
        aboutBio2: 'Versiert in Datenanalyse, Softwarearchitektur und intuitiven Benutzererfahrungen. Kontinuierlich neue Technologien erkundend.',
        aboutBio3: 'Ich glaube, dass großartige Software bedeutungsvollen Value und außergewöhnliche Benutzererfahrungen bietet.',
        mission: 'Innovative Softwarelösungen zu entwickeln, die reale Herausforderungen bewältigen, während ich meine technischen Fähigkeiten erweitere.',
        vision: 'Ein vielseitiger Softwareentwickler zu werden, der wirkungsvolle digitale Produkte mit bedeutungsvollen Value entwickelt.',
        passion: 'Moderne, skalierbare Anwendungen mit sauberer Architektur und intuitivem Design zu entwickeln.',
        exp1Title: 'Datenanalyse-Praktikant',
        exp1Company: 'DK Law Indonesia',
        exp1Desc: 'Verarbeitung von Datasets, Erkennung von Mustern und Umwandlung von Informationen in umsetzbare Erkenntnisse für Datenanalyseprojekte.',
        exp2Title: 'Hausmeister vom Dienst',
        exp2Company: 'Jakarta International University',
        exp2Desc: 'Koordination der Wohnheimbetriebe und Gewährleistung effektiver Kommunikation zwischen Studierenden und Universitätsleitung.',
        exp3Title: 'Volleyball-Vereinsvorsitzender',
        exp3Company: 'Jakarta International University',
        exp3Desc: 'Leitung der organisationsplanung, Koordination von Trainingseinheiten und Teamentwicklung.',
        exp4Title: 'Softwareentwicklungsprojekte',
        exp4Company: 'Akademische & Persönliche Projekte',
        exp4Desc: 'Entwurf und Entwicklung mehrerer Full-Stack-Web- und Mobile-Anwendungen mit React, Flutter, Spring Boot, Laravel und MySQL.'
    }
};

const typingGreetingEl = document.getElementById('typingGreeting');
const rotatingTextEl = document.getElementById('rotatingText');

let typingTimeout;
let currentGreetingIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

let rotatingIndex = 0;
let rotatingInterval;

function restartTyping(greetings) {
    clearTimeout(typingTimeout);
    currentGreetingIndex = 0;
    currentCharIndex = 0;
    isDeleting = false;
    typeGreetingLoop(greetings);
}

function typeGreetingLoop(greetings) {
    if (!typingGreetingEl) return;
    const current = greetings[currentGreetingIndex];
    if (isDeleting) {
        typingGreetingEl.textContent = current.substring(0, currentCharIndex - 1);
        currentCharIndex--;
    } else {
        typingGreetingEl.textContent = current.substring(0, currentCharIndex + 1);
        currentCharIndex++;
    }
    if (!isDeleting && currentCharIndex === current.length) {
        typingTimeout = setTimeout(() => { isDeleting = true; typeGreetingLoop(greetings); }, 2000);
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
        typingTimeout = setTimeout(() => typeGreetingLoop(greetings), 300);
    } else {
        typingTimeout = setTimeout(() => typeGreetingLoop(greetings), isDeleting ? 30 : 80);
    }
}

function startRotatingText(texts) {
    if (!rotatingTextEl || !texts || texts.length === 0) return;
    clearInterval(rotatingInterval);
    rotatingIndex = 0;
    rotatingTextEl.textContent = texts[0];
    rotatingInterval = setInterval(() => {
        rotatingTextEl.classList.add('fade-out');
        setTimeout(() => {
            rotatingIndex = (rotatingIndex + 1) % texts.length;
            rotatingTextEl.textContent = texts[rotatingIndex];
            rotatingTextEl.classList.remove('fade-out');
            rotatingTextEl.classList.add('fade-in');
        }, 400);
    }, 3000);
}

export function applyLanguage(lang) {
    state.language = lang;
    const t = translations[lang];
    if (!t) return;

    const greetingEl = document.getElementById('typingGreeting');
    if (greetingEl) greetingEl.dataset.greetings = JSON.stringify(t.greeting);

    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) heroTitle.innerHTML = `${t.homeTitle}<br><span class="hero-subtitle">${t.homeSubtitle} <span class="rotating-text" id="rotatingText">${t.rotatingTexts[0]}</span></span>`;

    const ctaBtn = document.querySelector('#home .cta-btn');
    if (ctaBtn) ctaBtn.innerHTML = `<i class="fas fa-rocket"></i> ${t.exploreBtn}`;

    const heroDesc = document.querySelector('.hero-description');
    if (heroDesc) heroDesc.textContent = t.homeDesc;

    const skillCards = document.querySelectorAll('#home .skill-card-3d');
    if (skillCards[0]) skillCards[0].querySelector('h3').textContent = t.mobile;
    if (skillCards[0]) skillCards[0].querySelector('p').textContent = t.mobileDesc;
    if (skillCards[1]) skillCards[1].querySelector('h3').textContent = t.backend;
    if (skillCards[1]) skillCards[1].querySelector('p').textContent = t.backendDesc;
    if (skillCards[2]) skillCards[2].querySelector('h3').textContent = t.database;
    if (skillCards[2]) skillCards[2].querySelector('p').textContent = t.databaseDesc;

    const skillsTitle = document.querySelector('#skills .page-title');
    if (skillsTitle) skillsTitle.textContent = t.skillsTitle;
    const skillsDesc = document.querySelector('#skills .page-description');
    if (skillsDesc) skillsDesc.textContent = t.skillsDesc;

    const projectsTitle = document.querySelector('#projects .page-title');
    if (projectsTitle) projectsTitle.textContent = t.projectsTitle;
    const projectsDesc = document.querySelector('#projects .page-description');
    if (projectsDesc) projectsDesc.textContent = t.projectsDesc;

    const expTitle = document.querySelector('#experience .page-title');
    if (expTitle) expTitle.textContent = t.experienceTitle;

    const aboutTitle = document.querySelector('#about .page-title');
    if (aboutTitle) aboutTitle.textContent = t.aboutTitle;
    const aboutDesc = document.querySelector('#about .page-description');
    if (aboutDesc) aboutDesc.textContent = t.aboutDesc;

    const contactTitle = document.querySelector('#contact .page-title');
    if (contactTitle) contactTitle.textContent = t.contactTitle;
    const contactDesc = document.querySelector('#contact .page-description');
    if (contactDesc) contactDesc.textContent = t.contactDesc;

    const settingsTitle = document.querySelector('#settings .page-title');
    if (settingsTitle) settingsTitle.textContent = t.settingsTitle;
    const settingsDesc = document.querySelector('#settings .page-description');
    if (settingsDesc) settingsDesc.textContent = t.settingsDesc;

    const supportTitle = document.querySelector('#support .page-title');
    if (supportTitle) supportTitle.textContent = t.supportTitle;
    const supportDesc = document.querySelector('#support .page-description');
    if (supportDesc) supportDesc.textContent = t.supportDesc;

    const startConvBtn = document.querySelector('#contact .cta-btn');
    if (startConvBtn) startConvBtn.innerHTML = `<i class="fas fa-comments"></i> ${t.startConv}`;

    const aboutRole = document.querySelector('.about-role');
    if (aboutRole) aboutRole.textContent = t.aboutRole;

    const aboutBios = document.querySelectorAll('.about-bio');
    if (aboutBios[0]) aboutBios[0].textContent = t.aboutBio1;
    if (aboutBios[1]) aboutBios[1].textContent = t.aboutBio2;
    if (aboutBios[2]) aboutBios[2].textContent = t.aboutBio3;

    const missionP = document.querySelector('.about-detail-card:nth-child(1) p');
    if (missionP) missionP.textContent = t.mission;
    const visionP = document.querySelector('.about-detail-card:nth-child(2) p');
    if (visionP) visionP.textContent = t.vision;
    const passionP = document.querySelector('.about-detail-card:nth-child(3) p');
    if (passionP) passionP.textContent = t.passion;

    const timelineCards = document.querySelectorAll('.timeline-card');
    if (timelineCards[0]) {
        timelineCards[0].querySelector('h3').textContent = t.exp1Title;
        timelineCards[0].querySelector('p').textContent = t.exp1Desc;
    }
    if (timelineCards[1]) {
        timelineCards[1].querySelector('h3').textContent = t.exp2Title;
        timelineCards[1].querySelector('p').textContent = t.exp2Desc;
    }
    if (timelineCards[2]) {
        timelineCards[2].querySelector('h3').textContent = t.exp3Title;
        timelineCards[2].querySelector('p').textContent = t.exp3Desc;
    }
    if (timelineCards[3]) {
        timelineCards[3].querySelector('h3').textContent = t.exp4Title;
        timelineCards[3].querySelector('p').textContent = t.exp4Desc;
    }

    restartTyping(t.greeting);
    startRotatingText(t.rotatingTexts);
}

export function initI18n() {
    typeGreetingLoop(translations.en.greeting);
    startRotatingText(translations.en.rotatingTexts);
}
