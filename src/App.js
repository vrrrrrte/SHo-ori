import React from 'react';
import logo from './logo.svg';
import pic from './pic.jpg';
import './App.css';


const notifications = [
  {
    text: "Added the new video in Core Workout section",
    img: "https://i.imgur.com/S43qYm8.png",
    type: "video"
  },
  {
    text: "Boulder shoulders workout in Combos for you",
    type: "combo"

  },
  {
    text: "Chest Pump workout in Combos for you",
    type: "combo"
  },
  {
    text: "Added the new video in Forearm Workout section",
    type: "video"
  }
]

const Notification = ({ notification: { type, text, img } }) => {
  return (
    <div className="notification">
      <img src={img} className="picture" />
      {type === 'video' ?
        <div className="text">
          Added the new video in
          <div className="bold">Core Workout</div>
          section
        </div>
        :
        <div style={{ color: 'white' }}>combo</div>
      }
    </div>
  )

}


const NotificationsList = () => (
  <div className="app">
    {notifications.map((notification) =>
      <Notification notification={notification} />
    )}
  </div>
)


export default NotificationsList;
