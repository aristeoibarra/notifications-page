import { INotification } from "@/types/notificationsType";

export async function getNotifications(): Promise<INotification[]> {
  const response = await fetch(
    "https://res.cloudinary.com/dgsmhl3ob/raw/upload/v1663624291/notifications_web/data/notifications.json"
  );
  return response.json();
}
