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

    return element;
}