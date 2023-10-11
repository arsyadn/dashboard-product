"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import Icon from "@mdi/react";
import {
  mdiPackageVariant as productsIcon,
  mdiCartVariant as cartIcon,
  mdiMenu as hamburgerIcon,
} from "@mdi/js";
import { useRouter } from "next/router";

export interface SidebarComp {
  children: React.ReactNode;
}

const Sidebar = (props: SidebarComp) => {
  const arrNav = [
    {
      id: 1,
      name: "Products",
      icon: productsIcon,
      link: "/",
    },
    {
      id: 2,
      name: "Carts",
      icon: cartIcon,
      link: "/cart",
    },
  ];

  const [openSidebar, setOpenSidebar] = useState(false);
  const router = useRouter();
  const currentPath = router.pathname;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setOpenSidebar(true);
      } else {
        setOpenSidebar(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-[#ecebf1]" style={{ minHeight: "100vh" }}>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        data-drawer-show="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        onClick={() => setOpenSidebar(true)}
      >
        <Icon path={hamburgerIcon} size={1} />
      </button>

      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
          <ul className="space-y-2 font-medium">
            {arrNav?.map((data) => {
              return (
                <li key={data?.id}>
                  <Link
                    onClick={() => setOpenSidebar(false)}
                    href="#"
                    className={`flex items-center p-2 ${
                      data?.link === currentPath
                        ? "text-white bg-[#2642ca]"
                        : "text-gray-900 hover:bg-gray-100 hover:text-[#2642ca]"
                    } rounded-lg group`}
                  >
                    <Icon path={data?.icon} size={1} />
                    <span className="ml-3">{data?.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
      <div className="p-4 sm:ml-64 ">{props.children}</div>
    </div>
  );
};

export default Sidebar;
