export type Language = "en" | "de" | "tr";

export interface Translations {
  nav: {
    about: string;
    services: string;
    projects: string;
    contact: string;
  };
  hero: {
    brand: string;
    tagline: string;
    sub: string;
    scrollLabel: string;
    scrollHint: string;
  };
  sequence: {
    overlay1: { title: string; body: string };
    overlay2: { title: string; body: string };
    overlay3: { title: string; body: string };
    overlay4: { title: string; body: string };
    overlay5: { title: string; body: string };
    overlay6: { title: string; body: string };
    overlay7: { title: string; body: string };
    overlay8: { title: string; body: string };
  };
  about: {
    eyebrow: string;
    heading: string;
    body: string;
    stat1Label: string;
    stat1Value: string;
    stat2Label: string;
    stat2Value: string;
    stat3Label: string;
    stat3Value: string;
    manifesto: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    items: {
      title: string;
      desc: string;
      tag: string;
    }[];
  };
  projects: {
    eyebrow: string;
    heading: string;
    items: {
      title: string;
      year: string;
      category: string;
      desc: string;
    }[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    sub: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    successMessage: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      brand: "SonicWave Pro",
      tagline: "Sound is our\nuniverse.",
      sub: "Precision-engineered audio technology — built for those who hear what others miss.",
      scrollLabel: "Scroll to Explore",
      scrollHint: "↓",
    },
    sequence: {
      overlay1: { title: "Origin", body: "Every masterpiece begins in total silence." },
      overlay2: { title: "Anatomy", body: "134 precision-machined components, hand-assembled." },
      overlay3: { title: "Resonance", body: "40mm beryllium drivers. Zero distortion at 120dB." },
      overlay4: { title: "Detail", body: "Hear frequencies your brain never knew existed." },
      overlay5: { title: "Precision", body: "The architecture of acoustic perfection." },
      overlay6: { title: "Materials", body: "Aerospace-grade aluminum meets liquid silicone." },
      overlay7: { title: "Experience", body: "Not just listening, but inhabiting the sound." },
      overlay8: { title: "SonicWave Pro", body: "Engineered for the absolute elite." },
    },
    about: {
      eyebrow: "Our Philosophy",
      heading: "We don't make headphones.\nWe engineer perception.",
      body: "Founded in 2018 by acoustic engineers and industrial designers, SonicWave Pro exists at the intersection of science and obsession. Every product is a statement: that perfection, once imagined, must be made real.",
      stat1Label: "Patents Filed",
      stat1Value: "47",
      stat2Label: "Frequencies Mapped",
      stat2Value: "120k+",
      stat3Label: "Hours R&D per Unit",
      stat3Value: "2,400",
      manifesto: "\"We believe sound is not something you hear. It is something you inhabit.\"",
    },
    services: {
      eyebrow: "What We Do",
      heading: "Crafted services.\nObsessive execution.",
      items: [
        {
          title: "Custom Driver Engineering",
          desc: "Bespoke transducer systems built from atomic level up. For audiophiles who have heard everything — and found it lacking.",
          tag: "Hardware",
        },
        {
          title: "Acoustic Space Design",
          desc: "We model, simulate and physically tune listening environments: studios, home theaters, private jets.",
          tag: "Architecture",
        },
        {
          title: "Spatial Audio Software",
          desc: "Proprietary DSP algorithms that reconstruct concert-hall acoustics in real time. Cross-platform, zero-latency.",
          tag: "Software",
        },
        {
          title: "Bespoke Manufacturing",
          desc: "Single-unit runs. Titanium housings. Engraved. Numbered. Yours alone. Lead time: 18 weeks.",
          tag: "Luxury",
        },
      ],
    },
    projects: {
      eyebrow: "Selected Work",
      heading: "Three years.\nFour obsessions.",
      items: [
        {
          title: "Project HELIX",
          year: "2024",
          category: "Consumer Hardware",
          desc: "A flagship over-ear headphone sculpted from a single block of aerospace-grade aluminum. 97% positive reviews across 12 publications.",
        },
        {
          title: "Axiom Studio",
          year: "2023",
          category: "Professional Audio",
          desc: "The reference monitoring system used on 6 Grammy-winning albums. Flat response to 40Hz without a subwoofer.",
        },
        {
          title: "Zero Latency Engine",
          year: "2022",
          category: "DSP Software",
          desc: "Our proprietary processing stack — under 0.8ms end-to-end — licensed to 3 of the world's top 5 audio brands.",
        },
        {
          title: "Project NOIR",
          year: "2022",
          category: "Limited Edition",
          desc: "12 units. Hand-assembled. Sold at Christie's alongside contemporary art. All 12 placed privately within 48 hours.",
        },
      ],
    },
    contact: {
      eyebrow: "Get In Touch",
      heading: "Let's build something\nimpossible together.",
      sub: "For partnerships, custom commissions, or just to talk about sound.",
      namePlaceholder: "Your name",
      emailPlaceholder: "your@email.com",
      messagePlaceholder: "Tell us what you're imagining...",
      submit: "Send Message",
      successMessage: "Message received. We'll be in touch.",
    },
  },

