import React, { useState, useEffect } from "react";
import { INotification } from "@/types/notificationsType";
import { getNotifications } from "@/services/notifications";

export default function useNotifications() {
  const [notifications, setNotifications] = useState<INotification[]>([]);
  const [unreadCount, setUnreadCount] = useState<number>(0);

  const loadNotifications = async () => {
    const response = await getNotifications();
    setNotifications(response);
    setUnreadCount(response.filter((item) => !item.read).length);
  };

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
    setUnreadCount(0);
  };

  useEffect(() => {
    loadNotifications();
  }, []);

  return {
    notifications,
    unreadCount,
    handleMarkAllAsRead,
  };
}
