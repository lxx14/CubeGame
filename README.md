# Getting Started
TODO: Guide users through getting your code up and running on their own system:
1. MacOS/IOS:
Need to install node, npm (latest stable version), watchman, XCode, Command Line Tools for XCode, CocoaPods.
2. MacOS/Android:
Need to install node, npm (latest stable version), watchman, Java Development Kit, Android Studio. Also need to change $HOME/.bash_profile or $HOME/.bashrc

Detail instruction and guide you can find at https://reactnative.dev/docs/environment-setup

# Run project
1. For IOS:
In root folder of a proect in terminal you must type:
- npm i
- cd ios
- pod install
Open XCode, select in folder ios file with extension .xcworkspace, run proect in emulator.
2. For Android:
In root folder of a proect in terminal you must type:
- npm i
- cd android
- ./gradlew clean
- npm run android


# Build
1. IOS: 
At XCode product/archive
2. Android: 
In root folder of a proect in terminal you must type:
- cd android
- ./gradlew clean
- ./gradlew assembleRelease

# Debugger
You can connect debugger/ Details in link:
https://github.com/jhen0409/react-native-debugger
