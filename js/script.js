function loadPhone() {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  /* Clear Search Keyword */
  searchField.value = '';
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText} `;
  fetch(url)
    .then(res => res.json())
    .then(result => displayPhone(result.data))
}

const displayPhone = brands => {
  console.log(brands);
  const searchResult = document.getElementById('search-result');
  /* Cleare Search Result */
  // searchResult.textContent = '';

  brands.forEach(element => {
    console.log(element);
    const columnContainer = document.createElement('div');
    columnContainer.classList.add('col-md-4');
    columnContainer.innerHTML = `
      <div class="card h-100">
        <img src="${element.image}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${element.phone_name}</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural
            lead-in to additional content. This content is a little bit
            longer.
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    `;
    searchResult.appendChild(columnContainer);
  });


}
