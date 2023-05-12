# appium-boilerplate

> **NOTE:**
> This boilerplate is for Webdriver V7 where the tests are written with `async`/`await` and TypeScript.\
> If you need a boilerplate for sync mode then check the following:
> - V7 (TypeScript) please click [here](https://github.com/webdriverio/appium-boilerplate/tree/sync-mode)

Boilerplate project to run Appium tests together with WebdriverIO for:

- iOS/Android Native Apps
- iOS/Android Hybrid Apps
- Android Chrome and iOS Safari browser ([check here](./README.md#automating-chrome-or-safari))

> This boilerplate uses the WebdriverIO native demo app which can be found [here](https://github.com/webdriverio/native-demo-app).

> **Note:**
> This boilerplate only handles local execution on 1 em/simulator at a time, not parallel execution. For more info about that Google on setting up a grid with Appium.


## Based on
This boilerplate is currently based on:
- **WebdriverIO:** `7.##.#`
- **Appium:** `1.22.#`

## Installation

1. Running `git clone https://github.com/webdriverio/appium-boilerplate.git`
2. Running `npm install`
3. Installing Appium on a local machine [here](./docs/APPIUM.md)
4. Setting up Android and iOS on a local machine [here](./docs/ANDROID_IOS_SETUP.md)
5. Making demo app available. Create a `./apps` directory. Download the app files (.app / .apk) with version >= `0.4.0`
[here](https://github.com/webdriverio/native-demo-app/releases). Move the files into the directory `apps`.
6. Running tests `npm run android.app` or `npm run android.app`


## How to implement in your project
Choose one of the following options:

1. Clone the git repo — `git clone https://github.com/webdriverio/appium-boilerplate.git`
2. Then copy the files to your project directory (all files in `/tests` and the `wdio.conf`-files in the `config`-folder)
3. Merge project dev dependencies with your projects dev dependencies in your `package.json`
4. Merge the scripts to your `package.json` scripts
5. Run the tests, see [Native App Tests](#native-app-tests) or [Automating Chrome of Safari](#automating-chrome-or-safari).

## Configuration files
This boilerplate uses a specific config for iOS and Android, see [configs](./config). The configs are based on a shared config
[`wdio.shared.conf.ts`](./config/wdio.shared.conf.ts).
This shared config holds **all the defaults** so the iOS and Android configs only need to hold the capabilities and specs that are needed
for running on iOS and or Android (app or browser).

Please check the [`wdio.shared.conf.ts`](./config/wdio.shared.conf.ts)-file for the minimal configuration options. Notes are added for why
a different value has been selected in comparison to the default values WebdriverIO provides.

Since we do not have Appium installed as part of this package we are going to use the globally installed version of Appium. This is
configured in [`wdio.shared.local.appium.conf.ts`](./config/wdio.shared.local.appium.conf.ts).

## Locator strategy for native apps
The locator strategy for this boilerplate is to use `accessibilityID`'s, see also the
[WebdriverIO docs](https://webdriver.io/docs/selectors#accessibility-id) or this newsletter on
[AppiumPro](https://appiumpro.com/editions/20).
`accessibilityID`'s make it easy to script once and run on iOS and Android because most of the apps already have some `accessibilityID`'s.

If `accessibilityID`'s can't be used, and for example only XPATH is available, then the following setup could be used to make cross-platform
selectors

```js
const SELECTORS = {
    WEB_VIEW_SCREEN: browser.isAndroid
        ? '*//android.webkit.WebView'
        : '*//XCUIElementTypeWebView',
};
```

> **NOTE:** If you look into the screen/page-objects you might see that a lot of selectors are made private, meaning you can use the
> elements in the spec-file itself. This has been done on purpose because one of the *best practices* is to remove all interactions from
> your spec files and implement the interactions in the page objects. This will make it easier to maintain for the future and easier to
> refactor if new interaction methods will be added or names will be adjusted.

## Native App Tests
All tests can be executed on te devices as configured in [`wdio.android.app.conf.ts`](./config/wdio.android.app.conf.ts) or
[`wdio.ios.app.conf.ts`](./config/wdio.ios.app.conf.ts). Please check the below tests on what they do or on how to run them separately.

        // For Android local execution
        npm run android.app

        // For iOS local execution
        npm run ios.app


### Drag And Drop
Drag and Drop an element can be a complex gesture to automate with Appium. The demo app has a simple puzzle that hopefully makes it easier
and fun to understand how to implement a drag and drop in WebdriverIO. The test can be found [here](./tests/specs/app.drag.and.drop.spec.ts)
and the drag and drop implementation can be found in [this](./tests/screenobjects/DragScreen.ts)-file.
This file will now only hold the [`touchAction`](https://webdriver.io/docs/api/browser/touchAction/) way of using the drag and drop Gesture.
The `touchPerform` is the *old* JSONWP way of implementing a gesture and is not W3C compatible. The `touchAction` is the new official W3C
implementation of a gesture.

You can run the single test with the following commands

        // For Android local execution
        npm run android.app -- --spec=tests/specs/app.drag.and.drop.spec.ts

        // For iOS local execution
        npm run ios.app -- --spec=tests/specs/app.drag.and.drop.spec.ts

### Form components
The Forms-tab holds some components that might be a challenge during automation:

- Input fields
- Switches
- Dropdowns / Pickers
- Native alerts

The tests and used page objects hopefully explain what you need to do to make this work and can be found
[here](./tests/specs/app.forms.spec.ts).

You can run the single test with the following commands

        // For Android local execution
        npm run android.app -- --spec=tests/specs/app.forms.spec.ts

        // For iOS local execution
        npm run ios.app -- --spec=tests/specs/app.forms.spec.ts

### Login with Biometric support
The Login screen holds a simple implementation of a Login and SignUp form. This boilerplate holds 2 different test-files for the Login
screen.

- [Default Login/Sign Up](./tests/specs/app.login.spec.ts)
- [Login through Touch-/FaceID or FingerPrint (Biometric Support)](./tests/specs/app.biometric.login.spec.ts)

The last one can be very interesting because it will give you an idea what you need to do when you need to log in with Touch-/FaceID or
FingerPrint. The [`app.biometric.login.spec.ts`](./tests/specs/app.biometric.login.spec.ts) will also enable Touch-/FaceID if needed
automatically for you for **Android Emulators** or **iOS Simulators**. It covers almost all platform versions.

> **NOTE:** The methods rely on the fact that the Android Emulator or iOS Simulator have English as the default language. If you have set up
> your test devices with a different language you might need to change certain selectors and or texts for the selectors.

You can run the single test with the following commands

        // For Android local execution
        npm run android.app -- --spec=tests/specs/app.login.spec.ts
        npm run android.app -- --spec=tests/specs/app.biometric.login.spec.ts

        // For iOS local execution
        npm run ios.app -- --spec=tests/specs/app.login.spec.ts
        npm run ios.app -- --spec=tests/specs/app.biometric.login.spec.ts

### Navigation
There are 2 types of navigation tests that explained in this boilerplate.

1. [Tab Bar](./tests/specs/app.tab.bar.navigation.spec.ts)
1. [Deep Links](./tests/specs/app.deep.link.navigation.spec.ts)

The most interesting test here will be the [Deep Links](./tests/specs/app.deep.link.navigation.spec.ts) because this might speed up your own
tests if your app supports Deep Links. Check the code and the `openDeepLinkUrl()` method in the [`Utils.ts`](./tests/helpers/Utils.ts)-file
to see how this works.

> **PRO TIP:** If you are automating iOS apps and you can use Deep Links, then you might want to try adding the capability
> `autoAcceptAlerts:true` when you start the iOS device. This capability will automatically accept all alerts, also the alert that will
> appear when you want to open your deep link in Safari.
>
> If you ware going to use this capability, then don't forget to remove the last few lines in the
> [`openDeepLinkUrl()`](./tests/helpers/Utils.ts)-method, see the comments in the method

You can run the single test with the following commands

        // For Android local execution
        npm run android.app -- --spec=tests/specs/app.tab.bar.navigation.spec.ts
        npm run android.app -- --spec=tests/specs/app.deep.link.navigation.spec.ts

        // For iOS local execution
        npm run ios.app -- --spec=tests/specs/app.tab.bar.navigation.spec.ts
        npm run ios.app -- --spec=tests/specs/app.deep.link.navigation.spec.ts

### Swiping
Swiping is basically a movement with your finger on the screen that has a starting position on the screen, an x-, and y-coordinate and an
end position, also an x-, and y-coordinate. The starting position can be seen as the first time you touch the screen, the initial *press*.
The end position can be seen as the time you release the screen. If you translate this to steps you will get:

1. Press your finger on the screen on starting position
1. Move your finger to the end position
1. Release your finger when you are on the end position

The [Swipe](./tests/specs/app.swipe.spec.ts)-test will be an example on how to do that. It uses a
[Gesture](./tests/helpers/Gestures.ts)-helper that might be useful for you in the future.

If you want to know more about Gestures and how to automate them, then we would advise you to watch
[this presentation "Swiping your way through Appium by Wim Selles"](https://youtu.be/oAJ7jwMNFVU).

You can run the single test with the following commands

        // For Android local execution
        npm run android.app -- --spec=tests/specs/app.swipe.spec.ts

        // For iOS local execution
        npm run ios.app -- --spec=tests/specs/app.swipe.spec.ts