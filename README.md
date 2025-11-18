# Acadify AI Testing Division Website

Enterprise-grade AI Model Testing, Evaluation & Structured Feedback services website.

## Overview

This is a professional, multi-page website for Acadify Solution's AI Testing Division. The website showcases comprehensive AI testing services across 15+ testing services, 18 industries, and 6 AI modalities.

## Project Structure

```
/
├── index.html                  # Homepage with hero section
├── about.html                  # About Acadify AI Testing
├── services.html               # Main services overview page
├── all-services.html           # Complete catalog of all services
├── process.html                # 5-step testing methodology
├── contact.html                # Contact form & information
├── industries.html             # Industries overview
├── modalities.html             # AI modalities overview
├── assets/
│   ├── css/
│   │   └── style.css           # Custom CSS with Acadify theme
│   ├── images/                 # All website images
│   │   ├── logo.jpg            # Company logo
│   │   ├── hero-main.jpg       # Main hero image
│   │   ├── hero-services.jpg   # Services hero image
│   │   ├── hero-about.jpg      # About page hero image
│   │   └── industry-*.jpg      # Industry-specific images
│   └── js/
│       └── load-components.js  # Component loader script
├── components/
│   ├── header.html             # Reusable header/navigation
│   ├── footer.html             # Reusable footer
│   └── cta.html                # Call-to-action component
└── pages/
    ├── services/               # 15 individual service pages
    │   ├── llm-testing.html
    │   ├── chatbot-evaluation.html
    │   ├── model-accuracy-scoring.html
    │   ├── bias-testing.html
    │   ├── hallucination-detection.html
    │   ├── edge-case-testing.html
    │   ├── safety-compliance.html
    │   ├── reliability-testing.html
    │   ├── human-loop-evaluation.html
    │   ├── multilang-testing.html
    │   ├── dataset-quality.html
    │   ├── output-consistency.html
    │   ├── prompt-response.html
    │   ├── behavior-testing.html
    │   └── reinforcement-feedback.html
    ├── industries/             # 18 industry pages
    │   ├── fintech.html
    │   ├── healthcare.html
    │   ├── manufacturing.html
    │   ├── education.html
    │   ├── legal.html
    │   ├── customer-support.html
    │   ├── ecommerce.html
    │   ├── hr.html
    │   ├── cybersecurity.html
    │   ├── marketing.html
    │   ├── retail.html         # New
    │   ├── real-estate.html    # New
    │   ├── video-ai-industry.html
    │   ├── audio-ai-industry.html
    │   ├── text-ai-industry.html
    │   ├── image-ai-industry.html
    │   ├── code-ai-industry.html
    │   └── automation-ai-industry.html
    └── modalities/             # 6 AI modality pages
        ├── text-ai.html
        ├── image-ai.html
        ├── video-ai.html
        ├── audio-ai.html
        ├── code-ai.html
        └── automation-ai.html
```

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom professional styling
- **Bootstrap 5.3** - Responsive grid and components
- **Bootstrap Icons** - Icon library
- **AOS (Animate On Scroll)** - Scroll animations
- **JavaScript** - Component loading and interactivity

## Features

### Component-Based Architecture
- Reusable header, footer, and CTA components
- Dynamic component loading via JavaScript
- Consistent navigation across all pages

### Comprehensive Navigation
- **Services**: All 15 AI testing services accessible via dropdown
- **Industries**: All 18 industries we serve
- **AI Modalities**: 6 different AI modality categories
- **Direct Links**: Process, Contact, and Book a Call

### Call-to-Action (CTA)
- Unique, attractive CTA section on every page
- Direct links to Calendly for booking consultations
- Contact form integration

### Responsive Design
- Mobile-first approach
- Fully responsive across all devices
- Touch-friendly navigation

## Setup & Installation

### Local Development

1. Clone the repository:
```bash
git clone <repository-url>
cd acadify-ai-testing
```

2. Start a local web server:
```bash
# Using Python 3
python3 -m http.server 5000

# Or using Node.js http-server
npx http-server -p 5000

# Or using PHP
php -S localhost:5000
```

3. Open your browser and navigate to:
```
http://localhost:5000
```

### No Build Process Required
This is a static HTML website with no build process. All files are ready to deploy as-is.

## Testing & Verification

### Local Server Testing

After starting the local server, verify:

