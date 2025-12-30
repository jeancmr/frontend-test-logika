import type { Action } from '../types/types';

export const mockData: Action[] = [
  {
    id: '1',
    name: 'Creating a new action',
    description: 'Lorem ipsum dolor sit amet',
    icon: 'https://bekindstoragedev.blob.core.windows.net/bekind/action%2Fb2f3fa6b-668d-4892-bf64-3c1d69492667.png',
    color: '#259DA1',
    status: 1,
    createdAt: '2025-12-30T06:04:28.817Z',
  },
  {
    id: '2',
    name: 'Prueba',
    description: 'prueba',
    icon: 'https://bekindstoragedev.blob.core.windows.net/bekind/action%2Fef767f58-f51a-4275-8871-b8490d48ab0d.png',
    color: '#253A80',
    status: 0,
    createdAt: '2025-12-30T05:28:40.324Z',
  },
];
