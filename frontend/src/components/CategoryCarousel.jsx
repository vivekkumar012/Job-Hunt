import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "FUll Stack Developer",
  "Data Engineer",
  "AI Enginner"
]

const CategoryCarousel = () => {
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem className="md:basis-1/2 lg:basic-1/3">
                <Button variant="outline" className="rounded-full hover:text-white hover:bg-gray-700">{cat}</Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;
