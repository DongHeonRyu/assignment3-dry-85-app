export async function getInventory() {
  return fetch(`${process.env.REACT_APP_API_BASE_URL}`).then((response) =>
    response.json()
    
  );
}

export async function getCart() {
  return fetch(`${process.env.REACT_APP_API_BASE_URL}`).then((response) =>
    response.json()

  );
}

export async function addCart(SKU) {
  const addItemSKU = JSON.stringify({ SKU: SKU });
  return fetch(`${process.env.REACT_APP_API_BASE_URL}/cartDry85`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: addItemSKU,
  }).then((response) => response.json());
}

export async function deleteCar(SKU) {
  const deleteItemSKU = JSON.stringify({ SKU: SKU });
  return fetch(`${process.env.REACT_APP_API_BASE_URL}/cartDry85`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: deleteItemSKU,
  }).then((response) => response.json());
}

export async function checkCart() {
  return fetch(`${process.env.REACT_APP_API_BASE_URL}/cartDry85/checkout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.json());
}
