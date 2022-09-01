const loadPhones = () => {
    const url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhone(data.data))
}

const displayPhone = phones => {
    console.log(phones);
    const phoneContainer = document.getElementById('phones-container');
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card p-4">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Brand Name: ${phone.brand}</h5>
          <h6 class="card-title">Modle no: ${phone.phone_name}</h6>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
        `;
        phoneContainer.appendChild(phoneDiv);
    })
}

loadPhones();