import { registerRootComponent } from 'expo';
import codePush from "react-native-code-push";
import App from './App';

let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };
MyApp = codePush(codePushOptions)(App);
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(MyApp);
