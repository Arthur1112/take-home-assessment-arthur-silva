import { AccordionItem } from "./AccordionItem";

export interface Text {
  body: string;
  primitive?: "p" | "h1";
  className?: string;
}
//This Text is how I used to do it at a previous role where we had our own reusabled comp library. It would have more props like "size" and "type" etc...
// Normally this would come from its own component where it is more developed

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
  return (
    <div>
      <AccordionItem />
      {items &&
        items.map((item, index) => (
          <AccordionItem
            key={`accordion-item-key-${index}`}
            index={index}
            content={item.content}
            trigger={item.trigger}
            isOpen={item.open}
          />
        ))}
    </div>
  );
};
