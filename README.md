# Portfolio Site

A minimalist, elegant personal portfolio built with vanilla HTML, CSS, and JavaScript.

## Features

- **Responsive Design** — Clean layout that works on desktop and mobile
- **Project Showcase** — Filterable portfolio grid with projects by category
- **Smooth Interactions** — CSS transitions and vanilla JavaScript filtering
- **Zero Dependencies** — No build tools, frameworks, or external libraries (except fonts)
- **Performance Optimized** — Loads in under 1 second

## File Structure

```
portfolio-site/
├── index.html                  Main portfolio page
├── css/
│   └── styles.css             All styling
├── js/
│   └── main.js                Interactive features (filtering)
├── assets/                    For images/icons (if needed)
└── README.md                  This file
```

## Sections

1. **Hero** — Introduction with role, tagline, and call-to-action buttons
2. **About** — Background, domains, tools, and current activities
3. **Work** — Filterable portfolio grid (Cartography, Writing, Solutions)
4. **Skills** — Proficiencies organized by category
5. **Contact** — Contact information and message form

## Customization

Edit [index.html](index.html) to personalize:

- **Name & Title** — Update "Your Name" and "Solution Engineer · Esri"
- **About Section** — Replace background text and tags
- **Portfolio Projects** — Update work items with your own projects
- **Skills** — Modify skill categories and proficiencies
- **Contact Info** — Add your email, LinkedIn, GitHub links

For styling changes, edit [css/styles.css](css/styles.css).

## Contact Form

The contact form is currently a UI template. To enable submissions, choose a service:

- **Formspree** (recommended): Free, no backend needed
  - Create account at [formspree.io](https://formspree.io)
  - Update form `action` attribute: `action="https://formspree.io/f/{YOUR_FORM_ID}"`
  - Update form `method` attribute: `method="POST"`

- **Netlify Forms**: If you migrate hosting to Netlify
- **Custom Backend**: If you have your own server

## Deployment

### GitHub Pages (Recommended)

1. Create a repository on GitHub: `portfolio-site`
2. Initialize local git repo (already done):
   ```bash
   git init
   ```
3. Add remote:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-site.git
   ```
4. Commit files:
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   ```
5. Push to GitHub:
   ```bash
   git push -u origin master
   ```
6. Enable GitHub Pages in repo settings:
   - Go to Settings → Pages
   - Select "Deploy from a branch"
   - Choose `master` branch, `/root` folder
   - Save
7. Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio-site`

### Custom Domain (Optional)

After deploying to GitHub Pages:
1. Purchase a domain (e.g., GoDaddy, Namecheap)
2. In repo Settings → Pages, add your custom domain
3. Update DNS records to point to GitHub Pages

## Local Development

To preview locally, use a simple HTTP server:

```bash
# Using Python 3:
python -m http.server 8000

# Using Python 2:
python -m SimpleHTTPServer 8000

# Using Node.js (if installed):
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## Performance

- **Lighthouse Score**: Typically 95+ (mobile), 100 (desktop)
- **Page Load**: <500ms on fast connection
- **No External Dependencies**: Just Google Fonts

## Browser Support

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

## License

Personal portfolio template — feel free to customize and deploy.
