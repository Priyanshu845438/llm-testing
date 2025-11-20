# Analytics Setup Guide for ai-testing.acadifysolution.com

## Google Analytics 4 (GA4) Setup

### Step 1: Create GA4 Property
1. Go to https://analytics.google.com/
2. Click "Admin" (bottom left)
3. Click "Create Property"
4. Property name: "AI Testing - Acadify Solution"
5. Reporting time zone: Your timezone
6. Currency: USD
7. Click "Next"
8. Industry: "Technology" / "Software"
9. Business size: Select your size
10. Click "Create"

### Step 2: Set Up Data Stream
1. Platform: "Web"
2. Website URL: `http://ai-testing.acadifysolution.com`
3. Stream name: "AI Testing Website"
4. Enhanced measurement: Enable all (recommended)
5. Click "Create stream"

### Step 3: Get Your Measurement ID
- After creating the stream, you'll see a **Measurement ID** (format: G-XXXXXXXXXX)
- **Copy this ID** - you'll need it for the code below

---

## Google Search Console Setup

### Step 1: Add Property
1. Go to https://search.google.com/search-console/
2. Click "Add Property"
3. Choose "URL prefix"
4. Enter: `http://ai-testing.acadifysolution.com`
5. Click "Continue"

### Step 2: Verify Ownership
Choose **HTML tag method**:
1. Google will provide a meta tag like:
   ```html
   <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" />
   ```
2. Copy this entire tag
3. Add it to the `<head>` section of all your pages (see implementation below)

### Step 3: Submit Sitemap
1. After verification, go to "Sitemaps" in left sidebar
2. Enter: `sitemap.xml`
3. Click "Submit"

---

## Implementation Code

### For ALL Pages - Add to `<head>` section

Replace the placeholders with your actual IDs:

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', {
    'send_page_view': true,
    'cookie_domain': 'ai-testing.acadifysolution.com',
    'cookie_flags': 'SameSite=None;Secure'
  });
</script>

<!-- Google Search Console Verification -->
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE_HERE" />
```

### Event Tracking for Key Actions

Add this script before the closing `</body>` tag on relevant pages:

```html
<script>
// Track CTA Button Clicks
document.querySelectorAll('a[href*="contact"], a[href*="calendly"]').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    gtag('event', 'cta_click', {
      'event_category': 'engagement',
      'event_label': this.textContent.trim(),
      'value': 1
    });
  });
});

// Track Form Submissions (if you add forms later)
document.querySelectorAll('form').forEach(function(form) {
  form.addEventListener('submit', function(e) {
    gtag('event', 'form_submit', {
      'event_category': 'conversion',
      'event_label': 'Contact Form',
      'value': 5
    });
  });
});

// Track Outbound Links (Calendly)
document.querySelectorAll('a[href*="calendly.com"]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    gtag('event', 'calendly_click', {
      'event_category': 'conversion',
      'event_label': 'Book Consultation',
      'value': 10
    });
  });
});

// Track Email Clicks
document.querySelectorAll('a[href^="mailto:"]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    gtag('event', 'email_click', {
      'event_category': 'engagement',
      'event_label': this.getAttribute('href'),
      'value': 2
    });
  });
});

// Track Phone Clicks
document.querySelectorAll('a[href^="tel:"]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    gtag('event', 'phone_click', {
      'event_category': 'engagement',
      'event_label': this.getAttribute('href'),
      'value': 3
    });
  });
});

// Track Service Page Views
if (window.location.pathname.includes('/pages/services/')) {
  gtag('event', 'service_page_view', {
    'event_category': 'engagement',
    'event_label': document.title,
    'value': 1
  });
}

// Track Pricing Page Engagement
if (window.location.pathname.includes('pricing')) {
  gtag('event', 'pricing_page_view', {
    'event_category': 'high_intent',
    'event_label': 'Pricing Page',
    'value': 5
  });
}
</script>
```

---

## Custom Dimensions to Set Up in GA4

1. Go to GA4 Admin → Data display → Custom definitions
2. Add these custom dimensions:

| Dimension Name | Scope | Description |
|---------------|-------|-------------|
| `page_type` | Event | Homepage, Service, Pricing, Contact |
| `ai_modality` | Event | Code, Text, Image, Video, Audio, Automation |
| `service_name` | Event | Specific service viewed |
| `user_role` | User | CTO, Engineer, Product Manager (if captured) |

---

## Conversion Goals to Set Up

1. Go to GA4 Admin → Events → Mark as conversion
2. Mark these events as conversions:
   - `calendly_click` (highest priority)
   - `email_click`
   - `phone_click`
   - `form_submit`
   - `pricing_page_view`

---

## Dashboard Metrics to Monitor

### Primary KPIs:
- **Organic traffic** (Sessions from Organic Search)
- **Conversion rate** (Calendly clicks / Sessions)
- **Top landing pages** (Which pages bring traffic)
- **Keyword performance** (via GSC)
- **Bounce rate** (Pages with high bounce need improvement)
- **Average engagement time** (Content quality indicator)

### Secondary KPIs:
- **Service page views** (Which services get most interest)
- **CTA click-through rate** (Button effectiveness)
- **Geographic distribution** (Where your visitors are from)
- **Device breakdown** (Mobile vs Desktop)
- **Page speed metrics** (via Page Timings)

---

## Weekly Monitoring Checklist

### Every Monday:
- [ ] Check Google Search Console for new errors
- [ ] Review keyword ranking changes
- [ ] Check page indexing status
- [ ] Review Core Web Vitals report

### Every Wednesday:
- [ ] Review GA4 traffic trends
- [ ] Analyze conversion rate
- [ ] Check which pages drive most conversions
- [ ] Review bounce rate on key pages

### Every Friday:
- [ ] Export weekly report (traffic, conversions, top pages)
- [ ] Note any significant changes
- [ ] Plan content/optimization based on data

---

## Bing Webmaster Tools (Bonus)

1. Go to https://www.bing.com/webmasters/
2. Add site: `http://ai-testing.acadifysolution.com`
3. Verify using HTML tag method (similar to GSC)
4. Submit sitemap.xml
5. Monitor indexing and rankings

---

## Implementation Checklist

- [ ] Create GA4 property and get Measurement ID
- [ ] Add GA4 tracking code to all pages
- [ ] Create GSC property and get verification meta tag
- [ ] Add GSC verification meta tag to all pages
- [ ] Submit sitemap.xml to Google Search Console
- [ ] Set up custom dimensions in GA4
- [ ] Mark conversion events in GA4
- [ ] Add event tracking script to all pages
- [ ] Test that events are firing correctly (use GA4 DebugView)
- [ ] Set up Bing Webmaster Tools (optional but recommended)
- [ ] Create baseline report (Week 0 data)

---

## Testing Your Setup

### GA4 Test:
1. Visit your website
2. In GA4, go to Reports → Realtime
3. You should see your visit appear within 30 seconds
4. Click a CTA button and verify the event appears in Realtime events

### GSC Test:
1. After adding verification tag, click "Verify" in GSC
2. If successful, go to "URL Inspection"
3. Enter your homepage URL and click "Test Live URL"
4. Should show "URL is on Google"

---

**IMPORTANT:** Once you provide your GA4 Measurement ID and GSC verification code, I'll implement these tracking codes across all your pages immediately.
