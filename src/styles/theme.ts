const size = {
    mobile: '600px',
    tablet: '900px',
    laptop: '1200px',
    desktop: '1800px'
};

export const theme = {
    mainColor: 'blue',
    mobile: `(max-width: ${size.mobile})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`
};
