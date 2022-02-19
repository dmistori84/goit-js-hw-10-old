import Notiflix from 'notiflix';
import { refs } from './refs';

const { countryListRef, countryInfoRef } = refs;

export function createMarkup(value) { 
    
    if (value.length > 10) { 
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    }
    
    if (value.length >= 2 && value.length <= 10) { 
        const markup = value.map(elem =>
        `
            <li class="list__item">
                <img src="${elem.flags.svg}" width="40px">
                <span>${elem.name.official}</span>
            </li>
        `
        ).join('');
        countryListRef.insertAdjacentHTML('beforeend', markup);
    } 

    if (value.length === 1) {
        const markup = value.map(elem =>
            `
                <div>
                    <img src="${elem.flags.svg}" width="20px">
                    <span class="country__name">${elem.name.official}</span>
                    <p>Capital: ${elem.capital}</p>
                    <p>Population: ${elem.population}</p>
                    <p>Languages: ${Object.values(elem.languages).map(elem => elem).join(', ')}</p>
                </div>
            `
        ).join('');
        countryInfoRef.insertAdjacentHTML('beforeend', markup);
    }  
}