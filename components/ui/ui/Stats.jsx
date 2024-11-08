"use client";
import CountUp from "react-countup";

const stats = [
  {
    num: 1,
    text: "Years of experience",
  },
  {
    num: 4,
    text: "Projects Completed",
  },
  {
    num: 8,
    text: "Technologies mastered",
  },
  {
    num: 300,
    text: "LeetCode",
  },
];

const Stats = () => {
  return (
    <section className="py-12 -mt-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex items-center space-x-4">
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } text-gray-600 text-lg xl:text-xl`}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