1. **Homepage loads correctly**: Visit `http://localhost:5000`
2. **Components load**: Check that header, footer, and CTA sections appear
3. **Navigation works**: Test all dropdown menus and links
4. **Sub-pages load**: Test at least one service, industry, and modality page
5. **Images display**: Verify logo and hero images appear
6. **Book a Call button**: Ensure it links to Calendly
7. **Responsive design**: Test on mobile viewport

### Component Loader Verification

The JavaScript component loader handles:
- Loading header, footer, and CTA components
- Adjusting paths for root pages vs. sub-pages
- Updating all links and images to work from any directory level

**Limitations**:
- Components load via JavaScript (requires JS enabled)
- Initial page render shows placeholders briefly
- External links to absolute paths work correctly

### Server Configuration

For development, the website runs on a simple HTTP server:
```bash
python3 -m http.server 5000
```

For production, ensure your server:
- Serves static files correctly
- Has proper MIME types configured
- Supports CORS if needed
- Caches static assets appropriately

## Deployment

### Static Hosting Platforms

#### Replit Deployments
1. Configure the deployment in Replit
2. Set deployment type to "Static"
3. Set public directory if needed
4. Deploy!

#### Netlify
1. Drag and drop the entire folder to Netlify
2. Or connect your Git repository
3. No build settings required

#### Vercel
1. Import the project from Git
2. Framework Preset: "Other"
3. No build command needed

#### GitHub Pages
1. Push to GitHub repository
2. Go to Settings > Pages
3. Select branch and root folder
4. Save and deploy

## Customization

### Updating Content

#### Adding New Services
1. Create a new HTML file in `pages/services/`
2. Update `components/header.html` to add the new service to the dropdown
3. Update `services.html` and `all-services.html` to include the new service

#### Adding New Industries
1. Create a new HTML file in `pages/industries/`
2. Update `components/header.html` to add to Industries dropdown
3. Update `industries.html` to add the industry card

#### Modifying Colors
Edit `assets/css/style.css` and update the CSS variables:
```css
:root {
  --primary-color: #0d274c;
  --secondary-color: #1a3a5c;
  --accent-color: #2563eb;
  /* ... */
}
```

#### Updating Images
- Replace images in `assets/images/` directory
- Maintain the same filenames or update references in HTML files
- Recommended image sizes:
  - Logo: 200x200px
  - Hero images: 1200x600px
  - Industry images: 800x600px

### Contact Information
Update the following in `components/footer.html`:
- Email address
- Phone numbers
- Office locations
- Social media links

### Book a Call Link
The Calendly link is set to: `https://calendly.com/acadify-online/30min`
To update:
1. Edit `components/header.html`
2. Edit `components/footer.html`
3. Edit `components/cta.html`

## Component System

### How Components Work

The website uses a simple JavaScript-based component system:

1. **Placeholders**: Each page has placeholder divs:
```html
<div id="header-placeholder"></div>
<div id="footer-placeholder"></div>
<div id="cta-placeholder" class="container"></div>
```

2. **Component Loader**: The `load-components.js` script automatically:
   - Fetches component HTML files
   - Injects them into placeholder divs
   - Adjusts paths based on page location (root vs. sub-pages)

3. **Path Handling**: The script automatically adjusts paths for:
   - Root pages (e.g., `index.html`)
   - Sub-pages (e.g., `pages/services/llm-testing.html`)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightweight static HTML
- Optimized images
- Minimal JavaScript
- Fast loading times
- No external dependencies beyond CDN libraries

## SEO Optimization

- Semantic HTML5 markup
- Meta descriptions on all pages
- Open Graph tags for social sharing
- Structured data (Schema.org)
- Clean, descriptive URLs
- Alt text for images

## Accessibility

- ARIA labels on interactive elements
- Keyboard navigation support
- Semantic HTML structure
- Sufficient color contrast
- Responsive text sizing

## Maintenance

### Regular Updates
- Review and update service descriptions
- Add new industry pages as needed
- Update client testimonials
- Refresh images periodically
- Keep contact information current

### Content Updates
Most content is in HTML files and can be edited directly:
- Main pages: Root directory
- Service pages: `pages/services/`
- Industry pages: `pages/industries/`
- Modality pages: `pages/modalities/`

## Support

For questions or issues:
- Email: contact@acadifysolution.com
- Website: https://ai-testing.acadifysolution.com/

## License

© 2025 Acadify Solution. All rights reserved.

---

**Built with ♥ by the Acadify Team**
