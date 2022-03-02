/* Load Phone From API */
function loadPhone() {
  const searchField = document.getElementById('search-field');
  document.getElementById('avatar').classList.add('d-none');

  const searchText = searchField.value;
  if (searchText === '') {
    return alert('Invalid Input');
  }
  /* Clear Search Keyword */
  searchField.value = '';

  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText} `;
  fetch(url)
    .then(res => res.json())
    .then(result => displayPhone(result.data))
}

const displayPhone = brands => {

  const searchResult = document.getElementById('search-result');
  /* Cleare Search Result */
  searchResult.textContent = '';
  /* LOOP */
  brands.forEach(element => {
    const columnContainer = document.createElement('div');
    columnContainer.classList.add('col-md-4');
    columnContainer.innerHTML = `
      <div class="card h-100">
        <img src="${element.image}" class="card-img-top img-fluid w-50 mx-auto pt-3" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-center">${element.phone_name}</h5>
          <p class="card-text text-center">${element.brand}</p>          
        </div>
        <!-- Card Button -->
        <div class="card-footer d-grid">
          <button onclick="loadMobileSpecifications('${element.slug}')" type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            View Details
          </button>
        </div>
      </div>
    `;
    searchResult.appendChild(columnContainer);
  });
}


/* Load Mobile Details From API  */
const loadMobileSpecifications = (id) => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`
  console.log(url);
  fetch(url)
    .then(res => res.json())
    .then(result => displayMobileSpecifications(result.data))
}

const displayMobileSpecifications = (specifications) => {
  console.log(specifications);
  const mobileSpecification = document.getElementById('mobile-specification');
  mobileSpecification.textContent = '';
  const mobileSpecificationContainer = document.createElement('div')
  mobileSpecificationContainer.classList.add('modal-content');
  mobileSpecificationContainer.innerHTML = `
    <div class="modal-header">
      <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body row">
      <div class="col-5">
        <img src="${specifications.image}" class="card-img-top img-fluid w-100 mx-auto pt-3" alt="..." />
      </div>
      <div class="col-7">
        <h5 class="card-title">${specifications.name}</h5>
        <p class="card-title">${specifications.mainFeatures.storage}</p>
        <hr>
        <span><strong>Sensors:</strong> ${specifications.mainFeatures.sensors.join(', ')}</span> <br><br>
        <span><strong>Chipset:</strong> ${specifications.mainFeatures.chipSet}</span><br><br>
        <span><strong>Display Size:</strong> ${specifications.mainFeatures.displaySize}</span><br><br>
        <span><strong>ROM/RAM Size:</strong> ${specifications.mainFeatures.memory}</span><br><br>
        <span><strong>Release Date:</strong> ${specifications.releaseDate}</span><br><br>
        
        
      </div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
    </div>
  `;
  mobileSpecification.appendChild(mobileSpecificationContainer)

}