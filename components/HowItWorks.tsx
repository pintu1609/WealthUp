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
    <section className="max-w-6xl mx-auto px-6 py-24">

      {/* HEADING */}
      <div className="text-center mb-12">
        <h2 className="text-[36px] font-semibold text-[#294F7C]">
          How it Works?
        </h2>
        <p className="text-[#294F7C] mt-2 text-lg">
          India's most intelligent investment platform
        </p>
      </div>

      {/* STEPS */}
      <div className="flex flex-col gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex items-start justify-between bg-[#F8FAFC] border border-[#4A90E2] rounded-2xl p-8 overflow-hidden min-h-[300px]"
          >

            {/* LEFT CONTENT */}
            <div className="max-w-[50%] z-10">

              {/* ICON + TITLE */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-[#CFE6F7] border border-[#294F7C] flex items-center justify-center">
                  <Image src={step.icon} alt="" width={26} height={26} />
                </div>

                <h3 className="text-xl font-semibold text-[#294F7C]">
                  {step.title}
                </h3>
              </div>

              {/* DESCRIPTION */}
              <p className="text-[#294F7C] text-[16px] leading-relaxed">
                {step.desc}
              </p>
            </div>

            {/* RIGHT IMAGE (optional) */}
            {step.image && (
              <div className="relative w-[220px] h-[200px] z-10">
                <Image
                  src={step.image}
                  alt="preview"
                  fill
                  className="object-contain"
                />
              </div>
            )}

            {/* BLUR BACKGROUND */}
            <div className="absolute right-0 top-0 w-[50%] h-full bg-[#CFE6F7] blur-3xl opacity-70 rounded-r-2xl" />

            {/* PROGRESS BAR */}
            <div className="absolute bottom-6 left-8 flex items-center gap-2 mt-8">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`rounded-full transition-all duration-300 ${
                    i === step.activeIndex
                      ? "w-24 h-3 bg-[#294F7C]"   // ✅ ACTIVE BIGGER
                      : "w-10 h-2 bg-[#CFE6F7]"   // ✅ SMALLER
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