import { NativeRouter, Route, Link } from 'react-router-native';
import React from 'react';
import Main from './pages/Main';
import AutoAvaliacao from './pages/Tabs/AutoAvaliation/AutoAvaliation';
import Complaint from './pages/Tabs/Complaint/Complaint';

const Routes = () => (
  <NativeRouter>
    <Route exact path="/" component={Main} />
    <Route path="/autoavaliacao" component={AutoAvaliacao} />
    {/* <Route path="/complaint" component={Complaint} /> */}
  </NativeRouter>
);

export default Routes;
