# Modern Minimalist Blog Site

A modern, minimalist blog site built with Next.js for data science and ML content sharing. Features a clean design with dark charcoal and bright yellow color scheme, mobile-first responsive layout, and markdown-based content management.

## 🎨 Design Features

- **Color Scheme**: Dark Charcoal (`#101820`) + Bright Yellow (`#FEE715`)
- **Layout**: Single column, Medium-style layout
- **Typography**: 
  - Landing/About pages: Fancy tech fonts (Orbitron, Exo 2, Rajdhani)
  - Blog content: Professional fonts (Inter, Source Sans Pro)
- **Responsive**: Mobile-first design
- **Minimalist**: Clean, focused content presentation

## 🏗️ Architecture

### Two-Repository System

#### Repository 1: Public Blog Code (`blog-site`)
Contains the Next.js application, components, and styling.

```
blog-site/
├── components/          # React components
├── pages/              # Next.js pages
│   ├── index.js       # Landing page (fancy fonts)
│   ├── about.js        # About page (fancy fonts)
│   └── blog/
│       └── [slug].js  # Blog posts (professional fonts)
├── styles/             # CSS files
├── public/            # Static assets
│   └── images/        # Profile images, blog covers
├── lib/               # Utility functions
└── package.json
```

#### Repository 2: Private Content (`blog-content`)
Contains markdown files and content assets (PRIVATE REPOSITORY).

```
blog-content/
├── posts/             # Markdown blog posts
│   ├── 2024-01-15-my-ml-project.md
│   ├── 2024-01-20-python-tutorial.md
│   └── 2024-01-25-data-analysis.md
└── assets/
    └── images/        # Blog post images
```

## 🚀 Features

- ✅ **Markdown-based content** - Write posts in Markdown
- ✅ **No database required** - File-based content management
- ✅ **Search functionality** - Find posts easily
- ✅ **Mobile-first responsive** - Works on all devices
- ✅ **SEO optimized** - Built-in Next.js SEO features
- ✅ **Fast loading** - Static site generation
- ✅ **GitHub integration** - Link to repositories
- ✅ **View counter** - Simple analytics
- ✅ **Tag system** - Categorize posts

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: CSS Modules + Tailwind CSS
- **Content**: Markdown with frontmatter
- **Deployment**: Vercel
- **Version Control**: GitHub
- **Fonts**: Google Fonts (Orbitron, Inter, Source Sans Pro)

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js 18+ installed
- GitHub account
- Vercel account (free tier)
- Git installed

## 🚀 Setup Instructions

### Step 1: Create Repositories

1. **Create Public Repository** (`blog-site`):
   ```bash
   git clone https://github.com/yourusername/blog-site.git
   cd blog-site
   ```

2. **Create Private Repository** (`blog-content`):
   - Create a new private repository on GitHub
   - Name it `blog-content`
   - Keep it private for content security

### Step 2: Install Dependencies

```bash
npm install next react react-dom
npm install @next/mdx gray-matter remark remark-html
npm install date-fns
```

### Step 3: Configure Environment

Create `.env.local`:
```env
GITHUB_TOKEN=your_github_token
CONTENT_REPO=yourusername/blog-content
```

### Step 4: Set Up GitHub Token

1. Go to GitHub Settings > Developer settings > Personal access tokens
2. Generate new token with `repo` access
3. Add token to `.env.local`

### Step 5: Content Structure

#### Blog Post Format (`blog-content/posts/example.md`):
```markdown
---
title: "My ML Project"
date: "2024-01-15"
tags: ["machine-learning", "python", "tutorial"]
description: "A comprehensive guide to building ML models"
github: "https://github.com/yourusername/ml-project"
featured: true
---

# My ML Project

Your blog post content here...

## Code Example

```python
import pandas as pd
import numpy as np
```

## Conclusion

Thanks for reading!
```

### Step 6: Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

## 📝 Content Management

### Adding New Posts

1. Create new `.md` file in `blog-content/posts/`
2. Add frontmatter with metadata
3. Write content in Markdown
4. Push to private repository
5. Blog automatically rebuilds

### Post Metadata

```yaml
---
title: "Post Title"
date: "YYYY-MM-DD"
tags: ["tag1", "tag2"]
description: "Post description"
github: "https://github.com/username/repo"
featured: true
---
```

## 🎨 Customization

### Colors
- Primary: `#101820` (Dark Charcoal)
- Accent: `#FEE715` (Bright Yellow)
- Background: `#FFFFFF` (White)
- Text: `#333333` (Dark Gray)

### Fonts
- **Landing/About**: Orbitron, Exo 2, Rajdhani
- **Blog Content**: Inter, Source Sans Pro
- **Code**: JetBrains Mono, Fira Code

### Layout
- Single column design
- Medium-style typography
- Mobile-first responsive
- Clean, minimalist aesthetic

## 🔧 Development

### Local Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Production
```bash
npm start
```

## 📱 Mobile Responsiveness

The blog is designed mobile-first with:
- Responsive typography
- Touch-friendly navigation
- Optimized images
- Fast loading on mobile networks

## 🔍 Search Functionality

Built-in search features:
- Full-text search across posts
- Tag-based filtering
- Date-based sorting
- Real-time search results

## 🚀 Deployment

### Vercel Deployment
1. Connect GitHub repository
2. Configure build settings
3. Set environment variables
4. Deploy automatically

### Custom Domain
1. Add domain in Vercel dashboard
2. Configure DNS settings
3. SSL certificate auto-generated

## 📊 Analytics

Simple built-in analytics:
- Post view counts
- Popular posts
- Search queries
- No external tracking required

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Submit pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

For questions or issues:
1. Check the documentation
2. Search existing issues
3. Create new issue with details

## 🔄 Updates

To update the blog:
1. Modify content in private repository
2. Push changes
3. Blog automatically rebuilds
4. Changes go live immediately

---

**Built with ❤️ for the data science community**
