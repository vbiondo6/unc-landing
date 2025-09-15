# UNC AI Landing Page

A modern, responsive landing page for UNC AI - the virtual wise mentor app that tracks your focus and gives you respect (or disappointment) accordingly.

## Features

✨ **Modern Design**: Clean, professional design with gradient backgrounds and smooth animations
📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
🎯 **Interactive Elements**: Animated respect meter, cycling messages, and hover effects
🚀 **Fast Loading**: Optimized HTML/CSS/JS with no external dependencies
🎨 **Customizable**: Easy to modify colors, content, and styling

## Project Structure

```
unc-landing/
├── index.html      # Main landing page
├── styles.css      # Modern CSS styling with animations
├── script.js       # Interactive JavaScript features
├── unc.png         # unc character logo
└── README.md       # This file
```

## How It Works

### The App Concept
UNC AI is a productivity app featuring a virtual mentor who:
- **Gains respect** when you stay focused on your tasks
- **Loses respect** when you get distracted
- Provides **encouraging messages** during focus sessions
- Gives **gentle nudges** when you need to refocus

### Landing Page Features

1. **Hero Section**: Eye-catching introduction with unc logo and call-to-action buttons
2. **How It Works**: Three feature cards explaining the focus/respect mechanic
3. **Interactive Demo**: Phone mockup showing unc's different states and messages
4. **Download Section**: App store buttons (ready for your app links)
5. **Responsive Design**: Looks great on all devices

### Interactive Elements

- **Animated Respect Meter**: Shows current respect level with smooth animation
- **Cycling Messages**: unc's messages change every 4 seconds
- **Hover Effects**: Feature cards lift and scale on hover
- **Smooth Scrolling**: Navigation links scroll smoothly to sections
- **Keyboard Shortcuts**: Press 'F' for focus mode, 'D' for distracted mode

## Customization

### Colors
The color scheme uses a professional gradient palette:
- Primary: Blue gradient (#667eea to #764ba2)
- Secondary: Pink gradient (#f093fb to #f5576c)
- Text: Dark blue (#2c3e50) on white backgrounds

To change colors, modify the CSS custom properties or gradient definitions.

### Content
Edit the HTML file to update:
- App description and taglines
- Feature descriptions
- Download links (replace `#` with actual app store URLs)
- Footer links and contact information

### Images
Replace `unc.png` with your own unc character image. The design works best with:
- Square or circular images
- High contrast for visibility
- Consistent branding colors

## GitHub Setup

Before deploying to Vercel or other platforms, upload your code to GitHub:

1. Create a new repository on GitHub.com
2. Copy the repository URL (e.g., `https://github.com/yourusername/unc-landing.git`)
3. Run these commands in your terminal:
```bash
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

## Deployment

### Option 1: Vercel (Recommended)
1. Push your code to GitHub (see below)
2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "New Project" and import your GitHub repository
4. Vercel will automatically detect your static site and deploy it
5. Your site will be live at a URL like `your-project.vercel.app`

### Option 2: Other Static Hosting
- **Netlify**: Drag & drop upload or connect to Git repository
- **GitHub Pages**: Enable Pages in your repository settings
- **Firebase Hosting**: Use Firebase CLI to deploy

### Option 3: Traditional Hosting
Upload all files to your web server via FTP or file manager.
Host on a CDN like Cloudflare Pages for global distribution.

## Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Lightweight**: ~50KB total (HTML + CSS + JS)
- **Fast Loading**: No external dependencies or frameworks
- **Optimized**: CSS animations use GPU acceleration
- **Accessible**: Semantic HTML and proper ARIA labels

## Development

To modify the landing page:

1. **HTML**: Edit `index.html` for content and structure
2. **CSS**: Modify `styles.css` for styling and animations
3. **JavaScript**: Update `script.js` for interactivity
4. **Test**: Open `index.html` in your browser to preview changes

## License

This landing page template is free to use and modify for your UNC AI app. Feel free to customize it to match your brand and requirements.

---

**Built with ❤️ for the UNC AI community**
