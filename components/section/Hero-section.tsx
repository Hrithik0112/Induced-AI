import { Button } from "../Button";

export const HeroSection = () => {
  return (
    <div className="w-full max-w-[1392px] px-5 ">
      <main className="flex flex-col items-center py-24">
        <div className="flex mb-3 py-2 px-4 text-white/70 bg-black/30 font-semibold leading-6 text-lg capitalize">
          <span>🎉 </span>
          Announcing our $2.3M funding Round
        </div>
        <div className="mt-4 font-syne text-7xl font-medium leading-[88px] text-white text-center">
          AI workers to automate your browser <br /> tasks.
        </div>
        <div className="mb-3 text-white/80 text-center">
          Induced agents run 24/7 in the cloud to complete manual tasks on a browser with
          <br /> human-like reasoning capabilities.
        </div>
        <div className="flex gap-4 mt-10">
          <input
            placeholder="Enter Your Email"
            className="w-[360px] text-lg py-3 px-7 text-white border border-white/30 rounded-[50px] bg-black "
          />
          <Button classname="py-3 px-7 text-lg text-black bg-white font-semibold font-syne border-2 border-white/30 rounded-[40px] text-center hover:text-white hover:bg-black transition duration-300">
            Submit
          </Button>
        </div>
        <div className="mt-5 text-lg">
          Next 20 invites rolling out in: 0 days 5 hours 39 minutes 45 seconds
        </div>
      </main>
    </div>
  );
};
