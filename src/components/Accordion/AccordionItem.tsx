import type { Text } from "./Accordion";

interface AccordionItemProps {
  index: number;
  content: Text;
  trigger: Text;
  isOpen: boolean;
}

export const AccordionItem = ({
  index,
  content,
  trigger,
  isOpen,
}: AccordionItemProps) => {
  return <h1>Hey not this is accordionItem</h1>;
};
