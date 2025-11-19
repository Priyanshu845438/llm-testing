### Overview
This project is an enterprise-grade, SEO-optimized Bootstrap 5 website for Acadify Solution, focusing on **AI Model Testing, Evaluation, and Structured Feedback Services**. It targets various AI models like LLMs, chatbots, and recommender systems across 15+ services and 16 industries. The website, designed for **ai-testing.acadifysolution.com**, aims to be a comprehensive digital presence with a professional UI/UX and a robust folder structure, showcasing Acadify's expertise in AI quality assurance.

### User Preferences
I prefer the agent to be highly autonomous for initial tasks but to **ask for confirmation before making any significant changes or architectural decisions**. I appreciate **detailed explanations** for complex solutions and **clear, concise summaries** for routine updates. Ensure all code is **well-commented** and follows **best practices for maintainability and scalability**. Do not make changes to the `assets/images/` folder unless specifically instructed, as it contains critical visual assets.

### System Architecture
The website utilizes a static site architecture built with **HTML5, CSS3, and Bootstrap 5.3**, served via a Python HTTP server. It features a **component-based design** for reusable elements like headers, footers, and CTAs.

**UI/UX Decisions:**
- **Color Scheme:** Primary brand color is `#0d264b` (Professional Deep Blue), with `#1a3a5c` (Medium Blue), `#2563eb` (Bright Blue), and `#081829` (Navy) for accents and dark elements.
- **Design:** Modern and professional with gradients, smooth transitions, card-based layouts, glassmorphism effects, and AOS (Animate on Scroll) for smooth animations.
- **Navigation:** Enhanced navigation with animated dropdowns, and a consistent footer across all pages.
- **Responsiveness:** Mobile-first approach using Bootstrap 5's responsive grid.
- **SEO:** Semantic HTML, proper heading hierarchy (H1, H2, H3), meta descriptions, and clean URLs.

**Technical Implementations:**
- **Pages:** The site comprises 47 pages: 8 main pages (Home, About, Services, All Services, Process, Contact, Industries, Modalities) and 39 sub-pages (15 Service Detail, 6 AI Modality, 18 Industry).
- **Features:** Includes an auto-slider for "Trusted By Industry Leaders," scrollable dropdown menus, and a consistent CTA component.
- **Performance:** Lightweight with minimal external dependencies, fast loading times, CDN-hosted libraries (Bootstrap, AOS), and optimized CSS.

**Folder Structure:**
A professional, organized structure includes `index.html`, `about.html`, `services.html`, `all-services.html`, `process.html`, `contact.html`, `industries.html`, `modalities.html` at the root. `assets/` contains `css/`, `images/`, and `js/`. `components/` houses reusable HTML components. `pages/` contains subdirectories for `services/`, `industries/`, and `modalities/` detail pages.

### External Dependencies
- **Bootstrap 5.3:** Responsive framework for UI components.
- **Bootstrap Icons:** Icon library for visual elements.
- **AOS (Animate on Scroll):** JavaScript library for scroll animations.
- **Python HTTP Server:** Used for serving static files during development.

### Recent Changes
**November 19, 2025 - GitHub Import to Replit Environment:**
- Imported project from GitHub repository
- Installed Python 3.11 module for serving the static website
- Configured workflow "Web Server" to run `python3 -m http.server 5000` on port 5000 with webview output
- Set up deployment configuration for static hosting (deployment target: static, public directory: .)
- Verified all pages load correctly including component-based navigation, headers, footers, and breadcrumbs
- Confirmed path adjustments work correctly for both root-level pages and nested pages in `/pages/` subdirectories
- Tested homepage, services page, and nested service detail pages - all functioning properly
- Website successfully running on Replit with all 47 pages functional and ready for deployment

### Replit Configuration
- **Workflow:** "Web Server" runs Python HTTP server on port 5000 (webview output type)
- **Deployment:** Static deployment configured with public directory set to root (.)
- **Python Version:** Python 3.11 (installed via programming_language_install_tool)
- **Port Configuration:** Frontend serves on 0.0.0.0:5000 for Replit proxy compatibility
- **No Build Process:** Static site requires no compilation or build steps