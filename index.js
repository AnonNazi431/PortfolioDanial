// Project Data Layer
    const projects = [{
        name: "Shiny-Eureka Log Parser",
        icon: "fa-key",
        desc: "An utility designed to help system administrators detect and investigate unauthorized SSH access attempts by automatically parsing logs and identifying the most persistent attack sources.",
        link: "https://github.com/AnonNazi431/shiny-eureka"
      },
      {
        name: "Unit17-dstat-backend",
        icon: "fa-window-restore",
        desc: " Flask-based web application designed to facilitate data management and analysis for various statistical purposes. This API provides endpoints to interact with the database storing statistical data, running analyses, and serving statistics to clients.",
        link: "https://github.com/AnonNazi431/unit17-dstat-backend"
      },
      {
        name: "Advance XSS Scanner",
        icon: "fa-desktop",
        desc: "A tool designed for web security professionals and developers. It automatically detects vulnerabilities to cross-site scripting (XSS) attacks in web applications, ensuring that your applications are secure from potential threats.",
        link: "https://github.com/AnonNazi431/xssscanner"
      },
      {
        name: "OsintPaw",
        icon: "fa-server",
        desc: "Designed to enhance the efficiency and effectiveness of gathering information from publicly available sources. It is particularly useful for security professionals, investigators, and anyone interested in conducting thorough online investigations.",
        link: "https://github.com/AnonNazi431/OsintPaw"
      }
    ];
    // Dynamic Loading
    const grid = document.getElementById('portfolio');
    projects.forEach(p => {
      grid.innerHTML += `
                <div class="card">
                    <i class="fa-solid ${p.icon}"></i>
                    <h3>${p.name}</h3>
                    <p>${p.desc}</p>
                    <a href="${p.link}" target="_blank" class="btn">ACCESS_MODULE</a>
                </div>
            `;
    });

    // Certifications Data Layer
    const certs = [
      {
        name: "OSCP - Offensive Security Certified Professional",
        icon: "fa-shield-alt",
        desc: "Advanced penetration testing certification demonstrating expertise in identifying and exploiting vulnerabilities in real-world scenarios.",
        link: "#"
      },
      {
        name: "CEH - Certified Ethical Hacker",
        icon: "fa-user-secret",
        desc: "Comprehensive certification covering ethical hacking methodologies, tools, and techniques for securing systems and networks.",
        link: "#"
      },
      {
        name: "CompTIA Security+",
        icon: "fa-lock",
        desc: "Foundational cybersecurity certification validating skills in network security, compliance, and operational security.",
        link: "#"
      },
      {
        name: "CISSP - Certified Information Systems Security Professional",
        icon: "fa-certificate",
        desc: "Global standard for information security management, covering security and risk management, asset security, and more.",
        link: "#"
      },
      {
        name: "GIAC Penetration Tester (GPEN)",
        icon: "fa-bug",
        desc: "Advanced certification focusing on penetration testing techniques, tools, and methodologies for comprehensive security assessments.",
        link: "#"
      },
      {
        name: "eJPT - eLearnSecurity Junior Penetration Tester",
        icon: "fa-code",
        desc: "Entry-level certification providing foundational knowledge in penetration testing and ethical hacking practices.",
        link: "#"
      }
    ];

    // Dynamic Loading for Certifications
    const certGrid = document.getElementById('cert');
    certs.forEach(c => {
      certGrid.innerHTML += `
                <div class="card">
                    <i class="fa-solid ${c.icon}"></i>
                    <h3>${c.name}</h3>
                    <p>${c.desc}</p>
                    <a href="${c.link}" target="_blank" class="btn">VERIFY_CERT</a>
                </div>
            `;
    });

    // Connect Data Layer
    const connects = [
      {
        name: "Email",
        icon: "fa-envelope",
        desc: "wan.danial.azwan@gmail.com",
        link: "mailto:wan.danial.azwan@gmail.com"
      },
      {
        name: "Location",
        icon: "fa-map-marker-alt",
        desc: "Kuala Lumpur, Malaysia",
        link: "#"
      },
      {
        name: "GitHub",
        icon: "fa-github",
        desc: "Follow my open source projects and contributions",
        link: "https://github.com/AnonNazi431"
      },
      {
        name: "LinkedIn",
        icon: "fa-linkedin-square",
        desc: "Connect professionally and view my career journey",
        link: "https://linkedin.com/in/wan-danial-aiman"
      },
      {
        name: "WhatsApp",
        icon: "fa-whatsapp",
        desc: "+60 176 877 807",
        link: "https://wa.me/60176877807"
      },
      {
        name: "Resume PDF",
        icon: "fa-file-pdf",
        desc: "Download my professional resume",
        link: "#"
      }
    ];

    // Dynamic Loading for Connect
    const connectGrid = document.getElementById('connect');
    connects.forEach(c => {
      connectGrid.innerHTML += `
                <div class="card">
                    <i class="fa-solid ${c.icon}"></i>
                    <h3>${c.name}</h3>
                    <p>${c.desc}</p>
                    <a href="${c.link}" target="_blank" class="btn">${c.name === 'Resume PDF' ? 'DOWNLOAD' : 'CONNECT'}</a>
                </div>
            `;
    });
    // Typewriter Effect
    const text = ["Ethical Hacker", "Pentester", "System Security Expert", "Cybersecurity Specialist", "Data Analyst"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    (function type() {
      if (count === text.length) count = 0;
      currentText = text[count];
      letter = currentText.slice(0, ++index);
      document.querySelector("#typewriter").textContent = letter;
      if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000);
      } else {
        setTimeout(type, 100);
      }
    }());
    // Matrix Background Logic
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@&";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {
      ctx.fillStyle = 'rgba(3, 7, 18, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#00f0ff';
      ctx.font = fontSize + 'px monospace';
      for (let i = 0; i < drops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    }
    setInterval(draw, 33);
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });