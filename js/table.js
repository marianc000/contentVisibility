import data from './data.js';

function row(vals) {
    return '<div class="row">'
        + vals.map(val => `<div title="${val}">${val}</div>`).join('')
        + '</div>';
}

root.innerHTML = data.map(vals => row(vals)).join('');

