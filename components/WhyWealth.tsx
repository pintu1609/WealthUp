"use client";

export default function WhyWealth() {
  const cards = [
    {
      title: "Handpicked Investments",
      desc: "Every investment opportunity is analysed across 100+ parameters, including risk, consistency, and long-term performance. Only the most reliable and goal-aligned investments make it into your portfolio.",
    },
    {
      title: "Capitalizing on Opportunities",
      desc: "Markets move constantly, and static portfolios miss opportunities. We continuously monitor market conditions and recommend timely portfolio adjustments to improve returns while managing risk.",
    },
    {
      title: "Optimized for Tax Efficiency",
      desc: "Your investment strategy is designed to deliver the highest possible post-tax returns. We optimize asset allocation and investment choices to reduce unnecessary tax impact over time.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-24 text-center">

      <h2 className="text-[24px] sm:text-[36px] font-semibold text-[#294F7C]">
        Why Your Wealth Grows Faster With WealthUp
      </h2>

      <p className="text-[#294F7C] mt-4 text-sm sm:text-[16px] max-w-3xl mx-auto">
        A smarter investment approach combining expert-curated opportunities,
        dynamic portfolio adjustments, and tax-efficient strategies.
      </p>

      {/* CARDS */}
      <div className="mt-16 grid md:grid-cols-3 gap-8">

        {cards.map((card, index) => (
          <div
            key={index}
            className="relative group w-full h-[260px]"
          >

            <div className="absolute inset-0 -translate-y-0 rounded-2xl " />

            <div className="relative h-full rounded-2xl bg-white/10 backdrop-blur-md border border-[#4A90E2]  flex flex-col items-center justify-start transition-all duration-300 group-hover:bg-[#294F7C]">

              {/* TITLE */}
              <div className="relative bg-[#294F7C] rounded-b-2xl ">
                <h3 className="text-[20px] font-semibold text-white  bg-white/10  backdrop-blur-md p-4 rounded-b-2xl group-hover:bg-[#294F7C]">
                  {card.title}
                </h3>
              </div>

              <p className="text-[15px] text-white opacity-0 group-hover:opacity-100 transition duration-300 text-center px-4 py-2">
                {card.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}