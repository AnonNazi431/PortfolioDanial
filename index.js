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
        name: "Google Cybersecurity Professional Certificate",
        icon: "fa-shield-alt",
        desc: "Comprehensive program covering cybersecurity fundamentals, network security, incident response, and security operations through hands-on projects and real-world scenarios.",
        link: "#"
      },
      {
        name: "Cisco Ethical Hacking",
        icon: "fa-user-secret",
        desc: "Professional certification focusing on ethical hacking techniques, vulnerability assessment, and penetration testing methodologies for securing Cisco networks and systems.",
        link: "#"
      },
      {
        name: "Cisco JR Pentester",
        icon: "fa-lock",
        desc: "Junior-level penetration testing certification providing foundational skills in ethical hacking, vulnerability discovery, and basic penetration testing techniques.",
        link: "#"
      },
      {
        name: "Python Development",
        icon: "fa-certificate",
        desc: "Programming certification demonstrating proficiency in Python development, including scripting, automation, data analysis, and application development.",
        link: "#"
      },
      {
        name: "CC Certified in Cybersecurity",
        icon: "fa-bug",
        desc: "Entry-level cybersecurity certification covering basic security concepts, network security fundamentals, and compliance requirements for IT professionals.",
        link: "#"
      },
      {
        name: "Fortinet Certified Associate",
        icon: "fa-code",
        desc: "Associate-level certification validating knowledge of Fortinet security products, network security concepts, and basic firewall configuration and management.",
        link: "#"
      }
    ];

    // Dynamic Loading for Certifications
    const certGrid = document.getElementById('cert');
    certGrid.innerHTML = `
      <section class="cert-panel">
        <div class="cert-panel-header">
          <div>
            <div class="mono">CERTIFICATION VAULT</div>
            <p>Verified credentials displayed all from various providers</p>
          </div>
          <div class="cert-panel-meta">
            <span class="cert-meta-item">${certs.length} Certificates</span>
            <span class="cert-meta-item">Secure, verified, and theme aligned</span>
          </div>
        </div>
        <div class="cert-filter-row">
          <button class="cert-filter-btn active" data-filter="all">ALL</button>
          <button class="cert-filter-btn" data-filter="PRO">PRO</button>
          <button class="cert-filter-btn" data-filter="INT">INT</button>
          <button class="cert-filter-btn" data-filter="BASIC">BASIC</button>
        </div>
        <div class="cert-list" id="cert-list">
          ${certs.map((c, index) => `
            <article class="cert-card" data-level="${getLevel(c.name)}">
              <div class="cert-card-top">
                <div class="cert-badge ${getLevelClass(c.name)}">${getLevel(c.name)}</div>
                <div class="cert-icon"><i class="fa-solid ${c.icon}"></i></div>
              </div>
              <h3 class="cert-card-title mono">${c.name}</h3>
              <p class="cert-card-desc">${c.desc}</p>
              <div class="cert-card-footer">
                <button class="verify-btn mono" onclick="verifyCert(${index})">VERIFY</button>
              </div>
            </article>
          `).join('')}
        </div>
      </section>
    `;

    const certList = document.getElementById('cert-list');
    const filterButtons = document.querySelectorAll('.cert-filter-btn');

    function filterCerts(level) {
      filterButtons.forEach(button => {
        button.classList.toggle('active', button.getAttribute('data-filter') === level);
      });

      const cards = certList.querySelectorAll('.cert-card');
      cards.forEach(card => {
        const cardLevel = card.getAttribute('data-level');
        if (level === 'all' || cardLevel === level) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    }

    filterButtons.forEach(button => {
      button.addEventListener('click', () => filterCerts(button.getAttribute('data-filter')));
    });

    filterCerts('all');

    function getLevel(certName) {
      if (certName.includes('Professional') || certName.includes('Ethical Hacking')) return 'PRO';
      if (certName.includes('JR') || certName.includes('Associate') || certName.includes('Certified in Cybersecurity')) return 'INT';
      return 'BASIC';
    }

    function getLevelClass(certName) {
      return getLevel(certName).toLowerCase();
    }

    // Make verifyCert function global
    window.verifyCert = function(index) {
      const card = document.querySelector(`.cert-card[data-index="${index}"]`);
      const btn = card.querySelector('.verify-btn');

      btn.textContent = 'VERIFYING...';
      btn.style.background = 'var(--accent)';
      btn.disabled = true;

      setTimeout(() => {
        btn.textContent = 'VERIFIED ✓';
        btn.style.background = '#22c55e';
        card.style.borderColor = '#22c55e';

        setTimeout(() => {
          btn.textContent = 'VERIFY';
          btn.style.background = 'var(--accent)';
          btn.disabled = false;
          card.style.borderColor = 'var(--accent-dim)';
        }, 2500);
      }, 1200);
    };

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
    connectGrid.innerHTML = `
      <div class="terminal connect-terminal">
        <div class="terminal-header">
          <span class="mono">CONNECT_TERMINAL.exe</span>
          <div class="terminal-buttons">
            <span class="red"></span>
            <span class="yellow"></span>
            <span class="green"></span>
          </div>
        </div>
        <div class="terminal-body" id="terminal-output">
          <p class="mono">Welcome to CONNECT_TERMINAL v2.1.0</p>
          <p class="mono">Type 'help' or click commands below to get contact information.</p>
          <p class="mono">$ <span class="cursor">_</span></p>
        </div>
        <div class="terminal-commands">
          <button class="terminal-btn" data-command="email">EMAIL</button>
          <button class="terminal-btn" data-command="location">LOCATION</button>
          <button class="terminal-btn" data-command="github">GITHUB</button>
          <button class="terminal-btn" data-command="linkedin">LINKEDIN</button>
          <button class="terminal-btn" data-command="whatsapp">WHATSAPP</button>
          <button class="terminal-btn" data-command="resume">RESUME</button>
          <button class="terminal-btn" data-command="clear">CLEAR</button>
        </div>
      </div>
    `;

    // Interactive Terminal Logic
    const terminalOutput = document.querySelector('.connect-terminal #terminal-output');
    const commandButtons = document.querySelectorAll('.connect-terminal .terminal-btn[data-command]');

    const contactData = {
      email: 'wan.danial.aiman@gmail.com',
      location: 'Kuala Lumpur, Malaysia',
      github: 'https://github.com/AnonNazi431',
      linkedin: 'https://linkedin.com/in/wan-danial-aiman',
      whatsapp: 'https://wa.me/60176877807',
      resume: '#'
    };

    function executeCommand(command) {
      const output = terminalOutput;
      const lastLine = output.lastElementChild;
      
      if (command === 'clear') {
        output.innerHTML = `
          <p class="mono">Terminal cleared.</p>
          <p class="mono">$ <span class="cursor">_</span></p>
        `;
        return;
      }

      if (contactData[command]) {
        // Remove cursor from last line
        if (lastLine && lastLine.textContent.includes('$')) {
          lastLine.innerHTML = '$ ' + command;
        }
        
        // Add output
        const outputLine = document.createElement('p');
        outputLine.className = 'mono';
        if (command === 'email') {
          outputLine.innerHTML = contactData[command];
        } else if (command === 'location') {
          outputLine.innerHTML = contactData[command];
        } else {
          outputLine.innerHTML = `<a href="${contactData[command]}" target="_blank" style="color: var(--accent); text-decoration: none;">${contactData[command]}</a>`;
        }
        output.appendChild(outputLine);
        
        // Add new prompt
        const newPrompt = document.createElement('p');
        newPrompt.className = 'mono';
        newPrompt.innerHTML = '$ <span class="cursor">_</span>';
        output.appendChild(newPrompt);
        
        // Scroll to bottom
        output.scrollTop = output.scrollHeight;
      }
    }

    commandButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const command = btn.getAttribute('data-command');
        executeCommand(command);
      });
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