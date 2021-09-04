import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import { Background } from "../components/Background";


import {AuthRoutes} from './Auth.routes';
 
export function Routes(){
    return(
       
        <NavigationContainer>
            <AuthRoutes/>
        </NavigationContainer>
  

    );
}