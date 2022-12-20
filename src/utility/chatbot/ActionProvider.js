const intro =
  'I am happy to see you in good mood, there are a few FAQs which most people get when they visit me!';
const faq1 =
  'The Customer Attrition Management and Recommendation Platform is a web app developed which will predict the customer churn rate and also recommend products to customer by analysing the customer buying behaviour and would provide exclusive functionalities as well!';

const faq2 =
  'If you are a customer having low attrition, the web app has exclusive discounts, offers, coupons on your items of wishlist!';
const faq3 =
  'Churn prediction system consists of detecting customers who are likely to stop doing business with company and it help companies to keep existing customers from leaving organization rather than adding new one.'

const faq4 = 
  'The recommendation is done using FP Growth machine learning algorithm, which finds patterns in transactions of products and generates an ordered item set.';

const faq5 =
  'The front end part of the web app is build using React JS. The backend is build using Next JS. Along with it, Mongo DB Database has been used to store the customer details and Prisma library is used to read and write data into the database.';
  
const faq6 =
  'CRUD is an acronym for Create, Read, Update, Delete which are 4 basic database operations';
const faq7 =
  'The customer attrition can be plugged into various day to day companies. It will help to know which clients or customers are at the highest risk of leaving a particular organization. In addition too, this web app would reach out to customers and offer them exclusive insentivies to stay like upgrading their membership, providing coupons, offers, discounts etc and try to retain the customers.';
  
const faq8 =
  'There are 2 login pages. One is user login and other is Admin Login. The user side will be able to add products to their wishlist and can see offers,coupons. The admin side will be able to perform functionalities like updating user credentials, creating new users, providing them coupons, loyalty points, upgrading membership etc.'
const faq9 =
  'MBA stands for Market Basket Analysis.';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage('AI chat in development...');
    this.updateChatbotState(greetingMessage);
  }

  handleGoodMood() {
    const message = this.createChatBotMessage(intro, {
      widget: 'faqOptions',
    });
    this.updateChatbotState(message);
  }

  async handleBadMood() {
    const jokeData = await (await fetch('https://v2.jokeapi.dev/joke/Any?type=single')).json();
    const message = this.createChatBotMessage(`Let me tell you a joke: ${jokeData.joke}`, {
      widget: 'jokeOptions',
    });
    this.updateChatbotState(message);
  }

  async handleBadMoodAgain() {
    const jokeData = await (await fetch('https://v2.jokeapi.dev/joke/Any?type=single')).json();
    const message = this.createChatBotMessage(`Here's another one: ${jokeData.joke}`, {
      widget: 'jokeOptions',
    });
    this.updateChatbotState(message);
  }

  handleGoodMoodFinally() {
    const message = this.createChatBotMessage(
      `${intro}`,
      { widget: 'faqOptions' }
    );
    this.updateChatbotState(message);
  }

  handleFAQ1() {
    const message = this.createChatBotMessage(faq1, {
      widget: 'faqOptions',
    });
    this.updateChatbotState(message);
  }

  handleFAQ2() {
    const message = this.createChatBotMessage(faq2, {
      widget: 'faqOptions',
    });
    this.updateChatbotState(message);
  }

  handleFAQ3() {
    const message = this.createChatBotMessage(faq3, {
      widget: 'faqOptions',
    });
    this.updateChatbotState(message);
  }
  handleFAQ4() {
    const message = this.createChatBotMessage(faq4, {
      widget: 'faqOptions',
    });
    this.updateChatbotState(message);
  }
  handleFAQ5() {
    const message = this.createChatBotMessage(faq5, {
      widget: 'faqOptions',
    });
    this.updateChatbotState(message);
  }
  handleFAQ6() {
    const message = this.createChatBotMessage(faq6, {
      widget: 'faqOptions',
    });
    this.updateChatbotState(message);
  }
  handleFAQ7() {
    const message = this.createChatBotMessage(faq7, {
      widget: 'faqOptions',
    });
    this.updateChatbotState(message);
  }
  handleFAQ8() {
    const message = this.createChatBotMessage(faq8, {
      widget: 'faqOptions',
    });
    this.updateChatbotState(message);
  }
  handleFAQ9() {
    const message = this.createChatBotMessage(faq9, {
      widget: 'faqOptions',
    });
    this.updateChatbotState(message);
  }

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
