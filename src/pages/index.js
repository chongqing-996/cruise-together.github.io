import * as React from "react"
import Logo from "../components/Logo"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  maxWidth: 900,
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}


const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Welcome To Crooz
      </h1>
      <Logo height={100} width={100}/>
      <p style={paragraphStyles}>
      Crooz keeps you connected with your friends and helps mates drive together. Whether you’re on your way to a car meet or going on a road trip together Crooz can keep the journey safe, social and fun. 
      With our mobile app you can:
      <ul>
      <li>
      Talk to each other safely on an as-needed basis via a virtual group Walkie-Talkie
      And jam out to your favourite playlists when there’s nothing to say
      </li>
      <li>
      Keep track of each other’s progress on a map
      (Help out your directionally challenged mates)
      </li>
      <li>
      Use macros to send live emotes and reactions<br/>   
      <span role="img" aria-label="Car Chop Emoji">
      🏎 ✌️
      </span>
      </li>
      <li>
      Collect stats and records of your drives and track days
      It’s like Strava! But for your car.
      </li>
      <br/>
      Crooz is in a private beta at the moment,
      Leave your email below to join the waitlist
      </ul>
      </p>
    </main>
  )
}

export default IndexPage
