import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function DropdownMenu({ buttonLabel, items }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2  text-sm font-semibold text-richblack-900 shadow-md ring-1 ring-inset ring-white hover:bg-richblack-50">
          {buttonLabel}
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 h-5 w-5 text-richblack-400 "
          />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {items.map((item, index) => (
            <MenuItem key={index}>
              {item.href ? (
                <a
                  href={item.href}
                  className="block px-4 py-2 text-sm text-richblack-700 data-[focus]:bg-richblack-100 data-[focus]:text-richblack-900 data-[focus]:outline-none"
                >
                  {item.label}
                </a>
              ) : item.onClick ? (
                <button
                  onClick={item.onClick}
                  className="block w-full px-4 py-2 text-left text-sm text-richblack-700 data-[focus]:bg-richblack-100 data-[focus]:text-richblack-900 data-[focus]:outline-none"
                >
                  {item.label}
                </button>
              ) : null}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}

export default DropdownMenu;
