const hydrate_aside = aside => {
    aside.addEventListener('click', e => {
        e.preventDefault();
        const link_node = e.target.closest('[link-to]');
        if(link_node === null) return;
        document
            .getElementById(link_node.getAttribute('link-to'))
            .scrollIntoView();
    });
};

export const createAside = page => {
    const aside = document.createElement('aside');
    
    const ul = document.createElement('ul');
    page.querySelectorAll('section[caption]')
        ?.forEach((section, _) => {
            const li = document.createElement('li');
            li.setAttribute('link-to', section.id);
            li.append(section.getAttribute('caption'));
            ul.append(li);
        });

    aside.append(ul);
    hydrate_aside(aside);
    return aside;
};