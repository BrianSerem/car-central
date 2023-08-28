'use client';
import { SearchManufacturerProps } from "@types"
import { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react"
import Image from "next/image";
import { manufacturers } from "@constants";


const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {

    const [query, setQuery] = useState('');

    return (
        <div className="search-manufacturer">
            <Combobox >
                <div className="relative w-full">
                    < Combobox.Button className='absolute top-[14px]'>
                        <Image src='/car-logo.svg' width={20} height={20} alt='car logo' className="ml-4" />
                    </Combobox.Button>
                    <Combobox.Input
                        className='search-manufacturer__input'
                        placeholder="Volkswagen"
                        displayValue={(manufacturer: string) => manufacturer}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    < Transition as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setQuery("")} // Reset the search query after the transition completes
                    >
                        
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer
