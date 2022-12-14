const url = `https://openapi.programming-hero.com/api/news/categories`
try{
    fetch(url)
    .then(res => res.json())
    .then(data => displayCategory(data.data.news_category))
}
catch(error){
    console.log(error);
}

const displayCategory = (categories) => {
    const categoryContainer = document.getElementById('categoryContainer');
    // console.log(categories);
    
    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        // loadSpinner(true);
        categoryDiv.classList.add('col');
        categoryDiv.innerHTML = `
            <div onclick="eachCategoryId('${category.category_id}')" class=" p-2 text-white rounded-3 bg-secondary">${category.category_name}</div>
        `
        categoryContainer.appendChild(categoryDiv);
    });
    
    loadSpinner(true);
    const categoryId = categories[7].category_id
    displayNewsId(categoryId);
}

const eachCategoryId = category_id =>{
    // console.log(category_id);
    displayNewsId(category_id);
}

const displayNewsId = categoryId => {
    const url = `https://openapi.programming-hero.com/api/news/category/${categoryId}`
    try {
        fetch(url)
        .then(res => res.json())
        .then(data => displayNews(data.data))
    } catch (error) {
        console.log(error);
    }

    const displayNews = (newses) => {
        // console.log(newses);
        

        const arrayLength = newses.length;
        // console.log(arrayLength);
        const newsLength = document.getElementById('newsLength');
        newsLength.innerText = arrayLength;


        const newsArea = document.getElementById('newsarea');

        newsArea.textContent= '';
        newses.forEach(news => {
            // console.log(news);
            const newsDiv = document.createElement('div');
            loadSpinner(true);
            newsDiv.innerHTML = `
                <div class="card mb-3 w-75">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${news.title}</h5>
                                <p class="card-text" class="card-text">${news.details.slice(0,200)}... </p> 
                                <div class="card-text d-flex align-items-center mt-3">
                                    <div class="d-flex align-items-center">
                                        <img src="${news.author.img}" style="height: 40px;width: 40px;" class="rounded-circle"></img>
                                        <div class="ms-3">
                                            <h6>${news.author.name ? news.author.name : 'No Author Name Found'}</h4>
                                            <p class = "m-0">${news.author.published_date}</p>
                                        </div>
                                    </div>
                                    <h6 class="ms-lg-5 ms-md-5 ms-sm-2"><i class="fa-solid fa-eye"></i> ${news.total_view? news.total_view : 'No one View Yet'}</h6>
                                    <button class="btn ms-lg-5 ms-md-5 ms-sm-2  px-lg-5" onclick="modalDetails('${news.title}')"  data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
            // loadSpinner(true);
            newsArea.appendChild(newsDiv);
        })
        loadSpinner(false);
    };
}

const loadSpinner = isSpinning =>{
    const spinner = document.getElementById('spinner');
    if(isSpinning){
        spinner.classList.remove('d-none');
    }
    else{
        spinner.classList.add('d-none');
    }
}

const modalDetails = (title) =>{
    // console.log(title);
    const modalTitle = document.getElementById('modalTitle')
    modalTitle.innerText = title;
}
