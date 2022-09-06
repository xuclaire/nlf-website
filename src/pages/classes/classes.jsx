import React from 'react';
import './classes_style.css';
import ClassContainer from '../../shared-components/classContainer';
import LeafImageContainerFaceRight from '../../shared-components/leafImageContainerFaceRight';
import classpic from '../../images/classes.png';
import rjm from '../../images/rjm.png';
import llbs from '../../images/llbs.png';
import pic101 from '../../images/101.png';
import pic201 from '../../images/201.png';
import pic301 from '../../images/301.png';
import pic401 from '../../images/401.png';

function Classes() {
  return (
    <>
      <div className="header">
        <div className="words">
        <h1>Classes</h1>
        <p>During the Fall and Spring Semesters, New Life Fellowship offers either a 13 week Bible study or a 4 week Bible study. See below for additional details on these classes.</p>
        <a href='https://nlfhtx.org/classes/'><button>View All Classes</button></a>
        <a href='https://nlfhouston.churchcenter.com/home'><button>Church Center App</button></a>
        </div>
        <LeafImageContainerFaceRight
          photo={classpic} 
        />
      </div>
      <div className="rjm">
      <ClassContainer photo={rjm}/>
        <div className="words">
        <h2>Receiving Jesus Meeting</h2>
        <p>This one-time class addresses the fundamental doctrines of the Christian faith and is designed to answer basic questions about Christianity, regardless of whether or not you are a Christ-follower.  It will also help you to learn to read and understand the Bible.<br></br>Prerequisites: None<br></br>When: Monthly | 2 PM | 1st Sun<br></br>Cost: Free</p>
        <a href='https://nlfhouston.churchcenter.com/registrations'><button>Register</button></a>
        </div>
      </div>
      <div className="llbs">
      <div className="words">
        <h2>Living Life Bible Study</h2>
        <p>This class addresses the fundamental doctrines of the Christian faith and is designed to answer basic questions about Christianity, regardless of whether or not you are a Christ-follower.  It will also help you to learn to read and understand the Bible.<br></br>Prerequisites: None<br></br>When:  Jan & Sept, 13 Weeks | 7 PM | Mon<br></br>Cost: $20</p>
        <a href='https://nlfhouston.churchcenter.com/registrations'><button>Register</button></a>
        </div>
        <ClassContainer photo={llbs}/>
      </div>
      <div className="class101">
        <ClassContainer photo={pic101}/>
        <div className="words">
        <h2>Class 101: Discovering Church Membership</h2>
        <p>This is the introductory class to become a member of New Life Fellowship.  You will learn about the purpose of church and the privileges and responsibilities of being a church member.<br></br>Prerequisites: Receiving Jesus Meeting<br></br>When: Bi-Monthly | 10 AM | 3rd Sat<br></br>Cost: Free</p>
        <a href='https://nlfhouston.churchcenter.com/registrations'><button>Register</button></a>
        </div>
      </div>
      <div className="class201">
      <div className="words">
        <h2>Class 201: Discovering Spiritual Maturity</h2>
        <p>This class teaches you basic habits that Christ-followers should develop to foster spiritual growth, including bible study, prayer, tithing, and fellowship.  We will focus on practical skills to help you get started and to encourage consistency with these habits.<br></br>Prerequisites: Class 101<br></br>When: Jan, Apr, Jul, Sept, 4 Weeks | 7 PM | Thurs<br></br>Cost: $10</p>
        <a href='https://nlfhouston.churchcenter.com/registrations'><button>Register</button></a>
        </div>
        <ClassContainer photo={pic201}/>
      </div>
      <div className="class301">
        <ClassContainer photo={pic301}/>
        <div className="words">
        <h2>Class 301: Discovering my SHAPE for Ministry</h2>
        <p>Have you wondered about your purpose and significance in life?   Discover your “SHAPE” for ministry as you learn how God uses your Spiritual Gifts, your Heart (passions), your Abilities, Personality, and Experiences to minister to others.<br></br>Prerequisites: Class 201<br></br>When: Jan, Apr, Jul, Sept, 4 Weeks | 7 PM | Thurs<br></br>Cost: $10</p>
        <a href='https://nlfhouston.churchcenter.com/registrations'><button>Register</button></a>
        </div>
      </div>
      <div className="class401">
      <div className="words">
        <h2>Class 401: Discovering my Mission</h2>
        <p>This class teaches you about God’s heart for reaching people who do not know Him, why suffering often accompanies the sharing of the gospel, New Life’s strategy for missions, and how you can get involved by sharing your faith.<br></br>Prerequisites: Class 301<br></br>When: Jan, Apr, Jul, Sept, 4 Weeks | 7 PM | Thurs<br></br>Cost: $10</p>
        <a href='https://nlfhouston.churchcenter.com/registrations'><button>Register</button></a>
        </div>
        <ClassContainer photo={pic401}/>
      </div>

    </>
  );
}

export default Classes;
