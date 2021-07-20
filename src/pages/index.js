import * as React from "react";
import "../styles/global.css";
import { Hero } from "../components/hero";

const IndexPage = () => {
  return (
    <main className="bg-gray-800">
      <title>Crooz</title>
      <div>
        <Hero className="py-16 px-8 h-screen justify-center items-center flex">
          <div>
            <h1
              style={{ fontFamily: "wotfardbold" }}
              className="text-5xl text-gray-800 my-4"
            >
              Hey! ️
            </h1>
            <h1
              style={{ fontFamily: "wotfardbold" }}
              className="text-6xl text-gray-800"
            >
              Join us on a Crooz✌ ️
            </h1>
          </div>
        </Hero>
        <div className="flex flex-col items-center">
          <div className="max-w-2xl">
            <div className="container py-16 px-8 text-lg text-gray-100 bg-gray-800">
              <h3 className="text-3xl mb-8">
                Keep up with your mates from the comfort of your own car
              </h3>
              <p className="max-w-prose">
                Crooz helps you stay connected with the humans you're driving
                with. Whether you're on your way to a car meet, or offroading in
                the outback, Crooz can make the experience more safe, social and
                fun.
              </p>
            </div>
          </div>
          <div className="w-screen bg-green-600 flex flex-col items-center">
            <div className="py-8 px-8 text-lg text-gray-100 max-w-2xl">
              <h3 className="text-3xl my-8">
                📞 Chat with the group via "Walkie-Talkie"
              </h3>
              <p className="my-2">
                Banter is just a tap away. Touch anywhere on the screen to
                toggle your microphone on. It's just like a walkie-talkie.
                Remember those? *Over*
              </p>
              <h3 className="text-3xl my-8">🎶 Your audio, your way</h3>
              <p className="my-2">
                We won't hijack your audio. When there's nothing to say, your
                favourite jams will play loud and clear.
              </p>
              <p className="my-2">
                And since you're muted by default, no-one will hear you singing
                along to that one track. You can't help yourself, can you?
              </p>
              <h3 className="text-3xl my-8">🧭 Stay on track</h3>
              <p className="my-2">
                Keep track of where everyone is on a live, interactive map. Did
                your directionally-challenged friend take a wrong turn? Activate
                your walkie-talkie and let them know, or...
              </p>
              <h3 className="text-3xl my-8">👀 React in real-time</h3>
              <p className="my-2">
                We've got social features to keep the app live and fun. Choose
                from a range of soundbites, emojis or reaccs that get instantly
                broadcast to everyone else in your room.
              </p>
              <p className="my-2">
                😂😂😂 When your mate misses the freeway exit.
              </p>
            </div>
          </div>
          <div className="max-w-2xl">
            <div className="container py-16 px-8 text-lg text-gray-100 bg-gray-800">
              <h3 className="text-3xl mb-8">Coming soon...</h3>
              <p className="max-w-prose my4">
                We've got so many plans and improvements for Crooz that we're
                excited to share with you.
              </p>
              <p className="max-w-prose my-4">
                Track day enthusiast? We're building features to track, record
                and share your times and performance.
              </p>
              <p className="max-w-prose my-4">
                Host car meets? We're building features help organise, promote
                and run events with like-minded enthusiasts.
              </p>
              <p className="max-w-prose my-4">And much, much more...</p>
              <div className="flex justify-center">
                <a
                  href="https://app.crooz.in"
                  className="text-gray-300 hover:text-green-400"
                >
                  Tech Demo
                </a>
              </div>
            </div>
          </div>
          <a
            className="mb-4 text-white hover:text-green-400"
            href={"/privacypolicy"}
          >
            read our privacy policy here
          </a>
          <p className="text-sm mb-8 text-gray-300">
            Built with ♡ by Speef Software, 2021
          </p>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
