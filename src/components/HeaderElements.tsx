import Image from "next/image";


interface headerTextElement {
    backgroundImage: string;
    text: string;
}

interface headerImgElement {
    imageSource?: string;
}

export function HeaderTextElement({backgroundImage, text} : headerTextElement) {
  const getLines = (text: string): string[] => {
    const lowerText = text.toLowerCase();

    if (lowerText.includes('cape4labs') || lowerText.includes('cape⁴labs')) {
      return ['About', 'cape⁴labs'];
    }
    if (lowerText === 'about') {
      return ['About'];
    }
    if (lowerText.includes('where we can help you')) {
      return ['Where we can', 'help you'];
    }
    if (lowerText === 'contact') {
      return ['Contact'];
    }

    return [text];
  };

  const lines = getLines(text);

  return (
    <div className="relative w-1/5 h-full flex items-center justify-center overflow-hidden">
      <Image
        src={backgroundImage}
        alt="decorative flower background"
        fill
        className="object-cover absolute inset-0 z-0"
        unoptimized 
      />

      <div className="relative z-10 text-center px-4">
        {lines.map((line, index) => (
          <h2
            key={index}
            className={`text-white font-medium leading-tight text-start ${
              lines.length > 1 ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl'
            }`}
          >
            {line}
          </h2>
        ))}
      </div>
    </div>
  );
}

export function HeaderImgElement({imageSource}: headerImgElement) {
    return (
        <div className="flex items-center justify-center bg-white text-midnight ">
            {!imageSource ? (
                <h1 className='font-bold text-4xl text-start'>Cape⁴<br />labs</h1>
            ) : (
                <Image src={imageSource} alt='flower' width={100} height={100} className='h-full w-full' quality={100} />

            )}
        </div>
        
        
    );
}