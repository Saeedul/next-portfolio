import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Abeer was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Head of Design @ GreenLeaf",
    text: "Working with Abeer was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "CEO @ InnovateCo",
    text: "Abeer's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Product Manager @ GlobalTech",
    text: "Abeer is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Abeer's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  return <div className="py-16 lg:py-24">
    <div className="container">
      <SectionHeader eyebrow="Happy Clients" title="What Clients Say About Me" description="Don't just take my word for it. See what my clients have to say about my work." />
      {/* we used py-4 to make the nexessary padding for the testimonial card to appear in full when we hover over it. But as this added more padding, we adjusted the margin by changing the others to mt-12 lg:mt-20 and adding -my-4. This helps us to view the rotated card in full when we hover it without changing the given padding. */}
      <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
        {/* Here the mask-image property creates a linear gradient mask that:
          Starts as fully transparent on the left.
          Gradually becomes fully visible (black) at 10% of the width.
          Stays fully visible between 10% and 90%.
          Gradually fades to fully transparent at 90% until the right edge. */}
        <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
          {/* Here we need to duplicate the array as the words will be mapped in order to show an infinite scroll sideways animation while rotating. So we created a new array with only two values, fill them with a dummy value which is 0. And then we're going to map over those two values and go ahead and get the index of that particular item. So, now instead of of one set of testimonial cards, we have two sets because we just mapped an array on length 2. The index will be 0 and 1. And for each one of those mapped items we create a set of testimonials. We have two sets instead of just 1. This will be helpful once we translate left just like we did in the tapes section.*/}
          {[...new Array(2)].fill(0).map((_, index) => (
            <Fragment key={index}>
              {testimonials.map(testimonial => (
                <Card key={testimonial.name} className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300">
                  <div className="flex gap-4 items-center">
                    <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                      <Image src={testimonial.avatar}
                        alt={testimonial.name}
                        className="max-h-full" />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-white/40">{testimonial.position}</div>
                    </div>
                  </div>
                  <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
                </Card>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  </div>
};
