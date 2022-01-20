import './styles.css';
import titleMaker from './title.js';
import panini from './panini.jpg';
import pizza from './pizza.jpg';
import risotto from './risotto.png';

const html = document.querySelector('#content');
html.appendChild(titleMaker('Warung Italia', 'Masakan Italia dengan Harga Terjangkau'));
