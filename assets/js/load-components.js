document.addEventListener('DOMContentLoaded', function() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const footerPlaceholder = document.getElementById('footer-placeholder');
    const ctaPlaceholder = document.getElementById('cta-placeholder');
    
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
