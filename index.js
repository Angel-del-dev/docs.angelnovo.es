import { createAside } from "./modules/Aside.js";
import { createReference } from "./modules/Reference.js";

const obtain_docs = async () => {
    const Html = await fetch(
        `/references/api.media.html?ts=${new Date().getTime()}`
    ).then(r => r.text())
        .then(r => r);

    const parser = new DOMParser();
    const page = parser.parseFromString(Html, "text/html");
    return page.querySelector('body');
};

const main = async () => {
    const page = await obtain_docs();
    document.getElementById('root')?.append(
        createAside(page),
        createReference(page)
    );
};

main();