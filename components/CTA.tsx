import Image from "next/image";

export default function GoalsCTA() {
  return (
    <section className="w-full flex justify-center mt-[80px] sm:mt-[120px] px-4">

      <div className="relative w-full max-w-[1040px] rounded-[30px] sm:rounded-[50px] p-[1px] bg-gradient-to-b from-[#294F7C] to-[#F8FAFC] sm:max-w-6xl">

        <div className="relative sm:h-[191px] bg-[#EAF4FB] rounded-[30px] sm:rounded-[50px] overflow-hidden flex flex-col sm:flex-row items-center justify-center sm:justify-between shadow-sm py-6 sm:py-0">

          {/* BACKGROUND */}
          <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
            <Image
              src="/images/perlin.png"
              alt="pattern"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute -left-[20px] -top-[32px] w-[485px] h-[246px] bg-[#4A90E2]/20 blur-[32px] rounded-full z-0" />
          <div className="absolute right-0 top-0 w-[201px] h-[245.5px] blur-[32px] rounded-full z-0" />

          <div className="relative z-10 w-full flex flex-col sm:flex-row items-center text-center sm:text-left justify-center sm:justify-between px-4 sm:px-[60px] gap-6 sm:gap-0">

            <div className="flex flex-col gap-2">
              <h2 className="text-[22px] sm:text-[36px] font-semibold text-[#294F7C]">
                Your Goals Deserve a Plan
              </h2>
              <p className="text-[#294F7C] text-[14px] sm:text-[16px]">
                Start your personalized investment roadmap in minutes.
              </p>
            </div>

            <button className="group flex items-center justify-center w-full sm:w-[400px] h-[48px] sm:h-[60px] rounded-[30px] bg-gradient-to-r from-[#4A90E2] to-[#294F7C] hover:scale-[1.02] transition shadow-lg">

              <span className="text-white text-[14px] sm:text-[20px] font-semibold mr-3 sm:mr-4 text-center">
                Get your WealthoMeter Report
              </span>

              <div className="relative w-[16px] sm:w-[18px] h-[16px] sm:h-[18px]">
                <Image
                  src="/images/arrow-right.svg"
                  alt="arrow"
                  fill
                  className="brightness-0 invert object-contain"
                />
              </div>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}