import { Button } from "../Button";
import { Navbar } from "../Navbar";

export const Header = () => {
  return (
    <header className="flex justify-between items-center py-8 px-4 max-w-full mx-14  text-center">
      <img
        src="https://assets-global.website-files.com/64ce0c7794461659b9119833/64d4bdb6dc862bb7e3c0c74f_Frame%202.svg"
        loading="lazy"
        alt="Induced-image"
        width={142}
        height={32}
      />
      <Navbar />
      <Button classname="py-3 px-7 text-lg font-semibold font-syne border-2 border-white/30 rounded-[40px] text-center hover:text-black hover:bg-white transition duration-300">
        Join Waitlist
      </Button>
    </header>
  );
};
