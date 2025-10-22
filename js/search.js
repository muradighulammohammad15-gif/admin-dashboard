// Sample Data - In a real application, this would come from a database/API
const inventoryData = [
    { id: 'P001', name: 'Laptop Dell XPS 15', category: 'Electronics', price: 1299.99, quantity: 45, status: 'In Stock' },
    { id: 'P002', name: 'iPhone 14 Pro', category: 'Electronics', price: 999.99, quantity: 8, status: 'Low Stock' },
    { id: 'P003', name: 'Samsung Galaxy S23', category: 'Electronics', price: 899.99, quantity: 0, status: 'Out of Stock' },
    { id: 'P004', name: 'Wireless Mouse Logitech', category: 'Electronics', price: 29.99, quantity: 150, status: 'In Stock' },
    { id: 'P005', name: 'Mechanical Keyboard', category: 'Electronics', price: 89.99, quantity: 67, status: 'In Stock' },
    { id: 'P006', name: 'T-Shirt Cotton Blue', category: 'Clothing', price: 19.99, quantity: 200, status: 'In Stock' },
    { id: 'P007', name: 'Jeans Levi\'s 501', category: 'Clothing', price: 79.99, quantity: 5, status: 'Low Stock' },
    { id: 'P008', name: 'Winter Jacket North Face', category: 'Clothing', price: 199.99, quantity: 30, status: 'In Stock' },
    { id: 'P009', name: 'Running Shoes Nike', category: 'Clothing', price: 129.99, quantity: 0, status: 'Out of Stock' },
    { id: 'P010', name: 'Organic Coffee Beans', category: 'Food', price: 15.99, quantity: 100, status: 'In Stock' },
    { id: 'P011', name: 'Green Tea Premium', category: 'Food', price: 12.99, quantity: 75, status: 'In Stock' },
    { id: 'P012', name: 'Chocolate Dark 70%', category: 'Food', price: 4.99, quantity: 9, status: 'Low Stock' },
    { id: 'P013', name: 'Office Chair Ergonomic', category: 'Furniture', price: 299.99, quantity: 25, status: 'In Stock' },
    { id: 'P014', name: 'Standing Desk Adjustable', category: 'Furniture', price: 449.99, quantity: 12, status: 'In Stock' },
    { id: 'P015', name: 'Bookshelf Oak Wood', category: 'Furniture', price: 179.99, quantity: 0, status: 'Out of Stock' },
    { id: 'P016', name: 'The Great Gatsby', category: 'Books', price: 14.99, quantity: 50, status: 'In Stock' },
    { id: 'P017', name: '1984 by George Orwell', category: 'Books', price: 13.99, quantity: 7, status: 'Low Stock' },
    { id: 'P018', name: 'Harry Potter Collection', category: 'Books', price: 89.99, quantity: 35, status: 'In Stock' },
    { id: 'P019', name: 'Monitor 27" 4K LG', category: 'Electronics', price: 399.99, quantity: 22, status: 'In Stock' },
    { id: 'P020', name: 'Webcam HD Logitech', category: 'Electronics', price: 69.99, quantity: 3, status: 'Low Stock' }
];

// Store filtered results
let filteredData = [...inventoryData];

// Initialize on page load
window.addEventListener('DOMContentLoaded', function() {
    displayResults(inventoryData);
    
    // Add event listener for Enter key on search input
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchData();
        }
    });
    
    // Add event listeners for filters
    document.getElementById('categoryFilter').addEventListener('change', searchData);
    document.getElementById('statusFilter').addEventListener('change', searchData);
});

// Search function
function searchData() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;
    const statusFilter = document.getElementById('statusFilter').value;
    
    // Filter data based on search term and filters
    filteredData = inventoryData.filter(item => {
        const matchesSearch = 
            item.name.toLowerCase().includes(searchTerm) ||
            item.category.toLowerCase().includes(searchTerm) ||
            item.id.toLowerCase().includes(searchTerm);
        
        const matchesCategory = !categoryFilter || item.category === categoryFilter;
        const matchesStatus = !statusFilter || item.status === statusFilter;
        
        return matchesSearch && matchesCategory && matchesStatus;
    });
    
    displayResults(filteredData);
}

