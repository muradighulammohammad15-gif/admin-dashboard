# Search Data Feature - Documentation

## Overview
A comprehensive search and filter functionality for the Admin Dashboard that allows users to search through inventory data with real-time filtering capabilities.

## Files Created

### 1. `search.html`
The main search page with:
- Search input field
- Category and status filters
- Results table
- Responsive design

### 2. `css/search.css`
Styling for the search page including:
- Search box and button styles
- Filter dropdown styles
- Table styling with hover effects
- Status badges (In Stock, Low Stock, Out of Stock)
- Responsive design for mobile devices
- Loading animations

### 3. `js/search.js`
JavaScript functionality including:
- Sample inventory data (20 products)
- Real-time search functionality
- Filter by category (Electronics, Clothing, Food, Furniture, Books)
- Filter by status (In Stock, Low Stock, Out of Stock)
- Action buttons (View, Edit, Delete)
- Export to CSV functionality
- Sort table functionality

## Features

### 1. **Search Functionality**
- Search by product name, category, or product ID
- Real-time filtering as you type
- Press Enter to search

### 2. **Filter Options**
- **Category Filter**: Filter by product category
  - Electronics
  - Clothing
  - Food
  - Furniture
  - Books
  
- **Status Filter**: Filter by stock status
  - In Stock
  - Low Stock
  - Out of Stock

### 3. **Results Display**
- Clean table layout showing:
  - Product ID
  - Product Name
  - Category
  - Price
  - Quantity
  - Status (with color-coded badges)
  - Action buttons

### 4. **Action Buttons**
- **View**: Display product details
- **Edit**: Edit product information (placeholder)
- **Delete**: Remove product from inventory

### 5. **Clear Filters**
- One-click button to reset all filters and search

## How to Use

### Accessing the Search Page
1. Click the search icon (🔍) in the header of any dashboard page
2. Or navigate directly to `search.html`

### Searching for Products
1. Type your search term in the search box
2. Press Enter or click the Search button
3. Results will update automatically

### Using Filters
1. Select a category from the "All Categories" dropdown
2. Select a status from the "All Status" dropdown
3. Filters work in combination with the search term

### Clearing Search
1. Click the "Clear Filters" button to reset everything
2. Or manually clear the search box and reset dropdowns

## Sample Data

The search feature includes 20 sample products across 5 categories:

- **Electronics**: Laptops, phones, monitors, keyboards, mice, webcams
- **Clothing**: T-shirts, jeans, jackets, shoes
- **Food**: Coffee, tea, chocolate
- **Furniture**: Chairs, desks, bookshelves
- **Books**: Classic literature and popular series

## Customization

### Adding More Products
Edit `js/search.js` and add items to the `inventoryData` array:

```javascript
const inventoryData = [
    { 
        id: 'P021', 
        name: 'New Product', 
        category: 'Electronics', 
        price: 99.99, 
        quantity: 50, 
        status: 'In Stock' 
    },
    // ... more products
];
```

### Adding New Categories
1. Add the category to the dropdown in `search.html`:
```html
<option value="NewCategory">New Category</option>
```

2. Add products with that category to the data array

### Connecting to a Real Database
Replace the `inventoryData` array with an API call:

```javascript
async function loadData() {
    const response = await fetch('/api/inventory');
    const data = await response.json();
    return data;
}
```

## Responsive Design

The search page is fully responsive:
- **Desktop**: Full table view with all columns
- **Tablet**: Adjusted layout with scrollable table
- **Mobile**: Stacked filters and horizontal scroll for table

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

Potential improvements:
1. Advanced filters (price range, date added)
2. Bulk actions (delete multiple items)
3. Export to Excel/PDF
4. Print functionality
5. Save search preferences
6. Search history
7. Autocomplete suggestions
8. Barcode scanner integration

## Integration with Existing Pages

The search icon in the header of both `index.html` and `ghulam.html` now links to the search page:

```html
<i class="fa fa-search" onclick="window.location.href='search.html'"></i>
```

## Troubleshooting

### Search not working
- Check that `js/search.js` is properly loaded
- Open browser console to check for JavaScript errors

### Styles not applying
- Verify `css/search.css` is linked in the HTML
- Clear browser cache

### No results showing
- Check that the `inventoryData` array has items
- Verify filter criteria aren't too restrictive

## Support

For issues or questions, please refer to the main project documentation.

