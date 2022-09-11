import { atom } from 'recoil';

const productsAtom = atom({
    key: 'products',
    default: [
        {
            name: 'product 1',
            price: 1000,
        },
    ],
});

export default productsAtom;
