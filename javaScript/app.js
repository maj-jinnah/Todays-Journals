console.log('Hi!');
fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayCategory(data.data.news_category))

const displayCategory = categories => {
    const categoryContainer = document.getElementById('categoryContainer');
    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('col');
        categoryDiv.innerHTML = `
            <div>
                <div class="p-2 text-white rounded-3 bg-secondary">${category.category_name}</div>
            </div>
        `
        categoryContainer.appendChild(categoryDiv);
    });
}
