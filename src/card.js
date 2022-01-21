export default function card(title, image, price, desc) {
    const element = document.createElement('div');
    element.classList.add('card');

    const menuTitle = document.createElement('h2');
    menuTitle.classList.add('menu-title');
    menuTitle.textContent = title;
    element.appendChild(menuTitle);

    const img = document.createElement('img');
    img.src = image;
    img.classList.add('img');
    element.appendChild(img);

    const priceElement = document.createElement('p');
    priceElement.textContent = `Rp ${price}`;
    priceElement.classList.add('price')
    element.appendChild(priceElement);

    const descElement = document.createElement('p');
    descElement.textContent = desc;
    descElement.classList.add('desc');
    element.appendChild(descElement);

    return element;
}