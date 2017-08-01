# Reproduction repository

This repro shows that the `prodOnly` flag is not working in packages in Meteor 1.5.

Please start this app on an Android device and have a look at the browser console via Chrome remote debugging.

The app tries to call the Meteor method called `test`. While this works on a desktop device, on Android it fails.

After a while, error messages about failed requests to <https://localhost> are being displayed. If you reload the browser with Ctrl+R, it's even more obvious. In a real app, logging into the app isn't possible anymore in this state.

If you remove the `test:ssl` package, the app just works fine.
