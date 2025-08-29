# Category Manager OS Dashboard

A modern, responsive dashboard built with Next.js, Tailwind CSS, and interactive charts for category management and spend analysis.

## 🚀 Features

- **Interactive KPI Cards** - Real-time metrics with hover animations and color-coded changes
- **Responsive Category Grid** - Expandable cards for Regions, Plants, Suppliers, and Materials
- **Live Charts** - Recharts-powered visualizations with simulated real-time updates
- **Detail Views** - Expandable modal views with comprehensive analytics
- **Modern UI/UX** - Clean design with smooth animations using Framer Motion
- **Mobile-First** - Fully responsive design for all device sizes

## 🏗️ Project Structure

```
dashboard-app/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── components/               # Reusable UI components
│   │   │   ├── DetailView/          # Detail view components
│   │   │   │   ├── DetailView.tsx           # Main detail view container
│   │   │   │   ├── DetailViewHeader.tsx     # Header with back button
│   │   │   │   ├── HorizontalBarChart.tsx  # Horizontal bar chart
│   │   │   │   ├── KpiMetricsSection.tsx   # KPI metrics display
│   │   │   │   ├── MarketMixChart.tsx      # Market mix line chart
│   │   │   │   └── index.ts                # Component exports
│   │   │   ├── CategoryCard.tsx            # Individual category card
│   │   │   ├── CategorySection.tsx         # Category grid section
│   │   │   ├── DashboardHeader.tsx         # Main dashboard header
│   │   │   ├── DashboardLayout.tsx         # Layout wrapper
│   │   │   ├── KpiCard.tsx                 # Individual KPI card
│   │   │   ├── KpiSection.tsx              # KPI cards section
│   │   │   ├── Sidebar.tsx                 # Left navigation sidebar
│   │   │   ├── MainHeader.tsx              # Secondary header
│   │   │   ├── ClearDataButton.tsx         # Clear data button
│   │   │   └── ApplicationLogo.tsx         # App logo component
│   │   ├── page.tsx                        # Main dashboard page
│   │   ├── layout.tsx                      # Root layout
│   │   └── globals.css                     # Global styles
│   ├── components/                         # Legacy components (can be removed)
│   ├── data/                               # Data layer
│   │   └── mock.ts                         # Mock data and interfaces
│   ├── hooks/                              # Custom React hooks
│   │   └── useLiveSeries.ts                # Live data simulation hook
│   ├── types/                              # TypeScript type definitions
│   │   └── index.ts                        # Common interfaces
│   └── types.ts                            # Legacy types (can be removed)
├── public/                                 # Static assets
├── package.json                            # Dependencies and scripts
├── tsconfig.json                           # TypeScript configuration
├── tailwind.config.ts                      # Tailwind CSS configuration
└── next.config.ts                          # Next.js configuration
```

## 🎯 Key Components

### Dashboard Structure
- **`page.tsx`** - Main dashboard entry point
- **`DashboardHeader.tsx`** - Top navigation with filters and actions
- **`Sidebar.tsx`** - Left navigation with icons and controls
- **`KpiSection.tsx`** - Horizontal scrollable KPI cards

### Category Management
- **`CategorySection.tsx`** - Responsive grid of category cards
- **`CategoryCard.tsx`** - Individual category with charts and metrics
- **`DetailView/`** - Expandable detail views for each category

### Data & Charts
- **`mock.ts`** - Comprehensive mock data for all categories
- **`useLiveSeries.ts`** - Hook for simulating real-time data updates
- **Chart Components** - Recharts-based visualizations

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **State Management**: React Hooks

## 📊 Data Structure

### KPI Data
```typescript
interface Kpi {
  label: string;
  value: string;
  sub: string;
  type: "total-spend" | "transactions" | "po" | "misc";
  extraText?: string;
}
```

### Category Data
```typescript
interface CategoryBarPoint {
  label: string;
  a: number;  // Consumables
  b: number;  // Non-consumables
}
```

### Live Series Data
```typescript
interface MonthlyPoint {
  month: string;
  value: number;
  estimate: number;
}
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd dashboard-app

# Install dependencies
npm install
# or
yarn install
# or
pnpm install

# Start development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## 🎨 Customization

### Adding New Categories
1. Update `src/data/mock.ts` with new category data
2. Add corresponding chart data in `categoryBarSeriesByCategory`
3. Update KPI metrics in `categoryHeaderKpis`

### Modifying Charts
- Edit chart components in `src/app/components/DetailView/`
- Update chart data structures in `src/data/mock.ts`
- Modify chart styling in individual component files

### Styling Changes
- Global styles: `src/app/globals.css`
- Component-specific styles: Tailwind classes in component files
- Theme customization: `tailwind.config.ts`

## 📱 Responsive Design

The dashboard is built with a mobile-first approach:
- **Mobile**: Single column layout with vertical stacking
- **Tablet**: Two-column grid layout
- **Desktop**: Four-column grid with full sidebar

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

### Code Quality
- ESLint configuration for code quality
- TypeScript for type safety
- Prettier for code formatting (recommended)

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel using their CLI or GitHub integration
```

### Other Platforms
```bash
npm run build
# Deploy the .next folder to your preferred hosting platform
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For questions or issues:
1. Check the existing issues
2. Create a new issue with detailed description
3. Include screenshots for UI-related problems

---

Built with ❤️ using Next.js and Tailwind CSS
