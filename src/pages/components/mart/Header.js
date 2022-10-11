import Image from 'next/image';
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '../../../slices/basketSlice';
import logo from '../../../../images/logo.png';

function Header(props) {
    const { data: session, status } = useSession();
    const router = useRouter();
    const items = useSelector(selectItems);

    return (
        <header className="top-0 z-50" style={{ position: 'relative' }}>
            {/* Top nav */}
            <div
                className="flex items-center bg-amazon_blue p-1 flex-grow py-2"
                style={{ width: '86vw' }}>
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                        onClick={() => router.push('/home/StarMart')}
                        src={logo}
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer active:transform active:scale-90"
                    />
                </div>

                {/* Custom search bar */}
                <div className="hidden sm:flex items-center h-10 rounded-md bg-yellow-400 hover:bg-yellow-500 flex-grow cursor-pointer">
                    <input
                        type="text"
                        className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
                        placeholder={
                            router.route === '/' ? '🔎 Search in products listed below…' : ''
                        }
                        onInput={(event) =>
                            router.route === '/' && props.onSearchValue(event.target.value)
                        }
                    />
                    <SearchIcon className="h-12 p-4" />
                </div>

                {/* Right */}
                <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
                    <div
                        className="relative link flex items-center"
                        onClick={() => router.push('/mart/checkout')}>
                        <span
                            className={`absolute top-0 right-0 md:right-10 h-4 ${
                                items.length >= 10 ? 'w-6' : 'w-4'
                            } bg-yellow-400 text-center rounded-full text-black font-bold`}>
                            {items.length}
                        </span>
                        <ShoppingCartIcon className="h-10" />
                        <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
