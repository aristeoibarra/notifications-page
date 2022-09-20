import { Layout, TopBar, Card } from "@/components";
import { useNotifications } from "@/hooks";

function App() {
  const { notifications, unreadCount, handleMarkAllAsRead } =
    useNotifications();
  return (
    <Layout>
      <TopBar
        unreadCount={unreadCount}
        handleMarkAllAsRead={handleMarkAllAsRead}
      />
      {notifications.map((notification) => (
        <Card key={notification.id} {...notification} />
      ))}
    </Layout>
  );
}

export default App;
