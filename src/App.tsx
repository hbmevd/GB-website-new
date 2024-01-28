import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Fragment } from "react";
import Loader from "./components/common/loader/loader";
import Custompages from "./custompages.tsx";
import Profilepage from "./containers/pages/profilepage.tsx/profilepage.tsx";
import Signin from "./containers/pages/authentication/signin/signin.tsx";
import Signup from "./containers/pages/authentication/signup/signup.tsx";
import Error404 from "./containers/pages/authentication/error404/error404.tsx";
import Landingpage from "./landingpage.tsx";
import Landing from "./containers/pages/Web3pages/landing.tsx";
import Error505 from "./containers/pages/authentication/error505/error505.tsx";
import Error501 from "./containers/pages/authentication/error501/error501.tsx";
import Underconstruction from "./containers/pages/authentication/underconstruction/underconstruction.tsx";
import Lockscreen from "./containers/pages/authentication/lockscreen/lockscreen.tsx";
import Restpassword from "./containers/pages/authentication/restpassword/restpassword.tsx";
import Forgotpassword from "./containers/pages/authentication/forgotpassword/forgotpassword.tsx";
import Sales from "./containers/dashboard/sales/sales.tsx";
import Cards from "./containers/apps/cards/cards.tsx";
import Rangeslider from "./containers/apps/rangeslider/rangeslider.tsx";
import Calendar from "./containers/apps/calendar/calendar.tsx";
import Contactus from "./containers/apps/contacts/contact.tsx";
import Notifications from "./containers/apps/notifications/notifications.tsx";
import Treeview from "./containers/apps/treeview/treeview.tsx";
import Files from "./containers/apps/filesmanager/files/files.tsx";
import Filedetails from "./containers/apps/filesmanager/filedetails/filedetails.tsx";
import FilemanagerList from "./containers/apps/filesmanager/filemanagerList/filemanager.tsx";
import Newmail from "./containers/apps/mail/newmail/newmail.tsx";
import Inbox from "./containers/apps/mail/inbox/inbox.tsx";
import Readmail from "./containers/apps/mail/readmail/readmail.tsx";
import Chat from "./containers/apps/mail/chat/chat.tsx";
import Mailsetting from "./containers/apps/mail/mailsettings/mailsetting.tsx";
import Alerts from "./components/ui/elements/alerts/alerts.tsx";
import Bredcrumbs from "./components/ui/elements/bredcrumbs/bredcrumbs.tsx";
import Buttons from "./components/ui/elements/buttons/buttons.tsx";
import Badges from "./components/ui/elements/badges/badges.tsx";
import Dropdowns from "./components/ui/elements/dropdowns/dropdowns.tsx";
import ListGroups from "./components/ui/elements/listgroup/listgroup.tsx";
import Navigation from "./components/ui/elements/navigation/navigation.tsx";
import Pagination from "./components/ui/elements/pagination/pagination.tsx";
import Popovers from "./components/ui/elements/popover/popover.tsx";
import Progress from "./components/ui/elements/progress/progress.tsx";
import Spinners from "./components/ui/elements/spinner/spinner.tsx";
import Mediaobject from "./components/ui/elements/mediaobject/mediaobject.tsx";
import Typography from "./components/ui/elements/typography/typography.tsx";
import Tooltips from "./components/ui/elements/tooltip/tooltip.tsx";
import Toasts from "./components/ui/elements/toasts/toast.tsx";
import Tags from "./components/ui/elements/tags/tags.tsx";
import Tabss from "./components/ui/elements/tabs/tabs.tsx";
import Accordin from "./containers/advanceui/accordin/accordin.tsx";
import Carousel from "./containers/advanceui/carousel/carousel.tsx";
import Collapse from "./containers/advanceui/collapse/collapse.tsx";
import Modals from "./containers/advanceui/modals/modals.tsx";
import Sweetalert from "./containers/advanceui/sweetalert/sweetalert.tsx";
import Ratings from "./containers/advanceui/rating/rating.tsx";
import Search from "./containers/advanceui/search/search.tsx";
import Userlist from "./containers/advanceui/userlist/userlist.tsx";
import Fileattachment from "./containers/advanceui/fileattchment/fileattachment.tsx";
import Shop from "./containers/pages/ecoomerce/shop/shop.tsx";
import Productdetailes from "./containers/pages/ecoomerce/productdetailes/productdetailes.tsx";
import Cart from "./containers/pages/ecoomerce/cart/cart.tsx";
import Checkout from "./containers/pages/ecoomerce/checkout/checkout.tsx";
import Addproducts from "./containers/pages/ecoomerce/addproducts/addproducts.tsx";
import Orderdetails from "./containers/pages/ecoomerce/orderdetails/orderdetails.tsx";
import Wishlist from "./containers/pages/ecoomerce/wishlist/wishlist.tsx";
// import Profile from "./containers/pages/profile/profile.tsx";
import Notificationlist from "./containers/pages/notificationlist/notificationlist.tsx";
import Aboutus from "./containers/pages/aboutus/aboutus.tsx";
import Settings from "./containers/pages/settings/settings.tsx";
import Blog from "./containers/pages/blog/blog/blog.tsx";
import Blogdetails from "./containers/pages/blog/blogdetails/blogdetails.tsx";
import Blogpost from "./containers/pages/blog/blogpost/blogpost.tsx";
import Formelements from "./containers/pages/forms/formelements/formelements.tsx";
import Advacneforms from "./containers/pages/forms/advanceforms/advacneforms.tsx";
import Formlayout from "./containers/pages/forms/formlayout/formlayout.tsx";
import Formvaildation from "./containers/pages/forms/formvaildations/formvaildation.tsx";
import Formwizards from "./containers/pages/forms/formwizards/formwizards.tsx";
import Formseditors from "./containers/pages/forms/formseditors/formseditors.tsx";
import Elementsizes from "./containers/pages/forms/formsizes/elementsizes.tsx";
import Invoice from "./containers/pages/invoice/invoice.tsx";
import Pricing from "./containers/pages/pricing/pricing.tsx";
import Gallery from "./containers/pages/gallery/gallery.tsx";
import Faqs from "./containers/pages/faqs/faqs.tsx";
import Todotask from "./containers/pages/todotask/todotask.tsx";
import Widgets from "./containers/pages/widgets/widgets.tsx";
import Emptypage from "./containers/pages/emptypage/emptypage.tsx";
import Background from "./containers/utilities/background/background.tsx";
import Border from "./containers/utilities/border/border.tsx";
import Display from "./containers/utilities/display/display.tsx";
import Flex from "./containers/utilities/flex/flex.tsx";
import Height from "./containers/utilities/height/height.tsx";
import Margin from "./containers/utilities/margin/margin.tsx";
import Padding from "./containers/utilities/padding/padding.tsx";
import Position from "./containers/utilities/position/position.tsx";
import Width from "./containers/utilities/width/width.tsx";
import Extras from "./containers/utilities/extras/extras.tsx";
import Level1 from "./containers/menulevels/level-1/level-1.tsx";
import Switcherpagesetting from "./containers/switcherpage/switcherpagesetting.tsx";
import Fontawesome from "./containers/icons/fontawesome.tsx";
import Materialdesignicons from "./containers/icons/materialdesignicons.tsx";
import Simplelineicons from "./containers/icons/simplelineicons.tsx";
import Feathericons from "./containers/icons/feathericons.tsx";
import Ionicicons from "./containers/icons/ionicicons.tsx";
import Flagicons from "./containers/icons/flagicons.tsx";
import Pe7icons from "./containers/icons/pe7icons.tsx";
import Themifiyicon from "./containers/icons/themifiyicon.tsx";
import Typoicons from "./containers/icons/typoicons.tsx";
import Weatericons from "./containers/icons/weatericons.tsx";
import Materialicons from "./containers/icons/materialicons.tsx";
import Bootstrapicons from "./containers/icons/bootstrapicons.tsx";
import Chartsjs from "./containers/charts/chartjs/chartsjs.tsx";
import Echarts from "./containers/charts/echarts/echarts.tsx";
import Apexcharts from "./containers/charts/apexcharts/apexcharts.tsx";
import Basictable from "./containers/tables/basictable/basictable.tsx";
import Datatable from "./containers/tables/datatable/datatable.tsx";
import Editabletable from "./containers/tables/editabletable/editabletable.tsx";
import Leafletmaps from "./containers/maps/leafletmaps.tsx";
import Simplemaps from "./containers/maps/simplemaps.tsx";
import Level2_1 from "./containers/menulevels/level-2/level2-1/level2-1.tsx";
import Level2_2 from "./containers/menulevels/level-2/level2-2/level2-2.tsx";
import Images from "./components/ui/elements/images/images.tsx";
import Switcherpagelayout from "./switcherpagelayout.tsx";
import WhitelistVerifier from "./containers/pages/Web3pages/WhitelistVerifier.tsx";
import EV1Rewards from "./containers/pages/Web3pages/EV1Rewards.tsx";
import Evolution1 from "./containers/pages/Web3pages/Evolution1.tsx";
import Evolution2 from "./containers/pages/Web3pages/Evolution2.tsx";
import Evolution3 from "./containers/pages/Web3pages/Evolution3.tsx";
import GorillaDAO from "./containers/pages/Web3pages/GorillaDao.tsx";
import MainDashboard from "./containers/pages/Web3pages/MainDashboard.tsx";
import Roadmap from "./containers/pages/Web3pages/roadmap.tsx";
import Layout from "./layout.tsx";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <React.Suspense fallback={<Loader />}>
          <Routes>
            <Route path={`${import.meta.env.BASE_URL}`} element={<Layout />}>
              <Route
                path={`${import.meta.env.BASE_URL}dashboard/MainDashboard`}
                element={<MainDashboard />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}dashboard/WhitelistVerifier`}
                element={<WhitelistVerifier />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}dashboard/GorillaDao`}
                element={<GorillaDAO />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}dashboard/Evolution1`}
                element={<Evolution1 />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}dashboard/Evolution2`}
                element={<Evolution2 />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}dashboard/Evolution3`}
                element={<Evolution3 />}
              />

              <Route
                path={`${import.meta.env.BASE_URL}dashboard/EV1FAUCET`}
                element={<EV1Rewards />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}dashboard/index-7`}
                element={<Sales />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}app/cards`}
                element={<Cards />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}app/rangeslider`}
                element={<Rangeslider />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}app/calendar`}
                element={<Calendar />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}pages/landing`}
                element={<Landing />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}app/notification`}
                element={<Notifications />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}app/treeview`}
                element={<Treeview />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}app/filemanagers/file`}
                element={<Files />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}app/filemanagers/filedetails`}
                element={<Filedetails />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}app/filemanagers/filemanager`}
                element={<FilemanagerList />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}app/mail/newmail`}
                element={<Newmail />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}app/mail/inbox`}
                element={<Inbox />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}app/mail/readmail`}
                element={<Readmail />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}app/mail/chat`}
                element={<Chat />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}app/mail/mailsetting`}
                element={<Mailsetting />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/alerts`}
                element={<Alerts />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}pages/contacts`}
                element={<Contactus />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/breadcrumbs`}
                element={<Bredcrumbs />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/buttons`}
                element={<Buttons />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/badges`}
                element={<Badges />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/dropdown`}
                element={<Dropdowns />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/listgroup`}
                element={<ListGroups />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/navigation`}
                element={<Navigation />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/images`}
                element={<Images />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/paginations`}
                element={<Pagination />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/popover`}
                element={<Popovers />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/progress`}
                element={<Progress />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/spinners`}
                element={<Spinners />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/mediaObject`}
                element={<Mediaobject />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/typography`}
                element={<Typography />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/tooltip`}
                element={<Tooltips />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/toast`}
                element={<Toasts />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/tags`}
                element={<Tags />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}elements/tabs`}
                element={<Tabss />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}advancedui/accordions`}
                element={<Accordin />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}advancedui/carousel`}
                element={<Carousel />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}advancedui/collapse`}
                element={<Collapse />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}advancedui/modal`}
                element={<Modals />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}dashboard/roadmap`}
                element={<Roadmap />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}advancedui/sweetalert`}
                element={<Sweetalert />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}advancedui/rating`}
                element={<Ratings />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}advancedui/search`}
                element={<Search />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}advancedui/userlist`}
                element={<Userlist />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}advancedui/fileattachments`}
                element={<Fileattachment />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}pages/e-commerce/shop`}
                element={<Shop />}
              />
              <Route
                path={`${
                  import.meta.env.BASE_URL
                }pages/e-commerce/productDetails`}
                element={<Productdetailes />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}pages/e-commerce/cart`}
                element={<Cart />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}pages/e-commerce/checkout`}
                element={<Checkout />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}pages/e-commerce/addproduct`}
                element={<Addproducts />}
              />
              <Route
                path={`${
                  import.meta.env.BASE_URL
                }pages/e-commerce/orderdetails`}
                element={<Orderdetails />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}pages/e-commerce/wishlist`}
                element={<Wishlist />}
              />

              <Route
                path={`${import.meta.env.BASE_URL}pages/notificationlist`}
                element={<Notificationlist />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}pages/profilepage`}
                element={<Profilepage />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}pages/aboutus`}
                element={<Aboutus />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}pages/settings`}
                element={<Settings />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}pages/blog/blog`}
                element={<Blog />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}pages/blog/blogdetails`}
                element={<Blogdetails />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}pages/blog/Blogedit`}
                element={<Blogpost />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}pages/form/formelements`}
                element={<Formelements />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}pages/form/formadvance`}
                element={<Advacneforms />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}pages/form/formlayout`}
                element={<Formlayout />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}pages/form/formvalidation`}
                element={<Formvaildation />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}pages/form/formwizards`}
                element={<Formwizards />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}pages/form/formeditors`}
                element={<Formseditors />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}pages/form/formsizes`}
                element={<Elementsizes />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}pages/invoice`}
                element={<Invoice />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}pages/pricing`}
                element={<Pricing />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}pages/gallery`}
                element={<Gallery />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}pages/faqs`}
                element={<Faqs />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}pages/todotask`}
                element={<Todotask />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}pages/widgets`}
                element={<Widgets />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}pages/emptypage`}
                element={<Emptypage />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}utilities/background`}
                element={<Background />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}Utilities/border`}
                element={<Border />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}Utilities/display`}
                element={<Display />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}Utilities/flex`}
                element={<Flex />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}Utilities/height`}
                element={<Height />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}Utilities/margin`}
                element={<Margin />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}Utilities/padding`}
                element={<Padding />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}Utilities/position`}
                element={<Position />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}Utilities/width`}
                element={<Width />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}Utilities/extras`}
                element={<Extras />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}menulevel/level-1`}
                element={<Level1 />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}menulevel/level2-1`}
                element={<Level2_1 />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}menulevel/level2-2`}
                element={<Level2_2 />}
              />
              {/* <Route path={`${import.meta.env.BASE_URL}menulevel/level2-3-1`} element={<Level2_3_1 />} /> */}
              {/* <Route path={`${import.meta.env.BASE_URL}menulevel/level2-3-2`} element={<Level2_3_2 />} /> */}
              {/* <Route path={`${import.meta.env.BASE_URL}menulevel/level2-3-3`} element={<Level2_3_3 />} /> */}
              <Route
                path={`${import.meta.env.BASE_URL}icon/fontAwesome`}
                element={<Fontawesome />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}icon/materialDesignIcons`}
                element={<Materialdesignicons />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}icon/simpleLineIcons`}
                element={<Simplelineicons />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}icon/featherIcons`}
                element={<Feathericons />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}icon/ionicIcons`}
                element={<Ionicicons />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}icon/flagIcons`}
                element={<Flagicons />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}icon/pe7Icons`}
                element={<Pe7icons />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}icon/themifyIcons`}
                element={<Themifiyicon />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}icon/typiconsIcons`}
                element={<Typoicons />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}icon/weatherIcons`}
                element={<Weatericons />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}icon/materialIcons`}
                element={<Materialicons />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}icon/bootstrapIcons`}
                element={<Bootstrapicons />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}charts/chartJs`}
                element={<Chartsjs />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}charts/echart`}
                element={<Echarts />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}charts/apexcharts`}
                element={<Apexcharts />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}table/basictable`}
                element={<Basictable />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}table/datatable`}
                element={<Datatable />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}table/edittabletable`}
                element={<Editabletable />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}maps/leafletmaps`}
                element={<Leafletmaps />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}maps/simplemaps`}
                element={<Simplemaps />}
              />
            </Route>
            <Route
              path={`${import.meta.env.BASE_URL}`}
              element={<Custompages />}
            >
              <Route
                path={`${import.meta.env.BASE_URL}pages/authentication/signin`}
                element={<Signin />}
              />
              <Route
                path={`${import.meta.env.BASE_URL}pages/authentication/signup`}
                element={<Signup />}
              />
              <Route
                path={`${
                  import.meta.env.BASE_URL
                }pages/authentication/forgotpassword`}
                element={<Forgotpassword />}
              />
              <Route
                path={`${
                  import.meta.env.BASE_URL
                }pages/authentication/resetpassword`}
                element={<Restpassword />}
              />
              <Route
                path={`${
                  import.meta.env.BASE_URL
                }pages/authentication/lockscreen`}
                element={<Lockscreen />}
              />
              <Route
                path={`${
                  import.meta.env.BASE_URL
                }pages/authentication/underconstruction`}
                element={<Underconstruction />}
              />
              <Route
                path={`${
                  import.meta.env.BASE_URL
                }pages/authentication/404error`}
                element={<Error404 />}
              />
              <Route
                path={`${
                  import.meta.env.BASE_URL
                }pages/authentication/501error`}
                element={<Error501 />}
              />
              <Route
                path={`${
                  import.meta.env.BASE_URL
                }pages/authentication/505error`}
                element={<Error505 />}
              />
              <Route path="*" element={<Error404 />} />
            </Route>
            <Route
              path={`${import.meta.env.BASE_URL}`}
              element={<Landingpage />}
            >
              <Route
                path={`${import.meta.env.BASE_URL}pages/landing`}
                element={<Landing />}
              />
            </Route>
            <Route
              path={`${import.meta.env.BASE_URL}`}
              element={<Switcherpagelayout />}
            >
              <Route
                path={`${import.meta.env.BASE_URL}switcherpage`}
                element={<Switcherpagesetting />}
              />
            </Route>
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
