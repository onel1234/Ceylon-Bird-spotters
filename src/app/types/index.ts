export interface ImageDetails {
    id: number;
    src: string;
    title: string;
    scientificName: string;
    location: string;
    photographer: string;
    category: 'Reptiles' | 'Mammals' | 'Butterflies' | 'Birds' | 'Endemics';
  }
  
  export type CategoryType = 'All' | 'Reptiles' | 'Mammals' | 'Butterflies' | 'Birds' | 'Endemics';