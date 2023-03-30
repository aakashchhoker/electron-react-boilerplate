// import React from 'react';
// import { Redirect } from 'react-router-dom';
// import { Route } from 'react-router-dom';

// import Productedit from '../pages/edit-pages/Productedit';
// import AddProducts from '../pages/upload-pages/AddProduct';
// import AddNewMeal from '../pages/upload-pages/AddNewMeal';
// import Orderedit from '../pages/edit-pages/Orderedit';

// // import AddBranch from '../pages/pages/Branch';

// // import newsLetter from '../pages/pages/newsLetter';

// // auth
// const Login = React.lazy(() => import('../pages/auth/Login'));
// const Logout = React.lazy(() => import('../pages/auth/Logout'));
// // const Register = React.lazy(() => import('../pages/auth/Register'));
// // const ForgetPassword = React.lazy(() => import('../pages/auth/ForgetPassword'));
// const Confirm = React.lazy(() => import('../pages/auth/Confirm'));
// // dashboard
// //const Dashboard = React.lazy(() => import('../pages/dashboard'));
// // apps
// // const CalendarApp = React.lazy(() => import('../pages/apps/Calendar'));
// // const EmailInbox = React.lazy(() => import('../pages/apps/Email/Inbox'));
// // const EmailDetail = React.lazy(() => import('../pages/apps/Email/Detail'));
// // const EmailCompose = React.lazy(() => import('../pages/apps/Email/Compose'));
// // const ProjectList = React.lazy(() => import('../pages/apps/Project/List'));
// // const ProjectDetail = React.lazy(() => import('../pages/apps/Project/Detail/'));
// // const TaskList = React.lazy(() => import('../pages/apps/Tasks/List'));
// // const TaskBoard = React.lazy(() => import('../pages/apps/Tasks/Board'));

// // pages
// const Starter = React.lazy(() => import('../pages/other/Starter'));
// const Profile = React.lazy(() => import('../pages/other/Profile/'));
// const Activity = React.lazy(() => import('../pages/other/Activity'));
// const Invoice = React.lazy(() => import('../pages/other/Invoice'));
// const Pricing = React.lazy(() => import('../pages/other/Pricing'));
// const Error404 = React.lazy(() => import('../pages/other/Error404'));
// const Error500 = React.lazy(() => import('../pages/other/Error500'));
// const Product = React.lazy(() => import('../pages/pages/Product'));
// const Recipe = React.lazy(() => import('../pages/pages/Recipe'));
// // const Coki = React.lazy(() => import('../pages/pages/Coki'));
// // const Privacy = React.lazy(() => import('../pages/pages/Privacy'));
// const Order = React.lazy(() => import('../pages/pages/Order'));
// const OrdersDashboard = React.lazy(() => import('../pages/pages/OrdersDashboard'));
// const Formula = React.lazy(() => import('../pages/pages/formula'));
// const Meal = React.lazy(() => import('../pages/pages/Meal'));
// //const ProductionJobs = React.lazy(() => import('../pages/pages/productionJobs'));
// const Raw = React.lazy(() => import('../pages/pages/raw'));
// const NewsLetter = React.lazy(() => import('../pages/pages/NewsLetter'));



// // ui
// // const BSComponents = React.lazy(() => import('../pages/uikit/BSComponents/'));
// // const FeatherIcons = React.lazy(() => import('../pages/uikit/Icons/Feather'));
// // const UniconsIcons = React.lazy(() => import('../pages/uikit/Icons/Unicons'));
// // const Widgets = React.lazy(() => import('../pages/uikit/Widgets/'));

// // charts
// // const Charts = React.lazy(() => import('../pages/charts/'));

// // // forms
// // const BasicForms = React.lazy(() => import('../pages/forms/Basic'));
// // const FormAdvanced = React.lazy(() => import('../pages/forms/Advanced'));
// // const FormValidation = React.lazy(() => import('../pages/forms/Validation'));
// // const FormWizard = React.lazy(() => import('../pages/forms/Wizard'));
// // const FileUpload = React.lazy(() => import('../pages/forms/FileUpload'));
// // const Editor = React.lazy(() => import('../pages/forms/Editor'));

// // // tables
// // const BasicTables = React.lazy(() => import('../pages/tables/Basic'));
// // const AdvancedTables = React.lazy(() => import('../pages/tables/Advanced'));

// // User Pages
// const Home = React.lazy(() => import('../pages/user/home'));

