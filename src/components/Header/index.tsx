import Logo from '../../assets/Logo.svg'
import Image from 'next/image'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { GoChevronDown } from "react-icons/go";
import Link from 'next/link';

export function Header() {
    return (
        <div className='h-14 flex items-center justify-between px-6 sm:px-32'>
            <Image src={Logo} alt='logo do site' className='w-32' />

            <Menu as="div" className="relative inline-block text-left z-20 lg:hidden">
                <div>
                    <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        Options
                        <GoChevronDown aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
                    </MenuButton>
                </div>

                <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                    <div className="py-1">
                        <MenuItem>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                                Home
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                                About
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                                Packages
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                                Places
                            </a>
                        </MenuItem>
                        <MenuItem>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                            >
                                Contact
                            </a>
                        </MenuItem>
                        <form action="#" method="POST">
                            <MenuItem>
                                <button
                                    type="submit"
                                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                                >
                                    Sign out
                                </button>
                            </MenuItem>
                        </form>
                    </div>
                </MenuItems>
            </Menu>

            <ul className='hidden lg:flex justify-center gap-10'>
                <li>
                    <Link href="#"className='hover:text-orange-600 hover:font-bold active:opacity-60'>Home</Link>
                </li>
                <li>
                    <Link href="#" className='hover:text-orange-600 hover:font-bold active:opacity-60'>About</Link>
                </li>
                <li>
                    <Link href="#" className='hover:text-orange-600 hover:font-bold active:opacity-60'>Packages</Link>
                </li>
                <li>
                    <Link href="#" className='hover:text-orange-600 hover:font-bold active:opacity-60'>Places</Link>
                </li>
                <li>
                    <Link href="#" className='hover:text-orange-600 hover:font-bold active:opacity-60'>Contact</Link>
                </li>
            </ul>

            <button className='bg-orangeButton py-2 px-4 text-white text-sm hover:opacity-80 active:opacity-60'>Acessar conta</button>
        </div>
    )
}