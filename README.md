# Modern Developer Portfolio

A beautiful, responsive, and animated developer portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern and clean design
- 🌙 Dark mode support
- 📱 Fully responsive
- ✨ Smooth animations with Framer Motion
- 🔍 SEO optimized
- 📝 TypeScript for type safety
- 🎯 Smooth scrolling
- 📬 Contact form with EmailJS integration
- 🖼️ Image optimization with next/image
- 🎨 Custom animations and transitions

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- EmailJS
- React Icons
- React Scroll

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your EmailJS credentials:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### 1. Update Personal Information

Edit `src/app/lib/constants.ts` to update your personal information:

```typescript
export const siteConfig = {
  name: 'Your Name',
  title: 'Your Title',
  description: 'Your description',
  email: 'your.email@example.com',
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
  },
};
```

### 2. Add Projects

Update the projects array in `src/app/lib/constants.ts`:

```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Name',
    description: 'Project description',
    image: '/projects/project1.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://project-url.com',
    githubUrl: 'https://github.com/username/project',
  },
  // Add more projects...
];
```

### 3. Update Skills

Modify the skills array in `src/app/lib/constants.ts`:

```typescript
export const skills: Skill[] = [
  { name: 'React', category: 'frontend', level: 90 },
  { name: 'Next.js', category: 'frontend', level: 85 },
  // Add more skills...
];
```

### 4. Customize Styling

- Colors: Update the Tailwind configuration in `tailwind.config.js`
- Animations: Modify animation variants in `src/app/lib/animations.ts`
- Layout: Adjust component styles in their respective files

### 5. Add Images

1. Place your images in the `public` directory:
   - Profile picture: `public/profile.jpg`
   - Project images: `public/projects/`
   - OG image: `public/og-image.jpg`

2. Update image paths in the components accordingly.

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to your preferred hosting platform (Vercel, Netlify, etc.)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 