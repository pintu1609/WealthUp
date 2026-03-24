import Image from "next/image";

const steps = [
  {
    title: "Define Your Goal",
    desc: "Start by defining what you want to achieve whether it’s buying a car, travelling, or building long-term wealth. Tell us the goal amount and timeline, and we’ll create a personalized investment plan to help you get there.",
    icon: "/images/magnifying.svg",
    image: "/images/mobile-image.svg",
    activeIndex: 0,
  },
  {
    title: "Setup Your Investment Account",
    desc: "Complete a simple and secure account setup with quick KYC verification. This allows you to invest seamlessly through regulated platforms and start building your portfolio.",
    icon: "/images/setup.svg",
    image: "/images/mobile-image.svg",
    activeIndex: 1,
  },
];

export default function HowItWorks() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">

      {/* HEADING */}
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-[24px] sm:text-[36px] font-semibold text-[#294F7C]">
          How it Works?
        </h2>
        <p className="text-[#294F7C] mt-2 text-sm sm:text-lg">
          India's most intelligent investment platform
        </p>
      </div>

      {/* STEPS */}
      <div className="flex flex-col gap-6 sm:gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col sm:flex-row items-start justify-between bg-[#F8FAFC] border border-[#4A90E2] rounded-2xl p-4 sm:p-8 overflow-hidden min-h-[auto] sm:min-h-[300px]"
          >

            {/* LEFT CONTENT */}
            <div className="w-full sm:max-w-[50%] z-10">

              {/* ICON + TITLE */}
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#CFE6F7] border border-[#294F7C] flex items-center justify-center">
                  <Image src={step.icon} alt="" width={20} height={20} />
                </div>

                <h3 className="text-base sm:text-xl font-semibold text-[#294F7C]">
                  {step.title}
                </h3>
              </div>

              {/* DESCRIPTION */}
              <p className="text-[#294F7C] text-[14px] sm:text-[16px] leading-relaxed">
                {step.desc}
              </p>
            </div>

            {/* IMAGE */}
            {step.image && (
              <div className="relative w-[160px] sm:w-[220px] h-[140px] sm:h-[200px] z-10 mt-4 sm:mt-0 mx-auto">
                <Image
                  src={step.image}
                  alt="preview"
                  fill
                  className="object-contain"
                />
              </div>
            )}

            {/* BLUR */}
            <div className="absolute right-0 top-0 w-full sm:w-[50%] h-full bg-[#CFE6F7] blur-3xl opacity-70 rounded-2xl sm:rounded-r-2xl" />

            {/* PROGRESS BAR */}
            <div className="relative sm:absolute bottom-0 sm:bottom-6 left-0 sm:left-8 flex items-center gap-2 mt-6 sm:mt-8">

              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`rounded-full transition-all duration-300 ${
                    i === step.activeIndex
                      ? "w-16 sm:w-24 h-2 sm:h-3 bg-[#294F7C]"
                      : "w-6 sm:w-10 h-2 bg-[#CFE6F7]"
                  }`}
                />
              ))}

            </div>

          </div>
        ))}
      </div>
    </section>
  );
}