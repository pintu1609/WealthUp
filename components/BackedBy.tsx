import Image from "next/image";

export default function BackedBy() {
    return (
        <section className="w-full flex justify-center mt-[80px] sm:mt-[112px] px-4 ">

            <div className="w-full max-w-[1040px] rounded-[20px] bg-white/5 backdrop-blur-md border border-white/30 flex flex-col items-center justify-center py-6 sm:py-8 relative overflow-hidden sm:max-w-6xl">

                <h3 className="text-[#294F7C] font-bold text-[14px] sm:text-[16px] mb-6 sm:mb-8">
                    Backed By
                </h3>

                <div className="w-full flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-12 items-center">

                    {/* IRDAI */}
                    <div className="relative w-[60px] sm:w-[78px] h-[24px] sm:h-[30px]">
                        <Image src="/images/irdai.svg" alt="irdai" fill className="object-contain" />
                    </div>

                    {/* GOV */}
                    <div className="relative w-[60px] sm:w-[79px] h-[24px] sm:h-[30px]">
                        <Image src="/images/gov-logo.svg" alt="gov" fill className="object-contain" />
                    </div>

                    {/* STARTUP INDIA */}
                    <span className="text-[#F15A25] font-semibold text-[16px] sm:text-[22px] md:text-[25px]">
                        #startupindia
                    </span>

                    {/* NVIDIA */}
                    <div className="relative w-[35px] sm:w-[41px] h-[24px] sm:h-[30px]">
                        <Image src="/images/Nvidia_logo.svg" alt="nvidia" fill className="object-contain" />
                    </div>

                    {/* RAZORPAY */}
                    <div className="relative w-[100px] sm:w-[132px] h-[24px] sm:h-[30px]">
                        <Image src="/images/razorpay.svg" alt="razorpay" fill className="object-contain" />
                    </div>

                    {/* AMFI */}
                    <div className="relative w-[60px] sm:w-[80px] h-[24px] sm:h-[30px]">
                        <Image src="/images/amfi.svg" alt="amfi" fill className="object-contain" />
                    </div>

                    {/* WADHWANI */}
                    <div className="relative w-[50px] sm:w-[60px] h-[24px] sm:h-[30px]">
                        <Image src="/images/Wadhwanifoundation.svg" alt="wadhwani" fill className="object-contain" />
                    </div>

                </div>
            </div>
        </section>
    );
}