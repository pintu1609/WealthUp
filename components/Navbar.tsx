import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">

      <Image
        src="/images/wealthup-new-whitelogo.svg"
        alt="WealthUp Logo"
        width={90}
        height={40}
        priority
      />

      <button className="px-5 py-2 rounded-full bg-white/40 backdrop-blur-md border border-[#4A90E2] text-[#294F7C] font-medium shadow-md hover:shadow-lg transition">
        Login
      </button>

    </nav>
  );
}