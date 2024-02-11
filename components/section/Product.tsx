export const Product = () => {
  return (
    <div className="w-full max-w-[1392px] px-5 ">
      <main className="flex flex-col items-center py-24">
        <video autoPlay loop>
          <source src="/product.mp4" />
        </video>
      </main>
    </div>
  );
};
/**
 * <div className="relative overflow-visible">
      <div className="w-[1000px] h-full bg-product-gradient blur-[100px] backdrop-filter rounded-[50%] absolute inset-0 bg-opacity-50"></div>
      <section className="w-full max-w-[1120px] px-5 mx-24">
        <main className="py-12">
          <div className="w-auto h-auto min-h-[500px] transform-[translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(25deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)] ">
            <video
              autoPlay
              loop
              className="h-full w-full object-cover absolute m-auto bg-[url('/product-section.jpg')] -z-50 bg-cover overflow-clip inset-full"
            >
              <source src="/product.mp4" />
            </video>
          </div>
        </main>
      </section>
    </div>
 */
