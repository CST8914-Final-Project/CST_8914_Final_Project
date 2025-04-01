# Empower Ability Labs – Accessibility-First Website (HTML/CSS/JS Only)

Welcome to the group project for Empower Ability Labs. This project focuses on building a fully accessible, interactive website using **only HTML, CSS, and Vanilla JavaScript**. No external libraries or frameworks allowed.

## 🛠 Project Overview

We are creating an interactive and inclusive website with the following sections:
- **Home**
- **Services**
- **Schedule a Call**

The site will feature:
- Conditional rendering of pages
- Reusable HTML components (e.g., input, button, switch)
- Modal/lightbox interactions
- An accessibility-first approach

## 👥 Team Roles

- 6 team members
- 2 members focused on Accessibility (A11y)
- Others focused on structure, design, component logic, and conditional rendering

---

## 📁 File Structure (Simplified)

\`\`\`
project-root/
├── index.html
├── assets/
│   ├── styles/          # Global CSS files
│   ├── scripts/         # All JavaScript files
│   └── images/
├── components/          # Reusable HTML components
├── pages/               # Home, Services, Schedule a Call
├── README.md
└── CONTRIBUTING.md
\`\`\`

---

## 🧑‍💻 How to Contribute

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/your-group-repo/project-name.git
cd project-name
\`\`\`

### 2. Create a Branch for Your Task

Use a meaningful name related to your feature:

\`\`\`bash
git checkout -b feat/modal-component
\`\`\`

Example branch names:
- \`feat/header-component\`
- \`fix/modal-close-issue\`
- \`style/home-section\`

### 3. Work on Your Task

- Stick to vanilla HTML/CSS/JS
- Use existing components where possible
- Follow accessibility best practices

### 4. Pull from \`main\` Before Pushing

This ensures your branch has the latest code from the main branch.

\`\`\`bash
git pull origin main
\`\`\`

Resolve any merge conflicts that may appear.

### 5. Stage, Commit, and Push Your Work

\`\`\`bash
git add .
git commit -m "feat: add modal open and close logic"
git push origin feat/modal-component
\`\`\`

Use clear and consistent commit messages:
- \`feat:\` for new features
- \`fix:\` for bug fixes
- \`style:\` for styling only (no logic change)
- \`refactor:\` for code restructuring

### 6. Create a Pull Request (PR)

- Go to GitHub
- Open a PR from your branch to \`main\`
- Add a clear title and description
- Tag team members for review

### 7. Review and Merge

After team review:
- One person merges to \`main\`
- Delete the feature branch after merging

---

## ✅ Best Practices

- Pull before you push!
- Test your feature before pushing
- Write semantic HTML and accessible markup
- Reuse components – don’t duplicate code
- Keep CSS modular and consistent
- Keep JavaScript functions scoped and organized

---

## 🧪 Accessibility

- Use semantic elements (\`<main>\`, \`<nav>\`, \`<section>\`, etc.)
- Use proper ARIA roles where necessary
- Ensure keyboard accessibility (tab/enter/escape for interaction)
- Maintain color contrast
- Test with screen readers

Accessibility leads will be testing and helping improve this regularly.

---

Let’s build something awesome and inclusive 💪
