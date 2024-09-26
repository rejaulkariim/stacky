import { userTestimonails } from "@/constants";
import { Star } from "lucide-react";
import Image from "next/image";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import SectionHeader from "../shared/SectionHeader";
import { Separator } from "../ui/separator";

const Testimonials = () => {
  return (
    <section id="testimonails" className="py-10 md:py-20">
      <MaxWidthWrapper>
        <SectionHeader
          title="What customers are"
          span="saying"
          description="Discover how our innovative solutions empower businesses by providing seamless development and scalability."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userTestimonails.map((review) => (
            <div key={review.user}>
              <div className="bg-card border rounded-2xl p-6 relative">
                <p className="text-foreground text-sm md:text-base">
                  {review.comment}
                </p>
                <Separator className="mt-4" />

                <div className="mt-4 flex items-center justify-start gap-5">
                  <div className="flex items-center gap-4">
                    <Image
                      width={80}
                      height={80}
                      src={review.image}
                      alt="user image"
                      className="size-10 rounded-full border object-contain"
                    />

                    <div className="space-y-1">
                      <h4 className="text-lg text-foreground">{review.user}</h4>
                      <div className="flex items-center gap-x-0.5">
                        <Star className="fill-amber-500 text-amber-500 size-4" />
                        <Star className="fill-amber-500 text-amber-500 size-4" />
                        <Star className="fill-amber-500 text-amber-500 size-4" />
                        <Star className="fill-amber-500 text-amber-500 size-4" />
                        <Star className="fill-amber-500 text-amber-500 size-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Testimonials;
