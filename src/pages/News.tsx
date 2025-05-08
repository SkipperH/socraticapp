
import React from 'react';
import { Button } from '@/components/ui/button';
import NavBar from '../components/NavBar';

interface NewsItem {
  id: number;
  title: string;
  content: string;
  type: 'recent' | 'older';
  image: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'RECENT ITEM',
    content: 'Onze missie is om filosofie toegankelijk en interactief te maken voor een nieuwe generatie. Door historische denkers tot leven te wekken met behulp van AI, stimuleren we kritisch denken, verdieping en reflectie in een digitale context.',
    type: 'recent',
    image: '/lovable-uploads/35c93d12-c159-4d4a-a9e0-e2d93bbfc853.png'
  },
  {
    id: 2,
    title: 'RECENT ITEM',
    content: 'Onze missie is om filosofie toegankelijk en interactief te maken voor een nieuwe generatie. Door historische denkers tot leven te wekken met behulp van AI, stimuleren we kritisch denken, verdieping en reflectie in een digitale context.',
    type: 'recent',
    image: '/lovable-uploads/47b16868-3cf1-4fd3-8c4a-5e949e296fca.png'
  },
  {
    id: 3,
    title: 'OUDER ITEM',
    content: 'Onze missie is om filosofie toegankelijk en interactief te maken voor een nieuwe generatie. Door historische denkers tot leven te wekken met behulp van AI, stimuleren we kritisch denken, verdieping en reflectie in een digitale context.',
    type: 'older',
    image: '/lovable-uploads/e158125c-5626-487b-8c0e-fa532d079969.png'
  },
  {
    id: 4,
    title: 'OUDER ITEM',
    content: 'Onze missie is om filosofie toegankelijk en interactief te maken voor een nieuwe generatie. Door historische denkers tot leven te wekken met behulp van AI, stimuleren we kritisch denken, verdieping en reflectie in een digitale context.',
    type: 'older',
    image: '/lovable-uploads/e9d34205-3f19-40b0-8520-66c704fc800c.png'
  },
  {
    id: 5,
    title: 'OUDER ITEM',
    content: 'Onze missie is om filosofie toegankelijk en interactief te maken voor een nieuwe generatie. Door historische denkers tot leven te wekken met behulp van AI, stimuleren we kritisch denken, verdieping en reflectie in een digitale context.',
    type: 'older',
    image: '/lovable-uploads/8282f703-9226-479b-b7bd-542956a7f133.png'
  }
];

const News: React.FC = () => {
  const recentItems = newsItems.filter(item => item.type === 'recent');
  const olderItems = newsItems.filter(item => item.type === 'older');

  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      {/* Navigation */}
      <NavBar />

      {/* News Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Recent News Items (2-column layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {recentItems.map(item => (
            <div key={item.id} className="flex flex-col">
              <div className="bg-[#f1f0e8] h-72 rounded-lg mb-4"></div>
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-300 mb-4">{item.content}</p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C] uppercase rounded-none self-start mt-auto">
                VERDER
              </Button>
            </div>
          ))}
        </div>

        {/* Older News Items (3-column layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {olderItems.map(item => (
            <div key={item.id} className="flex flex-col">
              <div className="bg-[#f1f0e8] h-60 rounded-lg mb-4"></div>
              <h2 className="text-lg font-bold mb-2">{item.title}</h2>
              <p className="text-gray-300 text-sm mb-4">{item.content}</p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C] uppercase rounded-none self-start mt-auto">
                VERDER
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