// // const Logs = React.lazy(() => import('../pages/user/logs'));
// const MyAccount = React.lazy(() => import('../pages/user/myaccount'));
// // const Meetings = React.lazy(() => import('../pages/user/meetings'));
// // const Webinar = React.lazy(() => import('../pages/user/webinar'));
// // const WebinarRegistration = React.lazy(() => import('../pages/user/webinarReg'));
// // const Room = React.lazy(() => import('../pages/user/room'));

// // const Category = React.lazy(() => import('../pages/user/CategoryForm'));

// // const WebinarRoom = React.lazy(() => import('../pages/user/webinarRoom'));

// // handle auth and authorization
// const PrivateRoute = ({ component: Component, roles, ...rest }) => (
//     <Route
//         {...rest}
//         render={(props) => {
//             if (!isUserAuthenticated()) {
//                 // not logged in so redirect to login page with the return url
//                 return <Redirect to={{ pathname: '/account/login', state: { from: props.location } }} />;
//             }

//             const loggedInUser = getLoggedInUser();

//             // check if route is restricted by role
//             console.log('LoggedIN USER ');
//             if (roles && roles.indexOf(loggedInUser.user.type) === -1) {
//                 // role not authorised so redirect to home page
//                 return <Redirect to={{ pathname: '/no-access' }} />;
//             }

//             // authorised so return component
//             return <Component {...props} />;
//         }}
//     />
// );

// // root routes
// const rootRoute = {
//     path: '/',
//     exact: true,
//     component: () => <Redirect to="/home" />,
//     route: PrivateRoute,
// };

// // User
// const homeRouter = {
//     path: '/home',
//     name: 'Home',
//     icon: FeatherIcon.Home,

//     component: Home,
//     roles: ['HQ', 'Chef'],
//     route: PrivateRoute,
// };



// const addRoutes = {
//     path: '/add',
//     name: 'add',
//     children: [
//         {
//             path: '/add/product',
//             name: 'Add Product',
//             component: AddProducts,
//             roles: ['HQ', 'chef'],
//             route: Route,
//         },
//         {
//             path: '/add/serviceablearea',
//             name: 'Add ServiceAble Areas',
//             component: AddServiceableAreas,
//             roles: ['HQ', 'chef'],
//             route: Route,
//         },
//         {
//             path: '/add/order',
//             name: 'Add Order',
//             component: AddOrder,
//             roles: ['HQ', 'chef'],
//             route: Route,
//         },
//         {
//             path: '/add/externalorder',
//             name: 'Add Order',
//             component: AddExternalOrder,
//             roles: ['HQ', 'chef'],
//             route: Route,
//         },
//         {
//             path: '/add/newmeal',
//             name: 'Add New Meal',
//             component: AddNewMeal,
//             roles: ['HQ', 'chef'],
//             route: Route,
//         },
//         {
//             path: '/add/blog',
//             name: 'Add Blog',
//             roles: ['HQ'],
//             component: AddBlog,
//             route: Route,
//         },
//         {
//             path: '/add/week',
//             name: 'Add Week',
//             component: AddWeek,
//             roles: ['HQ', 'chef'],

//             route: Route,
//         },
//         {
//             path: '/add/recipe',
//             roles: ['HQ'],
//             name: 'Add Recipe',
//             component: AddRecipes,
//             route: Route,
//         },
//         {
//             path: '/add/RawOrder',
//             roles: ['HQ'],
//             name: 'Add Recipe',
//             component: AddRaw,
//             route: Route,
//         },
//         {
//             path: '/add/cookies',
//             roles: ['HQ'],
//             name: 'Add Cookies',
//             component: AddCookies,
//             route: Route,
//         },
//         {
//             path: '/add/discount',
//             roles: ['HQ'],
//             name: 'Add Dicounts',
//             component: AddDiscount,
//             route: Route,
//         },
//         {
//             path: '/add/privary',
//             roles: ['HQ'],
//             name: 'Add Privary',
//             component: AddPrivacy,
//             route: Route,
//         },
//         {
//             path: '/add/branch',
//             name: 'Add Branch',
//             roles: ['HQ'],
//             component: Addbranch,
//             route: Route,
//         },
//         {
//             path: '/add/vendor',
//             name: 'Add Vendor',
//             roles: ['HQ'],
//             component: Addvendor,
//             route: Route,
//         },
//         {
//             path: '/add/user',
//             roles: ['HQ'],
//             name: 'Addusers',
//             component: Addusers,
//             route: Route,
//         },
//         {
//             path: '/add/purchase-order',
//             name: 'Addpurchase',
//             roles: ['HQ'],
//             component: Addpurchase,
//             route: Route,
//         },
//         {
//             path: '/add/formula',
//             name: 'Addformula',
//             component: AddFormula,
//             roles: ['HQ', 'Chef'],

