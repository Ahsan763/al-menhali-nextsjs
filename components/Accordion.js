import { useState } from "react";
import AccordionItem from "./AccordionItem";
// ...
export const faqs = [
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
    },
    {
      question: "Dignissimos sequi architecto?",
      answer:
        "Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.",
    },
    {
      question: "Voluptas praesentium facere?",
      answer:
        "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
    },
  ];
const Accordion = () => {
    const [clicked, setClicked] = useState("0");
   
    const handleToggle = (index) => {
     if (clicked === index) {
      return setClicked("0");
     }
     setClicked(index);
    };
   
    return (
     <ul className="accordion">
      {faqs.map((faq, index) => (
       <AccordionItem key={index} faq={faq} onToggle={() => handleToggle(index)} />
      ))}
     </ul>
    );
   };
   
   export default Accordion;