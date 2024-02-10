const NavMenu = [
  {
    id: 1,
    name: "Products",
  },
  {
    id: 2,
    name: "How It Works",
  },
  {
    id: 3,
    name: "Features",
  },
  {
    id: 4,
    name: "Investors",
  },
];

type menu = {
  id: number;
  name: string;
};

export const Navbar = () => {
  return (
    <div className="bg-navbar-gradient backdrop-blur-[5px] border border-white/20 rounded-[40px] flex justify-center items-center">
      {NavMenu.map((menu: menu) => (
        <ul key={menu.id} className="bg-navbar-gradient backdrop-blur-[5px]   ">
          <li className="text-xl font-semibold px-4 py-2 text-white/90 hover:text-white cursor-pointer">
            {menu.name}
          </li>
        </ul>
      ))}
    </div>
  );
};

{
  /* <ul className=" bg-navbar-gradient backdrop-blur-[5px] border border-white/50 rounded-[40px] flex justify-center items-center text-white/60 hover:text-white">
  <li className="text-xl font-semibold px-4 py-2">Products</li>
  <li className="text-xl font-semibold px-4 py-2">How It Works</li>
  <li className="text-xl font-semibold px-4 py-2">Features</li>
  <li className="text-xl font-semibold px-4 py-2">Investors</li>
</ul> */
}
