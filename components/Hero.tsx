import Image from "next/image";

export default function Hero() {
  const items = [
    { name: "Car", icon: "/images/car.svg" },
    { name: "Travel", icon: "/images/plane.svg" },
    { name: "Home", icon: "/images/home.svg" },
    { name: "Custom", icon: "🎯" },
  ];

  return (
    <section className="min-h-screen max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-0 grid md:grid-cols-2 gap-10 md:gap-16 items-center">

      {/* LEFT */}
      <div>
        {/* Avatars */}
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 border border-white rounded-full px-3 sm:px-4 py-1 w-fit">
          <div className="flex -space-x-2">
            {["Rhyamsharma", "pravalika", "ridham-agarwal"].map((img) => (
              <div
                key={img}
                className="w-6 h-6 sm:w-7 sm:h-7 relative rounded-full overflow-hidden border-2 border-white"
              >
                <Image
                  src={`/images/${img}.svg`}
                  alt="user"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <span className="text-xs sm:text-sm text-[#294F7C]">
            Trusted by over 2000 users
          </span>
        </div>

        <h1 className="text-[32px] sm:text-[40px] md:text-[56px] font-bold leading-tight text-[#294F7C]">
          Plan your life goals. <br />
          <span className="text-[#4A90E2]">
            We’ll plan the investments.
          </span>
        </h1>

        <p className="text-[#294F7C] mt-3 sm:mt-4 max-w-md text-sm sm:text-base">
          WealthUp helps you achieve goals through personalized goal-based investing.
        </p>

        {/* ICON GRID */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-10">
          {items.map((item) => (
            <div
              key={item.name}
              className="glass p-3 sm:p-4 flex items-center gap-2 sm:gap-3 cursor-pointer hover:scale-105 transition w-full sm:w-[180px]"
            >
              {/* ICON */}
              <div className="w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center">
                {typeof item.icon === "string" && item.icon.startsWith("/") ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <span className="text-[24px] sm:text-[36px]">🎯</span>
                )}
              </div>

              {/* TEXT */}
              <span className="font-semibold text-[#294F7C] text-sm sm:text-xl">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative flex flex-col justify-between h-full mt-10 md:mt-0">

        {/* CARD */}
        <div className="glass relative p-4 sm:p-6 w-full md:w-[420px] rounded-[20px] sm:rounded-[30px] border border-[#4A90E2] shadow-[0px_4px_24px_10px_rgba(74,144,226,0.25)] mx-auto">

          <h3 className="text-center font-semibold text-[#294F7C] mb-4 sm:mb-6">
            Buy a car
          </h3>

          <div className="flex flex-col sm:flex-row gap-4">

            {/* LEFT SIDE */}
            <div className="flex-1">

              {/* Slider 1 */}
              <div className="mb-4">
                <div className="flex justify-between text-xs sm:text-sm text-[#294F7C] mb-1">
                  <span>Car price</span>
                  <span className="font-semibold">₹ 20L</span>
                </div>

                <input type="range" className="w-full h-2 rounded-full" />

                <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                  <span>₹ 5L</span>
                  <span>₹ 1Cr</span>
                </div>
              </div>

              {/* Slider 2 */}
              <div className="mb-4">
                <div className="flex justify-between text-xs sm:text-sm text-[#294F7C] mb-1">
                  <span>Time to buy</span>
                  <span className="font-semibold">5 years</span>
                </div>

                <input type="range" className="w-full h-2 rounded-full" />
              </div>

              <button className="w-full h-[36px] sm:h-[40px] rounded-full border border-[#4A90E2] bg-gradient-to-r from-[#CFE6F7] to-[#EAF4FB] text-[#294F7C] font-semibold text-xs sm:text-sm">
                Let’s get your car 🚗
              </button>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-row sm:flex-col gap-2 justify-center">

              <div className="w-full sm:w-[140px] h-[50px] sm:h-[60px] bg-[#F8FAFC] border border-[#4A90E2] rounded-xl flex flex-col items-center justify-center">
                <span className="text-[10px] sm:text-xs text-[#294F7C]">Lump Sum</span>
                <span className="font-bold text-[#294F7C] text-sm sm:text-base">₹ 11.3L</span>
              </div>

              <div className="hidden sm:block text-sm text-[#294F7C] text-center">
                OR
              </div>

              <div className="w-full sm:w-[140px] h-[50px] sm:h-[60px] bg-[#F8FAFC] border border-[#4A90E2] rounded-xl flex flex-col items-center justify-center">
                <span className="text-[10px] sm:text-xs text-[#294F7C]">Monthly SIP</span>
                <span className="font-bold text-[#294F7C] text-sm sm:text-base">₹ 24k</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-[280px] sm:w-[350px] md:w-[460px] h-[160px] sm:h-[200px] md:h-[240px] mt-8 mx-auto">
          <Image
            src="/images/car.svg"
            alt="car"
            fill
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}