import React from "react";
// import Schedule from "./components/ScheduleComponent";
import AppHeader from "./components/smallerComponents/AppHeader";
import TimeOff from "./components/TimeOffComponent";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import UserProfile from "./components/UserProfileComponent";
import FolderList from "./components/DocsComponent";
import NewsAlerts from "./components/NewsComponent";
import CreateSchedule from "./components/adminSchedule";

// import InboxComp from "./components/InboxComponent";
import DashComponent from "./components/DashComponent";
import SignInSide from "./components/LoginComponent";
// import Button from "@material-ui/core/Button";

function App() {
  return (
    <div>
      <AppHeader />

      {/* <Router>
        <Switch>
          <Route exact path="/" component={DashComponent} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/timeoff" component={TimeOff} />
          <Route path="/announcements" component={NewsAlerts} />
          <Route path="/signin" component={SignInSide}/>          
        </Switch>
      </Router>
        
        
   

    
      
      <CreateSchedule/>



    </div>
  );
}

export default App;
