import Image from "next/image";

export default function WealthOptions() {
    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">

            <h2 className="text-[24px] sm:text-[36px] font-semibold text-[#294F7C]">
                Multiple ways to grow your wealth
            </h2>

            <p className="text-[#294F7C] mt-2 sm:mt-3 text-sm sm:text-lg">
                Diversified investment options selected and optimized by WealthUp.
            </p>

            {/* TOP CARDS */}
            <div className="flex flex-wrap sm:flex-nowrap justify-center gap-6 sm:gap-10 mt-10 sm:mt-16">

                {/* CARD 1 */}
                <div className="relative w-[140px] sm:w-[200px] h-[80px] sm:h-[100px] rotate-[-20deg] sm:-rotate-[34deg]">

                    <div className="absolute inset-0 rounded-2xl bg-[#294F7C] border border-[#4A90E2] backdrop-blur-md"></div>

                    <div className="absolute inset-0 translate-x-[3px] translate-y-[-4px] sm:translate-y-[-6px] rounded-2xl bg-[#294F7C] border border-[#4A90E2] flex flex-col items-center justify-center shadow-md">

                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#EAF4FB] flex items-center justify-center mb-1 sm:mb-2">
                            <Image src="/images/mutual-fund.svg" alt="" width={18} height={18} />
                        </div>

                        <span className="text-white font-semibold text-[12px] sm:text-[16px]">
                            Mutual Funds
                        </span>
                    </div>
                </div>

                {/* CARD 2 */}
                <div className="relative w-[140px] sm:w-[200px] h-[80px] sm:h-[100px] rotate-[-20deg] sm:-rotate-[34deg]">

                    <div className="absolute inset-0 rounded-2xl bg-white/30 border border-[#4A90E2] backdrop-blur-md"></div>

                    <div className="absolute inset-0 translate-x-[3px] translate-y-[-4px] sm:translate-y-[-6px] rounded-2xl bg-[#F8FAFC] border border-[#4A90E2] flex flex-col items-center justify-center shadow-md">

                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#EAF4FB] border border-[#4A90E2] flex items-center justify-center mb-1 sm:mb-2">
                            <Image src="/images/bond.svg" alt="" width={18} height={18} />
                        </div>

                        <span className="text-[#294F7C] font-semibold text-[12px] sm:text-[16px]">
                            Bonds
                        </span>
                    </div>
                </div>

                {/* CARD 3 */}
                <div className="relative w-[140px] sm:w-[200px] h-[80px] sm:h-[100px] rotate-[-20deg] sm:-rotate-[34deg] mt-12 sm:mt-0">

                    <div className="absolute inset-0 rounded-2xl bg-white/30 border border-[#4A90E2] backdrop-blur-md"></div>

                    <div className="absolute inset-0 translate-x-[3px] translate-y-[-4px] sm:translate-y-[-6px] rounded-2xl bg-[#F8FAFC] border border-[#4A90E2] flex flex-col items-center justify-center shadow-md">

                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#EAF4FB] border border-[#4A90E2] flex items-center justify-center mb-1 sm:mb-2">
                            <Image src="/images/briefcase.svg" alt="" width={18} height={18} />
                        </div>

                        <span className="text-[#294F7C] font-semibold text-[12px] sm:text-[16px] text-center">
                            Invoice Discounting
                        </span>
                    </div>
                </div>
            </div>

            <div className="mt-16 rounded-2xl border border-[#4A90E2] bg-white/20 backdrop-blur-md  flex flex-col md:flex-row gap-8">

                {/* LEFT (ACTIVE) */}
                <div className="flex-1 bg-[#294F7C] text-white rounded-tl-xl rounded-bl-0 sm:rounded-bl-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-[#EAF4FB] flex items-center justify-center">
                            <Image src="/images/mutual-fund.svg" alt="" width={20} height={20} />
                        </div>
                        <h3 className="font-semibold text-lg">Mutual Funds</h3>
                    </div>

                    <p className="text-sm text-left">
                        Professionally managed portfolios designed to grow your wealth over the long term.
                        Diversified across sectors and asset classes to balance risk and returns.
                    </p>
                </div>

                {/* MIDDLE */}
                <div className="flex-1 p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-[#EAF4FB] flex items-center justify-center">
                            <Image src="/images/bond.svg" alt="" width={20} height={20} />
                        </div>
                        <h3 className="font-semibold text-[#294F7C] text-lg">Bonds</h3>
                    </div>

                    <p className="text-sm text-[#294F7C] text-left">
                        Stable income-generating investments for predictable and steady returns.
                        Ideal for investors seeking lower volatility and consistent cash flow.
                    </p>
                </div>

                {/* RIGHT */}
                <div className="flex-1 p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-[#EAF4FB] flex items-center justify-center">
                            <Image src="/images/briefcase.svg" alt="" width={25} height={25} />
                        </div>
                        <h3 className="font-semibold text-[#294F7C] text-lg">
                            Invoice Discounting
                        </h3>
                    </div>

                    <p className="text-sm text-[#294F7C] text-left">
                        Access short-term investment opportunities backed by verified business invoices.
                        Earn attractive returns while supporting real business transactions.
                    </p>
                </div>
            </div>
        </section>
    );
}