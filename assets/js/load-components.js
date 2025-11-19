document.addEventListener('DOMContentLoaded', function() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');
    const ctaPlaceholder = document.getElementById('cta-placeholder');
    const breadcrumbPlaceholder = document.getElementById('breadcrumb-placeholder');
    
    const basePath = getBasePath();
    
    if (headerPlaceholder) {
        fetch(`${basePath}/components/header.html`)
            .then(response => response.text())
            .then(data => {
                headerPlaceholder.innerHTML = data;
                updateHeaderLinks(basePath);
            })
            .catch(error => console.error('Error loading header:', error));
    }
    
    if (breadcrumbPlaceholder) {
        fetch(`${basePath}/components/breadcrumb.html`)
            .then(response => response.text())
            .then(data => {
                breadcrumbPlaceholder.innerHTML = data;
                // Initialize breadcrumb after insertion
                buildBreadcrumb(basePath);
            })
            .catch(error => console.error('Error loading breadcrumb:', error));
    }
    
    if (footerPlaceholder) {
        fetch(`${basePath}/components/footer.html`)
            .then(response => response.text())
            .then(data => {
                footerPlaceholder.innerHTML = data;
                updateFooterLinks(basePath);
            })
            .catch(error => console.error('Error loading footer:', error));
    }
    
    if (ctaPlaceholder) {
        fetch(`${basePath}/components/cta.html`)
            .then(response => response.text())
            .then(data => {
                ctaPlaceholder.innerHTML = data;
            })
            .catch(error => console.error('Error loading CTA:', error));
    }
});

function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/pages/')) {
        return '../..';
    }
    return '.';
}

function updateHeaderLinks(basePath) {
    if (basePath === '../..') {
        const links = document.querySelectorAll('#header-placeholder a[href^="/"]');
        links.forEach(link => {
            const href = link.getAttribute('href');
            link.setAttribute('href', '../..' + href);
        });
        
        const imgs = document.querySelectorAll('#header-placeholder img[src^="/"]');
        imgs.forEach(img => {
            const src = img.getAttribute('src');
            img.setAttribute('src', '../..' + src);
        });
    }
}

function updateFooterLinks(basePath) {
    if (basePath === '../..') {
        const links = document.querySelectorAll('#footer-placeholder a[href^="/"]');
        links.forEach(link => {
            const href = link.getAttribute('href');
            link.setAttribute('href', '../..' + href);
        });
        
        const imgs = document.querySelectorAll('#footer-placeholder img[src^="/"]');
        imgs.forEach(img => {
            const src = img.getAttribute('src');
            img.setAttribute('src', '../..' + src);
        });
    }
}

function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function buildBreadcrumb(basePath) {
    const breadcrumbList = document.getElementById('breadcrumb-list');
    if (breadcrumbList) {
        const path = window.location.pathname;
        const segments = path.split('/').filter(segment => segment !== '');
        
        // Home link with icon
        let breadcrumbHTML = `<li><a href="${basePath}/index.html"><i class="bi bi-house-door-fill"></i> Home</a></li>`;
        
        // Build breadcrumb from path
        let currentPath = basePath;
        for (let i = 0; i < segments.length; i++) {
            const segment = segments[i];
            if (segment.endsWith('.html')) {
                // Last segment (current page)
                const pageName = segment.replace('.html', '').replace(/-/g, ' ');
                breadcrumbHTML += `<li class="active" aria-current="page">${capitalizeWords(pageName)}</li>`;
            } else if (segment !== 'pages') {
                // Intermediate segments
                currentPath += '/' + segment;
                const pageName = segment.replace(/-/g, ' ');
                breadcrumbHTML += `<li><a href="${currentPath}.html">${capitalizeWords(pageName)}</a></li>`;
            }
        }
        
        breadcrumbList.innerHTML = breadcrumbHTML;
    }
}
