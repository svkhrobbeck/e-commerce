import { logoPic } from "@/assets";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center px-4 md:px-[48px] py-[8px] justify-between sticky top-0 w-full z-50 shadow bg-white">
      <Link className="flex" href="/">
        <Image src={logoPic} alt="e-commerce logo" width={162} height={36} />
      </Link>

      <nav className="text-gray-600 text-sm">
        <ul className="flex items-center gap-[20px]" role="nav group">
          {/* links */}
          {navLinks.map(link => (
            <li key={link.route}>
              <Link href={link.route}>{link.text}</Link>
            </li>
          ))}
          {/* button */}
          <li>
            <Link
              className="button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-gray-600"
              href="/shopping-cart"
            >
              My Bag
            </Link>
          </li>
          {/* <li>
            <button className="button bg-transparent border-blue-600 hover:border-transparent hover:bg-blue-600 hover:text-white">
              Sign up
            </button>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
