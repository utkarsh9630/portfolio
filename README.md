# AI/ML Engineer Portfolio - Utkarsh Tripathi

A modern, responsive portfolio website showcasing AI/ML projects, skills, and experience. Built with vanilla HTML, CSS, and JavaScript for maximum performance and deployed on GitHub Pages.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🌟 Features

- **Modern Dark Theme** - Eye-catching design with gradient accents and smooth animations
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Live Project Links** - Direct links to deployed applications (AI4Invest, Mental Stress Assessment)
- **Interactive Animations** - Smooth scroll effects and hover interactions
- **Performance Optimized** - Fast loading with minimal dependencies
- **SEO Ready** - Proper meta tags and semantic HTML

## 🚀 Quick Start

### Option 1: Deploy to GitHub Pages (Recommended)

1. **Fork or Clone this Repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Customize Your Content**
   - Edit `index.html` to update your information
   - Replace project details with your own
   - Update contact information and social links
   - Add your resume PDF to the repository

3. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin main
   ```

4. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Source", select **Deploy from a branch**
   - Choose **main** branch and **/ (root)** folder
   - Click **Save**
   - Your site will be live at `https://yourusername.github.io/portfolio/`

### Option 2: Run Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Open in Browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```
   - Navigate to `http://localhost:8000`

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling (CSS variables, responsive design)
├── script.js           # JavaScript for interactivity
├── README.md           # This file
└── resume.pdf          # Your resume (add this!)
```

## 🎨 Customization Guide

### 1. Update Personal Information

**In `index.html`:**
- Line 8-9: Update meta description and keywords
- Line 10: Change page title
- Line 38: Update navigation logo
- Lines 58-77: Edit hero section content
- Lines 134-450: Update project details
- Lines 670-750: Modify experience section
- Lines 800-900: Update contact information

### 2. Change Colors & Theme

**In `styles.css`:**
```css
:root {
    --color-primary: #00f5d4;     /* Primary accent color */
    --color-accent: #ff006e;      /* Secondary accent color */
    --color-bg: #0a0a0f;          /* Background color */
    /* Modify these to change the entire color scheme */
}
```

### 3. Add Your Resume

1. Add your resume PDF to the repository
2. In `script.js`, line 78-85:
   ```javascript
   const resumeUrl = 'resume.pdf';  // Update with your filename
   const link = document.createElement('a');
   link.href = resumeUrl;
   link.download = 'Utkarsh_Tripathi_Resume.pdf';
   link.click();
   ```

### 4. Add Project Images

Replace the SVG placeholders with actual images:

```html
<!-- Before -->
<div class="project-image-placeholder">
    <svg>...</svg>
</div>

<!-- After -->
<div class="project-image">
    <img src="project-screenshot.png" alt="Project Name">
</div>
```

### 5. Update Social Links

**In `index.html`:**
- GitHub: Line 850
- LinkedIn: Line 870
- Email: Line 830

## 🛠️ Technical Details

### Technologies Used
- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, Animations
- **JavaScript (ES6+)** - Intersection Observer, Smooth Scrolling
- **Google Fonts** - Syne (display) & JetBrains Mono (body)

### Key Features
- CSS Grid & Flexbox for layouts
- CSS Custom Properties for theming
- Intersection Observer for scroll animations
- No frameworks or libraries (100% vanilla)
- Mobile-first responsive design

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🔧 Advanced Customization

### Add Google Analytics

Add before closing `</head>` tag:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Add Custom Domain

1. Purchase domain from Namecheap, GoDaddy, etc.
2. In repository, create `CNAME` file:
   ```
   yourdomain.com
   ```
3. Configure DNS records with your provider:
   - Type: A
   - Host: @
   - Value: `185.199.108.153`
   - Add 3 more A records with: `.109.153`, `.110.153`, `.111.153`

### Enable Dark/Light Mode Toggle

Add this to `script.js`:
```javascript
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', 
        document.body.classList.contains('light-mode') ? 'light' : 'dark'
    );
});
```

## 🚀 Performance Optimization

- ✅ Minimal dependencies (no external libraries)
- ✅ Optimized CSS (21KB minified)
- ✅ Efficient JavaScript (5KB)
- ✅ Lazy loading for animations
- ✅ GPU-accelerated transforms

## 📊 SEO Checklist

- ✅ Semantic HTML5 elements
- ✅ Meta descriptions
- ✅ Open Graph tags (add if needed)
- ✅ Descriptive alt text for images
- ✅ Mobile-friendly design
- ✅ Fast loading speed

## 🐛 Troubleshooting

### Site not loading on GitHub Pages?
- Check that `index.html` is in the root directory
- Verify GitHub Pages is enabled in repository settings
- Wait 5-10 minutes for initial deployment

### Fonts not loading?
- Check internet connection (Google Fonts CDN)
- Try clearing browser cache

### Animations not working?
- Ensure JavaScript is enabled
- Check browser console for errors

## 📝 To-Do

- [ ] Add your resume PDF
- [ ] Replace project screenshots
- [ ] Update all personal links
- [ ] Add Google Analytics (optional)
- [ ] Test on multiple devices
- [ ] Add your custom domain (optional)

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Found a bug or want to contribute? Feel free to:
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📧 Contact

**Utkarsh Tripathi**
- Email: tripathiutkarsh46@gmail.com
- GitHub: [@utkarsh9630](https://github.com/utkarsh9630)
- LinkedIn: [Utkarsh Tripathi](https://www.linkedin.com/in/utkarsh-tripathi)

---

⭐ If you found this portfolio template helpful, consider giving it a star!

**Live Demo:** [View Portfolio](https://yourusername.github.io/portfolio/)
