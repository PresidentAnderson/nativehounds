# Chez Cockette - Pet Grooming & Products in Rio de Janeiro

A modern full-service pet grooming salon and e-commerce platform for tourists visiting Rio de Janeiro with their pets. Built with Next.js, TypeScript, and Tailwind CSS.

## About

Chez Cockette is a tourist-focused pet grooming business located in Copacabana, Rio de Janeiro. We provide premium grooming services and travel-friendly pet products specifically designed for international visitors exploring Brazil with their furry companions.

## Features

### Grooming Services
- **Service Catalog**: Browse professional grooming, spa, and daycare services
- **Tourist-Friendly**: Multilingual staff (English, Spanish, Portuguese)
- **Flexible Booking**: Same-day appointments and hotel pickup/drop-off
- **Specialized Treatments**: Beach-specific care for Rio's environment

### E-commerce
- **Travel Products**: Curated selection of pet travel accessories
- **Shopping Cart**: Full cart functionality with quantity management
- **Checkout Flow**: Simple checkout process with order confirmation
- **Product Categories**: Food, toys, accessories, health, and bedding

### Additional Features
- **Responsive Design**: Mobile-friendly interface for tourists on-the-go
- **Image Optimization**: Next.js Image component with optimized loading
- **Type Safety**: Full TypeScript support
- **State Management**: React Context for cart functionality
- **Location Information**: Copacabana address, hours, and contact details

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (Pink/Purple theme)
- **Icons**: Lucide React
- **Deployment**: Netlify-ready with optimized configuration

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd nativehounds
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
chezcockette/
├── app/                      # Next.js app directory
│   ├── about/               # About page
│   ├── cart/                # Shopping cart
│   ├── checkout/            # Checkout and success pages
│   ├── contact/             # Contact page with location info
│   ├── products/            # Product listing and detail pages
│   ├── services/            # Grooming services catalog
│   ├── layout.tsx           # Root layout with providers
│   └── page.tsx             # Home page (hero, services, products)
├── components/              # React components
│   ├── layout/             # Header, Footer (rebranded)
│   └── products/           # ProductCard
├── lib/                    # Utilities and data
│   ├── context/           # React Context (CartContext)
│   ├── data/              # Mock product and service data
│   └── utils/             # Helper functions (format, cn)
├── types/                 # TypeScript type definitions
│   └── index.ts           # Product, Service, Booking types
└── public/                # Static assets
```

## Deployment

### Deploy to Netlify

1. **Via Netlify CLI**:
```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod
```

2. **Via GitHub Integration**:
   - Push your code to GitHub
   - Connect your repository to Netlify
   - Netlify will automatically detect the Next.js framework
   - Build settings are configured in `netlify.toml`

3. **Build Settings** (already configured in netlify.toml):
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 20

### Deploy to Vercel (Alternative)

```bash
npm install -g vercel
vercel
```

## Environment Variables

Currently, the app uses mock data and doesn't require environment variables. For a production application, you would add:

```env
NEXT_PUBLIC_API_URL=your-api-url
STRIPE_PUBLIC_KEY=your-stripe-key
DATABASE_URL=your-database-url
```

## Customization

### Adding Services

Edit `lib/data/services.ts` to add or modify grooming services:

```typescript
{
  id: '9',
  name: 'Your Service Name',
  description: 'Service description',
  price: 150, // in Brazilian Reais (R$)
  duration: '2 hours',
  image: 'https://images.unsplash.com/photo-id',
  category: 'grooming', // or 'spa', 'daycare', 'training'
  popular: false,
}
```

### Adding Products

Edit `lib/data/products.ts` to add or modify products:

```typescript
{
  id: '9',
  name: 'Your Product Name',
  description: 'Product description',
  price: 75, // in Brazilian Reais (R$)
  image: 'https://images.unsplash.com/photo-id',
  category: 'accessories', // or 'food', 'toys', 'health', etc.
  stock: 100,
  featured: false,
}
```

### Styling

The project uses Tailwind CSS with a pink/purple theme. Modify:
- `tailwind.config.ts` for theme customization
- `app/globals.css` for global styles
- Color scheme uses pink-600, pink-700, purple-600 - search for `pink` in components to change

### Categories

Service categories: grooming, spa, daycare, training
Product categories: food, toys, accessories, health, training, bedding

## Features to Add

This is a demo site. For production use, consider adding:

- [ ] Real booking system with calendar integration
- [ ] Payment processing (Stripe, Brazilian payment methods)
- [ ] User authentication for tourists (NextAuth.js)
- [ ] Database integration (PostgreSQL, MongoDB)
- [ ] Order management and booking confirmations
- [ ] Email/SMS notifications (Portuguese, English, Spanish)
- [ ] Online appointment scheduling with time slots
- [ ] Customer reviews and ratings
- [ ] Search functionality for services and products
- [ ] Admin dashboard for bookings and inventory
- [ ] Google Maps integration for location
- [ ] WhatsApp integration for instant booking
- [ ] Multi-currency support (USD, EUR, BRL)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for demonstration purposes.

## Support

For issues or questions, please create an issue in the repository.
