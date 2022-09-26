import { useTranslation } from "react-i18next";

interface TopBarProps {
  unreadCount: number;
  handleMarkAllAsRead: () => void;
}
export default function TopBar(props: TopBarProps) {
  const { t } = useTranslation();

  return (
    <div className="topbar">
      <div className="topbar__info">
        <h1>{t("notifications")}</h1>
        <div className="topbar__info__badge">{props.unreadCount}</div>
      </div>
      <button className="topbar__button" onClick={props.handleMarkAllAsRead}>
        {t("mark_all_as_read")}
      </button>
    </div>
  );
}
