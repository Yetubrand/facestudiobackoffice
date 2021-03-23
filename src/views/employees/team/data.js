import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    address: {
      country: 'Angola',
      state: 'Luanda',
      city: 'Ingombota',
      street: 'Rua do centro'
    },
    avatarUrl: '/static/images/avatars/avatar_2.jpg',
    email: 'ilyamachado@facestudio.me',
    name: 'Ilya Machado',
    cargo: 'CEO'
  },
  {
    id: uuid(),
    address: {
      country: 'Angola',
      state: 'Luanda',
      city: 'Mutamba',
      street: 'Rua do centro'
    },
    avatarUrl: '/static/images/avatars/avatar_4.jpg',
    email: 'katiasilva@facestudio.me',
    name: 'Kátia Silva',
    cargo: 'Production Manager'
  },

];
