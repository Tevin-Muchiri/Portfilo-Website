# Personal Portfolio Website

A modern, responsive personal portfolio website for Tevin, showcasing professional experience, certifications, skills, and projects.

## Features

- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop devices (320px - 1920px)
- **Smooth Navigation**: Fixed navigation bar with smooth scrolling to sections
- **Interactive Sections**:
  - Hero section with profile photo and social links
  - About section highlighting expertise
  - Work experience timeline
  - Certifications showcase
  - Skills with proficiency indicators
  - Projects portfolio with live demos and GitHub links
  - Contact form with validation
- **Modern UI**: Clean, professional design with smooth animations
- **Performance Optimized**: Fast loading times with lazy-loaded images

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript**: No frameworks, pure JavaScript for interactivity

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles
├── js/
│   ├── data.js         # Portfolio content data
│   ├── utils.js        # Utility functions
│   └── main.js         # Main application logic
├── assets/
│   ├── profile.jpg     # Profile photo
│   └── project*.jpg    # Project thumbnails
└── README.md           # This file
```

## Setup Instructions

1. **Clone or download** this repository
2. **Add your images** to the `assets/` folder:
   - `profile.jpg` - Your profile photo
   - `project1.jpg`, `project2.jpg`, etc. - Project screenshots
3. **Update content** in `js/data.js`:
   - Personal information
   - Work experiences
   - Certifications
   - Skills
   - Projects
   - Social media links
4. **Open** `index.html` in a web browser

## Customization

### Update Personal Information

Edit `js/data.js` and modify the `personalInfo` object:

```javascript
const personalInfo = {
    name: "Your Name",
    title: "Your Title",
    subtitle: "Your Subtitle",
    bio: "Your bio...",
    email: "your.email@example.com",
    // ...
};
```

### Add/Remove Sections

Sections can be added or removed by editing `index.html` and updating the navigation links accordingly.

### Change Colors

Modify CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    /* ... */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lazy loading for images
- Optimized CSS with minimal specificity
- Efficient JavaScript with event delegation
- No external dependencies

## Deployment

This is a static website and can be deployed to:
- **GitHub Pages**: Push to a GitHub repository and enable Pages
- **Netlify**: Drag and drop the folder or connect to Git
- **Vercel**: Import the project from Git
- **Any static hosting service**

## Contact Form

The contact form currently uses a simulated email service. To integrate a real email service:

1. Sign up for a service like [EmailJS](https://www.emailjs.com/), [Formspree](https://formspree.io/), or [Web3Forms](https://web3forms.com/)
2. Update the `sendEmail` function in `js/utils.js` with your service's API
3. Add your API keys/configuration

## License

This project is open source and available for personal use.

## Credits

Designed and developed by Tevin
