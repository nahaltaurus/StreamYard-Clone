import React from 'react'
import './Home.css';
import logo from './ab.png'
import ab from './ok.png'
import abc from './ac.png'
import ag from  './ag.png'
import bb from './bb.jpg'
import afd from './afd.png'
import cv from  './cv.png'
import al from './al.mp4'
export default function Home() {
  return (
    <div>
        <nav>
            <a>
                <img src={logo} width="170px"  height="30px" alt='/' />
            </a>
            <ul>
                <a><li>Product</li></a>
                <a><li>Contact</li></a>
                <a><li>Pricing</li></a>
                <a><li>What's  New</li></a>
                <a><li>For Business</li></a>
                <a><li>Login</li></a>
                <button type="button" class="btn btn-primary">Get started</button>
            </ul>
        </nav>
        <div class="new">
            <h1>The easiest way to live stream <br></br> and record</h1>
            <p>A professional live streaming and recording studio in your browser. Interview guests,<br></br> brand your broadcast, and much more. Stream to Facebook, YouTube,<br></br> LinkedIn,and<span>other platforms.</span></p>
            <button type="button" class="btn btn-primary">Get started - it's free!</button>
        </div>
        <div class='in'>
            <img src={ab}  alt='/' />
        </div>
        <div class='ls'>
            <div class='fs'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-star" viewBox="0 0 16 16">
  <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.178.178 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.178.178 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.178.178 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.178.178 0 0 0 .134-.098L7.84 4.1z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
</svg>
            <h2>Always look professional</h2>
            <p>Host a stable stream that is on-<br></br>brand and smooth every time.</p>
            </div>
            <div class='ss'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z"/>
</svg>
                <h2>No  Software Downloads</h2>
                <p>Go live with guests from your<br></br> browser in a few clicks</p>
            </div>
            <div class='qs'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-broadcast" viewBox="0 0 16 16">
  <path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
</svg>
                <h2>Multistreaming</h2>
                <p>Works seamlessly with Facebook,<br></br>Youtube,Linkedin,Twitter,Twitch,<br></br>and more</p>
            </div>
        </div>
        <div class="quote">
            <div class='images'>
                <img src={abc} alt='/' />
            </div>
            <div class='qt'>
                <p>"I've been blown away by StreamYard's<br></br> incredible software &amp; technology. It<br></br> enables me to execute my message to<br></br> the world."</p>
                <h4>Gary Vaynerchuk</h4>
                <p2>Entrepreneur<br></br></p2>
                <a href="https://www.youtube.com/live/Qhy3nYpIjD8?feature=share"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-badge-hd-fill" viewBox="0 0 16 16">
  <path d="M10.53 5.968h-.843v4.06h.843c1.117 0 1.622-.667 1.622-2.02 0-1.354-.51-2.04-1.622-2.04z"/>
  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm5.396 3.001V11H6.209V8.43H3.687V11H2.5V5.001h1.187v2.44h2.522V5h1.187zM8.5 11V5.001h2.188c1.824 0 2.685 1.09 2.685 2.984C13.373 9.893 12.5 11 10.69 11H8.5z"/>
</svg><span>Watch example</span></a>
            </div>
        </div>
        <div class="next1">
            <div class="a">
                <h1>Create unforgettable <br></br> moments with guests</h1>
                <p>Broadcast with up to 10 people on screen and more backstage</p>
                <a class="red">Learn more about Guest Interviews</a>
                <p1 class="und"><br></br>_________________________________________</p1>
                <h5>As soon as we moved over to StreamYard, it was like<br></br> night and day. It's been a hit with every speaker we<br></br> bring in."</h5>
                <div class="i">
                    <div class="im">
                        <img src={bb}  alt='/' />
                    </div>
                    <div class="cont">
                        <p1>Jess Catorc :</p1>
                        <p2>Head of Patrnerships of teachable</p2>
                        <h4>teach:able</h4>
                    </div>
                </div>
            </div>
            <div class="b">
                <img src={ag}  alt='/' />
             </div>
        </div>
        <div class="c">
            <div class="img2">
                <img src={afd} alt='/' />
            </div>
            <div class="head1">
                <h1>Multistream to all <br></br>channels at once</h1>
                <p1>Stream to Facebook, Youtube, Linkedin, Twitter, Twitch, and<br></br>custom RTMP outputs</p1>
                <h5><a href='/'>Learn more about Multistreaming</a></h5>
                <p2>______________________________</p2>
                <h6>"Dude, it's a great app. Effortless."</h6>
                <div class="i1">
                    <div class="im1">
                        <img src={cv}  alt='/' />
                    </div>
                    <div class="cont1">
                        <p1>Frank Kern :</p1>
                        <p2>Marketer</p2>
                    </div>
                </div>
            </div>
        </div>
        <div class="last1">
            <div class="txt">
                <h1>Studio quality<br></br>recordings on any<br></br>connection</h1>
                <p>Sick of your Zoom and Skype recordings being ruined by a bad<br></br> connection? With local recordings, a separate audio and video<br></br> file is recorded on each user's device. Even if someone has a<br></br> weak connection, the recordings won't be blurry or choppy.</p>
                <h6><a>Learn more about Recordinngs</a></h6>
            </div>
            <div class="vd">
                <video controls width="640" height="360" autoPlay loop>
                    <source src={al} type="video/mp4" />
                </video>
            </div>
        </div>
        <div class="end">
            <h1>Everyone has a message to share</h1>
            <button type="button" class="btn btn-primary">Get started</button>
            <p>Enterprise? Contact our sales team <span><a>here</a></span></p>
        </div>
        <footer>
            <img src={logo}  alt='/'  />
            <p>The easiest way to live stream and record</p>
            <div class="rw">
                <div class="a1">
                    <p1>Company</p1>
                    <ul>
                        <li><a>About</a></li>
                        <li><a>Careers</a></li>
                        <li><a>Contact Us</a></li>
                        <li><a>Contact Sales</a></li>
                    </ul>
                </div>
                <div class="a2">
                    <p1>Product</p1>
                    <ul>
                    <li><a>Why StreamYard</a></li>
                    <li><a>Multistreaming</a></li>
                    <li><a>Branded Streams</a></li>
                    <li><a>Recordings</a></li>
                    <li><a>Podcasting</a></li>
                    <li><a>Webinars</a></li>
                    </ul>
                </div>
            </div>
            <p>___________________________________________________________________________________________________________________________________________________________________________________________________________</p>
            <p7>© 2023 StreamYard, Inc.</p7>
        </footer>
    </div>
  )
}

