import Link from 'next/link';
import Image from 'next/image';

const links = [
  { href: '/guide', title: 'Guide' },
  { href: '/pricing', title: 'Pricing' },
  { href: '/login', title: 'Login' },
];

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-4 px-4'>
      <Link href='/'>
        <Image
          src='/finta-logo-light.svg'
          alt='Logo'
          width={67.5}
          height={67.5}
        />
      </Link>

      <div className='flex items-center gap-8'>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            title={link.title}
            className='text-neutral-900 font-medium hover:text-neutral-600 transition duration-200 text-sm '
          >
            {link.title}
          </Link>
        ))}

        <button className='bg-blue-brand text-white rounded-lg shadow-sm py-2 px-3 text-sm font-medium hover:bg-blue-brand-dark transition duration-200 text-shadow-xs hover:cursor-pointer'>
          Get Started
        </button>
      </div>
    </div>
  );
};
export default Navbar;
