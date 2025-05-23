// import {
//   Navbar as HeroUINavbar,
//   NavbarContent,
//   NavbarMenu,
//   NavbarMenuToggle,
//   NavbarBrand,
//   NavbarItem,
//   NavbarMenuItem,
// } from "@heroui/navbar";
// import { Button } from "@heroui/button";
// import { Kbd } from "@heroui/kbd";
// import { Link } from "@heroui/link";
// import { Input } from "@heroui/input";
// import { link as linkStyles } from "@heroui/theme";
// import NextLink from "next/link";
// import clsx from "clsx";

// import { siteConfig } from "@/config/site";
// import { ThemeSwitch } from "@/components/theme-switch";
// import {
//   TwitterIcon,
//   GithubIcon,
//   DiscordIcon,
//   HeartFilledIcon,
//   SearchIcon,
//   Logo,
// } from "@/components/icons";

// export const Navbar = () => {
//   const searchInput = (
//     <Input
//       aria-label="Search"
//       classNames={{
//         inputWrapper: "bg-default-100",
//         input: "text-sm",
//       }}
//       endContent={
//         <Kbd className="hidden lg:inline-block" keys={["command"]}>
//           K
//         </Kbd>
//       }
//       labelPlacement="outside"
//       placeholder="Search..."
//       startContent={
//         <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
//       }
//       type="search"
//     />
//   );

//   return (
//     <HeroUINavbar maxWidth="xl" position="sticky">
//       <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
//         <NavbarBrand as="li" className="gap-3 max-w-fit">
//           <NextLink className="flex justify-start items-center gap-1" href="/">
//             <Logo />
//             <p className="font-bold text-inherit">ACME</p>
//           </NextLink>
//         </NavbarBrand>
//         <ul className="hidden lg:flex gap-4 justify-start ml-2">
//           {siteConfig.navItems.map((item) => (
//             <NavbarItem key={item.href}>
//               <NextLink
//                 className={clsx(
//                   linkStyles({ color: "foreground" }),
//                   "data-[active=true]:text-primary data-[active=true]:font-medium",
//                 )}
//                 color="foreground"
//                 href={item.href}
//               >
//                 {item.label}
//               </NextLink>
//             </NavbarItem>
//           ))}
//         </ul>
//       </NavbarContent>

//       <NavbarContent
//         className="hidden sm:flex basis-1/5 sm:basis-full"
//         justify="end"
//       >
//         <NavbarItem className="hidden sm:flex gap-2">
//           <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
//             <TwitterIcon className="text-default-500" />
//           </Link>
//           <Link isExternal aria-label="Discord" href={siteConfig.links.discord}>
//             <DiscordIcon className="text-default-500" />
//           </Link>
//           <Link isExternal aria-label="Github" href={siteConfig.links.github}>
//             <GithubIcon className="text-default-500" />
//           </Link>
//           <ThemeSwitch />
//         </NavbarItem>
//         <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
//         <NavbarItem className="hidden md:flex">
//           <Button
//             isExternal
//             as={Link}
//             className="text-sm font-normal text-default-600 bg-default-100"
//             href={siteConfig.links.sponsor}
//             startContent={<HeartFilledIcon className="text-danger" />}
//             variant="flat"
//           >
//             Sponsor
//           </Button>
//         </NavbarItem>
//       </NavbarContent>

//       <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
//         <Link isExternal aria-label="Github" href={siteConfig.links.github}>
//           <GithubIcon className="text-default-500" />
//         </Link>
//         <ThemeSwitch />
//         <NavbarMenuToggle />
//       </NavbarContent>

//       <NavbarMenu>
//         {searchInput}
//         <div className="mx-4 mt-2 flex flex-col gap-2">
//           {siteConfig.navMenuItems.map((item, index) => (
//             <NavbarMenuItem key={`${item}-${index}`}>
//               <Link
//                 color={
//                   index === 2
//                     ? "primary"
//                     : index === siteConfig.navMenuItems.length - 1
//                       ? "danger"
//                       : "foreground"
//                 }
//                 href="#"
//                 size="lg"
//               >
//                 {item.label}
//               </Link>
//             </NavbarMenuItem>
//           ))}
//         </div>
//       </NavbarMenu>
//     </HeroUINavbar>
//   );
// };

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import NextLink from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";

const menuSections = [
  {
    title: "Proctology",
    items: [
      "Piles Treatment",
      "Fistula Treatment",
      "Fissure Treatment",
      "Pollonodal sinus Treatment",
      "Rectal prolapse",
    ],
  },
  {
    title: "Laparoscopy",
    items: [
      "Hernia surgery",
      "Gallstone surgery",
      "Appendectomy",
      "Inguinal Hernia Surgery",
      "Umbillical Hernia surgery",
    ],
  },
  {
    title: "Urology",
    items: [
      "Stapler Circumcision",
      "Kidney Stone Treatment (RIRS/PCNL/URSL)",
      "Enlarged Prostate Surgery",
    ],
  },
  {
    title: "Gynaecology",
    items: [
      "Hysterectomy",
      "Hymenoplasty",
      "Vaginoplasty",
      "Labiaplasty",
      "Myomectomy",
      "PCOS-PCOD Treatment",
    ],
  },
  {
    title: "Aesthetics",
    items: ["Lipoma", "Sebaceous Cyst", "Breast Lump", "Breast Augmentation"],
  },
  {
    title: "Vascular",
    items: ["Varicose Veins", "AV Fistula"],
  },
  {
    title: "Opthalmology",
    items: ["Cataract"],
  },
  {
    title: "Cardiology",
    items: [],
  },
  {
    title: "Diagnostic",
    items: [],
  },
  {
    title: "Post Surgery Care",
    items: [],
  },
];

export const Navbar = () => {
  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      className="bg-white dark:bg-gray-800"
    >
      {/* Brand Section */}
      <NavbarContent justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">ACME</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navigation */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuSections.map((section, idx) => (
          <NavbarItem key={idx} className="relative group">
            <Link
              href="#"
              size="md"
              className="text-clinic-primary font-semibold uppercase"
            >
              {section.title}
            </Link>
            {/* Dropdown for sections with items */}
            {section.items.length > 0 && (
              <div className="absolute hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg rounded-md mt-2 p-4 w-64 z-10">
                {section.items.map((item, i) => (
                  <Link
                    key={`${item}-${i}`}
                    href="#"
                    size="sm"
                    className="block py-1 text-clinic-primary hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            )}
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Theme Switch and Mobile Menu Toggle
      <NavbarContent className="sm:flex gap-4" justify="end">
        <NavbarItem className="flex items-center">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarMenuToggle className="sm:hidden" />
      </NavbarContent> */}

      {/* Mobile Menu */}
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-4 text-clinic-primary">
          {menuSections.map((section, idx) => (
            <div key={idx}>
              <h4 className="font-semibold text-sm text-clinic-primary uppercase mb-2">
                {section.title}
              </h4>
              <div className="flex flex-col gap-1">
                {section.items.map((item, i) => (
                  <NavbarMenuItem key={`${item}-${i}`}>
                    <Link href="#" size="md">
                      {item}
                    </Link>
                  </NavbarMenuItem>
                ))}
              </div>
            </div>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
