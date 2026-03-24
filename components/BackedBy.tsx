import Image from "next/image";

export default function BackedBy() {
  return (
    <section className="w-full flex justify-center mt-[112px]">
      
      <div className="w-full max-w-[1040px] h-[150px] rounded-[20px] bg-white/5 backdrop-blur-md border border-white/30 flex flex-col items-center justify-center relative overflow-hidden">
        
        <h3 className="text-[#294F7C] font-bold text-[16px] leading-[19px] mb-8 font-inter">
          Backed By
        </h3>

        <div className="w-full flex items-center justify-around px-6 md:px-14">
          
          {/* IRDAI */}
          <div className="relative w-[78px] h-[30px]">
             <Image src="/images/irdai.svg" alt="irdai" fill className="object-contain" />
          </div>

          {/* GOV LOGO */}
          <div className="relative w-[79px] h-[30px]">
             <Image src="/images/gov-logo.svg" alt="gov" fill className="object-contain" />
          </div>

          <span className="text-[#F15A25] font-semibold text-[25px] leading-[30px] font-urbanist">
            #startupindia
          </span>

          {/* NVIDIA */}
          <div className="relative w-[41px] h-[30px]">
             <Image src="/images/Nvidia_logo.svg" alt="nvidia" fill className="object-contain" />
          </div>

          {/* RAZORPAY */}
          <div className="relative w-[132px] h-[30px]">
             <Image src="/images/razorpay.svg" alt="razorpay" fill className="object-contain" />
          </div>

          {/* AMFI */}
          <div className="relative w-[80px] h-[30px]">
             <Image src="/images/amfi.svg" alt="amfi" fill className="object-contain" />
          </div>
        
            {/* WADHWANI FOUNDATION */}
          <div className="relative w-[60px] h-[30px]">
             <Image src="/images/Wadhwanifoundation.svg" alt="wadhwani" fill className="object-contain" />
          </div>

        </div>
      </div>
    </section>
  );
}