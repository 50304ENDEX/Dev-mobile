import LoginScreen from "../Screens/LoginScreen"
import StackRouterDrawer from "./StackRouterDrawer"
import { createStackNavigator } from "@react-navigation/stack"

export default function RouterStack() {

    const Stack = createStackNavigator()
    return (
       <Stack.Navigator>
                  {!isAuthenticated ? (
        <>
          <Stack.Screen name="Login">
            {(props) => (
              <LoginScreen {...props} onLoginSuccess={() => setIsAuthenticated(true)} />
            )}
          </Stack.Screen>
          <Stack.Screen  />
        </>
      ) : (
        <Stack.Screen name="MainApp" component={StackRouterDrawer} />
      )}
       </Stack.Navigator>
    )
}