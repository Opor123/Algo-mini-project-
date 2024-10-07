// Define an array of grid item data
const gridItems = [
    {
        image: 'https://example.com/image1.webp',
        text: 'CINNAMONROLL'
    },
    {
        image: 'https://example.com/image2.avif',
        text: 'PUMPKIN CUPCAKE'
    },
    {
        image: 'https://example.com/image3.jpg',
        text: 'MANGO STICKY RICE'
    },
    {
        image: 'https://example.com/image4.jpg',
        text: 'APPLE'
    },
    {
        image: 'https://example.com/image5.webp',
        text: 'MICROSOFT'
    },
    {
        image: 'https://example.com/image6.avif',
        text: 'NVIDIA'
    }
];

// Get the masonry grid container
const masonryGrid = document.querySelector('.masonry-grid');

// Function to create a grid item
function createGridItem(item) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    const image = document.createElement('img');
    image.src = item.image;
    image.alt = item.text;
    const text = document.createElement('p');
    text.textContent = item.text;
    gridItem.appendChild(image);
    gridItem.appendChild(text);
    return gridItem;
}

// Append grid items to the masonry grid container
gridItems.forEach((item) => {
    const gridItem = createGridItem(item);
    masonryGrid.appendChild(gridItem);
});