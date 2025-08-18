# Category Pages Documentation

## Overview
This project now includes dynamic category pages that display products related to specific categories. The implementation follows the same structure as the existing product pages.

## File Structure

### Main Files
- `src/app/[locale]/(Pages)/products/page.tsx` - Main products page showing all categories
- `src/app/[locale]/(Pages)/products/[category]/page.tsx` - Dynamic category page for specific categories
- `src/components/Layouts/Pcomponents/ProductCard.tsx` - Reusable product card component
- `src/components/Layouts/Pcomponents/CategoryCard.tsx` - Reusable category card component

### CSS Additions
- Added custom CSS classes to `src/app/globals.css` for proper styling

## Available Categories

The system supports the following categories:

1. **Food & Beverages** (`Food&Beverages`)
   - Fresh produce, processed foods, and quality beverages
   - 2,500+ products

2. **Chemicals & Petrochemicals** (`Chemicals&Petrochemicals`)
   - Industrial chemicals and petroleum derivatives
   - 800+ products

3. **Building Materials** (`Building_Materials`)
   - Construction materials and building supplies
   - 1,800+ products

4. **Textiles & Apparel** (`Textiles&Apparel`)
   - Fabrics, clothing, and fashion accessories
   - 3,200+ products

5. **Machinery & Tools** (`Machinery&Tools`)
   - Industrial equipment and professional tools
   - 900+ products

6. **Medical & Health Products** (`Medical&HealthProducts`)
   - Healthcare equipment and medical supplies
   - 600+ products

7. **Home & Kitchen Products** (`Home&KitchenProducts`)
   - Household items and kitchen essentials
   - 1,500+ products

8. **Handicrafts & Art** (`Handicrafts&Art`)
   - Traditional crafts and artistic creations
   - 1,200+ products

## URL Structure

- Main products page: `/products`
- Category pages: `/products/[category]`
  - Example: `/products/Food&Beverages`
  - Example: `/products/Chemicals&Petrochemicals`

## Features

### Main Products Page (`/products`)
- Hero section with title and description
- Grid layout of all available categories
- Each category card shows:
  - Category image
  - Category name
  - Product count
  - Brief description
  - Color-coded category indicator

### Category Pages (`/products/[category]`)
- Dynamic hero section with category-specific image and title
- Category description
- Grid of products related to the category
- Product cards showing:
  - Product image
  - Product title
  - Company name (Iran Exportal)
  - Price range
  - Variant count
- "Show More Products" button

## Components

### ProductCard
- Reusable component for displaying individual products
- Includes hover effects and transitions
- Links to individual product pages
- Responsive design

### CategoryCard
- Reusable component for displaying category information
- Includes hover effects and transitions
- Links to category-specific pages
- Responsive design

## Styling

The pages use Tailwind CSS with custom CSS classes:
- `max-w-container-md`: Container with max-width of 1200px
- `line-clamp-2`: Text truncation for product titles
- `bg-size-200`, `bg-pos-0`, `hover:bg-pos-100`: Background animation effects

## Data Structure

### Category Information
```typescript
{
  name: string;
  description: string;
  image: string;
  count: string;
}
```

### Product Information
```typescript
{
  id: number;
  title: string;
  description: string;
  media: {
    id: number;
    src: string;
    alt: string;
    title: string;
    type: string;
  };
  slug: string;
}
```

## Future Enhancements

1. **API Integration**: Replace mock data with actual API calls
2. **Pagination**: Implement pagination for large product lists
3. **Filtering**: Add filtering options (price, rating, etc.)
4. **Search**: Add search functionality within categories
5. **Sorting**: Add sorting options (price, name, popularity)
6. **Internationalization**: Add proper i18n support for category names and descriptions

## Notes

- Currently uses mock data for demonstration purposes
- Images are from Unsplash for placeholder purposes
- All styling follows the existing design system
- Components are fully responsive and accessible
