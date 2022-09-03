

fetch('https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => displayCategory(data.data.news_category))

const displayCategory = (categories) => {
    const categoryContainer = document.getElementById('categoryContainer');
    // console.log(categories);
    
    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.classList.add('col');
        categoryDiv.innerHTML = `
            <div onclick="eachCategoryId('${category.category_id}')" class=" p-2 text-white rounded-3 bg-secondary">${category.category_name}</div>
        `
        categoryContainer.appendChild(categoryDiv);
    });

    categories.forEach(category_id => {
        const categoryId = category_id.category_id;
        // displayNewsId(categoryId);
        
    });
}

const eachCategoryId = category_id =>{
    // console.log(category_id);
    displayNewsId(category_id);
    
}


const displayNewsId = categoryId => {
    const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayNews(data.data))

    const displayNews = (newses) => {
        // console.log(newses);
        const newsArea = document.getElementById('newsarea');

        newsArea.textContent= '';
        newses.forEach(news => {
            const newsDiv = document.createElement('div')
            newsDiv.innerHTML = `
                <div class="card mb-3 w-75">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${news.title}</h5>
                                <p class="card-text" class="card-text" style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis">${news.details}</p> 
                                <div class="card-text d-flex align-items-center mt-3">
                                    <div class="d-flex align-items-center">
                                        <img src="${news.author.img}" style="height: 40px;width: 40px;" class="rounded-circle"></img>
                                        <div class="ms-3">
                                            <h6>${news.author.name}</h4>
                                            <p class = "m-0">${news.author.published_date}</p>
                                        </div>
                                    </div>
                                    <h6 class="ms-5"><i class="fa-solid fa-eye"></i> ${news.total_view}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
            newsArea.appendChild(newsDiv);
        })
    };
}

