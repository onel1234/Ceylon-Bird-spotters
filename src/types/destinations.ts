export interface Location {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    type: 'wildlife' | 'cultural';
    highlights?: {
      title: string;
      description: string;
      icon: 'Info' | 'Calendar' | 'Clock' | 'MapPin';
    }[];
    content?: {
      about: string[];
      experiences: {
        title: string;
        description: string;
      }[];
    };
  }