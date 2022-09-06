/* eslint-disable */
import React from 'react';
import { useState } from 'react';
import './faq_style.css'
import arrow from '../../images/next.svg'
import { FaqPage, Span, Pagehead, Accordion, HcCategoryHeader, HcTitle, HcItem, HouseChurch, NewLife, Item, General, Title, CategoryHeaders } from './faq_styles.jsx';


const generalQuestions = [
  {
    question: "How do I stay updated about New Life announcements?",
    answer: "Every Sunday, in the church bulletin are listed NLF’s annoucements for the week and month.  In addition, NLF has a church calendar at www.nlfhtx.org which also incorporates a college ministry specific calendar.",
  },
  {
    question: "Are there bible study opportunities?",
    answer: "Yes!  Every fall and spring semester there are both 13 week and 4 week bible studies offered at church.  Please see the bible studies offered in the events above.",
  },
  {
    question: "When and what are retreats like?",
    answer: <text>
      There are two retreats offered for college students:
      <br />
      <br />
      One of the retreats is offered in the Fall which is called NLF’s Fall Retreat. This is a great opportunity not only for college students to get connected with other college students but also for college students to get connected with other church members.  What college students are surprised by with NLF’s Fall Retreat is how many already graduated young adults from Rice, UH, Lonestar, and HCC are still at New Life.  This is a great opportunity to ask these young adults (either single or married) on advice on post-college life such as medical school, being a physicans, and working in the corporate world.
      <br />
      <br />
      The other retreat is offered in the Spring (in Feburary) which is our NLF College Ministry Retreat.  This retreat is a college only retreat.  This is a great opportunity to meet other college students!
    </text>,
  },
  {
    question: "What are Pastor Sang's office hours?",
    answer: "During the Fall and Spring semesters, Pastor Sang comes to both UH and Rice campuses to answer any questions about the bible, New Life, and general life advice/challenges.",
  },
  {
    question: "What are the serving opportunities, and how can I get involved in those?",
    answer: <text>
      The most important serving opportunity is sacrificially serving the house church you are in as a praise lead, word time lead, ice-breaker lead, group activities coordinator, and birthday coordinator.
      <br />
      <br />
      If students have bandwidth to serve more within the church body then there are other ministry teams that help grow New Life to become a strong and healthy church such as Maturity Team, Missions Team, Magnification and Multimedia Team, Membership Team, Ministry Team, Administration Team, and New Life Kids.
    </text>,
  },
];
const hcQuestions = [
  {
    question: "What is house church and when does house church meet?",
    answer: "Every house church will have a different culture associated with them; however, the culture that New Life as a church body would like to instill overall within each house church is the heart of God which is affection, generosity, and enduring commitment (or God’s loyal-love called hesed in Hebrew.)   This culture within house church will be attractive to reaching out to those who do not know God and Jesus Christ.",
  },
  {
    question: "What types of house churches are there in college?",
    answer: <text>
      There are in fact two-types of house churches in college.  The first type is the one that meets on campus. These campus house churches will usually eat dinner together at the campus servery and then find a classroom to meet after dinner to continue the rest of house church.    <br />
      <br />
      The second type of house church will actually meet in a person’s home. There are a lot of commuter-based students who live off campus and prefer to open up their home residence for house church gatherings.  </text>,
  },
  {
    question: "How are people sorted into house churches?",
    answer: "New students will be allowed to visit up to two house churches and then be asked to make a decision to select the house church that they will be committed to for the rest of their college-life.",
  },
];
const churchQuestions = [
  {
    question: "What denomination is New Life Fellowship?",
    answer: "New Life Fellowship is a Baptist church and is associated with the Southern Baptist Convention. NLF adheres doctrinally to the Baptist Faith and Message.",
  },
  {
    question: "How do I become a member of New Life Fellowship?",
    answer: "We ask all people who would like to become a member of NLF to take Receiving Jesus class, Membership Class 101, and be baptized by immersion.",
  },
  {
    question: "What if I have already been baptized? Can I still become a member?",
    answer: <text>
      If you have been already baptized by immersion through you own volition then the church will recognize that as your official baptism.
      <br />
      <br />
      If you have been baptized through infant baptism or sprinkling then we ask that you research a little on how the Baptist denomination was formed by Baptists trying to adhere to the instructions of the New Testament church. Then please consider if you would like to become a member of New Life (which happens to be a Baptist church) by becoming baptized by immersion.
    </text>,
  },
  {
    question: "If I want to visit New Life Fellowship, where can I get a ride?",
    answer: "There is a Rice University Facebook Page where a sign-up sheet gets posted for rides every week. For University of Houston students, rides are coordinated with the UH house churches.",
  },

];
function faq() {
  const [generalSelected, setGeneralSelected] = useState(null)
  const [hcSelected, setHcSelected] = useState(null)
  const [churchSelected, setChurchSelected] = useState(null)


  const GeneralToggle = (i) => {
    if (generalSelected == i) {
      return setGeneralSelected(null)
    }
    setGeneralSelected(i)
  }
  const HcToggle = (j) => {
    if (hcSelected == j) {
      return setHcSelected(null)
    }
    setHcSelected(j)
  }
  const ChurchToggle = (k) => {
    if (churchSelected == k) {
      return setChurchSelected(null)
    }
    setChurchSelected(k)
  }
  return (
    <FaqPage>
      <Pagehead>
        Frequently Asked Questions
      </Pagehead>
      <General>
        <CategoryHeaders>
          General
        </CategoryHeaders>
        <Accordion>
          {generalQuestions.map((item, i) => (
            <Item>
              <Title onClick={() => GeneralToggle(i)}>
                {item.question}
                <Span>{hcSelected == i ? <img src={arrow} /> : <img src={arrow} />}</Span>
              </Title>
              <div className={generalSelected == i ? 'content show' : 'content'}>
                {item.answer}
              </div>
            </Item>
          ))}
        </Accordion>
      </General>
      <HouseChurch>
        <HcCategoryHeader>
          House Church
        </HcCategoryHeader>
        <Accordion>
          {hcQuestions.map((item, j) => (
            <HcItem>
              <HcTitle onClick={() => HcToggle(j)}>
                {item.question}
                <Span>{hcSelected == j ? <img src={arrow} /> : <img src={arrow} />}</Span>
              </HcTitle>
              <div className={hcSelected == j ? 'content show' : 'content'}>
                {item.answer}
              </div>
            </HcItem>
          ))}
        </Accordion>
      </HouseChurch>
      <NewLife>
        <CategoryHeaders>
          New Life Fellowship
        </CategoryHeaders>
        <Accordion>
          {churchQuestions.map((item, k) => (
            <Item>
              <Title onClick={() => ChurchToggle(k)}>
                {item.question}
                <Span>{hcSelected == k ? <img src={arrow} /> : <img src={arrow} />}</Span>
              </Title>
              <div className={churchSelected == k ? 'content show' : 'content'}>
                {item.answer}
              </div>
            </Item>
          ))}
        </Accordion>
      </NewLife>
    </FaqPage>
  );
}

export default faq;
