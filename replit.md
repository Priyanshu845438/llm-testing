### Overview
This project is an enterprise-grade, SEO-optimized Bootstrap 5 website for Acadify Solution, specializing in **Code AI Testing** for platforms like **GitHub Copilot, OpenAI Codex, GPT models, and Perplexity Sonar**. The website focuses on code generation testing, security validation, and quality assurance for AI-powered development tools. Hosted at `ai-testing.acadifysolution.com`, it serves as the digital platform showcasing Acadify's specialized expertise in code AI testing with a professional UI/UX and structured codebase.

### Recent Changes
**November 20, 2025:**
- **Global Pricing Update:** Reduced all pricing to be affordable and globally accessible:
  - Per-Feedback: $8-$35 (reduced from $15-$75) for basic/detailed/comprehensive feedback
  - Hourly: $30-$40 (reduced from $65-$85) for standard/bulk/dedicated hours
  - Industrial Projects: $1,200-$15,000 (reduced from $5,000-$80,000) for small/medium/large projects
  - Bug Priority: $12-$75 (reduced from $25-$200) for low/medium/high/critical priority bugs
- **Footer Navigation Overhaul:** Fixed broken links and improved structure:
  - Removed deleted "INDUSTRIES" section and broken /all-services.html link
  - Added new "AI MODALITIES" section featuring Code AI (Our Specialty), Text AI, Image AI, Video AI, Audio AI, and All Modalities links
  - Updated "All Services" link to point to /services.html
  - Added "Pricing" link to Company section
  - Fixed Bootstrap grid layout (all columns now col-lg-3 for proper 4-column layout)
  - Updated first service link to "Code LLM Testing" to emphasize code AI focus
  - All changes reviewed and approved by architect
- **Complete Website Refocus to Code AI Specialization:**
  - **Removed Industries Section:** Deleted entire Industries dropdown, industries.html, and all 12 industry pages (fintech, healthcare, manufacturing, education, legal, customer-support, ecommerce, hr, cybersecurity, marketing, retail, real-estate)
  - **Streamlined Services:** Removed 3 service pages (dataset-quality.html, behavior-testing.html, human-loop-evaluation.html) and all-services.html
  - **Updated Navigation:** Removed Industries dropdown from header, updated Services dropdown to show "Code AI Testing Services"
  - **Homepage Transformation:** Complete rewrite focusing on GitHub Copilot, OpenAI Codex, GPT models, Magic.dev, and Perplexity Sonar testing with SEO optimization
  - **Core Pages Rewritten:** About, Services, and Process pages now emphasize code AI platform testing specialization
  - **Modality Pages:** Updated all 6 modality pages with Code AI highlighted as "Our Specialty" (prominent border, badge, enhanced content)
  - **Service Pages:** Updated all 12 remaining service pages with code AI context and examples
  - **SEO Enhancements:** Added code AI-focused keywords throughout (Copilot testing, Codex evaluation, GPT code testing, Sonar validation, Magic.dev testing)
  - **Readability Improvements:** Added transition words (moreover, therefore, furthermore, thus, consequently) across all pages
  - **Contact Details Updated:** Calendly widget integration, removed location map section
  - **Platform References:** Replaced all instances of "PortalCode" with "Magic.dev" across the website

**November 19, 2025:**
- **Process Page Refinement:** Updated `process.html` with lighter, more professional design:
  - Added proper top padding (80px margin + 60px section padding) to hero section for better spacing
  - Replaced bright gradient backgrounds with lighter, brand-consistent colors (#f8f9fa, white backgrounds)
  - Replaced inline CTA section with reusable CTA component placeholder for consistency
  - Maintained all existing content: 5-step methodology, FAQ section, timeline section, statistics showcase
  - Improved visual hierarchy with subtle gradients and cleaner card designs
  - Comprehensive SEO optimization with Schema.org HowTo structured data markup retained
- **Pricing Page Launch:** Created new `pricing.html` page featuring:
  - Professional three-tier pricing structure (Starter: $2,500, Professional: $8,500, Enterprise: Custom)
  - Add-on services section (Ongoing Monitoring, Red Team Testing, Expert Consultation, Rush Delivery)
  - "What's Included in All Plans" section highlighting core features
  - Pricing FAQ section with 5 common questions
  - CTA component integration for consistent conversion paths
  - Full responsive design with AOS animations and brand-aligned color palette
  - SEO-optimized meta tags and Open Graph properties
- **Navigation Update:** Added "Pricing" link to header navigation menu between "Process" and "Contact"

### User Preferences
I prefer the agent to be highly autonomous for initial tasks but to **ask for confirmation before making any significant changes or architectural decisions**. I appreciate **detailed explanations** for complex solutions and **clear, concise summaries** for routine updates. Ensure all code is **well-commented** and follows **best practices for maintainability and scalability**. Do not make changes to the `assets/images/` folder unless specifically instructed, as it contains critical visual assets.

### System Architecture
The website employs a static site architecture built with HTML5, CSS3, and Bootstrap 5.3, served via a Python HTTP server. It features a component-based design for reusable elements.

**UI/UX Decisions:**
- **Color Scheme:** Primary brand color is `#0d264b` (Professional Deep Blue), with `#1a3a5c`, `#2563eb`, and `#081829` for accents.
- **Design:** Modern and professional, incorporating gradients, smooth transitions, card-based layouts, glassmorphism effects, and AOS (Animate on Scroll) for animations.
- **Navigation:** Enhanced navigation with animated dropdowns and a consistent footer.
- **Responsiveness:** Mobile-first approach using Bootstrap 5's responsive grid.
- **SEO:** Semantic HTML, proper heading hierarchy, meta descriptions, and clean URLs.

**Technical Implementations:**
- **Pages:** The site comprises 27 pages: 7 main pages (Home, About, Services, Process, Pricing, Contact, Modalities) and 20 sub-pages (12 Service Detail, 6 AI Modality, 2 Industry).
- **Features:** Includes an auto-slider for "Trusted By Leading Tech Companies," code AI-focused navigation, Calendly booking integration, and consistent CTA components.
- **Performance:** Optimized for fast loading times with minimal external dependencies, CDN-hosted libraries, and optimized CSS.
- **SEO Focus:** Keywords targeting GitHub Copilot, OpenAI Codex, GPT models, Perplexity Sonar, code AI testing, code security validation.

**Folder Structure:**
The structure includes `index.html`, `about.html`, `services.html`, `process.html`, `pricing.html`, `contact.html`, and `modalities.html` at the root. `assets/` contains `css/`, `images/`, and `js/`. `components/` houses reusable HTML components (header, footer, cta, breadcrumb). `pages/` contains subdirectories for `services/` (12 pages) and `modalities/` (6 pages) detail pages.

### External Dependencies
- **Bootstrap 5.3:** Responsive framework for UI components.
- **Bootstrap Icons:** Icon library for visual elements.
- **AOS (Animate on Scroll):** JavaScript library for scroll animations.
- **Python HTTP Server:** Used for serving static files during development.