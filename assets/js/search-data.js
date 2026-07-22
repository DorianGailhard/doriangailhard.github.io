// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "Short blog posts about my publications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications I authored or co-authored.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "My professional and personal projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Material for courses.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-service",
          title: "Service",
          description: "Academic service",
          section: "Navigation",
          handler: () => {
            window.location.href = "/service/";
          },
        },{id: "post-fahnes-feature-aware-hyper-graph-generation-via-next-scale-prediction",
        
          title: "FAHNES: Feature-aware (Hyper)graph Generation via Next-Scale Prediction",
        
        description: "Accepted at ICML-26.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/FAHNES/";
          
        },
      },{id: "post-hygene-a-diffusion-based-hypergraph-generation-method",
        
          title: "HYGENE: A Diffusion-based Hypergraph Generation Method",
        
        description: "Accepted at AAAI-25.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/HYGENE/";
          
        },
      },{id: "news-i-started-a-phd-at-télécom-paris-advised-by-jhony-giraldo-enzo-tartaglione-and-lirida-naviner-the-phd-focuses-on-generative-models-and-graph-theory-and-aims-at-developing-deep-learning-methods-able-to-automate-parts-of-the-design-of-electronic-systems",
          title: 'I started a PhD at Télécom Paris. Advised by Jhony Giraldo, Enzo Tartaglione...',
          description: "",
          section: "News",},{id: "news-our-paper-hygene-a-diffusion-based-hypergraph-generation-method-has-been-accepted-at-aaai",
          title: 'Our paper “HYGENE: A Diffusion-based Hypergraph Generation Method” has been accepted at AAAI....',
          description: "",
          section: "News",},{id: "news-our-paper-feature-aware-hyper-graph-generation-via-next-scale-prediction-has-been-accepted-at-icml",
          title: 'Our paper “Feature-aware (Hyper)graph Generation via Next-Scale Prediction” has been accepted at ICML....',
          description: "",
          section: "News",},{id: "projects-the-flame-remembers",
          title: 'The Flame Remembers',
          description: "A short game entirely vibe-coded with Codex over a few days.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/flame-remembers/";
            },},{id: "projects-phd",
          title: 'PhD',
          description: "PhD I am currently enrolled in.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/phd/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
