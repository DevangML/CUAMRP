import { createChatBotMessage } from 'react-chatbot-kit';
import Options from '../../pages/components/chatbot/molecules/Options';

const getMoodOptions = (actionProvider) => {
  return [
    {
      text: 'Nice',
      handler: () => actionProvider.handleGoodMood(),
      id: 1,
    },
    {
      text: 'I am sad',
      handler: () => actionProvider.handleBadMood(),
      id: 2,
    },
  ];
};

const getFaqOptions = (actionProvider) => {
  return [
    {
      text: 'What is the web application about?',
      handler: () => actionProvider.handleFAQ1(),
      id: 1,
    },
    {
      text: 'What benefits it will provide me as a customer?',
      handler: () => actionProvider.handleFAQ2(),
      id: 2,
    },
    {
      text: 'What is Churn Prediction?',
      handler: () => actionProvider.handleFAQ3(),
      id: 3,
    },
    {
      text: 'How will the web app recommend products?',
      handler: () => actionProvider.handleFAQ4(),
      id: 4,
    },
    {
      text: 'Which tech stack is used for building the web app?',
      handler: () => actionProvider.handleFAQ5(),
      id: 5,
    },
    {
      text: 'What do you mean by CRUD Operations?',
      handler: () => actionProvider.handleFAQ6(),
      id: 6,
    },
    {
      text: 'What is the potential scope of web app?',
      handler: () => actionProvider.handleFAQ7(),
      id: 7,
    },
    {
      text: 'How many login pages are there?',
      handler: () => actionProvider.handleFAQ8(),
      id: 8,
    },
    {
      text: 'What is MBA?',
      handler: () => actionProvider.handleFAQ9(),
      id: 9,
    },
  ];
};

const getJokeOptions = (actionProvider) => {
  return [
    {
      text: "LOL that's funny",
      handler: () => actionProvider.handleGoodMoodFinally(),
      id: 1,
    },
    {
      text: 'Tell me another one',
      handler: () => actionProvider.handleBadMoodAgain(),
      id: 2,
    },
  ];
};

const config = {
  botName: 'StarBot',
  initialMessages: [
    createChatBotMessage("Hi, I'm StarBot. Nice to meet you! I How are you doing today?", {
      widget: 'moodOptions',
    }),
  ],
  // customStyles: {
  //   botMessageBox: {
  //     backgroundColor: '#147efb',
  //   },
  //   chatButton: {
  //     backgroundColor: '#147efb',
  //   },
  // },
  widgets: [
    {
      widgetName: 'moodOptions',
      widgetFunc: ({ actionProvider }) => (
        <Options actionProvider={actionProvider} getOptions={getMoodOptions} />
      ),
    },
    {
      widgetName: 'jokeOptions',
      widgetFunc: ({ actionProvider }) => (
        <Options actionProvider={actionProvider} getOptions={getJokeOptions} />
      ),
    },
    {
      widgetName: 'jokeOptions',
      widgetFunc: ({ actionProvider }) => (
        <Options actionProvider={actionProvider} getOptions={getJokeOptions} />
      ),
    },
    {
      widgetName: 'faqOptions',
      widgetFunc: ({ actionProvider }) => (
        <Options actionProvider={actionProvider} getOptions={getFaqOptions} />
      ),
    },
  ],
};

export default config;
