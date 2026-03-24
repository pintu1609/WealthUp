import Image from "next/image";

export default function GoalsCTA() {
  return (
    <section className="w-full flex justify-center mt-[120px]"> {/* Spacing based on design flow */}
      
    <div className="relative w-full max-w-[1040px] rounded-[50px] p-[1px] bg-gradient-to-b from-[#294F7C] to-[#F8FAFC]">

  {/* INNER CONTAINER */}
  <div className="relative h-[191px] bg-[#EAF4FB] rounded-[50px] overflow-hidden flex items-center shadow-sm">

    {/* BACKGROUND PATTERN */}
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
      <Image
        src="/images/perlin.png"
        alt="pattern"
        fill
        className="object-cover"
      />
    </div>

    {/* LEFT BLUR */}
    <div className="absolute -left-[20px] -top-[32px] w-[485px] h-[246px] bg-[#4A90E2]/20 blur-[32px] rounded-full z-0" />

    {/* RIGHT BLUR */}
    <div className="absolute right-0 top-0 w-[201px] h-[245.5px] blur-[32px] rounded-full z-0" />

    {/* CONTENT */}
    <div className="relative z-10 w-full flex items-center justify-between px-[60px]">
      
      {/* TEXT */}
      <div className="flex flex-col gap-2">
        <h2 className="text-[36px] font-semibold text-[#294F7C]">
          Your Goals Deserve a Plan
        </h2>
        <p className="text-[#294F7C] text-[16px]">
          Start your personalized investment roadmap in minutes.
        </p>
      </div>

      {/* BUTTON */}
      <button className="group flex items-center justify-center w-[400px] h-[60px] rounded-[30px] bg-gradient-to-r from-[#4A90E2] to-[#294F7C] hover:scale-[1.02] transition shadow-lg">
        
        <span className="text-white text-[20px] font-semibold mr-4">
          Get your WealthoMeter Report
        </span>

        <div className="relative w-[18px] h-[18px]">
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