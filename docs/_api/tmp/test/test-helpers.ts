
export const stripExpressionDelimeters = (html: string) =>
    html.replace(/<!---->/g, '');

let count = 0;
export const generateElementName = () => `x-${count++}`;

export const nextFrame = () =>
    new Promise((resolve) => requestAnimationFrame(resolve));

export const getComputedStyleValue = (element: Element, property: string) =>
    window.ShadyCSS ? window.ShadyCSS.getComputedStyleValue(element, property)
                    : getComputedStyle(element).getPropertyValue(property);
