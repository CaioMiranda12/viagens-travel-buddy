import Logo from '../../assets/Logo.svg'
import Image from 'next/image'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { GoChevronDown } from "react-icons/go";
import Link from 'next/link';

export function Header() {
    return (
        <div className='h-20 flex items-center justify-between px-6 sm:px-32 border-b'>
            <Link href='/'>
                <Image src={Logo} alt='logo do site' className='w-40' />
            </Link>

            <Menu as="div" className="relative inline-block text-left z-20 lg:hidden">
                <div>
                    <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        Páginas
                        <GoChevronDown aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
                    </MenuButton>
                </div>

                <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                    <div className="py-1">
                        <MenuItem>
                            <Link
                                href="/"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                                Inicio
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                                href="/sobre"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                                Sobre
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                                href="/pacotes"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                                Pacotes
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                                href="/lugares"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                                Lugares
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link
                                href="/contato"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                                Contato
                            </Link>
                        </MenuItem>
                        {/* <form action="#" method="POST">
                            <MenuItem>
                                <button
                                    type="submit"
                                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                >
                                    Sign out
                                </button>
                            </MenuItem>
                        </form> */}
                    </div>
                </MenuItems>
            </Menu>

            <ul className='hidden lg:flex justify-center gap-10'>
                <li>
                    <Link href="/"className='hover:text-orange-600 hover:font-bold active:opacity-60 text-xl'>Inicio</Link>
                </li>
                <li>
                    <Link href="/sobre" className='hover:text-orange-600 hover:font-bold active:opacity-60 text-xl'>Sobre</Link>
                </li>
                <li>
                    <Link href="/pacotes" className='hover:text-orange-600 hover:font-bold active:opacity-60 text-xl'>Pacotes</Link>
                </li>
                <li>
                    <Link href="/lugares" className='hover:text-orange-600 hover:font-bold active:opacity-60 text-xl'>Lugares</Link>
                </li>
                <li>
                    <Link href="/contato" className='hover:text-orange-600 hover:font-bold active:opacity-60 text-xl'>Contato</Link>
                </li>
            </ul>

            <button className='bg-orangeButton py-2 px-4 text-white text-lg hover:opacity-80 active:opacity-60'>Agendar</button>
        </div>
    )
}