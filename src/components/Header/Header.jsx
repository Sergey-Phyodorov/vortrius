import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function Header() {
  const links = ['Ecosystem', 'Games', 'Concepts', 'Career', 'Documentation'];
  const location = useLocation();
  const [color, setColor] = useState('bg-blue-600 text-white');

  useEffect(() => {
    const colors = {
      '/': '#ffffff',
      '/ecosystem': '#1d4ed8',
      // добавьте другие пути и цвета по желанию
    };

    setColor(colors[location.pathname] || 'bg-blue-600 text-white');
  }, [location.pathname]);

  return (
    <header className={`flex justify-around pt-8 px-4 fixed w-full z-50`}>
      <div className="w-14 h-10 left-[60px] top-[-60px] relative">
        <div className="w-14 h-3.5 left-0 top-[25px] absolute">
          <img
            className=" left-[-13.07px] top-0 absolute"
            src="/img/Group.png"
          />
          <div className="w-16 h-3.5 left-[-10.95px] top-[2.75px] absolute bg-blue-600" />
        </div>
      </div>

      <div className="items-start italic gap-9 inline-flex justify-around">
        {links.map((link, index) => (
          <Link
            style={{ color: `${color}` }}
            key={index}
            to={`/${link.toLowerCase()}`}
            className=" text-lg font-bold font-['Gilroy'] tracking-wide"
          >
            {link}
          </Link>
        ))}
      </div>
      <div className="w-32 h-9 relative">
        <button
          style={{
            border: 'solid 1px white',
            backgroundColor: 'white',
            color: '#1e40af',
            clipPath:
              'polygon(10px 0,100% 0,100% calc(100% - 10px), calc(100% - 10px) 100%,0 100%,0 10px)',
          }}
          className=" border-l px-3 py-1 text-center text-xs font-bold font-['Montserrat'] capitalize rounded-tl-lg rounded-br-lg"
        >
          Get started
        </button>
      </div>
    </header>
  );
}
