export const createReference = page => {
    const reference = document.createElement('article');
    
    reference.append(page);

    return reference;
};