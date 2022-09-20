import React from "react";
import { INotification } from "@/types/notificationsType";
import { useTranslation } from "react-i18next";

export default function Card(props: INotification) {
  const { t } = useTranslation();
  const isCommentYourPicture = props.body.type === "commented_your_picture";

  return (
    <div className={`card ${!props.read ? "card--unread" : ""}`}>
      <img
        className="card__avatar"
        src={props.user.avatar}
        alt={props.user.name}
      />
      <div
        className={`card__content ${
          isCommentYourPicture && "card__content--comment"
        }`}
      >
        <div>
          <p className="card__text">
            <span className="card__name">{props.user.name}</span>{" "}
            {t(props.body.type)}{" "}
            <span
              className={`card__message-inline
              ${
                props.body.type.includes("group")
                  ? "card__message-inline--group"
                  : ""
              }
            `}
            >
              {props.body.message_inline}
            </span>
            <span
              className={`card__status card__status--${props.status}`}
            ></span>
          </p>
          <p className="card__time">{props.time}</p>
        </div>

        {props.body.type === "private_message" && (
          <div className="card__private-message">
            <p>{props.body.message_box}</p>
          </div>
        )}

        {props.body.type === "commented_your_picture" && (
          <img
            className="card__commented-picture"
            src={props.body.image}
            alt={props.body.message_inline}
          />
        )}
      </div>
    </div>
  );
}
