import { registerApplication, start } from "single-spa";
import {constructApplications, constructRoutes, constructLayoutEngine} from 'single-spa-layout';

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

//recolocar qdo não usar o Layout do SingleSPA
//registerApplication({
//   name: "@myorg/navbar",
//   app: () => System.import("@myorg/navbar"),
//   activeWhen: ["/navbar"],
// });

//recolocar qdo não usar o Layout do SingleSPA
// registerApplication({
//   name: "@myorg/react-dashboard",
//   app: () => System.import("@myorg/react-dashboard"),
//   activeWhen: ["/dashboard"],
// });

////recolocar qdo não usar o Layout do SingleSPA
// registerApplication({
//   name: "@myorg/vue-clients",
//   app: () => System.import("@myorg/vue-clients"),
//   activeWhen: ["/clients","/about"],
// });

// registerApplication({
//   name: "@myorg/navbar",
//   app: () => System.import("@myorg/navbar"),
//   activeWhen: ["/"]
// });

const singleSPATemplateEl = document.querySelector('#single-spa-layout')
const layoutData = {
  props: {
    authToken: "78sf9d0fds89-0fysdiuf6sf8",
    //loggedInUser: fetch('/api/user')
  },
  loaders: {
    mainContent: `<img src="../assets/loading.gif">`,
    // A single-spa parcel config
    //topNav: singleSpaReact({...})
  }
};
const routes = constructRoutes(singleSPATemplateEl,layoutData);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });
applications.forEach(registerApplication);

start({
  urlRerouteOnly: true,
});


window.addEventListener('single-spa:before-routing-event', (evt:any) => {
  // console.log('single-spa is about to mount/unmount applications!');
  // console.log(evt.detail.originalEvent) // PopStateEvent
  // console.log(evt.detail.newAppStatuses) // { }
  // console.log(evt.detail.appsByNewStatus) // { MOUNTED: [], NOT_MOUNTED: [] }
  // console.log(evt.detail.totalAppChanges) // 0
});
