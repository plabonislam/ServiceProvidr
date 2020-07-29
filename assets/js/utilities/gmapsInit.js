

parasails.registerUtility('gmapsInit', async function gmapsInit() {

const API_KEY = 'AIzaSyAcDztAZx1JL_D-fmmpNUMUZ4FsmmOiCBQ';
const CALLBACK_NAME = 'gmapsCallback';

let initialized = !!window.google;
let resolveInitPromise;
let rejectInitPromise;
// This promise handles the initialization
// status of the google maps script.
const initPromise = new Promise((resolve, reject) => {
  resolveInitPromise = resolve;
  rejectInitPromise = reject;
});
  // If Google Maps already is initialized
  // the `initPromise` should get resolved
  // eventually.
  if (initialized) return initPromise;

  initialized = true;
  // The callback function is called by
  // the Google Maps script if it is
  // successfully loaded.
  window[CALLBACK_NAME] = () => resolveInitPromise(window.google);
  console.log("window",window);

  // We inject a new script tag into
  // the `<head>` of our HTML to load
  // the Google Maps script.
  const script = document.createElement('script');
  
  script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=${CALLBACK_NAME}`;

  //https://maps.googleapis.com/maps/api/js?key=AIzaSyAcDztAZx1JL_D-fmmpNUMUZ4FsmmOiCBQ&callback=initMap
  //https://maps.googleapis.com/maps/api/js?key=AIzaSyAcDztAZx1JL_D-fmmpNUMUZ4FsmmOiCBQ&callback=gmapsCallback
  console.log("srciprrrrrrrrr",script.src)
  script.onerror = rejectInitPromise;
  document.querySelector('head').appendChild(script);

  return initPromise;

});