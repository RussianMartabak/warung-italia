export default function (title, subtitle) {
    const element = document.createElement('div');

    let titleElement = document.createElement('h1');
    titleElement.classList.add('title');
    titleElement.textContent = title;

    let subtitleElement = document.createElement('h2');
    subtitleElement.classList.add('subtitle');
    subtitleElement.textContent = subtitle;

    element.appendChild(titleElement);
    element.appendChild(subtitleElement);

    return element;
}