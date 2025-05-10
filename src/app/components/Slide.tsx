import React from 'react';
import Image from 'next/image';

interface SlideProps {
  img: string;
  title: string;
  desc: string;
}

const Slide: React.FC<SlideProps> = ({ img, title, desc }) => {
  return (
    <div className="relative h-[600px] w-full">
      <Image
        src={img}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl mb-8">{desc}</p>
      </div>
    </div>
  );
};

export default Slide;
