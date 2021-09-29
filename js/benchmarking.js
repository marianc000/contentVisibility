import './options.js';

import { execute } from './shared.js';
import showResults from './results.js';
import hide from './clear.js';

function show(clazz) {
    console.log(">" + clazz);
    return execute(clazz, () => {
        root.className = clazz;
    });
}

export default function run() {
    console.log("run");
    const times =10;
    let p = Promise.resolve().then(hide);

    for (let i = 0; i < times; i++) {
        p = p.then(() => show()).then(hide);
    }

    for (let i = 0; i < times; i++) {
        p = p.then(() => show('overflowClip')).then(hide);
    }

    for (let i = 0; i < times; i++) {
        p = p.then(() => show('overflowHidden')).then(hide);
    }

    for (let i = 0; i < times; i++) {
        p = p.then(() => show('visibilityHidden')).then(hide);
    }

    for (let i = 0; i < times; i++) {
        p = p.then(() => show('contentVisibility')).then(hide);
    }

    p.then(showResults);
}



