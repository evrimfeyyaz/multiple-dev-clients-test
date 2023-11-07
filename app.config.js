const name = process.env.BUILD_TYPE === 'DEV_STAGE' ? 'Dev Stage Test' : 'Dev Prod Test';
const identifier = process.env.BUILD_TYPE === 'DEV_STAGE' ? 'com.example.devstage' : 'com.example.devprod';

export default {
  "expo": {
    "name": name,
    "slug": "multiple-dev-clients-test",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": identifier
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": identifier
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "eas": {
        "projectId": "ed11fc31-a829-4e9e-a8b2-b898608450a7"
      }
    }
  }
}
