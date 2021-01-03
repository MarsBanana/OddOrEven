import firebase from "./firebase"

const remoteConfig = firebase.remoteConfig()

remoteConfig.settings.minimumFetchIntervalMillis = 3600000

export default remoteConfig