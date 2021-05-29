import { BrowserRouter, Switch, Route } from "react-router-dom";
import WelcomePage from "./Components/Welcome/WelcomePage";
import Login from "./Components/Login/Login";
import Registeruser from "./Components/Registeruser/Registeruser";
import Addbook from "./Components/AddBook/Addbook";
import Booklist from "./Components/BookList/Booklist";
import UserProfile from "./Components/User_Profile/UserProfile";
import Book_info from "./Components/Book_information/Book_info";
import UserProfiles from "./Components/UserProfiles/UserProfiles";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Registeruser />
        </Route>

        <Route path="/add-book">
          <Addbook />
        </Route>

        <Route exact path="/book-list">
          <Booklist />
        </Route>

        <Route path="/book-list/:id">
          <Book_info />
        </Route>
        <Route exact path="/user-info/">
          <UserProfiles />
        </Route>
        <Route path="/user-info/:id">
          <UserProfile />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
