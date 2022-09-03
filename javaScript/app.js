console.log('Hi!');

fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayCategory(data.data.news_category, data.data.news_category))

const displayCategory = (categories, categories_id) => {
    const categoryContainer = document.getElementById('categoryContainer');
    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('col');
        categoryDiv.innerHTML = `
            <div>
                <div onclick="categoryId(category_id)" class="p-2 text-white rounded-3 bg-secondary">${category.category_name}</div>
            </div>
        `
        categoryContainer.appendChild(categoryDiv);
    });

    categories_id.forEach(category_id => {
        const categoryId = category_id.category_id;
        console.log(categoryId);
    });


}
const displayNews = categoryId =>{
    console.log(categoryId);
}