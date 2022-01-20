import './styles.css';
import titleMaker from './title.js';
import masterFlex from './masterFlex.js';
import cardGroup from './cardGroup';
import card from './card';
import panini from './panini.jpg';
import pizza from './pizza.jpg';
import risotto from './risotto.png';

const html = document.querySelector('#content');
html.appendChild(titleMaker('Warung Italia', 'Masakan Italia dengan Harga Terjangkau'));

let flexContainer = masterFlex();
html.appendChild(flexContainer);

let cardGroupElement = cardGroup();
flexContainer.appendChild(cardGroupElement);

let risottoDesc = 'Nasi italia yang dimasak dengan kuah yang creamy dengan potongan daging asap dan ayam';
let risottoCard = card('Risotto', risotto, '25.000', risottoDesc);
cardGroupElement.appendChild(risottoCard);