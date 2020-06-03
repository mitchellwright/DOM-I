const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Update the title
let title = document.getElementsByTagName('title');
title[0].textContent = 'Great Idea!';

// Update the nav bar with the proper text for each item
let nav = Array.from(document.querySelectorAll('nav a'));
nav.forEach( (navEl, index) => {
  navEl.textContent = siteContent['nav'][`nav-item-${index+1}`]
});


// Update the CTA section
// Update the CTA h1
let ctaH1 = document.querySelectorAll('section.cta > div > h1');
ctaH1[0].textContent = siteContent['cta']['h1'];

// Update the CTA button
let ctaButton = Array.from(document.querySelectorAll('section.cta > div > button'));
ctaButton[0].textContent = siteContent['cta']['button'];

// Update the CTA image
let ctaImage = Array.from(document.querySelectorAll('section.cta > img'));
ctaImage[0].src = siteContent['cta']['img-src'];


// Update main content
let topContent = Array.from(document.querySelectorAll('section.main-content > div > div.text-content'));
topContent.forEach( (contentEl, index) => {
  switch(index) {
    case 0:
      contentEl.children[0].textContent = siteContent['main-content']['features-h4'];
      contentEl.children[1].textContent = siteContent['main-content']['features-content'];
      break;
    case 1:
      contentEl.children[0].textContent = siteContent['main-content']['about-h4'];
      contentEl.children[1].textContent = siteContent['main-content']['about-content'];
      break;
    case 2:
      contentEl.children[0].textContent = siteContent['main-content']['services-h4'];
      contentEl.children[1].textContent = siteContent['main-content']['services-content'];
      break;
    case 3:
      contentEl.children[0].textContent = siteContent['main-content']['product-h4'];
      contentEl.children[1].textContent = siteContent['main-content']['product-content'];
      break;
    case 4:
      contentEl.children[0].textContent = siteContent['main-content']['vision-h4'];
      contentEl.children[1].textContent = siteContent['main-content']['vision-content'];
      break;
  }
});

let middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);
