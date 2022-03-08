const storageButton = () => {
    const item = document.getElementById('item-id').value;
    const price = document.getElementById('price-id').value;

    if (item && price) { localStorage.setItem(item, price) }


}