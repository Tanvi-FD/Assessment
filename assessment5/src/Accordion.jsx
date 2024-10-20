import React, { useState } from "react";
const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={styles.accordionItem}>
      <div onClick={toggleAccordion} style={styles.title}>
        {title}
      </div>
      <div
        style={{
          ...styles.content,
          display: isOpen ? "block" : "none",
        }}
      >
        {content}
      </div>
    </div>
  );
};

const Accordion = () => {
  const accordionItems = [
    {
      title: "What is your return policy?",
      content:
        'Our return policy lasts 30 days. After 30 days, we can’t offer you a refund or exchange.A return policy is a set of guidelines that outline how, when, and under what conditions a customer can return purchased goods or services. A basic return policy explains to customers if you accept returns and offer any refunds or exchanges after they. A basic return policy explains to customers if you accept returns and offer any refunds or exchanges after they"ve purchased an item they no longer want.',
    },
    {
      title: "How do I track my order?",
      content:
        'Once your order is shipped, you will receive an email with tracking details. Go to the official website of the shipping carrier. Most carriers have a designated tracking page where you can enter your tracking number. Enter the tracking number: Input your tracking number into the appropriate field and click the "Track" button or a similar prompt.',
    },
    {
      title: "Can I purchase items again?",
      content:
        "Yes, you can repurchase items by logging into your account and selecting previous orders.If you want to change the number of items in an order or make other modifications, you can place a new order",
    },
    {
      title: "Can you buy something, use it then return it?",
      content:
        "Yes, you can repurchase items by logging into your account and selecting previous orders.If you want to change the number of items in an order or make other modifications, you can place a new order",
    },
    {
      title: "Should I offer a return policy?",
      content:
        "Many customers today will not buy from companies without some sort of return or exchange policy, especially when shopping online. Return policies are particularly important in industries like fashion, where customers want to know they can exchange or return items that don",
    },
  ];

  return (
    <div style={styles.container}>
      {accordionItems.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

// Basic styles accordion
const styles = {
  container: {
    width: "50%",
    margin: "0 auto",
    borderRadius: "5px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    backgroundColor: "pink"
  },
  accordionItem: {
    borderBottom: "1px solid #ddd",
    padding: "10px",
    backgroundColor: "#f7f7f7",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    padding: "10px",
    backgroundColor: "#e0e0e0",
  },
  content: {
    padding: "10px",
    backgroundColor: "#fff",
  },
};

export default Accordion;
