import { CustomerReviews } from "./CustomerReview";
import { useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
const HappyCustomer = () => {
  const scrollRef = useRef();
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const scrollAmount = 320;
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 3000);
    return () => clearInterval(scrollInterval);
  }, []);
  return (
    <section>
      <h2 className="text-4xl font-black px-20 mb-10 ">OUR HAPPY CUSTOMERS</h2>

      <div className="px-10">
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scroll-smooth  scrollbar-hide "
        >
          {CustomerReviews.map((review, index) => (
            <div
              key={review.id}
              className="min-w-[300px] max-w-xs bg-white rounded-lg shadow p-4 flex-shrink-0"
            >
              <div className="flex space-x-1 mb-2 text-yellow-400 text-sm">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>

              <h4 className="font-bold mb-2 text-lg flex items-center gap-1">
                {review.name}
                <BsCheckCircleFill className="text-green-500 text-sm" />
              </h4>
              <p className="text-gray-600 text-sm whitespace-pre-line">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-t border-gray-300 my-10 w-11/12 mx-auto" />
    </section>
  );
};

export default HappyCustomer;
