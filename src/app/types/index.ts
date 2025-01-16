export interface ImageDetails {
    id: number;
    src: string;
    title: string;
    scientificName: string;
    location: string;
    photographer: string;
    category: 'amphibians' | 'mammals' | 'butterfly' | 'birds' | 'endemic-birds';
  }
  
  export type CategoryType = 'all' | 'amphibians' | 'mammals' | 'butterfly' | 'birds' | 'endemic-birds';