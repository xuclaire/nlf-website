/* eslint-disable */
import React from 'react';
import { useState } from 'react';
import './faq_style.css'
import arrow from '../../images/next.svg'
import { FaqPage, Span, Pagehead, Accordion, HcCategoryHeader, HcTitle, HcItem, HouseChurch, NewLife, Item, General, Title, CategoryHeaders } from './faq_styles';


const generalQuestions = [
  {
    question: "How do I stay updated about New Life announcements?",
    answer: "Answer to Question 1",
  },
  {
    question: "Are there bible study opportunities?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "When and what are retreats like?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "What are Pastor Sang's office hours?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "What are the serving opportunities, and how can I get involved in those?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];
const hcQuestions = [
  {
    question: "What is house church and when does house church meet?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "How are people sorted into house churches?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];
const churchQuestions = [
  {
    question: "If I want to visit New Life Fellowship, where can I get a ride?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "What time is Sunday corporate worship?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "How do I become a member of New Life Fellowship?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "Are there online options for events, services, etc.?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
                <h2>{item.question}</h2>
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
                <h2>{item.question}</h2>
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
                <h2>{item.question}</h2>
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