//             route: Route,
//         },
//         {
//             path: '/add/kitchenproducts',
//             name: 'AddProducts',
//             component: AddKitchenProducts,
//             roles: ['HQ', 'Chef'],

//             route: Route,
//         },

//         {
//             path: '/add/productionjob',
//             roles: ['HQ'],
//             name: 'AddProductionJob',
//             component: AddProductionJob,
//             route: Route,
//         },
//         {
//             path: '/add/meal',
//             name: 'add Meal',
//             roles: ['HQ', 'Chef'],

//             component: AddMeals,
//             route: Route,
//         },
//         {
//             path: '/add/faq',
//             name: 'add FAQ',
//             roles: ['HQ', 'Chef'],

//             component: AddFAQ,
//             route: Route,
//         },
//         {
//             path: '/add/terms',
//             name: 'add Terms',
//             roles: ['HQ', 'Chef'],

//             component: AddTerms,
//             route: Route,
//         },
//         {
//             path: '/add/raw',
//             name: 'Add Raw',
//             component: AddRaw,
//             roles: ['HQ', 'Chef'],

//             route: Route,
//         },
//         {
//             path: '/add/wastage',
//             name: 'Add Wastage',
//             component: AddWastage,
//             roles: ['HQ', 'Chef'],

//             route: Route,
//         },

//         {
//             path: '/add/raworders',
//             name: 'Add Raw',
//             component: AddRawOrders,
//             roles: ['HQ', 'Chef'],

//             route: Route,
//         },
//         {
//             path: '/add/page',
//             name: 'Add Page',
//             component: AddPage,
//             roles: ['HQ', 'Chef'],

//             route: Route,
//         },
//         {
//             path: '/add/newsletter',
//             name: 'Add NewsLetter',
//             component: AddNewsLetters,
//             roles: ['HQ', 'Chef'],

//             route: Route,
//         },
//         {
//             path: '/add/order',
//             name: 'Add Order',
//             component: AddOrder,
//             roles: ['HQ', 'Chef'],

//             route: Route,
//         },
//         ,
//         {
//             path: '/add/writer',
//             name: 'Add Writer',
//             component: AddWriter,
//             roles: ['HQ', 'Chef'],

//             route: Route,
//         }


//     ],
// };

// //editRoutes

// const editRoutes = {
//     path: '/edit',
//     name: 'edit',
//     children: [
//         {
//             path: '/content/edit/product/:id',
//             name: 'Product Edit',
//             roles: ['HQ', 'chef', 'Content_user'],

//             component: Productedit,
//             route: Route,
//         },
//         {
//             path: '/content/edit/productindividual/:id',
//             name: 'Product Edit',
//             roles: ['HQ', 'chef', 'Content_user'],

//             component: ProductIndividualedit,
//             route: Route,
//         },
//         {
//             path: '/edit/meal/:id',
//             name: 'Meal Edit',
//             roles: ['HQ', 'chef'],

//             component: MealEdit,
//             route: Route,
//         },
//         {
//             path: '/detail/wastage/:id',
//             name: 'Wastage Detail',
//             roles: ['HQ', 'chef'],

//             component: WastageDetails,
//             route: Route,
//         },
//         {
//             path: '/edit/week/:id',
//             name: 'Week Edit',
//             roles: ['HQ', 'chef'],

//             component: WeekEdit,
//             route: Route,
//         },
//         {
//             path: '/edit/kitchenproduct/:id',
//             name: 'Kitchen Product Edit',
//             roles: ['HQ', 'chef'],

//             component: EditKitchenProduct,
//             route: Route,
//         },

//         {
//             path: '/edit/page/:slug',
//             name: 'Page Edit',
//             roles: ['HQ', 'chef'],

//             component: EditPage,
//             route: Route,
//         },
//         {
//             path: '/edit/discounts/:id',
//             name: 'Discounts Edit',
//             roles: ['HQ', 'chef'],

//             component: DiscountEdit,
//             route: Route,
//         },
//         {
//             path: '/edit/internalOrder/:id',
//             name: 'Internal Order Edit',
//             roles: ['HQ', 'chef'],

//             component: InternalOrderEdit,
//             route: Route,
//         },
//         {
//             path: '/edit/serviceablearea/:id',
//             name: 'Internal Order Edit',
//             roles: ['HQ', 'chef'],

