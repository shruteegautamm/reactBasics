import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="main-div">
      <div className="sub-div facebook">
        <h1> Facebook </h1>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-uaK5MQMEY1_ds2IHnWNvKen6q96rbt2rgQ&usqp=CAU"
          style={{
            height: 200,
            width: 200,
          }}
        />
        <br />
        <a href="https://facebook.com/" target="_blank">
          Facebook
        </a>
        <p className="black">
          Facebook is a website which allows users, who sign-up for free
          profiles, to connect with friends, work colleagues or people they
          don't know, online. It allows users to share pictures, music, videos,
          and articles, as well as their own thoughts and opinions with however
          many people they like. Users send “friend requests” to people who they
          may or may not know.
        </p>
      </div>
      <div className="sub-div insta">
        <h1> Instagram </h1>
        <img
          src="https://cdn4.sharechat.com/Instagramlogo_1b7530b4_1661188919474_sc_cmprsd_75.jpg?tenant=sc&referrer=tag-service&f=Instagramlogo_1b7530b4_1661188919474_sc_cmprsd_75.jpg"
          style={{
            height: 200,
            width: 200,
          }}
        />
        <br />
        <a href="https://instagram.com/" target="_blank">
          Instagram
        </a>
        <p className="black">
          Instagram is a photo and video sharing social networking service owned
          by American company Meta Platforms. The app allows users to upload
          media that can be edited with filters, be organized by hashtags, and
          be associated with a location — via geographical tagging. Posts can be
          shared publicly or with preapproved followers.
        </p>
      </div>
      <div className="sub-div black">
        <h1> Tiktok </h1>
        <img
          src="https://img.freepik.com/free-vector/tiktok-banner-with-watercolor-splatter_69286-194.jpg?w=2000"
          style={{
            height: 200,
            width: 200,
          }}
        />
        <br />
        <a href="https://tiktok.com/" target="_blank">
          Tiktok
        </a>
        <p className="black">
          TikTok is a social media platform for creating, sharing and
          discovering short videos. The app is used by young people as an outlet
          to express themselves through singing, dancing, comedy, and
          lip-syncing, and allows users to create videos and share them across a
          community.
        </p>
      </div>
      <div className="sub-div black">
        <h1> Twitter </h1>
        <img
          src="https://maroc-diplomatique.net/wp-content/uploads/2023/07/X-Twitter-e1690210315800.jpg"
          style={{
            height: 200,
            width: 200,
          }}
        />
        <br />
        <a href="https://twitter.com/" target="_blank">
          Twitter
        </a>
        <p className="black">
          Twitter is a free social networking site where users broadcast short
          posts known as tweets. These tweets can contain text, videos, photos
          or links. To access Twitter, users need an internet connection or
          smart phone to use the app or website, Twitter.com.
        </p>
      </div>
    </div>
  );
}

export default App;
