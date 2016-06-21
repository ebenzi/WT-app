#!/usr/bin/env bash

cordova build --release android
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore keystore/android-release-key.keystore /Users/demian/projects/demianh/songbook-app/app/platforms/android/build/outputs/apk/android-release-unsigned.apk rondoapp
rm build/Rondo.apk && ~/Library/Android/sdk/build-tools/23.0.2/zipalign -v 4 /Users/demian/projects/demianh/songbook-app/app/platforms/android/build/outputs/apk/android-release-unsigned.apk build/Rondo.apk