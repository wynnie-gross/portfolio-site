# Plan: Complete & Deploy Personal Portfolio

## TL;DR
Your portfolio template is 95% designed already—a beautiful single-page site with projects, skills, and contact sections. To complete it: (1) personalize content with your real data, (2) organize files for maintainability, (3) deploy to GitHub Pages.

---

## Steps

### Phase 1: Personalization & Content Prep
1. Gather your actual content: bio/about text, real project descriptions, actual skills list, contact details
2. Create a content inventory with all placeholders to replace:
   - Personal info (name, title, email, LinkedIn, GitHub)
   - About section text
   - 3-6 portfolio projects (titles, descriptions, type, links)
   - Skills categories and proficiencies

### Phase 2: File Organization & Refactoring
1. Create folder structure:
   ```
   portfolio-site/
   ├── index.html                   (main portfolio page)
   ├── css/
   │   └── styles.css               (extract inline styles from index.html)
   ├── js/
   │   └── main.js                  (extract inline JavaScript)
   ├── assets/
   │   └── images/                  (if adding image assets)
   └── README.md                    (deployment instructions)
   ```
2. Extract `<style>` block from index.html → css/styles.css
3. Extract `<script>` block from index.html → js/main.js
4. Update HTML `<link rel="stylesheet">` and `<script src="">` tags to reference new paths

### Phase 3: Content Population in Index.html
1. Replace all placeholder text:
   - "Your Name" → your actual name
   - "Solution Engineer · Esri" → your title/role
   - "you@example.com" → real email
   - LinkedIn/GitHub URLs → your actual profiles
2. Update "About" section with your real background story
3. Update "Skills" categories and proficiencies (remove placeholder skill dots)
4. Replace "Work" portfolio items with your real projects:
   - Update project titles, descriptions, type badges
   - Keep or replace SVG visualizations
   - Update project links
5. Update contact form action (currently form submission likely doesn't work)

### Phase 4: Contact Form Setup
1. Choose a backend for form submissions:
   - **Formspree** (easiest, free tier, no backend needed)
   - **Netlify Forms** (if migrating to Netlify later)
   - **Custom backend** (if you have server)
2. Update `<form>` in index.html with chosen service's endpoint
3. Test form locally or in staging

### Phase 5: GitHub Pages Deployment
1. Initialize GitHub repo (if not done):
   - `git init` (already done)
   - Create repository on GitHub: `https://github.com/[your-username]/portfolio-site`
   - Add remote: `git remote add origin https://github.com/[your-username]/portfolio-site.git`
2. Commit all files: `git add . && git commit -m "Initial portfolio commit"`
3. Push to GitHub: `git push -u origin master`
4. Enable GitHub Pages in repo settings:
   - Settings → Pages → Source: Deploy from branch → Select `master` branch, `/root` folder
5. Wait 1-2 minutes, site available at `https://[your-username].github.io/portfolio-site`
6. Optional: Custom domain setup via DNS settings (not required for initial launch)

### Phase 6: Verification & Polish
1. **Functionality checks**:
   - All nav links navigate correctly (sticky nav works)
   - Project filter buttons toggle correctly (all/map/writing/solution)
   - Contact form submits successfully
2. **Responsive design check**:
   - Test on mobile (breakpoint at 700px)
   - Check desktop at wide widths
3. **SEO basics** (optional enhancement):
   - Add meta descriptions to page
   - Verify favicon set
4. **Performance check**:
   - Lighthouse audit (should be 90+, minimal dependencies)
   - Page load time (should be <1s)

---

## Relevant Files
- index.html — Main portfolio page; extract CSS/JS to separate files, personalize content

---

## Decisions
1. **File organization**: Extract CSS/JS to separate files for maintainability and clarity.
2. **Contact form**: Recommend Formspree for simplicity—no backend setup required.
3. **Hosting**: GitHub Pages (native, free, already configured in repo settings)
4. **Scope**: Focus on portfolio website (About + Projects + Skills + Contact) and GitHub Pages deployment. Not included: blog, CMS, analytics, custom domain.

---

## Further Considerations
1. **Project categories**: The template has 3 types (map, writing, solution)—do you want to keep these or change to match your actual work categories?
2. **Analytics**: Do you want to track visitors? Optional: Add Google Analytics snippet after launch (easy to add later).
3. **Portfolio updates**: Plan to update projects frequently? Manual HTML edits work fine for occasional updates; no need for a database.