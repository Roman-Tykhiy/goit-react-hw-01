import Profile from "./components/Profile/Profile";
import userData from "./components/Profile/UserData.json";
import Friends from "./components/FriendList/Friends.json";
import TransactionHistoryList from "./components/TransactionHistory/TransactionHistory.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import FriendList from "./components/FriendList/FriendList";

const App = () => {
  return (
<>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={Friends}/>
      <TransactionHistory items={TransactionHistoryList}/>
    </>
    
  )
  
};

export default App;