  de: {
    nav: {
      about: "Über uns",
      services: "Leistungen",
      projects: "Projekte",
      contact: "Kontakt",
    },
    hero: {
      brand: "SonicWave Pro",
      tagline: "Klang ist unser\nUniversum.",
      sub: "Präzisions-Audiotechnologie — entwickelt für jene, die hören, was anderen entgeht.",
      scrollLabel: "Zum Erkunden scrollen",
      scrollHint: "↓",
    },
    sequence: {
      overlay1: { title: "Ursprung", body: "Jedes Meisterwerk beginnt in absoluter Stille." },
      overlay2: { title: "Anatomie", body: "134 präzisionsgefertigte Teile, handmontiert." },
      overlay3: { title: "Resonanz", body: "40mm Beryllium-Treiber. Null Verzerrung bei 120dB." },
      overlay4: { title: "Detail", body: "Frequenzen hören, die Ihr Gehirn nie kannte." },
      overlay5: { title: "Präzision", body: "Die Architektur akustischer Perfektion." },
      overlay6: { title: "Materialien", body: "Aluminium aus der Raumfahrt trifft auf Silikon." },
      overlay7: { title: "Erlebnis", body: "Nicht nur hören, sondern im Klang wohnen." },
      overlay8: { title: "SonicWave Pro", body: "Entwickelt für die absolute Elite." },
    },
    about: {
      eyebrow: "Unsere Philosophie",
      heading: "Wir bauen keine Kopfhörer.\nWir entwickeln Wahrnehmung.",
      body: "Gegründet 2018 von Akustik-Ingenieuren und Industriedesignern steht SonicWave Pro an der Schnittstelle von Wissenschaft und Leidenschaft. Jedes Produkt ist ein Statement: Dass Perfektion, einmal vorgestellt, Wirklichkeit werden muss.",
      stat1Label: "Patente eingereicht",
      stat1Value: "47",
      stat2Label: "Erfasste Frequenzen",
      stat2Value: "120k+",
      stat3Label: "F&E-Stunden pro Einheit",
      stat3Value: "2.400",
      manifesto: '„Wir glauben, Klang ist nicht etwas, das man hört. Es ist etwas, das man bewohnt."',
    },
    services: {
      eyebrow: "Was wir tun",
      heading: "Maßgeschneiderte Leistungen.\nObsessive Ausführung.",
      items: [
        {
          title: "Custom Treiber-Entwicklung",
          desc: "Maßgeschneiderte Transduktorsysteme vom atomaren Level aufwärts. Für Audiophile, die alles gehört haben — und es unzureichend fanden.",
          tag: "Hardware",
        },
        {
          title: "Akustisches Raumdesign",
          desc: "Wir modellieren, simulieren und stimmen Hörbereiche physisch ab: Studios, Heimkinos, Privatjets.",
          tag: "Architektur",
        },
        {
          title: "Spatial Audio Software",
          desc: "Proprietäre DSP-Algorithmen, die Konzertsaal-Akustik in Echtzeit rekonstruieren. Plattformübergreifend, nulllatenzt.",
          tag: "Software",
        },
        {
          title: "Exklusive Fertigung",
          desc: "Einzelstückläufe. Titangehäuse. Graviert. Nummeriert. Nur für Sie. Lieferzeit: 18 Wochen.",
          tag: "Luxus",
        },
      ],
    },
    projects: {
      eyebrow: "Ausgewählte Arbeiten",
      heading: "Drei Jahre.\nVier Obsessionen.",
      items: [
        {
          title: "Projekt HELIX",
          year: "2024",
          category: "Consumer Hardware",
          desc: "Ein Over-Ear-Kopfhörer aus einem einzigen Block Luft- und Raumfahrt-Aluminium. 97% positive Bewertungen in 12 Publikationen.",
        },
        {
          title: "Axiom Studio",
          year: "2023",
          category: "Professionelles Audio",
          desc: "Das Referenz-Monitoring-System auf 6 Grammy-prämierten Alben. Flacher Frequenzgang bis 40Hz ohne Subwoofer.",
        },
        {
          title: "Zero Latency Engine",
          year: "2022",
          category: "DSP Software",
          desc: "Unser proprietärer Processing-Stack — unter 0,8ms Ende-zu-Ende — lizenziert an 3 der weltweit top 5 Audiomarken.",
        },
        {
          title: "Projekt NOIR",
          year: "2022",
          category: "Limitierte Edition",
          desc: "12 Einheiten. Handmontiert. Bei Christie's neben zeitgenössischer Kunst versteigert. Alle 12 innerhalb von 48 Stunden privat platziert.",
        },
      ],
    },
    contact: {
      eyebrow: "Kontakt aufnehmen",
      heading: "Lass uns gemeinsam etwas\nUnmögliches erschaffen.",
      sub: "Für Partnerschaften, individuelle Aufträge oder einfach um über Klang zu sprechen.",
      namePlaceholder: "Ihr Name",
      emailPlaceholder: "ihre@email.de",
      messagePlaceholder: "Erzählen Sie uns, was Sie sich vorstellen...",
      submit: "Nachricht senden",
      successMessage: "Nachricht erhalten. Wir melden uns.",
    },
  },

