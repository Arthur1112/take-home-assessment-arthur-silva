import { AccordionItem } from "./AccordionItem";

export interface AccordionItem {
  trigger: string;
  content: string;
  open?: boolean;
}

export interface AccordionProps {
  items: AccordionItem[];
  shouldAllowMultipleExpanded: boolean;
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
