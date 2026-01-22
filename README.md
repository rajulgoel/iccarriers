# Indo Canadian Carriers Website

A professional, responsive single-page website for **Indo Canadian Carriers**, a refrigerated transportation service operating across Canada and the USA. This project showcases the company's services, fleet, and certifications while providing clients with an easy way to request quotes and get in touch.

## 📖 Project Overview

This website is designed as a static, single-page application (SPA) that utilizes smooth scrolling for navigation. It features a modern, clean design with interactive elements like scroll animations, a typing text effect, and a dynamic gallery. The site is fully responsive, ensuring a seamless experience on mobile, tablet, and desktop devices.

### Key Features

* **Responsive Design:** Fully fluid layout adapting to all screen sizes.
* **Interactive Hero Section:** Features a video background with image fallbacks and entrance animations.
* **Dynamic Navigation:**
* Sticky header with active section highlighting.
* Hamburger menu for mobile devices.
* Smooth scrolling to anchor links.
* Dynamic "typing" text effect in the logo area that changes based on the active section.


* **Lazy Loading & Performance:**
* Skeleton loading states for images to improve perceived performance.
* "Reveal on Scroll" animations for content.
* Dynamic map loading to speed up initial page load.


* **Image Gallery:** A grid layout gallery with a "Show More" expansion feature.
* **Contact Form:** A functional frontend form layout with validation and submission alerts.
* **SEO Optimized:** Includes comprehensive meta tags, Open Graph data, and Schema.org structured data for Organization, LocalBusiness, and Service.

## Technologies Used

* **HTML5:** Semantic structure and accessibility features.
* **CSS3:**
* CSS Grid and Flexbox for layout.
* CSS Variables (Custom Properties) for consistent theming.
* Keyframe animations and transitions.


* **JavaScript (Vanilla):**
* DOM manipulation.
* Intersection Observer logic for scroll spy and animations.
* Event handling for UI interactions (modals, menus, forms).


* **Libraries & Assets:**
* [Font Awesome](https://fontawesome.com/) (Icons)
* [Google Fonts](https://fonts.google.com/) (Alata font family)



## 📂 Project Structure

```text
/
├── index.html          # Main HTML structure
├── manifest.json       # Web app manifest
├── robots.txt          # Search engine instructions
├── sitemap.xml         # Site map for SEO
├── call-button.js      # External script for specific call functionality
└── assets/
    ├── imgs/           # Website images and video background
    ├── Favicon/        # Favicons for various devices
    └── doc/            # Downloadable PDF documents (Authorities, etc.)

```

## Setup & Installation

Since this is a static website, it does not require a backend server or database setup.

1. **Clone or Download** the repository.
2. **Open `index.html**` in your web browser to view the site locally.

**For Development:**
It is recommended to use a live server extension (like Live Server for VS Code) to view changes in real-time.

**Deployment:**
The site is ready to be deployed on any static site host, such as:

* GitHub Pages
* Netlify
* Vercel
* Apache/Nginx Web Server

## Customization

### Colors

The site uses CSS variables for easy theming. You can change the color scheme by editing the `:root` variables in the `<style>` section of `index.html`:

```css
:root {
    --primary-red: #dc2626;
    --secondary-red: #b91c1c;
    --light-red: #fecaca;
    --white: #ffffff;
    --off-white: #fafafa;
    --dark-red: #7f1d1d;
    /* ... */
}

```

### Content Updates

* **Typing Effect:** Modify the `sectionTexts` object in the script tag at the bottom of `index.html` to change the dynamic text displayed in the header.
* **Contact Email:** Update the `mailto:` link in the contact section and the footer.

---

**Contact Support:**
For technical issues or inquiries regarding this codebase, please contact the development team or email `info@iccarriers.com`.