//             component: ServiceableAreasEdit,
//             route: Route,
//         },
//         {
//             path: '/edit/recipe/:id',
//             name: 'Recipe Edit',
//             roles: ['HQ'],

//             component: Recipeedit,
//             route: Route,
//         },
//         {
//             path: '/edit/cookies',
//             name: 'Cookies edit',

//             roles: ['HQ'],
//             component: Cookiesedit,
//             route: Route,
//         },
//         {
//             path: '/edit/privacy',
//             name: 'Privacy Edit',

//             roles: ['HQ'],
//             component: Privacyedit,
//             route: Route,
//         },
//         {
//             path: '/edit/contact',
//             name: 'ContactUs Edit',

//             roles: ['HQ'],
//             component: EditContactUs,
//             route: Route,
//         },
//         {
//             path: '/edit/raw/:id',
//             name: 'Edit Raw',
//             roles: ['HQ', 'chef'],

//             component: RawEdit,
//             route: Route,
//         },
//         {
//             path: '/edit/newsletter/:id',
//             name: 'Edit NewsLetter',
//             roles: ['HQ', 'chef'],

//             component: NewsLetterEdit,
//             route: Route,
//         },
//         {
//             path: '/edit/formula/:id',
//             name: 'Edit formula',
//             roles: ['HQ', 'chef'],

//             component: FormulaEdit,
//             route: Route,
//         },
//         {
//             path: '/edit/order/:id',
//             name: 'Order Edit',
//             roles: ['HQ'],

//             component: Orderedit,
//             route: Route,
//         },
//         {
//             path: '/edit/branch/:id',
//             name: 'Order Edit',
//             roles: ['HQ'],

//             component: Branchedit,
//             route: Route,
//         },
//         {
//             path: '/edit/purchase-order/:id',
//             name: 'Purchase Order Edit',

//             roles: ['HQ'],
//             component: Purchaseedit,
//             route: Route,
//         },
//         {
//             path: '/edit/vendor/:id',
//             name: 'Purchase Order Edit',

//             roles: ['HQ'],
//             component: Vendoredit,
//             route: Route,
//         },
//         {
//             path: '/edit/faq',
//             name: 'FAQ Edit',

//             roles: ['HQ'],
//             component: FAQEdit,
//             route: Route,
//         },
//         {
//             path: '/edit/terms',
//             name: 'Terms Edit',

//             roles: ['HQ'],
//             component: TermsEdit,
//             route: Route,
//         },
//         {
//             path: '/edit/home',
//             name: 'Home Edit',

//             roles: ['HQ'],
//             component: HomeEdit,
//             route: Route,
//         },
//         {
//             path: '/edit/productionjob/:id',
//             name: 'Production Job Edit',
//             roles: ['HQ'],

//             component: EditProductionJob,
//             route: Route,
//         },
//         {
//             path: '/edit/formula/:id',
//             name: 'Formula Edit',
//             roles: ['HQ', 'chef'],

//             component: EditFormula,
//             route: Route,
//         },
//         {
//             path: '/edit/user/:id',
//             name: 'User Edit',
//             roles: ['HQ'],

//             component: Useredit,
//             route: Route,
//         },
//         {
//             path: '/change/password',
//             name: 'ChangePassword',
//             roles: ['HQ'],

//             component: ChangePassword,
//             route: Route,
//         },
//         {
//             path: '/edit/blog/:slug',
//             name: 'Edit Blog',
//             roles: ['HQ'],

//             component: BlogEdit,
//             route: Route,
//         },
//         {
//             path: '/edit/menu',
//             name: 'Edit Menu',
//             roles: ['HQ'],

//             component: MenuSelector,
//             route: Route,
//         },
//         {
//             path: '/edit/footer',
//             name: 'Edit Menu',
//             roles: ['HQ'],

//             component: FooterMenu,
//             route: Route,
//         },
//         {
//             path: '/edit/writer/:id',
//             name: 'Edit Writer',
//             roles: ['HQ', 'Content_user'],

//             component: WriterEdit,
//             route: Route,
//         },
//         {
//             path: '/edit/about-us',
//             name: 'Edit AboutUs',
//             roles: ['HQ'],

//             component: AboutEdit,
//             route: Route,
//         },
//         {
//             // You dont need id here
//             //report page
//             path: '/view/report/:id',
//             name: 'Report Page',
//             roles: ['HQ'],

