import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { createMarkup } from './createMarkup';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { refs } from './refs';

const { inputRef, countryListRef, countryInfoRef } = refs;
const DEBOUNCE_DELAY = 1000;

inputRef.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(event) { 
    let searchCountry = event.target.value.trim();
    countryInfoRef.innerHTML = '';
    countryListRef.innerHTML = '';
    
    if (searchCountry) { 
        fetchCountries(searchCountry)
            .then(createMarkup)
            .catch(error => {
                console.log(error);
                Notiflix.Notify.failure('Oops, there is no country with that name')
            });
    }    
}