// Display results in table
function displayResults(data) {
    const tableBody = document.getElementById('tableBody');
    const noResults = document.getElementById('noResults');
    const resultsTable = document.getElementById('resultsTable');
    const countSpan = document.getElementById('count');
    
    // Update count
    countSpan.textContent = data.length;
    
    // Clear existing results
    tableBody.innerHTML = '';
    
    if (data.length === 0) {
        resultsTable.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    resultsTable.style.display = 'table';
    noResults.style.display = 'none';
    
    // Populate table with results
    data.forEach(item => {
        const row = document.createElement('tr');
        
        // Determine status class
        let statusClass = 'status-in-stock';
        if (item.status === 'Low Stock') {
            statusClass = 'status-low-stock';
        } else if (item.status === 'Out of Stock') {
            statusClass = 'status-out-of-stock';
        }
        
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td><span class="status-badge ${statusClass}">${item.status}</span></td>
            <td>
                <button class="action-btn view-btn" onclick="viewItem('${item.id}')">
                    <i class="fa fa-eye"></i> View
                </button>
                <button class="action-btn edit-btn" onclick="editItem('${item.id}')">
                    <i class="fa fa-edit"></i> Edit
                </button>
                <button class="action-btn delete-btn" onclick="deleteItem('${item.id}')">
                    <i class="fa fa-trash"></i> Delete
                </button>
            </td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Clear all filters
function clearFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('categoryFilter').value = '';
    document.getElementById('statusFilter').value = '';
    
    filteredData = [...inventoryData];
    displayResults(inventoryData);
}

// Action functions
function viewItem(id) {
    const item = inventoryData.find(i => i.id === id);
    if (item) {
        alert(`Product Details:\n\nID: ${item.id}\nName: ${item.name}\nCategory: ${item.category}\nPrice: $${item.price}\nQuantity: ${item.quantity}\nStatus: ${item.status}`);
    }
}

function editItem(id) {
    const item = inventoryData.find(i => i.id === id);
    if (item) {
        alert(`Edit functionality for ${item.name} would be implemented here.\n\nIn a real application, this would open an edit form.`);
    }
}

function deleteItem(id) {
    const item = inventoryData.find(i => i.id === id);
    if (item) {
        if (confirm(`Are you sure you want to delete ${item.name}?`)) {
            const index = inventoryData.findIndex(i => i.id === id);
            if (index > -1) {
                inventoryData.splice(index, 1);
                searchData(); // Refresh the display
                alert('Item deleted successfully!');
            }
        }
    }
}

// Sidebar functions (if not already defined in other scripts)
function openSidebar() {
    document.getElementById('sidebar').classList.add('sidebar-responsive');
}

function closeSidebar() {
    document.getElementById('sidebar').classList.remove('sidebar-responsive');
}

// Export data function (bonus feature)
function exportToCSV() {
    let csv = 'ID,Product Name,Category,Price,Quantity,Status\n';
    
    filteredData.forEach(item => {
        csv += `${item.id},"${item.name}",${item.category},${item.price},${item.quantity},${item.status}\n`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'inventory_data.csv';
    a.click();
    window.URL.revokeObjectURL(url);
}

// Sort table function (bonus feature)
function sortTable(column) {
    const sortOrder = filteredData.sortOrder === 'asc' ? 'desc' : 'asc';
    filteredData.sortOrder = sortOrder;
    
    filteredData.sort((a, b) => {
        let aVal = a[column];
        let bVal = b[column];
        
        if (typeof aVal === 'string') {
            aVal = aVal.toLowerCase();
            bVal = bVal.toLowerCase();
        }
        
        if (sortOrder === 'asc') {
            return aVal > bVal ? 1 : -1;
        } else {
            return aVal < bVal ? 1 : -1;
        }
    });
    
    displayResults(filteredData);
}