  tr: {
    nav: {
      about: "Hakkımızda",
      services: "Hizmetler",
      projects: "Projeler",
      contact: "İletişim",
    },
    hero: {
      brand: "SonicWave Pro",
      tagline: "Ses bizim\nevrenimizdir.",
      sub: "Hassas mühendislik ses teknolojisi — başkalarının kaçırdığını duyanlar için.",
      scrollLabel: "Keşfetmek için kaydır",
      scrollHint: "↓",
    },
    sequence: {
      overlay1: { title: "Köken", body: "Her başyapıt tam bir sessizlikle başlar." },
      overlay2: { title: "Anatomi", body: "134 hassas işlenmiş bileşen, el yapımı montaj." },
      overlay3: { title: "Rezonans", body: "40mm berilyum sürücüler. 120dB'de sıfır bozulma." },
      overlay4: { title: "Detay", body: "Beyninizin hiç bilmediği frekansları duyun." },
      overlay5: { title: "Hassasiyet", body: "Akustik mükemmeliyetin mimarisi." },
      overlay6: { title: "Materyal", body: "Havacılık sınıfı alüminyum ve likit silikon." },
      overlay7: { title: "Deneyim", body: "Sadece dinlemek değil, sesin içinde yaşamak." },
      overlay8: { title: "SonicWave Pro", body: "Mutlak elitler için tasarlandı." },
    },
    about: {
      eyebrow: "Felsefemiz",
      heading: "Kulaklık yapmıyoruz.\nAlgı mühendisliği yapıyoruz.",
      body: "2018 yılında akustik mühendisler ve endüstriyel tasarımcılar tarafından kurulan SonicWave Pro, bilim ile takıntının kesiştiği noktada var oluyor. Her ürün bir bildiri: Bir kez hayal edilen mükemmeliyetin gerçeğe dönüştürülmesi gerektiği.",
      stat1Label: "Başvurulan Patent",
      stat1Value: "47",
      stat2Label: "Haritalanan Frekans",
      stat2Value: "120k+",
      stat3Label: "Birim Başına Ar-Ge Saati",
      stat3Value: "2.400",
      manifesto: '"Sesin duyulan bir şey olmadığına inanıyoruz. Ses, içinde yaşanılan bir şeydir."',
    },
    services: {
      eyebrow: "Ne Yapıyoruz",
      heading: "Özenle hazırlanmış hizmetler.\nTakıntılı uygulama.",
      items: [
        {
          title: "Özel Sürücü Mühendisliği",
          desc: "Atomik seviyeden yukarı inşa edilmiş ısmarlama transdüktör sistemleri. Her şeyi duymuş ve yetersiz bulmuş audiofiller için.",
          tag: "Donanım",
        },
        {
          title: "Akustik Alan Tasarımı",
          desc: "Dinleme ortamlarını modeller, simüle eder ve fiziksel olarak akort ederiz: stüdyolar, ev sinemaları, özel jetler.",
          tag: "Mimari",
        },
        {
          title: "Mekansal Ses Yazılımı",
          desc: "Gerçek zamanlı konser salonu akustiğini yeniden oluşturan tescilli DSP algoritmaları. Çapraz platform, sıfır gecikme.",
          tag: "Yazılım",
        },
        {
          title: "Özel Üretim",
          desc: "Tekil üretim serisi. Titanyum muhafazalar. Oymalı. Numaralı. Sadece sizin. Teslim süresi: 18 hafta.",
          tag: "Lüks",
        },
      ],
    },
    projects: {
      eyebrow: "Seçilmiş Çalışmalar",
      heading: "Üç yıl.\nDört takıntı.",
      items: [
        {
          title: "Proje HELIX",
          year: "2024",
          category: "Tüketici Donanımı",
          desc: "Havacılık kalitesinde alüminyum tek parçadan yontulmuş amiral kulak üstü kulaklık. 12 yayında %97 olumlu değerlendirme.",
        },
        {
          title: "Axiom Studio",
          year: "2023",
          category: "Profesyonel Ses",
          desc: "6 Grammy ödüllü albümde kullanılan referans monitörleme sistemi. Subwoofer olmadan 40Hz'e kadar düz yanıt.",
        },
        {
          title: "Zero Latency Engine",
          year: "2022",
          category: "DSP Yazılımı",
          desc: "Tescilli işleme yığınımız — uçtan uca 0,8ms altında — dünyanın en iyi 5 ses markasından 3'üne lisanslandı.",
        },
        {
          title: "Proje NOIR",
          year: "2022",
          category: "Sınırlı Baskı",
          desc: "12 adet. El montajı. Christie's'te çağdaş sanatın yanında satıldı. 48 saat içinde 12'si de özel olarak yerleştirildi.",
        },
      ],
    },
    contact: {
      eyebrow: "İletişime Geçin",
      heading: "Birlikte imkânsızı\ninşa edelim.",
      sub: "Ortaklıklar, özel siparişler veya sadece ses hakkında konuşmak için.",
      namePlaceholder: "Adınız",
      emailPlaceholder: "siz@email.com",
      messagePlaceholder: "Hayal ettiğinizi bize anlatın...",
      submit: "Mesaj Gönder",
      successMessage: "Mesajınız alındı. En kısa sürede dönüş yapacağız.",
    },
  },
};

export default translations;