//             component: ReportPage,
//             route: Route,
//         },
//         {
//             // You dont need id here
//             //report page
//             path: '/view/delivery/:id/:date',
//             name: 'Delivery Details',
//             roles: ['HQ'],

//             component: DeliveryDetails,
//             route: Route,
//         },
//     ],
// };

// // const formRoutes = {
// //     path: '/home',
// //     name: 'Home',
// //     icon: FeatherIcon.Home,
// //     header: 'Lauk',
// //     component: Home,
// //     roles: ['admin', 'user'],
// //     route: PrivateRoute,
// // };

// // const roomRoutes = {
// //     path: '/room',
// //     name: 'room',
// //     icon: FeatherIcon.Airplay,
// //     // header: 'Navigation',
// //     component: Meetings,
// //     roles: ['admin'],
// //     route: PrivateRoute
// // };

// // dashboards
// // const dashboardRoutes = {
// //     path: '/dashboard',
// //     name: 'Dashboard',
// //     icon: FeatherIcon.Home,
// //     header: 'Navigation',
// //     badge: {
// //         variant: 'success',
// //         text: '1',
// //     },
// //     component: Dashboard,
// //     roles: ['admin'],
// //     route: PrivateRoute,
// // };

// // apps

// // const calendarAppRoutes = {
// //     path: '/apps/calendar',
// //     name: 'Calendar',
// //     header: 'Apps',
// //     icon: FeatherIcon.Calendar,
// //     component: CalendarApp,
// //     route: PrivateRoute,
// //     roles: ['Admin'],
// // };

// // const emailAppRoutes = {
// //     path: '/apps/email',
// //     name: 'Email',
// //     icon: FeatherIcon.Inbox,
// //     children: [
// //         {
// //             path: '/apps/email/inbox',
// //             name: 'Inbox',
// //             component: EmailInbox,
// //             route: PrivateRoute,
// //             roles: ['Admin'],
// //         },
// //         {
// //             path: '/apps/email/details',
// //             name: 'Details',
// //             component: EmailDetail,
// //             route: PrivateRoute,
// //             roles: ['Admin'],
// //         },
// //         {
// //             path: '/apps/email/compose',
// //             name: 'Compose',
// //             component: EmailCompose,
// //             route: PrivateRoute,
// //             roles: ['Admin'],
// //         },
// //     ],
// // };

// // const projectAppRoutes = {
// //     path: '/apps/projects',
// //     name: 'Projects',
// //     icon: FeatherIcon.Briefcase,
// //     children: [
// //         {
// //             path: '/apps/projects/list',
// //             name: 'List',
// //             component: ProjectList,
// //             route: PrivateRoute,
// //             roles: ['Admin'],
// //         },
// //         {
// //             path: '/apps/projects/detail',
// //             name: 'Detail',
// //             component: ProjectDetail,
// //             route: PrivateRoute,
// //             roles: ['Admin'],
// //         },
// //     ],
// // };

// // const taskAppRoutes = {
// //     path: '/apps/tasks',
// //     name: 'Tasks',
// //     icon: FeatherIcon.Bookmark,
// //     children: [
// //         {
// //             path: '/apps/tasks/list',
// //             name: 'List',
// //             component: TaskList,
// //             route: PrivateRoute,
// //             roles: ['Admin'],
// //         },
// //         {
// //             path: '/apps/tasks/board',
// //             name: 'Board',
// //             component: TaskBoard,
// //             route: PrivateRoute,
// //             roles: ['Admin'],
// //         },
// //     ],
// // };

// // const appRoutes = [homeRoutes, logsRoutes, meetingsRoutes, webinarRoutes, myAccountRoutes];
// const appRoutes = [
//     homeRouter,
//     contentAppRoutes,
//     chefAppRoutes,
//     orderManagementAppRoutes,
//     purchaseAppRoutes,
//     configAppRoutes,
//     // extraAppRoutes,
//     // aboutRoutes,
//     // mealOrderRoutes,
//     // productRoutes,
//     // mealRoutes,
//     // WeekRoutes,
//     // newsLetterRoutes,
//     // globalConfig,
//     // kitchenProducts,
//     // rawRoutes,
//     // formulaRoutes,
//     // wastageRoutes,
//     //kitchenProds,
//     // DiscountRoutes,
//     // pageRoutes,

//     // blogRoutes,
//     // recipeRoutes,

//     //OrderRouter,
//     // OrdersDash,
//     // DelRoutes,
//     // reportRoutes,
//     // deliveryReportRoutes,
//     // shippingInterRoutes,
//     // chefDashoardReport,
//     // BranchRoute,
//     // PurchaseRoute,
//     // VendorRoute,
//     // uersRoutes,
//     // myAccountRoutes,



