export async function getInventory() {
  return fetch("https://52.23.178.211:8000/inventoryDry85").then((response) =>
    response.json()
  );
}

export async function getCart() {
  return fetch("https://52.23.178.211:8000/cartDry85").then((response) =>
    response.json()
  );
}

export async function addCart(SKU) {
  const addItemSKU = JSON.stringify({ SKU: SKU });
  return fetch("https://52.23.178.211:8000/cartDry85", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: addItemSKU,
  }).then((response) => response.json());
}

export async function deleteCar(SKU) {
  const deleteItemSKU = JSON.stringify({ SKU: SKU });
  return fetch("https://52.23.178.211:8000/cartDry85", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: deleteItemSKU,
  }).then((response) => response.json());
}

export async function checkCart() {
  return fetch("https://52.23.178.211:8000/cartDry85/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.json());
}
