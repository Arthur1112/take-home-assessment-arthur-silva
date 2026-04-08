import type { Text } from "./Accordion";

interface AccordionItemProps {
  index: number;
  content: Text;
  trigger: Text;
  isOpen: boolean;
  onOpen: (index: number) => void;
}

export const AccordionItem = ({
  index,
  content,
  trigger,
  isOpen,
  onOpen,
}: AccordionItemProps) => {
  const TriggerElement = trigger.primitive ?? "p";
  const ContentElement = content.primitive ?? "p";
  return (
    <div>
      <button onClick={() => onOpen(index)}>
        <TriggerElement className={trigger.className}>
          {trigger.body}
        </TriggerElement>
      </button>
      <div>
        <div>
          <ContentElement className={content.className}>
            {isOpen ? content.body : null}
          </ContentElement>
        </div>
      </div>
    </div>
  );
};
