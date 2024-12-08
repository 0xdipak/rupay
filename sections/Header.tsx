import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="max-w-7xl mx-auto py-4 sticky top-0 z-50">
      <div className="flex justify-between items-center  md:p-2.5 rounded-xl">
        <div>
          <Link href={"/"}>
            <p
              className="font-bold text-3xl bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))]
        text-transparent bg-clip-text text-center"
            >
              RuPay
            </p>
          </Link>
        </div>

        <div className="flex justify-center items-center gap-8">
          <div className="hidden md:block">
            <nav className="flex gap-8 text-sm">
              <Link
                href="/"
                className="text-white/70 hover:text-white transition"
              >
                Whitepaper
              </Link>
              <Link
                href="/"
                className="text-white/70 hover:text-white transition"
              >
                Mission & Vision
              </Link>
            </nav>
          </div>

          <Link
            href="/"
            className="flex gap-4 items-center hover:border-[#DC143C] hover:text-[#DC143C] border py-4 px-4 rounded-xl"
            target="_blank"
          >
            Launch app
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
