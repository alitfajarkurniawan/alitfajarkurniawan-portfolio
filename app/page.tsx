"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Language = "id" | "en";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  role: string;
  technologies: string[];
  featured?: boolean;
  link?: string;
  linkLabel?: string;
};

type Research = {
  number: string;
  title: string;
  category: string;
  description: string;
  objective: string;
  approach: string;
  output: string;
  technologies: string[];
  link?: string;
  linkLabel?: string;
};

type Publication = {
  number: string;
  type: string;
  title: string;
  description: string;
  meta: string;
  link?: string;
  linkLabel?: string;
};

export default function Home() {
  /* =========================================================
      STATES
  ========================================================= */

  const [language, setLanguage] = useState<Language>("id");
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [documentViewer, setDocumentViewer] = useState<{
    title: string;
    subtitle: string;
    file: string;
  } | null>(null);

  const [projectViewer, setProjectViewer] = useState<Project | null>(null);
  const [researchViewer, setResearchViewer] = useState<Research | null>(null);

  const isID = language === "id";

  /* =========================================================
      LANGUAGE
  ========================================================= */

  useEffect(() => {
    const savedLanguage = localStorage.getItem("afk-language");

    if (savedLanguage === "id" || savedLanguage === "en") {
      setLanguage(savedLanguage);
      document.documentElement.lang = savedLanguage;
    } else {
      document.documentElement.lang = "id";
    }
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem("afk-language", newLanguage);
    document.documentElement.lang = newLanguage;
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  /* =========================================================
      TEXT
  ========================================================= */

  const text = {
    navigation: {
      about: isID ? "Tentang" : "About",
      experience: isID ? "Pengalaman" : "Experience",
      projects: isID ? "Proyek" : "Projects",
      research: isID ? "Riset" : "Research",
      skills: isID ? "Keterampilan" : "Skills",
      contact: isID ? "Kontak" : "Contact",
    },

    navbar: {
      viewCv: isID ? "Lihat CV" : "View CV",
    },

    hero: {
      greeting: isID ? "Halo, Saya" : "Hello, I'm",
      profession: isID ? "Engineer Informatika" : "Informatics Engineer",
      keywords: isID
        ? "Teknologi • Sistem Digital • Kecerdasan Buatan"
        : "Technology • Digital Systems • Artificial Intelligence",
      description: isID
        ? "Saya membangun solusi digital yang andal dengan menggabungkan perangkat lunak, data, dan teknologi untuk menyelesaikan permasalahan nyata."
        : "I build reliable digital solutions by combining software, data, and technology to solve real-world problems.",
      explore: isID ? "Jelajahi Karya Saya" : "Explore My Work",
      about: isID ? "Tentang Saya" : "About Me",
      coreAreas: isID ? "Bidang Utama" : "Core Areas",
      projects: isID ? "Proyek" : "Projects",
      researchFocus: isID ? "Fokus Riset" : "Research Focus",
      focus: isID ? "Fokus" : "Focus",
      focusValue: isID
        ? "Teknologi & Manajemen Data"
        : "Technology & Data Management",
      scroll: isID ? "Gulir" : "Scroll",
    },

    about: {
      label: isID ? "01 / Tentang" : "01 / About",
      titleFirst: isID ? "Membangun teknologi" : "Building technology",
      titleSecond: isID ? "dengan tujuan." : "with purpose.",
      description: isID
        ? "Saya adalah profesional Teknik Informatika dengan pengalaman pada sistem digital, pengembangan perangkat lunak, manajemen data, dan riset terapan. Pekerjaan saya berfokus pada penerjemahan kebutuhan operasional menjadi solusi teknologi yang praktis, andal, dan terukur."
        : "I am an Informatics Engineering professional with experience across digital systems, software development, data management, and applied research. My work focuses on turning operational needs into practical, reliable, and measurable technology solutions.",
    },

    education: {
      label: isID ? "Pendidikan" : "Education",
      title: isID ? "Latar Belakang Akademik" : "Academic Background",
      description: isID
        ? "Fondasi teknis dalam Teknik Informatika yang diperkuat melalui studi magister pada bidang kecerdasan komputasional dan pengambilan keputusan berbasis data."
        : "A technical foundation in Informatics Engineering, strengthened by graduate study in computational intelligence and data-driven decision support.",
    },

    experience: {
      label: isID ? "02 / Pengalaman" : "02 / Experience",
      titleFirst: isID ? "Perjalanan profesional" : "Professional journey",
      titleSecond: isID ? "melalui teknologi." : "through technology.",
      description: isID
        ? "Pengalaman profesional saya terbentuk dari perpaduan sistem informasi, operasional digital, manajemen data, dan implementasi teknologi untuk mendukung kebutuhan organisasi."
        : "My professional experience is shaped by the intersection of information systems, digital operations, data management, and practical technology implementation to support organizational needs.",
    },

    projects: {
      label: isID ? "03 / Proyek" : "03 / Projects",
      titleFirst: isID ? "Mengubah kebutuhan menjadi" : "Turning needs into",
      titleSecond: isID ? "solusi digital." : "digital solutions.",
      description: isID
        ? "Proyek implementatif yang berfokus pada otomasi, integrasi sistem, IoT, dan pengembangan solusi teknologi."
        : "Implementation-oriented projects focused on automation, system integration, IoT, and practical technology solutions.",
      selected: isID ? "Proyek Terpilih" : "Selected Projects",
      viewProject: isID ? "Lihat Proyek" : "View Project",
    },

    research: {
      label: isID ? "04 / Riset" : "04 / Research",
      titleFirst: isID ? "Mengolah data menjadi" : "Turning data into",
      titleSecond: isID ? "wawasan dan prediksi." : "insight and prediction.",
      description: isID
        ? "Riset yang berfokus pada forecasting, machine learning, natural language processing, clustering, dan analisis data."
        : "Research focused on forecasting, machine learning, natural language processing, clustering, and data analytics.",
      selected: isID ? "Riset Terpilih" : "Selected Research",
      viewResearch: isID ? "Lihat Riset" : "View Research",
    },

    publication: {
      label: isID ? "05 / Publikasi" : "05 / Publications",
      title: isID ? "Publikasi & Karya Tulis" : "Publications & Written Works",
      description: isID
        ? "Buku, jurnal nasional, dan publikasi konferensi yang berkaitan dengan riset dan pengembangan teknologi."
        : "Books, national journals, and conference publications related to research and technology development.",
    },

    skills: {
      label: isID ? "06 / Keterampilan" : "06 / Skills",
      titleFirst: isID ? "Kompetensi yang mendukung" : "Capabilities that support",
      titleSecond: isID ? "pekerjaan saya." : "my work.",
      description: isID
        ? "Kombinasi keterampilan teknis, profesional, dan bahasa yang mendukung pengembangan solusi digital dan riset."
        : "A combination of technical, professional, and language capabilities supporting digital development and research.",
      technical: isID ? "Keterampilan Teknis" : "Technical Skills",
      professional: isID ? "Keterampilan Profesional" : "Professional Skills",
      languages: isID ? "Bahasa" : "Languages",
    },

    contact: {
      label: isID ? "07 / Kontak" : "07 / Contact",

      titleFirst: isID
        ? "Mari terhubung dan"
        : "Let's connect and",

      titleSecond: isID
        ? "membangun sesuatu."
        : "build something.",

      description: isID
        ? "Terbuka untuk kolaborasi profesional, pengembangan sistem, riset, dan peluang teknologi."
        : "Open to professional collaboration, system development, research, and technology opportunities.",

      email: "Email",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      github: "Github"
    },

    modal: {
      problem: isID ? "01 / Permasalahan" : "01 / Problem",
      solution: isID ? "02 / Solusi" : "02 / Solution",
      role: isID ? "03 / Peran Saya" : "03 / My Role",
      objective: isID ? "01 / Tujuan" : "01 / Objective",
      approach: isID ? "02 / Pendekatan" : "02 / Approach",
      output: isID ? "03 / Luaran" : "03 / Output",
      close: isID ? "Tutup" : "Close",
      openFull: isID ? "Buka Penuh" : "Open Full",
      download: isID ? "Unduh" : "Download",
      academicDocument: isID ? "Dokumen Akademik" : "Academic Document",
      pdfDocument: isID ? "Dokumen PDF" : "PDF Document",
      downloadCv: isID ? "Unduh CV" : "Download CV",
    },
  };

  /* =========================================================
      NAVIGATION
  ========================================================= */

  const navigation = [
    [text.navigation.about, "#about"],
    [text.navigation.experience, "#experience"],
    [text.navigation.projects, "#projects"],
    [text.navigation.research, "#research"],
    [text.navigation.skills, "#skills"],
    [text.navigation.contact, "#contact"],
  ];

  /* =========================================================
      ABOUT
  ========================================================= */

  const expertise = [
    {
      number: "01",
      title: isID ? "Sistem Digital" : "Digital Systems",
      description: isID
        ? "Sistem informasi, alur kerja digital, integrasi sistem, dan dukungan teknologi untuk kebutuhan organisasi."
        : "Information systems, digital workflows, system integration, and technology support for organizational operations.",
    },
    {
      number: "02",
      title: "Data & AI",
      description: isID
        ? "Analisis data, forecasting, machine learning, dan solusi berbasis riset untuk mendukung pengambilan keputusan."
        : "Data analysis, forecasting, machine learning, and research-oriented solutions for decision support.",
    },
    {
      number: "03",
      title: isID ? "Rekayasa Perangkat Lunak" : "Software Engineering",
      description: isID
        ? "Pengembangan web, desain antarmuka, RESTful API, otomasi, dan implementasi perangkat lunak."
        : "Web development, interface design, RESTful APIs, automation, and practical software implementation.",
    },
  ];

  /* =========================================================
      PROJECTS
  ========================================================= */

  const projects: Project[] = [
    {
      number: "01",
      title: "WhatsApp Broadcast Automation",
      category: isID ? "Otomasi Proses" : "Process Automation",
      description: isID
        ? "Aplikasi otomasi untuk membantu distribusi pesan WhatsApp secara lebih terstruktur dan efisien."
        : "An automation application designed to support more structured and efficient WhatsApp message distribution.",
      problem: isID
        ? "Distribusi pesan secara manual membutuhkan waktu dan meningkatkan pekerjaan berulang."
        : "Manual message distribution requires time and increases repetitive operational work.",
      solution: isID
        ? "Mengembangkan workflow otomasi yang menyederhanakan proses broadcast dan pengolahan data penerima."
        : "Developed an automation workflow that simplifies message broadcasting and recipient-data processing.",
      role: isID
        ? "Perancangan workflow, pengembangan aplikasi, pengujian, dan implementasi."
        : "Workflow design, application development, testing, and implementation.",
      technologies: ["Python", "Automation", "Data Processing", "Digital Workflow"],
      featured: false,
      link: "https://github.com/alitfajarkurniawan/whatsapp_broadcast.git",
      linkLabel: isID ? "Lihat Repository GitHub" : "View GitHub Repository",
    },

    {
      number: "02",
      title: "Interactive Smart-RFID Conveyor",
      category: isID ? "IoT & Sistem Cerdas" : "IoT & Smart Systems",
      description: isID
        ? "Sistem conveyor cerdas berbasis RFID untuk identifikasi objek dan otomasi proses."
        : "A smart RFID-based conveyor system for object identification and automated processing.",
      problem: isID
        ? "Proses identifikasi objek secara manual memiliki keterbatasan efisiensi dan interaksi real-time."
        : "Manual object identification limits efficiency and real-time interaction.",
      solution: isID
        ? "Mengembangkan conveyor berbasis RFID dengan integrasi perangkat keras dan perangkat lunak."
        : "Developed an RFID-enabled conveyor integrating hardware and software components.",
      role: isID
        ? "Perancangan sistem, integrasi RFID, pengujian, dokumentasi, dan implementasi."
        : "System design, RFID integration, testing, documentation, and implementation.",
      technologies: ["RFID", "IoT", "Automation", "Embedded System"],
      featured: true,
      link:
        "https://books.google.co.id/books?hl=id&lr=&id=nF3dDwAAQBAJ&oi=fnd&pg=PR19&dq=alit+fajar+kurniawan&ots=9hevkM3kNl&sig=rVUblhZPPONO-Zj5LRkcceAC1VY&redir_esc=y#v=onepage&q&f=false",
      linkLabel: isID ? "Lihat Buku Publikasi" : "View Published Book",
    },

    {
      number: "03",
      title: "Evomo Middleware System",
      category: isID ? "Integrasi Sistem" : "System Integration",
      description: isID
        ? "Implementasi middleware untuk mendukung komunikasi sistem melalui RESTful Web Service, CI/CD, dan monitoring Grafana."
        : "Middleware implementation supporting system communication through RESTful Web Services, CI/CD, and Grafana monitoring.",
      problem: isID
        ? "Sistem membutuhkan integrasi komunikasi layanan, proses deployment yang konsisten, dan monitoring yang mudah dianalisis."
        : "The system required integrated service communication, consistent deployment processes, and readable monitoring.",
      solution: isID
        ? "Mengembangkan middleware berbasis RESTful API serta integrasi CI/CD dan monitoring melalui Grafana."
        : "Developed RESTful API-based middleware with CI/CD integration and Grafana monitoring.",
      role: isID
        ? "Perancangan middleware, implementasi API, pengujian integrasi, CI/CD, dan monitoring."
        : "Middleware design, API implementation, integration testing, CI/CD, and monitoring.",
      technologies: [
        "REST API",
        "Middleware",
        "CI/CD",
        "Grafana",
        "System Integration",
      ],
      featured: false,
      link:
        "https://jurnal.lldikti4.or.id/index.php/jurnaltekno/article/view/507",
      linkLabel: isID ? "Lihat Publikasi Jurnal" : "View Journal Publication",
    },
  ];

  /* =========================================================
      RESEARCH
  ========================================================= */

  const research: Research[] = [
    {
      number: "01",
      title: isID
        ? "Peramalan Penerimaan Mahasiswa"
        : "Student Enrollment Forecasting",
      category: isID ? "Forecasting & AI" : "Forecasting & AI",
      description: isID
        ? "Riset peramalan multivariat untuk memprediksi tren penerimaan mahasiswa berdasarkan data historis pendidikan."
        : "Multivariate forecasting research for predicting student enrollment trends using historical educational data.",
      objective: isID
        ? "Menghasilkan proyeksi penerimaan mahasiswa yang dapat mendukung perencanaan institusi."
        : "Produce enrollment projections to support institutional planning.",
      approach: isID
        ? "Feature engineering, machine learning, deep learning, time-series forecasting, dan explainability."
        : "Feature engineering, machine learning, deep learning, time-series forecasting, and explainability.",
      output: isID
        ? "Model prediksi penerimaan mahasiswa per jalur dan total registrasi."
        : "Enrollment prediction models by admission pathway and total registration.",
      technologies: [
        "Python",
        "Machine Learning",
        "Deep Learning",
        "Time Series",
        "SHAP",
      ],
    },

    {
      number: "02",
      title: isID
        ? "Prediksi Sentimen Ulasan Hotel"
        : "Hotel Review Sentiment Prediction",
      category: "Natural Language Processing",
      description: isID
        ? "Riset prediksi sentimen ulasan hotel menggunakan expectation-based analysis dan deep learning."
        : "Research on hotel review sentiment prediction using expectation-based analysis and deep learning.",
      objective: isID
        ? "Mengidentifikasi pola sentimen pelanggan dari data ulasan tekstual."
        : "Identify customer sentiment patterns from textual hotel-review data.",
      approach: isID
        ? "Text preprocessing, NLP, deep learning, dan evaluasi model prediktif."
        : "Text preprocessing, NLP, deep learning, and predictive-model evaluation.",
      output: isID
        ? "Model klasifikasi sentimen yang dipublikasikan pada konferensi IEEE."
        : "Sentiment classification model published through an IEEE conference.",
      technologies: ["Python", "NLP", "Deep Learning", "Text Mining"],
      link:
        "https://ieeexplore.ieee.org/abstract/document/11019085?casa_token=oSzJJO3fhusAAAAA:ItN4rzLJm4jdzuWAvnGRm9sxldWrCJIO-S3OejYiDHjoPfQCOZ0r9cjeQTV4fub0lK375OV6pjStXg",
      linkLabel: isID ? "Lihat Publikasi IEEE" : "View IEEE Publication",
    },

    {
      number: "03",
      title: isID
        ? "Clustering Kinerja Mahasiswa"
        : "Student Performance Clustering",
      category: "Machine Learning",
      description: isID
        ? "Riset analisis data pendidikan dengan teknik clustering untuk menemukan pola kelompok mahasiswa."
        : "Educational-data research using clustering techniques to identify student-performance patterns.",
      objective: isID
        ? "Mengidentifikasi kelompok mahasiswa berdasarkan karakteristik kinerja akademik."
        : "Identify student groups based on academic-performance characteristics.",
      approach: isID
        ? "K-Means, Agglomerative Clustering, SSE, dan Silhouette Score."
        : "K-Means, Agglomerative Clustering, SSE, and Silhouette Score.",
      output: isID
        ? "Hasil pengelompokan karakteristik mahasiswa untuk mendukung analisis akademik."
        : "Student-characteristic clusters supporting academic analysis.",
      technologies: [
        "Python",
        "Machine Learning",
        "K-Means",
        "Clustering",
        "Data Mining",
      ],
    },

    {
      number: "04",
      title: isID
        ? "Peramalan Harga Rumah dengan ARIMA"
        : "ARIMA House Price Forecasting",
      category: isID ? "Analisis Deret Waktu" : "Time-Series Analysis",
      description: isID
        ? "Riset forecasting menggunakan ARIMA untuk memprediksi harga rumah pada masa pandemi COVID-19."
        : "Forecasting research using ARIMA to predict house prices during the COVID-19 pandemic.",
      objective: isID
        ? "Menganalisis pola deret waktu dan menghasilkan prediksi harga rumah."
        : "Analyze time-series patterns and produce house-price forecasts.",
      approach: isID
        ? "Analisis deret waktu dan pemodelan ARIMA."
        : "Time-series analysis and ARIMA modelling.",
      output: isID
        ? "Model forecasting yang dipublikasikan pada jurnal nasional terakreditasi."
        : "Forecasting model published in a nationally accredited journal.",
      technologies: ["Python", "ARIMA", "Time Series", "Forecasting"],
      link:
        "https://scholar.google.co.id/citations?view_op=view_citation&hl=id&user=qPHt6bUAAAAJ&citation_for_view=qPHt6bUAAAAJ:UeHWp8X0CEIC",
      linkLabel: isID ? "Lihat Publikasi" : "View Publication",
    },
  ];

  /* =========================================================
      PUBLICATIONS
  ========================================================= */

  const publications: Publication[] = [
    {
      number: "01",
      type: isID ? "Buku" : "Book",
      title: "Smart Conveyor Development Guide",
      description: isID
        ? "Panduan teknis mengenai perancangan dan pengembangan sistem conveyor cerdas untuk otomasi industri."
        : "A technical guide covering the design and development of smart conveyor systems for industrial automation.",
      meta: "ISBN: 978-602-53897-3-3",
      link:
        "https://books.google.co.id/books?hl=id&lr=&id=nF3dDwAAQBAJ&oi=fnd&pg=PR19&dq=alit+fajar+kurniawan&ots=9hevkM3kNl&sig=rVUblhZPPONO-Zj5LRkcceAC1VY&redir_esc=y#v=onepage&q&f=false",
      linkLabel: isID ? "Lihat Buku" : "View Book",
    },
    {
      number: "02",
      type: isID ? "Artikel Jurnal" : "Journal Article",
      title: "ARIMA Forecasting for House Price Prediction",
      description: isID
        ? "Penelitian forecasting harga rumah menggunakan model ARIMA pada data deret waktu."
        : "House-price forecasting research using ARIMA time-series modelling.",
      meta: isID
        ? "Jurnal Nasional Terakreditasi • SINTA 3"
        : "National Accredited Journal • SINTA 3",
      link:
        "https://scholar.google.co.id/citations?view_op=view_citation&hl=id&user=qPHt6bUAAAAJ&citation_for_view=qPHt6bUAAAAJ:UeHWp8X0CEIC",
      linkLabel: isID ? "Lihat Publikasi Jurnal" : "View Journal Publication",
    },
    {
      number: "03",
      type: isID ? "Jurnal Nasional" : "National Journal",
      title:
        "Implementasi Middleware Pada Evomo Dengan Metode Web Service Restfull Dan Pengujian CI/CD, Coverage Serta Simulasi Protokol Grafana",
      description: isID
        ? "Penelitian implementasi middleware Evomo menggunakan RESTful Web Service, CI/CD, code coverage, dan Grafana."
        : "Research on Evomo middleware using RESTful Web Services, CI/CD, code coverage, and Grafana.",
      meta: isID
        ? "Middleware • CI/CD • Grafana"
        : "Middleware • CI/CD • Grafana",
      link:
        "https://jurnal.lldikti4.or.id/index.php/jurnaltekno/article/view/507",
      linkLabel: isID ? "Lihat Publikasi Jurnal" : "View Journal Publication",
    },
    {
      number: "04",
      type: "IEEE Conference",
      title:
        "Rating Expectations-Based Analysis for Predicting Hotel Review Sentiment",
      description: isID
        ? "Publikasi mengenai prediksi sentimen ulasan hotel menggunakan expectation-based analysis dan deep learning."
        : "Publication on hotel-review sentiment prediction using expectation-based analysis and deep learning.",
      meta: isID
        ? "Konferensi Internasional • IEEE"
        : "International Conference • IEEE",
      link:
        "https://ieeexplore.ieee.org/abstract/document/11019085?casa_token=oSzJJO3fhusAAAAA:ItN4rzLJm4jdzuWAvnGRm9sxldWrCJIO-S3OejYiDHjoPfQCOZ0r9cjeQTV4fub0lK375OV6pjStXg",
      linkLabel: isID ? "Lihat Publikasi IEEE" : "View IEEE Publication",
    },
  ];

  /* =========================================================
      SKILLS
  ========================================================= */

  const technicalSkills = [
    "Python",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "React",
    "RESTful API",
    "Machine Learning",
    "Deep Learning",
    "Time Series",
    "NLP",
    "Data Analysis",
    "Database Management",
    "System Integration",
    "CI/CD",
    "Grafana",
    "Git & GitHub",
  ];

  const professionalSkills = isID
    ? [
        "Pemecahan Masalah",
        "Analisis Sistem",
        "Manajemen Data",
        "Kolaborasi Tim",
        "Komunikasi Teknis",
        "Dokumentasi",
        "Riset",
        "Manajemen Proyek",
      ]
    : [
        "Problem Solving",
        "System Analysis",
        "Data Management",
        "Team Collaboration",
        "Technical Communication",
        "Documentation",
        "Research",
        "Project Management",
      ];

  const languageSkills = isID
    ? ["Bahasa Indonesia • Native", "English • Professional Working Proficiency"]
    : ["Indonesian • Native", "English • Professional Working Proficiency"];

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F7FAF8] text-[#142019]">

      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <header className="fixed left-0 top-0 z-50 w-full border-b border-black/[0.04] bg-[#F7FAF8]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-12">

          <a
            href="#"
            onClick={closeMobileMenu}
            className="group relative z-50 flex items-center text-xl font-bold tracking-tight"
          >
            AFK
            <span className="text-[#0B7A45]">.</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navigation.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="rounded-full px-3 py-2 text-sm font-medium text-[#66736B] transition hover:bg-[#DFF3E8] hover:text-[#075C35]"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">

            <div className="flex rounded-full border border-[#0B7A45]/15 bg-white p-1">
              <button
                type="button"
                onClick={() => changeLanguage("id")}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                  language === "id"
                    ? "bg-[#DFF3E8] text-[#0B7A45]"
                    : "text-[#7B877F]"
                }`}
              >
                ID
              </button>

              <button
                type="button"
                onClick={() => changeLanguage("en")}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                  language === "en"
                    ? "bg-[#DFF3E8] text-[#0B7A45]"
                    : "text-[#7B877F]"
                }`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsCvOpen(true)}
              className="rounded-full bg-[#0B7A45] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#075C35]"
            >
              {text.navbar.viewCv} ↗
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">

            <button
              type="button"
              onClick={() => changeLanguage(language === "id" ? "en" : "id")}
              className="rounded-full border border-[#0B7A45]/20 bg-white px-3 py-2 text-xs font-bold text-[#0B7A45]"
            >
              {language === "id" ? "ID" : "EN"}
            </button>

            <button
              type="button"
              onClick={() => setIsCvOpen(true)}
              className="rounded-full border border-[#0B7A45]/30 px-3 py-2 text-xs font-semibold text-[#0B7A45]"
            >
              CV
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/[0.08] bg-white"
            >
              {isMenuOpen ? "×" : "☰"}
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden bg-[#F7FAF8] transition-all md:hidden ${
            isMenuOpen ? "max-h-[500px] border-t py-4" : "max-h-0"
          }`}
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5">
            {navigation.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3 text-[#526158] hover:bg-[#DFF3E8]"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-16 pt-28 sm:px-6 md:pt-32 lg:px-12">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#0B7A45]">
              {text.hero.greeting}
            </p>

            <h1 className="text-[42px] font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Alit Fajar
              <br />
              Kurniawan
            </h1>

            <h2 className="mt-6 text-xl font-semibold text-[#0B7A45] md:text-2xl">
              {text.hero.profession}
            </h2>

            <p className="mt-3 text-[#66736B]">
              {text.hero.keywords}
            </p>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#66736B] md:text-lg">
              {text.hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="rounded-full bg-[#0B7A45] px-7 py-3 text-center font-semibold text-white transition hover:bg-[#075C35]"
              >
                {text.hero.explore}
              </a>

              <a
                href="#about"
                className="rounded-full border border-[#0B7A45] px-7 py-3 text-center font-semibold text-[#0B7A45] hover:bg-[#DFF3E8]"
              >
                {text.hero.about}
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-black/10 pt-6">
              <div>
                <p className="text-2xl font-bold">03+</p>
                <p className="text-xs uppercase tracking-widest text-[#66736B]">
                  {text.hero.coreAreas}
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">10+</p>
                <p className="text-xs uppercase tracking-widest text-[#66736B]">
                  {text.hero.projects}
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-[#0B7A45]">AI</p>
                <p className="text-xs uppercase tracking-widest text-[#66736B]">
                  {text.hero.researchFocus}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] lg:max-w-[340px]">

              <div className="absolute -inset-5 rotate-[18deg] rounded-[42px] bg-[#DFF3E8]" />
              <div className="absolute -inset-2 -rotate-[18deg] rounded-[38px] bg-[#0B7A45]" />

              <div className="relative aspect-[3/4] overflow-hidden rounded-[34px] border-[6px] border-white bg-white shadow-xl">
                <Image
                  src="/images/alit2.png"
                  alt="Alit Fajar Kurniawan"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>

              <div className="absolute -bottom-5 left-1/2 w-[92%] -translate-x-1/2 rounded-2xl bg-white px-5 py-3 shadow-lg">
                <p className="text-xs uppercase text-[#66736B]">
                  {text.hero.focus}
                </p>
                <p className="text-sm font-semibold">
                  {text.hero.focusValue}
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}

      <section
        id="about"
        className="scroll-mt-[72px] border-t border-black/[0.04] bg-white"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-12 lg:py-28">

          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0B7A45]">
                {text.about.label}
              </p>

              <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
                {text.about.titleFirst}
                <span className="text-[#0B7A45]">
                  {" "}{text.about.titleSecond}
                </span>
              </h2>
            </div>

            <p className="self-end text-base leading-8 text-[#66736B] sm:text-lg">
              {text.about.description}
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {expertise.map((item) => (
              <div
                key={item.number}
                className="rounded-3xl border border-black/[0.05] bg-[#F7FAF8] p-6 transition hover:-translate-y-1 hover:bg-[#EEF8F2]"
              >
                <span className="text-xs font-semibold text-[#0B7A45]">
                  {item.number}
                </span>

                <h3 className="mt-8 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#66736B]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* EDUCATION */}

          <div className="mt-20 border-t border-black/[0.06] pt-10">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0B7A45]">
                  {text.education.label}
                </p>

                <h3 className="mt-3 text-3xl font-bold">
                  {text.education.title}
                </h3>
              </div>

              <p className="max-w-md text-sm leading-6 text-[#66736B]">
                {text.education.description}
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-2">

              <div className="flex flex-col rounded-3xl border border-black/[0.05] bg-[#F7FAF8] p-6">
                <div className="flex justify-between gap-3">
                  <span className="rounded-full bg-[#DFF3E8] px-3 py-1 text-xs font-semibold text-[#0B7A45]">
                    {isID ? "2024 — Sekarang" : "2024 — Present"}
                  </span>

                  <span className="text-xs uppercase tracking-widest text-[#88928C]">
                    {isID ? "Magister" : "Master's Degree"}
                  </span>
                </div>

                <h4 className="mt-6 text-xl font-semibold">
                  {isID
                    ? "Magister Teknik Informatika"
                    : "Master of Informatics Engineering"}
                </h4>

                <p className="mt-2 text-sm font-medium text-[#0B7A45]">
                  Institut Teknologi Sepuluh Nopember (ITS)
                </p>

                <p className="mt-4 text-sm leading-6 text-[#66736B]">
                  {isID
                    ? "Fokus pada Kecerdasan Komputasional dan Pendukung Keputusan Berbasis Data."
                    : "Focus on Computational Intelligence and Data-Driven Decision Support."}
                </p>

                <div className="mt-auto pt-6">
                  <button
                    type="button"
                    onClick={() =>
                      setDocumentViewer({
                        title: isID
                          ? "Transkrip Akademik"
                          : "Academic Transcript",
                        subtitle: isID
                          ? "Magister Teknik Informatika • ITS"
                          : "Master of Informatics Engineering • ITS",
                        file: "/documents/education/s2-transkrip.pdf",
                      })
                    }
                    className="rounded-full border border-[#0B7A45]/30 bg-white px-4 py-2.5 text-xs font-semibold text-[#0B7A45] hover:bg-[#DFF3E8]"
                  >
                    {isID
                      ? "Lihat Transkrip Akademik ↗"
                      : "View Academic Transcript ↗"}
                  </button>
                </div>
              </div>

              <div className="flex flex-col rounded-3xl border border-black/[0.05] bg-[#F7FAF8] p-6">

                <div className="flex justify-between gap-3">
                  <span className="rounded-full bg-[#DFF3E8] px-3 py-1 text-xs font-semibold text-[#0B7A45]">
                    2017 — 2021
                  </span>

                  <span className="text-xs uppercase tracking-widest text-[#88928C]">
                    Diploma IV
                  </span>
                </div>

                <h4 className="mt-6 text-xl font-semibold">
                  {isID ? "Teknik Informatika" : "Informatics Engineering"}
                </h4>

                <p className="mt-2 text-sm font-medium text-[#0B7A45]">
                  Politeknik Pos Indonesia
                </p>

                <p className="mt-4 text-sm leading-6 text-[#66736B]">
                  {isID
                    ? "Konsentrasi pada Sistem Manajemen Basis Data dan pengembangan perangkat lunak terapan."
                    : "Concentration in Database Management Systems and applied software development."}
                </p>

                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  <button
                    type="button"
                    onClick={() =>
                      setDocumentViewer({
                        title: isID ? "Ijazah Diploma" : "Diploma Certificate",
                        subtitle: isID
                          ? "Diploma IV • Teknik Informatika"
                          : "Diploma IV • Informatics Engineering",
                        file: "/documents/education/d4-ijazah.pdf",
                      })
                    }
                    className="rounded-full bg-[#0B7A45] px-4 py-2.5 text-xs font-semibold text-white"
                  >
                    {isID ? "Lihat Ijazah ↗" : "View Diploma ↗"}
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setDocumentViewer({
                        title: isID
                          ? "Transkrip Akademik"
                          : "Academic Transcript",
                        subtitle: isID
                          ? "Diploma IV • Teknik Informatika"
                          : "Diploma IV • Informatics Engineering",
                        file: "/documents/education/d4-transkrip.pdf",
                      })
                    }
                    className="rounded-full border border-[#0B7A45]/30 bg-white px-4 py-2.5 text-xs font-semibold text-[#0B7A45]"
                  >
                    {isID ? "Lihat Transkrip ↗" : "View Transcript ↗"}
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          EXPERIENCE
      ========================================================= */}

      <section
        id="experience"
        className="scroll-mt-[72px] border-t border-black/[0.04] bg-[#F7FAF8]"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-12 lg:py-28">

          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0B7A45]">
                {text.experience.label}
              </p>

              <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
                {text.experience.titleFirst}
                <span className="text-[#0B7A45]">
                  {" "}{text.experience.titleSecond}
                </span>
              </h2>
            </div>

            <p className="self-end text-base leading-8 text-[#66736B] sm:text-lg">
              {text.experience.description}
            </p>
          </div>

          <div className="mt-16 space-y-8">

            {/* CURRENT */}

            <article className="rounded-[28px] border border-black/[0.05] bg-white p-6 sm:p-8">

              <div className="flex flex-col justify-between gap-5 sm:flex-row">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#0B7A45]">
                    {isID ? "Posisi Saat Ini" : "Current Position"}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                    Pranata Komputer Ahli Pertama
                  </h3>

                  <p className="mt-2 font-semibold text-[#0B7A45]">
                    STAIN Teungku Dirundeng Meulaboh
                  </p>
                </div>

                <span className="h-fit rounded-full bg-[#DFF3E8] px-3 py-2 text-xs font-semibold text-[#0B7A45]">
                  {isID ? "Posisi Aktif" : "Active Role"}
                </span>
              </div>

              <p className="mt-6 max-w-4xl leading-7 text-[#66736B]">
                {isID
                  ? "Mendukung operasional digital institusi melalui sistem informasi, pengelolaan aplikasi, layanan teknologi, dan manajemen data."
                  : "Supporting institutional digital operations through information systems, application management, technology services, and data management."}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  isID ? "Sistem Informasi" : "Information Systems",
                  isID ? "Operasional TI" : "IT Operations",
                  isID ? "Manajemen Data" : "Data Management",
                  isID ? "Layanan Teknologi" : "Technology Services",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#0B7A45]/10 bg-[#F7FAF8] px-3 py-2 text-xs font-semibold text-[#526158]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>

            {/* PREVIOUS */}

            <article className="rounded-[28px] border border-black/[0.05] bg-white p-6 sm:p-8">

              <p className="text-xs font-semibold uppercase tracking-widest text-[#0B7A45]">
                2022 — 2024
              </p>

              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                Pengelola Sistem Informasi Akademik
              </h3>

              <p className="mt-2 font-semibold text-[#0B7A45]">
                STAIN Teungku Dirundeng Meulaboh
              </p>

              <p className="mt-6 max-w-4xl leading-7 text-[#66736B]">
                {isID
                  ? "Mengelola sistem informasi akademik, layanan data, pemeliharaan sistem, dan dukungan teknologi dalam operasional akademik institusi."
                  : "Managed academic information systems, academic data services, system maintenance, and technology support for institutional academic operations."}
              </p>
            </article>

            {/* TELKOM */}

            <article className="rounded-[28px] border border-black/[0.05] bg-white p-6 sm:p-8">

              <p className="text-xs font-semibold uppercase tracking-widest text-[#0B7A45]">
                2020 — 2021
              </p>

              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                Front-End Engineer & Web Designer
              </h3>

              <p className="mt-2 font-semibold text-[#0B7A45]">
                PT Telkom Indonesia Tbk
              </p>

              <p className="mt-1 text-sm text-[#88928C]">
                Directorate of Digital Business
              </p>

              <p className="mt-6 max-w-4xl leading-7 text-[#66736B]">
                {isID
                  ? "Memperoleh pengalaman profesional dalam front-end engineering, web design, dan pengembangan produk digital di lingkungan korporat teknologi."
                  : "Gained professional experience in front-end engineering, web design, and digital-product development within a corporate technology environment."}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROJECTS
      ========================================================= */}

      <section
        id="projects"
        className="scroll-mt-[72px] border-t border-black/[0.04] bg-white"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-12 lg:py-28">

          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0B7A45]">
                {text.projects.label}
              </p>

              <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
                {text.projects.titleFirst}
                <span className="text-[#0B7A45]">
                  {" "}{text.projects.titleSecond}
                </span>
              </h2>
            </div>

            <p className="self-end text-base leading-8 text-[#66736B] sm:text-lg">
              {text.projects.description}
            </p>
          </div>

          <div className="mt-16 grid gap-4 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className={`flex flex-col rounded-[28px] border p-6 transition hover:-translate-y-1 ${
                  project.featured
                    ? "border-[#0B7A45]/20 bg-gradient-to-br from-[#F7FAF8] to-[#DFF3E8]"
                    : "border-black/[0.05] bg-[#F7FAF8]"
                }`}
              >
                <div className="flex justify-between gap-4">
                  <span className="text-xs font-semibold text-[#0B7A45]">
                    {project.number}
                  </span>

                  <span className="rounded-full bg-white px-3 py-1.5 text-[9px] font-semibold uppercase text-[#0B7A45]">
                    {project.category}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#66736B]">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-black/[0.05] bg-white px-3 py-1.5 text-[10px] text-[#66736B]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-8">

                  <button
                    type="button"
                    onClick={() => setProjectViewer(project)}
                    className="text-sm font-semibold text-[#0B7A45]"
                  >
                    {text.projects.viewProject} →
                  </button>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-[#0B7A45]/20 bg-white px-4 py-2 text-xs font-semibold text-[#0B7A45]"
                    >
                      {project.linkLabel} ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          RESEARCH
      ========================================================= */}

      <section
        id="research"
        className="scroll-mt-[72px] border-t border-black/[0.04] bg-[#F7FAF8]"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-12 lg:py-28">

          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0B7A45]">
                {text.research.label}
              </p>

              <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
                {text.research.titleFirst}
                <span className="text-[#0B7A45]">
                  {" "}{text.research.titleSecond}
                </span>
              </h2>
            </div>

            <p className="self-end text-base leading-8 text-[#66736B] sm:text-lg">
              {text.research.description}
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {research.map((item) => (
              <article
                key={item.number}
                className="flex flex-col rounded-[28px] border border-black/[0.05] bg-white p-6 transition hover:-translate-y-1"
              >

                <div className="flex justify-between gap-4">
                  <span className="text-xs font-semibold text-[#0B7A45]">
                    {item.number}
                  </span>

                  <span className="rounded-full bg-[#F7FAF8] px-3 py-1.5 text-[9px] font-semibold uppercase text-[#0B7A45]">
                    {item.category}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#66736B]">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-black/[0.05] bg-[#F7FAF8] px-3 py-1.5 text-[10px] text-[#66736B]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-8">
                  <button
                    type="button"
                    onClick={() => setResearchViewer(item)}
                    className="text-sm font-semibold text-[#0B7A45]"
                  >
                    {text.research.viewResearch} →
                  </button>

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-[#0B7A45]/20 bg-white px-4 py-2 text-xs font-semibold text-[#0B7A45]"
                    >
                      {item.linkLabel} ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          PUBLICATIONS
      ========================================================= */}

      <section className="border-t border-black/[0.04] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-12 lg:py-28">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0B7A45]">
                {text.publication.label}
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                {text.publication.title}
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-[#66736B]">
              {text.publication.description}
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {publications.map((publication) => (
              <article
                key={publication.number}
                className="flex flex-col rounded-[28px] border border-black/[0.05] bg-[#F7FAF8] p-6 transition hover:-translate-y-1"
              >

                <div className="flex justify-between gap-4">
                  <span className="text-xs font-semibold text-[#0B7A45]">
                    {publication.number}
                  </span>

                  <span className="rounded-full bg-white px-3 py-1.5 text-[9px] font-semibold uppercase text-[#0B7A45]">
                    {publication.type}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-bold sm:text-2xl">
                  {publication.title}
                </h3>

                <p className="mt-3 text-xs uppercase tracking-wider text-[#88928C]">
                  {publication.meta}
                </p>

                <p className="mt-4 text-sm leading-7 text-[#66736B]">
                  {publication.description}
                </p>

                <div className="mt-auto pt-7">
                  {publication.link && (
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full border border-[#0B7A45]/20 bg-white px-4 py-2.5 text-xs font-semibold text-[#0B7A45]"
                    >
                      {publication.linkLabel} ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SKILLS
      ========================================================= */}

      <section
        id="skills"
        className="scroll-mt-[72px] border-t border-black/[0.04] bg-[#F7FAF8]"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-12 lg:py-28">

          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0B7A45]">
                {text.skills.label}
              </p>

              <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
                {text.skills.titleFirst}
                <span className="text-[#0B7A45]">
                  {" "}{text.skills.titleSecond}
                </span>
              </h2>
            </div>

            <p className="self-end text-base leading-8 text-[#66736B] sm:text-lg">
              {text.skills.description}
            </p>
          </div>

          <div className="mt-16 grid gap-4 lg:grid-cols-3">

            <div className="rounded-[28px] border border-black/[0.05] bg-white p-6">
              <h3 className="text-xl font-bold">
                {text.skills.technical}
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {technicalSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-[#F7FAF8] px-3 py-2 text-xs font-medium text-[#526158]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-black/[0.05] bg-white p-6">
              <h3 className="text-xl font-bold">
                {text.skills.professional}
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">
                {professionalSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-[#F7FAF8] px-3 py-2 text-xs font-medium text-[#526158]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-black/[0.05] bg-white p-6">
              <h3 className="text-xl font-bold">
                {text.skills.languages}
              </h3>

              <div className="mt-6 space-y-3">
                {languageSkills.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-[#F7FAF8] px-4 py-3 text-sm font-medium text-[#526158]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}

      <section
        id="contact"
        className="scroll-mt-[72px] border-t border-black/[0.04] bg-white"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-12 lg:py-28">

          <div className="overflow-hidden rounded-[36px] border border-[#0B7A45]/10 bg-gradient-to-br from-[#F7FAF8] via-[#EEF8F2] to-[#DFF3E8] p-7 sm:p-10 lg:p-14">

            {/* SECTION LABEL */}

            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0B7A45]">
              {text.contact.label}
            </p>


            <div className="mt-7 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">

              {/* =====================================================
                  LEFT SIDE
              ====================================================== */}

              <div>

                <h2 className="max-w-xl text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl">

                  {text.contact.titleFirst}

                  <span className="text-[#0B7A45]">
                    {" "}
                    {text.contact.titleSecond}
                  </span>

                </h2>

              </div>


              {/* =====================================================
                  RIGHT SIDE
              ====================================================== */}

              <div>

                <p className="max-w-xl text-base leading-8 text-[#66736B] sm:text-lg">
                  {text.contact.description}
                </p>


                {/* CONTACT LIST */}

                <div className="mt-8 grid gap-3">


                  {/* =================================================
                      EMAIL
                  ================================================== */}

                  <a
                    href="mailto:alitfajark@gmail.com"
                    className="group flex items-center gap-4 rounded-2xl border border-black/[0.05] bg-white/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#0B7A45]/20 hover:bg-white hover:shadow-[0_14px_35px_rgba(11,122,69,0.08)]"
                  >

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white">

                      <Image
                        src="/icons/gmail.png"
                        alt="Gmail"
                        width={34}
                        height={34}
                        className="object-contain"
                      />

                    </div>


                    <div className="min-w-0 flex-1">

                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#88928C]">
                        {text.contact.email}
                      </p>

                      <p className="mt-1 truncate text-sm font-semibold text-[#142019] transition-colors duration-300 group-hover:text-[#0B7A45] sm:text-base">
                        alitfajark@gmail.com
                      </p>

                    </div>


                    <span className="shrink-0 text-lg text-[#0B7A45] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ↗
                    </span>

                  </a>


                  {/* =================================================
                      WHATSAPP
                  ================================================== */}

                  <a
                    href="https://wa.me/6282139671518"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-black/[0.05] bg-white/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#0B7A45]/20 hover:bg-white hover:shadow-[0_14px_35px_rgba(11,122,69,0.08)]"
                  >

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white">

                      <Image
                        src="/icons/whatsapp.png"
                        alt="WhatsApp"
                        width={36}
                        height={36}
                        className="object-contain"
                      />

                    </div>


                    <div className="min-w-0 flex-1">

                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#88928C]">
                        {text.contact.whatsapp}
                      </p>

                      <p className="mt-1 truncate text-sm font-semibold text-[#142019] transition-colors duration-300 group-hover:text-[#0B7A45] sm:text-base">
                        +62 821 3967 1518
                      </p>

                    </div>


                    <span className="shrink-0 text-lg text-[#0B7A45] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ↗
                    </span>

                  </a>


                  {/* =================================================
                      LINKEDIN
                  ================================================== */}

                  <a
                    href="https://www.linkedin.com/in/alitfajarkurniawan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-black/[0.05] bg-white/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#0B7A45]/20 hover:bg-white hover:shadow-[0_14px_35px_rgba(11,122,69,0.08)]"
                  >

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white">

                      <Image
                        src="/icons/linkedin.png"
                        alt="LinkedIn"
                        width={34}
                        height={34}
                        className="object-contain"
                      />

                    </div>


                    <div className="min-w-0 flex-1">

                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#88928C]">
                        {text.contact.linkedin}
                      </p>

                      <p className="mt-1 truncate text-sm font-semibold text-[#142019] transition-colors duration-300 group-hover:text-[#0B7A45] sm:text-base">
                        alitfajarkurniawan
                      </p>

                    </div>


                    <span className="shrink-0 text-lg text-[#0B7A45] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ↗
                    </span>

                  </a>

                  {/* =================================================
                      GITHUB
                  ================================================== */}

                  <a
                    href="https://github.com/alitfajarkurniawan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-black/[0.05] bg-white/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#0B7A45]/20 hover:bg-white hover:shadow-[0_14px_35px_rgba(11,122,69,0.08)]"
                  >

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white">

                      <Image
                        src="/icons/github.png"
                        alt="Github"
                        width={34}
                        height={34}
                        className="object-contain"
                      />

                    </div>


                    <div className="min-w-0 flex-1">

                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#88928C]">
                        {text.contact.github}
                      </p>

                      <p className="mt-1 truncate text-sm font-semibold text-[#142019] transition-colors duration-300 group-hover:text-[#0B7A45] sm:text-base">
                        alitfajarkurniawan
                      </p>

                    </div>


                    <span className="shrink-0 text-lg text-[#0B7A45] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ↗
                    </span>

                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          PROJECT MODAL
      ========================================================= */}

      {projectViewer && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">

          <div className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white shadow-2xl">

            <div className="flex justify-between border-b p-6">

              <div>
                <p className="text-xs font-semibold uppercase text-[#0B7A45]">
                  {projectViewer.category}
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  {projectViewer.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setProjectViewer(null)}
                className="h-10 w-10 rounded-full bg-[#F7FAF8] text-xl"
              >
                ×
              </button>
            </div>

            <div className="grid sm:grid-cols-3">

              <div className="p-6">
                <p className="text-xs font-semibold text-[#0B7A45]">
                  {text.modal.problem}
                </p>

                <p className="mt-4 text-sm leading-7 text-[#66736B]">
                  {projectViewer.problem}
                </p>
              </div>

              <div className="border-y p-6 sm:border-x sm:border-y-0">
                <p className="text-xs font-semibold text-[#0B7A45]">
                  {text.modal.solution}
                </p>

                <p className="mt-4 text-sm leading-7 text-[#66736B]">
                  {projectViewer.solution}
                </p>
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold text-[#0B7A45]">
                  {text.modal.role}
                </p>

                <p className="mt-4 text-sm leading-7 text-[#66736B]">
                  {projectViewer.role}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-end gap-3 border-t p-5">

              {projectViewer.link && (
                <a
                  href={projectViewer.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#0B7A45] px-5 py-2.5 text-sm font-semibold text-[#0B7A45]"
                >
                  {projectViewer.linkLabel} ↗
                </a>
              )}

              <button
                type="button"
                onClick={() => setProjectViewer(null)}
                className="rounded-full bg-[#0B7A45] px-5 py-2.5 text-sm font-semibold text-white"
              >
                {text.modal.close}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          RESEARCH MODAL
      ========================================================= */}

      {researchViewer && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">

          <div className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white shadow-2xl">

            <div className="flex justify-between border-b p-6">

              <div>
                <p className="text-xs font-semibold uppercase text-[#0B7A45]">
                  {researchViewer.category}
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  {researchViewer.title}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setResearchViewer(null)}
                className="h-10 w-10 rounded-full bg-[#F7FAF8] text-xl"
              >
                ×
              </button>
            </div>

            <div className="grid sm:grid-cols-3">

              <div className="p-6">
                <p className="text-xs font-semibold text-[#0B7A45]">
                  {text.modal.objective}
                </p>

                <p className="mt-4 text-sm leading-7 text-[#66736B]">
                  {researchViewer.objective}
                </p>
              </div>

              <div className="border-y p-6 sm:border-x sm:border-y-0">
                <p className="text-xs font-semibold text-[#0B7A45]">
                  {text.modal.approach}
                </p>

                <p className="mt-4 text-sm leading-7 text-[#66736B]">
                  {researchViewer.approach}
                </p>
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold text-[#0B7A45]">
                  {text.modal.output}
                </p>

                <p className="mt-4 text-sm leading-7 text-[#66736B]">
                  {researchViewer.output}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-end gap-3 border-t p-5">

              {researchViewer.link && (
                <a
                  href={researchViewer.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#0B7A45] px-5 py-2.5 text-sm font-semibold text-[#0B7A45]"
                >
                  {researchViewer.linkLabel} ↗
                </a>
              )}

              <button
                type="button"
                onClick={() => setResearchViewer(null)}
                className="rounded-full bg-[#0B7A45] px-5 py-2.5 text-sm font-semibold text-white"
              >
                {text.modal.close}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          DOCUMENT MODAL
      ========================================================= */}

      {documentViewer && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">

          <div className="flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white">

            <div className="flex justify-between border-b p-5">

              <div>
                <p className="text-xs font-semibold text-[#0B7A45]">
                  {text.modal.academicDocument}
                </p>

                <h2 className="mt-1 text-lg font-bold">
                  {documentViewer.title}
                </h2>

                <p className="text-xs text-[#66736B]">
                  {documentViewer.subtitle}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setDocumentViewer(null)}
                className="h-10 w-10 rounded-full bg-[#F7FAF8] text-xl"
              >
                ×
              </button>
            </div>

            <div className="min-h-0 flex-1 bg-[#EEF3F0] p-3">
              <iframe
                src={documentViewer.file}
                title={documentViewer.title}
                className="h-full w-full rounded-2xl bg-white"
              />
            </div>

            <div className="flex justify-end gap-3 border-t p-4">

              <a
                href={documentViewer.file}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#0B7A45] px-5 py-2.5 text-sm font-semibold text-[#0B7A45]"
              >
                {text.modal.openFull}
              </a>

              <a
                href={documentViewer.file}
                download
                className="rounded-full bg-[#0B7A45] px-5 py-2.5 text-sm font-semibold text-white"
              >
                {text.modal.download}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          CV MODAL
      ========================================================= */}

      {isCvOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">

          <div className="flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white">

            <div className="flex justify-between border-b p-5">

              <div>
                <p className="text-xs font-semibold text-[#0B7A45]">
                  Curriculum Vitae
                </p>

                <h2 className="text-lg font-bold">
                  Alit Fajar Kurniawan
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setIsCvOpen(false)}
                className="h-10 w-10 rounded-full bg-[#F7FAF8] text-xl"
              >
                ×
              </button>
            </div>

            <div className="min-h-0 flex-1 bg-[#EEF3F0] p-3">
              <iframe
                src="/cv/alit-fajar-kurniawan.pdf"
                title="CV Alit Fajar Kurniawan"
                className="h-full w-full rounded-2xl bg-white"
              />
            </div>

            <div className="flex justify-end gap-3 border-t p-4">

              <a
                href="/cv/alit-fajar-kurniawan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#0B7A45] px-5 py-2.5 text-sm font-semibold text-[#0B7A45]"
              >
                {text.modal.openFull}
              </a>

              <a
                href="/cv/alit-fajar-kurniawan.pdf"
                download
                className="rounded-full bg-[#0B7A45] px-5 py-2.5 text-sm font-semibold text-white"
              >
                {text.modal.downloadCv}
              </a>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}