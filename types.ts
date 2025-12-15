export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: 'vestuario' | 'acessorios';
}

export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  price: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  avatar: string;
}

export interface SpiritualResponse {
  message: string;
  verse: {
    text: string;
    reference: string;
  };
  songs: {
    title: string;
    artist: string;
  }[];
}

export interface JesusMessageResponse {
  message: string;
  verse: {
    text: string;
    reference: string;
  };
  prayer_tip: string;
}