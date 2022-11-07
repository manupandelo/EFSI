import {shape, string, number} from 'prop-types';

export const ProductShape = shape({
    id: number.isRequired,
    title: string.isRequired,
    description: string,
    thumbnail: string.isRequired,
});