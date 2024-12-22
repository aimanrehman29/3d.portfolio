interface AnimatedCardProps {
  imageUrl: string;
  title: string;
  description: string;
  vercelLink: string;
}

import React from "react";
import Image from "next/image";
import Link from "next/link";

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  imageUrl,
  title,
  description,
  vercelLink,
}) => {
  return (
    <div className="perspective-1000 group cursor-pointer">
      <div className="relative w-80 h-[450px] transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 ">
        {/* Front Side */}
        <div className="absolute inset-0 bg-gray-900 shadow-lg flex flex-col items-center justify-center text-center py-6 rounded-lg">
          <Image
            src={imageUrl}
            alt="project image"
            width={400}
            height={400}
            className="rounded-lg mt-2 w-full h-[200px]"
          />
          <h3 className="text-xl font-bold mt-6 text-white">{title}</h3>
          <p className="text-gray-300 mt-3 p-3">{description}</p>
          <Link
            href={vercelLink}
            className="text-white underline bg-gray-900 inline-flex items-center bg-gray-100 border-2 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-full text-base"
          >
            <p>Checkout</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;
