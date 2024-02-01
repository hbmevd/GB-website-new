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
            path: `${import.meta.env.BASE_URL}dashboard/MainDashboard`,
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
            title: "Main Dashboard",
          },
          {
            path: `${import.meta.env.BASE_URL}dashboard/WhitelistVerifier`,
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
            title: "Whitelist Verifier",
          },
          // {
          //   path: `${import.meta.env.BASE_URL}pages/contacts`,
          //   type: "link",
          //   active: false,
          //   selected: false,
          //   doublemenu: false,
          //   title: "Team",
          // },
          {
            path: `${import.meta.env.BASE_URL}dashboard/Roadmap`,
            type: "link",
            active: false,
            selected: false,
            doublemenu: false,
            title: "Roadmap",
          },
          // {
          //   path: `${import.meta.env.BASE_URL}app/filemanagers/file`,
          //   title: "Files",
          //   type: "link",
          //   active: false,
          //   selected: false,
          //   doublemenu: false,
          // },
          // {
          //   path: `${import.meta.env.BASE_URL}advancedui/carousel`,
          //   type: "link",
          //   active: false,
          //   selected: false,
          //   doublemenu: false,
          //   title: "Carousel",
          // },
        ],
      },
      // {
      //   title: "NFTs",
      //   icon: (
      //     <svg className="ionicon side-menu__icon" viewBox="0 0 512 512">
      //       <title>Home</title>
      //       <path
      //         d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
      //         fill="none"
      //         stroke="currentColor"
      //         strokeLinecap="round"
      //         strokeLinejoin="round"
      //         strokeWidth="32"
      //       />
      //       <path
      //         d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69"
      //         fill="none"
      //         stroke="currentColor"
      //         strokeLinecap="round"
      //         strokeLinejoin="round"
      //         strokeWidth="32"
      //       />
      //     </svg>
      //   ),
      //   type: "sub",
      //   selected: false,
      //   doublemenu: false,
      //   active: false,

      //   children: [
      //     {
      //       path: `${import.meta.env.BASE_URL}dashboard/Evolution1`,
      //       type: "link",
      //       active: false,
      //       selected: false,
      //       doublemenu: false,
      //       title: "Evolution 1",
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}dashboard/Evolution2`,
      //       type: "link",
      //       active: false,
      //       selected: false,
      //       doublemenu: false,
      //       title: "Evolution 2",
      //     },
      //     {
      //       path: `${import.meta.env.BASE_URL}dashboard/Evolution3`,
      //       type: "link",
      //       active: false,
      //       selected: false,
      //       doublemenu: false,
      //       title: "Evolution 3",
      //     },
      //   ],
      // },
      // {
      //   title: "DAO",
      //   icon: (
      //     <svg className="ionicon side-menu__icon" viewBox="0 0 512 512">
      //       <title>Home</title>
      //       <path
      //         d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
      //         fill="none"
      //         stroke="currentColor"
      //         strokeLinecap="round"
      //         strokeLinejoin="round"
      //         strokeWidth="32"
      //       />
      //       <path
      //         d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69"
      //         fill="none"
      //         stroke="currentColor"
      //         strokeLinecap="round"
      //         strokeLinejoin="round"
      //         strokeWidth="32"
      //       />
      //     </svg>
      //   ),
      //   type: "sub",
      //   selected: false,
      //   doublemenu: false,
      //   active: false,

      //   children: [
      //     {
      //       path: `${import.meta.env.BASE_URL}dashboard/GorillaDao`,
      //       type: "link",
      //       active: false,
      //       selected: false,
      //       doublemenu: false,
      //       title: "Gorilla-DAO",
      //     },
      //   ],
      // },
      // {
      //   title: "EV1 FAUCET",
      //   icon: (
      //     <svg className="ionicon side-menu__icon" viewBox="0 0 512 512">
      //       <title>Home</title>
      //       <path
      //         d="M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212"
      //         fill="none"
      //         stroke="currentColor"
      //         strokeLinecap="round"
      //         strokeLinejoin="round"
      //         strokeWidth="32"
      //       />
      //       <path
      //         d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69"
      //         fill="none"
      //         stroke="currentColor"
      //         strokeLinecap="round"
      //         strokeLinejoin="round"
      //         strokeWidth="32"
      //       />
      //     </svg>
      //   ),
      //   type: "sub",
      //   selected: false,
      //   doublemenu: false,
      //   active: false,

      //   children: [
      //     {
      //       path: `${import.meta.env.BASE_URL}dashboard/EV1FAUCET`,
      //       type: "link",
      //       active: false,
      //       selected: false,
      //       doublemenu: false,
      //       title: "EV1 Reward Claim",
      //     },
      //   ],
      // },
    ],
  },
];
