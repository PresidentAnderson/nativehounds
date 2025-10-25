# Native Hounds - E-commerce Store

A modern e-commerce platform for native hound breed products, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Product Catalog**: Browse products by category with filtering
- **Shopping Cart**: Add products to cart with quantity management
- **Checkout Flow**: Simple checkout process with order confirmation
- **Responsive Design**: Mobile-friendly interface
- **Image Optimization**: Next.js Image component with Unsplash placeholders
- **Type Safety**: Full TypeScript support
- **State Management**: React Context for cart functionality

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Netlify

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
nativehounds/
├── app/                      # Next.js app directory
│   ├── cart/                # Cart page
│   ├── checkout/            # Checkout and success pages
│   ├── products/            # Product listing and detail pages
│   ├── layout.tsx           # Root layout with providers
│   └── page.tsx             # Home page
├── components/              # React components
│   ├── layout/             # Header, Footer
│   └── products/           # ProductCard
├── lib/                    # Utilities and data
│   ├── context/           # React Context (CartContext)
│   ├── data/              # Mock product data
│   └── utils/             # Helper functions
├── types/                 # TypeScript type definitions
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

### Adding Products

Edit `lib/data/products.ts` to add or modify products:

```typescript
{
  id: '7',
  name: 'Your Product Name',
  description: 'Product description',
  price: 29.99,
  image: 'https://images.unsplash.com/photo-id',
  category: 'food', // or 'toys', 'accessories', etc.
  stock: 100,
  featured: false,
}
```

### Styling

The project uses Tailwind CSS. Modify:
- `tailwind.config.ts` for theme customization
- `app/globals.css` for global styles
- Color scheme uses amber/brown tones - search for `amber` in components to change

### Categories

Product categories are defined in `types/index.ts`:
- food
- toys
- accessories
- health
- training
- bedding

## Features to Add

This is a demo e-commerce store. For production use, consider adding:

- [ ] Real payment processing (Stripe, PayPal)
- [ ] User authentication (NextAuth.js)
- [ ] Database integration (PostgreSQL, MongoDB)
- [ ] Order management system
- [ ] Email notifications
- [ ] Product reviews and ratings
- [ ] Search functionality
- [ ] Wishlist feature
- [ ] Admin dashboard
- [ ] Analytics integration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for demonstration purposes.

## Support

For issues or questions, please create an issue in the repository.
