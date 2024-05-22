import ChatList from "../ChatList";
import ChatView from "../ChatView";
import Header from "../Header";
import SideMenu from "../SideMenu";

const Home = () => {
  return (
    <div className="w-full h-dvh grid grid-cols-[repeat(20,_1fr)] grid-rows-[repeat(16,_1fr)]">
      <Header />
      <SideMenu />
      <ChatList />
      <ChatView />
    </div>
  );
};

export default Home;
