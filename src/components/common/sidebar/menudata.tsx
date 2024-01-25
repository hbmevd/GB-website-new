export const MENUITEMS: any = [
  {
    menutitle: "Main",

    Items: [
      {
        title: "Dashboards",
        icon: (
          <svg className="ionicon side-menu__icon" viewBox="0 0 512 512">
            <title>Home</title>
            <path
              d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <path
              d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
          </svg>
        ),
        type: "sub",
        selected: false,
        doublemenu: false,
        active: false,

        children: [
          {
            path: `${import.meta.env.BASE_URL}dashboard/index`,
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
            title: "General",
          },
          {
            path: `${import.meta.env.BASE_URL}dashboard/index-1`,
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
            title: "Ecommerce",
          },
          {
            path: `${import.meta.env.BASE_URL}dashboard/index-2`,
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
            title: "Projects",
          },
          {
            path: `${import.meta.env.BASE_URL}dashboard/index-3`,
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
            title: "HRM",
          },
          {
            path: `${import.meta.env.BASE_URL}dashboard/index-4`,
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
            title: "CRM",
          },
          {
            path: `${import.meta.env.BASE_URL}dashboard/index-5`,
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
            title: "Analytics",
          },
          {
            path: `${import.meta.env.BASE_URL}dashboard/index-6`,
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
            title: "Crypto",
          },
          {
            path: `${import.meta.env.BASE_URL}dashboard/index-7`,
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
            title: "Sales",
          },
        ],
      },
    ],
  },

  {
    menutitle: "WEB APPS",
    Items: [
      {
        title: "Apps",
        icon: (
          <svg className="ionicon side-menu__icon" viewBox="0 0 512 512">
            <title>Apps</title>
            <rect
              x="64"
              y="64"
              width="80"
              height="80"
              rx="40"
              ry="40"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="32"
            />
            <rect
              x="216"
              y="64"
              width="80"
              height="80"
              rx="40"
              ry="40"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="32"
            />
            <rect
              x="368"
              y="64"
              width="80"
              height="80"
              rx="40"
              ry="40"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="32"
            />
            <rect
              x="64"
              y="216"
              width="80"
              height="80"
              rx="40"
              ry="40"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="32"
            />
            <rect
              x="216"
              y="216"
              width="80"
              height="80"
              rx="40"
              ry="40"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="32"
            />
            <rect
              x="368"
              y="216"
              width="80"
              height="80"
              rx="40"
              ry="40"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="32"
            />
            <rect
              x="64"
              y="368"
              width="80"
              height="80"
              rx="40"
              ry="40"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="32"
            />
            <rect
              x="216"
              y="368"
              width="80"
              height="80"
              rx="40"
              ry="40"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="32"
            />
            <rect
              x="368"
              y="368"
              width="80"
              height="80"
              rx="40"
              ry="40"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="32"
            />
          </svg>
        ),
        type: "sub",
        selected: false,
        doublemenu: false,
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}app/cards`,
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
            title: "Cards",
          },
          {
            path: `${import.meta.env.BASE_URL}app/rangeslider`,
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
            title: "Range-slider",
          },
          {
            path: `${import.meta.env.BASE_URL}app/calendar`,
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
            title: "Calendar",
          },
          {
            path: `${import.meta.env.BASE_URL}app/contacts`,
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
            title: "Contacts",
          },

          {
            path: `${import.meta.env.BASE_URL}app/notification`,
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
            title: "Notification",
          },

          {
            path: `${import.meta.env.BASE_URL}app/treeview`,
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
            title: "Treeview",
          },

          {
            title: "File Manager",
            type: "sub",
            selected: false,
            doublemenu: false,
            active: false,
            children: [
              {
                path: `${import.meta.env.BASE_URL}app/filemanagers/filemanager`,
                title: "File Manager",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },
              {
                path: `${import.meta.env.BASE_URL}app/filemanagers/file`,
                title: "Files",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },
              {
                path: `${import.meta.env.BASE_URL}app/filemanagers/filedetails`,
                title: "File Details",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },
            ],
          },
          {
            title: "Mail",
            type: "sub",
            selected: false,
            doublemenu: false,
            active: false,
            children: [
              {
                path: `${import.meta.env.BASE_URL}app/mail/newmail`,
                title: "New Mail",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },
              {
                path: `${import.meta.env.BASE_URL}app/mail/inbox`,
                title: "Inbox",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },
              {
                path: `${import.meta.env.BASE_URL}app/mail/readmail`,
                title: "Read Mail",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },
              {
                path: `${import.meta.env.BASE_URL}app/mail/chat`,
                title: "Chat",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },

              {
                path: `${import.meta.env.BASE_URL}app/mail/mailsetting`,
                title: "Mail Setting",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },
            ],
          },
        ],
      },
      {
        title: "Elements",
        icon: (
          <svg className="ionicon side-menu__icon" viewBox="0 0 512 512">
            <title>Elements</title>
            <path
              d="M448 341.37V170.61A32 32 0 00432.11 143l-152-88.46a47.94 47.94 0 00-48.24 0L79.89 143A32 32 0 0064 170.61v170.76A32 32 0 0079.89 369l152 88.46a48 48 0 0048.24 0l152-88.46A32 32 0 00448 341.37z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M69 153.99l187 110 187-110M256 463.99v-200"
            />
          </svg>
        ),
        type: "sub",
        selected: false,
        doublemenu: false,
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}elements/alerts`,
            title: "Alerts",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}elements/avatar`,
            title: "Avatar",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}elements/breadcrumbs`,
            title: "Breadcrumbs",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}elements/buttons`,
            title: "Buttons",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}elements/badges`,
            title: "Badges",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}elements/dropdown`,
            title: "Dropdown",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },

          {
            path: `${import.meta.env.BASE_URL}elements/listgroup`,
            title: "List Group",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}elements/navigation`,
            title: "Navigation",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}elements/images`,
            title: "Images",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}elements/paginations`,
            title: "Pagination",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}elements/popover`,
            title: "Popover",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}elements/progress`,
            title: "Progress",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}elements/spinners`,
            title: "Spinners",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}elements/mediaObject`,
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
            title: "Media Object",
          },
          {
            path: `${import.meta.env.BASE_URL}elements/typography`,
            title: "Typography",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}elements/tooltip`,
            title: "Tooltip",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}elements/toast`,
            title: "Toast",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}elements/tags`,
            title: "Tags",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },

          {
            path: `${import.meta.env.BASE_URL}elements/tabs`,
            title: "Tabs",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
        ],
      },
      {
        title: "Advanced UI",
        icon: (
          <svg className="ionicon side-menu__icon" viewBox="0 0 512 512">
            <title>Advanced UI</title>
            <circle
              cx="256"
              cy="184"
              r="120"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <circle
              cx="344"
              cy="328"
              r="120"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <circle
              cx="168"
              cy="328"
              r="120"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="32"
            />
          </svg>
        ),
        type: "sub",
        selected: false,
        doublemenu: false,
        bookmark: true,
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}advancedui/accordions`,
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
            title: "Accordions",
          },
          {
            path: `${import.meta.env.BASE_URL}advancedui/carousel`,
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
            title: "Carousel",
          },
          {
            path: `${import.meta.env.BASE_URL}advancedui/collapse`,
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
            title: "Collapse",
          },
          {
            path: `${import.meta.env.BASE_URL}advancedui/modal`,
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
            title: "Modals",
          },
          {
            path: `${import.meta.env.BASE_URL}advancedui/timeline`,
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
            title: "Timeline",
          },
          {
            path: `${import.meta.env.BASE_URL}advancedui/sweetalert`,
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
            title: "Sweet Alert",
          },

          {
            path: `${import.meta.env.BASE_URL}advancedui/rating`,
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
            title: "Rating",
          },

          {
            path: `${import.meta.env.BASE_URL}advancedui/search`,
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
            title: "Search",
          },
          {
            path: `${import.meta.env.BASE_URL}advancedui/userlist`,
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
            title: "Userlist",
          },

          {
            path: `${import.meta.env.BASE_URL}advancedui/fileattachments`,
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
            title: "File Attachments",
          },
        ],
      },
    ],
  },

  {
    menutitle: "PAGES",
    Items: [
      {
        title: "Pages",
        icon: (
          <svg className="ionicon side-menu__icon" viewBox="0 0 512 512">
            <title>Pages</title>
            <rect
              x="128"
              y="128"
              width="336"
              height="336"
              rx="57"
              ry="57"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <path
              d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
          </svg>
        ),
        type: "sub",
        selected: false,
        doublemenu: false,
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}pages/invoice`,
            title: "Invoice",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}pages/profilepage`,
            title: "Profile",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}pages/pricing`,
            title: "Pricing",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}pages/gallery`,
            title: "Gallery",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}pages/todotask`,
            title: "Todotask",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}pages/widgets`,
            title: "Widgets",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}pages/faqs`,
            title: "FAQS",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}pages/emptypage`,
            title: "Empty Page",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },

          {
            path: `${import.meta.env.BASE_URL}pages/landing`,
            title: "Landing Page",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}pages/notificationlist`,
            title: "Notification-list",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}pages/aboutus`,
            title: "About Us",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}pages/settings`,
            title: "Settings",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            title: "Authentication",
            type: "sub",
            selected: false,
            doublemenu: false,
            active: false,
            children: [
              {
                path: `${import.meta.env.BASE_URL}pages/authentication/signin`,
                title: "Sign In",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },
              {
                path: `${import.meta.env.BASE_URL}pages/authentication/signup`,
                title: "Sign Up",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },
              {
                path: `${import.meta.env.BASE_URL
                  }pages/authentication/forgotpassword`,
                title: "Forgot Password",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },
              {
                path: `${import.meta.env.BASE_URL
                  }pages/authentication/resetpassword`,
                title: "Reset Password",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },
              {
                path: `${import.meta.env.BASE_URL
                  }pages/authentication/lockscreen`,
                title: "Lockscreen",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },
              {
                path: `${import.meta.env.BASE_URL
                  }pages/authentication/underconstruction`,
                title: "UnderConstruction",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },
              {
                path: `${import.meta.env.BASE_URL
                  }pages/authentication/404error`,
                title: "404 Error",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },
              {
                path: `${import.meta.env.BASE_URL
                  }pages/authentication/501error`,
                title: "501 Error",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },
              {
                path: `${import.meta.env.BASE_URL
                  }pages/authentication/505error`,
                title: "505 Error",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },
            ],
          },
          {
            title: "E-Commerce",
            type: "sub",
            selected: false,
            doublemenu: false,
            active: false,
            children: [
              {
                path: `${import.meta.env.BASE_URL}pages/e-commerce/shop`,
                title: "Shop",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },
              {
                path: `${import.meta.env.BASE_URL
                  }pages/e-commerce/productDetails`,
                title: "Product Details",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },
              {
                path: `${import.meta.env.BASE_URL}pages/e-commerce/addproduct`,
                title: "Add Products",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },
              {
                path: `${import.meta.env.BASE_URL}pages/e-commerce/cart`,
                title: "Cart",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },
              {
                path: `${import.meta.env.BASE_URL
                  }pages/e-commerce/orderdetails`,
                title: "Order Details",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },
              {
                path: `${import.meta.env.BASE_URL}pages/e-commerce/checkout`,
                title: "Checkout",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },
              {
                path: `${import.meta.env.BASE_URL}pages/e-commerce/wishlist`,
                title: "Wish-list",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },
            ],
          },

          {
            title: "Blog",
            type: "sub",
            selected: false,
            doublemenu: false,
            active: false,
            children: [
              {
                path: `${import.meta.env.BASE_URL}pages/blog/blog`,
                title: "Blog",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },
              {
                path: `${import.meta.env.BASE_URL}pages/blog/blogdetails`,
                title: "Blog Details",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },
              {
                path: `${import.meta.env.BASE_URL}pages/blog/Blogedit`,
                title: "Blog Edit",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },
            ],
          },
          {
            title: "Forms",
            type: "sub",
            selected: false,
            doublemenu: false,
            active: false,
            children: [
              {
                path: `${import.meta.env.BASE_URL}pages/form/formelements`,
                title: "Form Elements",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },
              {
                path: `${import.meta.env.BASE_URL}pages/form/formadvance`,
                title: "Form advanced",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },
              {
                path: `${import.meta.env.BASE_URL}pages/form/formlayout`,
                title: "Form  Layouts",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },
              {
                path: `${import.meta.env.BASE_URL}pages/form/formvalidation`,
                title: "Form Validation",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },
              {
                path: `${import.meta.env.BASE_URL}pages/form/formwizards`,
                title: "Form Wizards",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },
              {
                path: `${import.meta.env.BASE_URL}pages/form/formeditors`,
                title: "Form Editor",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },
              {
                path: `${import.meta.env.BASE_URL}pages/form/formsizes`,
                title: "Form Sizes",
                type: "link",
                active: false,
                selected: false,
                doublemenu: false,
              },
            ],
          },
        ],
      },
      {
        title: "Utilities",
        icon: (
          <svg className="ionicon side-menu__icon" viewBox="0 0 512 512">
            <title>Utilities</title>
            <path
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M336 320H32L184 48l152 272zM265.32 194.51A144 144 0 11192 320"
            />
          </svg>
        ),
        type: "sub",
        selected: false,
        doublemenu: false,
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}utilities/background`,
            title: "Background",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}Utilities/border`,
            title: "Border",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}Utilities/display`,
            title: "Display",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}Utilities/flex`,
            title: "Flex",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}Utilities/height`,
            title: "Height",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}Utilities/margin`,
            title: "Margin",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}Utilities/padding`,
            title: "Padding",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}Utilities/position`,
            title: "Position",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}Utilities/width`,
            title: "Width",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}Utilities/extras`,
            title: "Extras",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
        ],
      },
    ],
  },
  {
    menutitle: "MULTI LEVEL",
    Items: [
      {
        title: "Menu-levels",
        icon: (
          <svg className="ionicon side-menu__icon" viewBox="0 0 512 512">
            <title>Menu Level</title>
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="32"
              d="M80 160h352M80 256h352M80 352h352"
            />
          </svg>
        ),
        type: "sub",
        selected: false,
        doublemenu: false,
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}menulevel/level-1`,
            title: "Level-1",
            type: "empty",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            title: "Level-2",
            type: "sub",
            selected: false,
            doublemenu: false,
            active: false,
            children: [
              {
                path: `${import.meta.env.BASE_URL}menulevel/level2-1`,
                title: "Level-2.1",
                type: "empty",
                active: false,
                selected: false,
                doublemenu: false,
              },
              {
                path: `${import.meta.env.BASE_URL}menulevel/level2-2`,
                title: "Level-2.2",
                type: "empty",
                active: false,
                selected: false,
                doublemenu: false,
              }
            ],
          },
        ],
      },
    ],
  },

  {
    menutitle: "SWiTCHER",
    Items: [
      {
        path: `${import.meta.env.BASE_URL}switcherpage`,
        icon: (
          <svg className="ionicon side-menu__icon" viewBox="0 0 512 512">
            <title>Switcher</title>
            <circle
              cx="368"
              cy="256"
              r="128"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <rect
              x="16"
              y="128"
              width="480"
              height="256"
              rx="128"
              ry="128"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="32"
            />
          </svg>
        ),
        type: "link",
        selected: false,
        doublemenu: false,
        active: false,
        title: "switcher",
      },
    ],
  },
  {
    menutitle: "GENERAL",
    Items: [
      {
        title: "Icons",
        icon: (
          <svg className="ionicon side-menu__icon" viewBox="0 0 512 512">
            <title>Icons</title>
            <circle
              cx="256"
              cy="256"
              r="192"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="32"
            />
            <circle
              cx="256"
              cy="256"
              r="64"
              fill="none"
              stroke="currentColor"
              strokeMiterlimit="10"
              strokeWidth="32"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="32"
              d="M224 192L171 85M288 192l53-107M327.55 255.81l119.41.13M299.09 313.13l72.25 95.06M184.45 255.81l-119.41.13M212.91 313.13l-72.25 95.06"
            />
          </svg>
        ),
        type: "sub",
        selected: false,
        doublemenu: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}icon/fontAwesome`,
            title: "Font Awesome",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}icon/materialDesignIcons`,
            title: "Material Design Icons",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}icon/simpleLineIcons`,
            title: "Simple Line Icons",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}icon/featherIcons`,
            title: "Feather Icons",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}icon/ionicIcons`,
            title: "Ionic Icons",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}icon/flagIcons`,
            title: "Flag Icons",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}icon/pe7Icons`,
            title: "Pe7 Icons",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}icon/themifyIcons`,
            title: "Themify Icons",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}icon/typiconsIcons`,
            title: "Typicons Icons",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}icon/weatherIcons`,
            title: "Weather Icons",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}icon/materialIcons`,
            title: "Material Icons",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}icon/bootstrapIcons`,
            title: "Bootstrap Icons",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
        ],
      },
      {
        title: "Charts",
        icon: (
          <svg className="ionicon side-menu__icon" viewBox="0 0 512 512">
            <title>Charts</title>
            <rect
              x="64"
              y="320"
              width="48"
              height="160"
              rx="8"
              ry="8"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <rect
              x="288"
              y="224"
              width="48"
              height="256"
              rx="8"
              ry="8"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <rect
              x="400"
              y="112"
              width="48"
              height="368"
              rx="8"
              ry="8"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <rect
              x="176"
              y="32"
              width="48"
              height="448"
              rx="8"
              ry="8"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
          </svg>
        ),
        type: "sub",
        selected: false,
        doublemenu: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}charts/chartJs`,
            title: " ChartJs",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}charts/echart`,
            title: "Echart",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },

          {
            path: `${import.meta.env.BASE_URL}charts/apexcharts`,
            title: "ApexCharts",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
        ],
      },
    ],
  },

  {
    menutitle: "COMPONENTS",
    Items: [
      {
        title: "Tables",
        icon: (
          <svg className="ionicon side-menu__icon" viewBox="0 0 512 512">
            <title>Tables</title>
            <rect
              x="64"
              y="176"
              width="384"
              height="256"
              rx="28.87"
              ry="28.87"
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="32"
              d="M144 80h224M112 128h288"
            />
          </svg>
        ),
        type: "sub",
        selected: false,
        doublemenu: false,
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}table/basictable`,
            title: " Basic Tables",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}table/datatable`,
            title: "Data Tables ",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
          {
            path: `${import.meta.env.BASE_URL}table/edittabletable`,
            title: "Editable Table ",
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
          },
        ],
      },

      {
        title: "Maps",
        icon: (
          <svg className="ionicon side-menu__icon" viewBox="0 0 512 512">
            <title>Maps</title>
            <path
              d="M448 64L64 240.14h200a8 8 0 018 8V448z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
          </svg>
        ),
        type: "sub",
        selected: false,
        doublemenu: false,
        active: false,
        children: [
          {
            path: `${import.meta.env.BASE_URL}maps/leafletmaps`,
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
            title: "Leaflet Maps ",
          },
          {
            path: `${import.meta.env.BASE_URL}maps/simplemaps`,
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
            title: "Simple Maps ",
          },
        ],
      },
    ],
  },
];
