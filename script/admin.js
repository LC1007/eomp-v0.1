let table = document.querySelector("#table-body");
let productArray = JSON.parse(localStorage.getItem("productArray"));
// Add Button
let addBtn = document.querySelector("#addBtn");

// Display the data

function displayData() {
  try {
    table.innerHTML = "";
    productArray.forEach((content) => {
      table.innerHTML += `
             <tr>
                <td>${content.id}</td>
                <td>${content.title}</td>
                <td>${content.description}</td>
                <td>R${content.price}</td>
                <td><img src="${content.img}" alt="" style="width: 10rem" loading="lazy">
                <td>
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateProducts${content.id}">
                      Edit
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="updateProducts${content.id}" tabindex="-1" aria-labelledby="updateProductsLabel${content.id}" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1 class="modal-title fs-5" id="updateProductsLabel${content.id}">Edit Product</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <form class="form">
                      <div class="container">
                        <div class="mb-3">
                            <label for="title-input-edit" class="form-label">Title</label>
                            <input type="text" class="form-control" name="title-input-edit" id="title-input-edit" value='${
                              content.title
                            }'>
                        </div>
                        <div class="mb-3">
                            <label for="description-input-edit" class="form-label">Description</label>
                            <textarea class="form-control" name="description-input-edit" id="description-input-edit" rows="3">${
                              content.description
                            }</textarea>
                        </div>
                        <div class="mb-3">
                            <label for="price-input-edit" class="form-label">Price</label>
                            <input type="number" class="form-control" name="price-input-edit" id="price-input-edit" value='${
                              content.price
                            }'>
                        </div>
                        <div class="mb-3">
                            <label for="img-input-edit" class="form-label">Image Link</label>
                            <input type="url" class="form-control" name="img-input-edit" id="img-input-edit" value='${
                              content.img
                            }'>
                        </div>
                      </div>
                    </form>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onclick='new EditItem(${JSON.stringify(content)})'>Save changes</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button class="btn btn-primary">Delete</button>
                </td>
              </tr>
            `;
    });
  } catch (e) {
    alert(e);
  }
}

displayData();

// Get the data and place it in the products array

addBtn.addEventListener("click", () => {
  try {
    let title = document.querySelector("#title-input").value;
    let description = document.querySelector("#description-input").value;
    let price = document.querySelector("#price-input").value;
    let image = document.querySelector("#img-input").value;

    let id =
      productArray.map((item) => item.id).at(-1) >= 1
        ? productArray.map((item) => item.id).at(-1)
        : 0;
    id++;

    productArray.push({
      id,
      title: title,
      description: description,
      price: price,
      img: image,
    });

    localStorage.setItem('productArray', JSON.stringify(productArray));
    alert("Product has been added");
    displayData();
  } catch (e) {
    console.log(e);
  }
});
console.log(productArray);

function EditItem(content) {
  this.id = content.id;
  this.title = document.querySelector("#title-input-edit").value;
  this.description = document.querySelector("#description-input-edit").value;
  this.price = document.querySelector("#price-input-edit").value;
  this.image = document.querySelector("#img-input-edit").value;

  let findX = productArray.findIndex((x) => x.id === content.id);

  productArray[findX] = {
    id: this.id,
    title: this.title,
    description: this.description,
    price: this.price,
    img: this.image,
  };
  localStorage.setItem("productArray", JSON.stringify(productArray));
  displayData();
  console.log(productArray);
}
