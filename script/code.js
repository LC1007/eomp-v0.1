let productArray = JSON.parse(localStorage.getItem("productArray"))
  ? JSON.parse(localStorage.getItem("productArray"))
  : localStorage.setItem(
      "productArray",
      JSON.stringify([
        {
          id: 1,
          title: "test to see if it gets the first object",
          description: "This is a PS5",
          price: 16000,
          img: "https://i.postimg.cc/TYTsRRWK/Sony-Play-Station-5-Digital-Edition-Console.jpg",
        },
        {
          id: 2,
          title: "PS5",
          description: "This is a PS6",
          price: 16000,
          img: "https://i.postimg.cc/TYTsRRWK/Sony-Play-Station-5-Digital-Edition-Console.jpg",
        },
      ])
    );


  let cardSection = document.querySelector("#card-section");

  try {
    cardSection.innerHTML = "";
    productArray.forEach((content) => {
      cardSection.innerHTML += `
        <div class="card mb-2" id="custom-card">
            <img
                  src="${content.img}"
                  class="card-img-top img-size"
                  alt=""
                />
            <div class="card-body">
                    <h5 class="card-title">${content.title}</h5>
                    <p class="card-text">${content.description}</p>
                    <p class="card-text">R${content.price}</p>
                    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${content.id}">
  View Product
</button>

<!-- Modal -->
<div class="modal fade" id="${content.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body d-flex gap-4">
        <img src="${content.img}" alt="${content.title}">
        <div class="d-flex flex-column gap-4">
           <label class="display-6">Title</label>
           <input type="text" value="${content.title}" disabled style="border: none; background-color: white">
           <label class="display-6">Description</label>
           <textarea id="custom-inputs" cols="30" rows="10" disabled>${content.description}</textarea>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Add to cart</button>
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    `;
    });
  } catch (e) {
    console.log(e);
  }

  console.log(productArray);

  