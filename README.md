# SuperFin Electric Switches Website

A modern, professional, and responsive website for SuperFin Electric Switches - a company that manufactures and sells premium electric switches.

## Features

- **Modern Design**: Clean, minimal, and elegant UI with beige gradient theme
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Components**: Built with Framer Motion for smooth animations
- **Component Library**: Uses shadcn/ui components for consistent design
- **Multiple Pages**: Complete website with all essential pages

## Pages

- **Homepage** (`/`) - Hero section, product highlights, and call-to-action
- **Features** (`/features`) - Grid of main features and capabilities
- **Products** (`/products`) - Product series with switching functionality
- **Testimonials** (`/testimonials`) - Customer reviews and testimonials
- **About Us** (`/about`) - Company history and information
- **Contact Us** (`/contact`) - Contact form and company details
- **Catalogues** (`/catalogues`) - Downloadable product brochures
- **FAQ** (`/faq`) - Frequently asked questions

## Technology Stack

- **React 18** - Frontend framework
- **React Router** - Client-side routing
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **shadcn/ui** - Component library
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd superfinNew
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Navbar.jsx      # Navigation component
│   ├── Footer.jsx      # Footer component
│   └── WhatsAppFloat.jsx # Floating WhatsApp button
├── pages/              # Page components
│   ├── HomePage.jsx
│   ├── FeaturesPage.jsx
│   ├── ProductsPage.jsx
│   ├── TestimonialsPage.jsx
│   ├── AboutPage.jsx
│   ├── ContactPage.jsx
│   ├── CataloguesPage.jsx
│   └── FAQPage.jsx
├── data/               # Static data and content
│   └── products.js
├── lib/                # Utility functions
│   └── utils.js
├── App.js              # Main app component
├── index.js            # Entry point
└── index.css           # Global styles
```

## Design System

### Colors
- **Primary**: Amber/Orange gradient (`#f59e0b` to `#f97316`)
- **Background**: Beige gradient (`#faf9f7` to `#e8e4dd`)
- **Text**: Gray scale (`#111827` to `#6b7280`)

### Components
- **Cards**: Multiple styles (gradient, minimal, glass, bordered, shadow)
- **Buttons**: Various variants (default, gradient, outline, ghost)
- **Animations**: Smooth hover effects and page transitions

## Features Implemented

### Navigation
- Sticky navbar with dropdown menus
- Mobile-responsive hamburger menu
- Smooth scrolling and active states

### Product Display
- Series switching functionality
- Product cards with different styles
- Feature highlights and specifications
- Brochure download buttons

### Interactive Elements
- WhatsApp floating button
- Contact forms with validation
- FAQ accordion
- Testimonial carousel
- Search functionality

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Flexible grid layouts
- Touch-friendly interactions

## Customization

### Adding New Products
Edit `src/data/products.js` to add new product series or individual products.

### Styling
Modify `src/index.css` for global styles or individual component files for specific styling.

### Content
Update content in the respective page components or data files.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary and confidential.

## Contact

For questions or support, please contact:
- Email: simonienterprises@yahoo.com
- Phone: +91 76667 93388
- WhatsApp: +91 76667 93388
