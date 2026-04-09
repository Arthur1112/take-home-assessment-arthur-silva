import { useState } from "react";
import { AccordionItem } from "./AccordionItem";
import styles from "./Accordion.module.scss";

export interface Text {
  body: string;
  primitive?: "p" | "h1";
  // Ideally this would have all other HTML elements that would be appropriate, like "span" etc....
  className?: string;
}
//This Text is how I used to do it at a previous role where we had our own reusabled comp library. It would have more props like "size" and "type" etc...
// Normally this would come from its own "Text" component

export interface AccordionItem {
  trigger: Text;
  content: Text;
  open?: boolean;
}

export interface AccordionProps {
  items: AccordionItem[];
  shouldAllowMultipleExpanded?: boolean;
}

export const Accordion = ({
  items,
  shouldAllowMultipleExpanded = true,
}: AccordionProps) => {
  const [openItems, setOpenItems] = useState(
    items.map((item) => item.open ?? false),
  );

  console.log("----->", openItems);

  const itemClicked = (index: number) => {
    setOpenItems(
      openItems.map((stat, x) => {
        if (x === index) return !stat;
        else if (!shouldAllowMultipleExpanded) return false;
        return stat;
      }),
    );
    console.log("----->", openItems);
  };

  return (
    <div className={styles.accordion}>
      {items &&
        items.map((item, index) => (
          <AccordionItem
            key={`accordion-item-key-${index}`}
            index={index}
            content={item.content}
            trigger={item.trigger}
            isOpen={openItems[index]}
            onOpen={itemClicked}
          />
        ))}
    </div>
  );
};