//     // CookiesRoutes,
//     // privacyRoutes,
//     // faqRoutes,
//     // termsRoutes,
//     // productionJobsRoutes,
// ];
// // calendarAppRoutes, emailAppRoutes, projectAppRoutes, taskAppRoutes];

// // pages
// const pagesRoutes = {
//     path: '/pages',
//     name: 'Pages',

//     children: [
//         {
//             path: '/pages/starter',
//             name: 'Starter',
//             component: Starter,
//             route: PrivateRoute,
//             roles: ['Admin'],
//         },
//         {
//             path: '/delivery/:id',
//             name: 'Delivery',
//             component: Delivery,
//             route: PrivateRoute,
//             roles: ['Admin', 'HQ', 'chef'],
//         },
//         {
//             path: '/purchase/:id',
//             name: 'Delivery',
//             component: SinglePurchaseOrder,
//             route: PrivateRoute,
//             roles: ['Admin', 'HQ', 'chef'],
//         },


//         {
//             path: '/meal_delivery/:id',
//             name: 'Meal Delivery',
//             component: MealDelivery,
//             route: PrivateRoute,
//             roles: ['Admin', 'HQ', 'chef'],
//         },
//         {
//             path: '/pages/profile',
//             name: 'Profile',
//             component: Profile,
//             route: PrivateRoute,
//             roles: ['Admin'],
//         },
//         {
//             path: '/pages/activity',
//             name: 'Activity',
//             component: Activity,
//             route: PrivateRoute,
//             roles: ['Admin'],
//         },
//         {
//             path: '/pages/invoice',
//             name: 'Invoice',
//             component: Invoice,
//             route: PrivateRoute,
//             roles: ['Admin'],
//         },
//         {
//             path: '/pages/pricing',
//             name: 'Pricing',
//             component: Pricing,
//             route: PrivateRoute,
//             roles: ['Admin'],
//         },
//         {
//             path: '/pages/error-404',
//             name: 'Error 404',
//             component: Error404,
//             route: Route,
//         },
//         {
//             path: '/pages/error-500',
//             name: 'Error 500',
//             component: Error500,
//             route: Route,
//         },
//     ],
// };


// const authRoutes = {
//     path: '/account',
//     name: 'Auth',
//     children: [
//         {
//             path: '/account/login',
//             name: 'Login',
//             component: Login,
//             route: Route,
//         },
//         {
//             path: '/account/logout',
//             name: 'Logout',
//             component: Logout,
//             route: Route,
//         },

//         {
//             path: '/account/confirm',
//             name: 'Confirm',
//             component: Confirm,
//             route: Route,
//         },
//         {
//             path: '/no-access',
//             name: 'No Access',
//             component: NoAccess,
//             route: Route,
//         },

//         // {
//         //     path: '/webinarroom/:cid',
//         //     name: 'WebinarRoom',
//         //     component: WebinarRoom,
//         //     route: Route,
//         // },
//         // {
//         //     path: '/webinarroom',
//         //     name: 'WebinarRoom',
//         //     component: WebinarRoom,
//         //     route: Route,
//         // },
//         // {
//         //     path: '/webinarreg/:cid',
//         //     name: 'WebinarRegistration',
//         //     component: WebinarRegistration,
//         //     route: Route,
//         // },
//     ],
// };

// // flatten the list of all nested routes
// const flattenRoutes = (routes) => {
//     let flatRoutes = [];

//     routes = routes || [];
//     routes.forEach((item) => {
//         flatRoutes.push(item);

//         if (typeof item.children !== 'undefined') {
//             flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
//         }
//     });
//     return flatRoutes;
// };

// // All routes
// const allRoutes = [
//     rootRoute,
//     // dashboardRoutes,
//     ...appRoutes,
//     pagesRoutes,
//     addRoutes,
//     editRoutes,
//     // componentsRoutes,
//     // chartRoutes,
//     // formsRoutes,
//     // tableRoutes,
//     authRoutes,

// ];

// // const authProtectedRoutes = [dashboardRoutes, ...appRoutes, pagesRoutes, componentsRoutes, chartRoutes, formsRoutes, tableRoutes];
// const authProtectedRoutes = [...appRoutes];
// const allFlattenRoutes = flattenRoutes(allRoutes);
// export { allRoutes, authProtectedRoutes, allFlattenRoutes };