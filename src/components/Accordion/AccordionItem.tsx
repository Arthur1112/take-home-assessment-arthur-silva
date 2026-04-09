import { ChevronDown } from "lucide-react";
import type { Text } from "./Accordion";
import styles from "./AccordionItem.module.scss";

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

  const iconStyles = [styles.triggerIcon];
  const itemWrapperStyles = [styles.itemWrapper];

  if (isOpen) {
    iconStyles.push(styles["open"]);
    itemWrapperStyles.push(styles["open"]);
  }
  //Using the above approuch is a way I do it in component libraries becuase I find it easier when there are components with a lot of props, like different varients etc....

  console.log("======>", iconStyles);

  return (
    <div className={styles.accordionItem}>
      <button
        id={`accordion-trigger-${index}`}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${index}`}
        onClick={() => onOpen(index)}
        className={styles.triggerBtn}
      >
        <TriggerElement className={trigger.className}>
          {trigger.body}
        </TriggerElement>
        <ChevronDown
          className={iconStyles.join(" ")}
          size={18}
          aria-hidden="true"
        />
      </button>
      <div
        className={itemWrapperStyles.join(" ")}
        id={`accordion-content-${index}`}
        aria-labelledby={`accordion-trigger-${index}`}
        role="region"
      >
        <div className={styles.itemContainer}>
          <ContentElement className={content.className}>
            {isOpen ? content.body : null}
          </ContentElement>
        </div>
      </div>
    </div>
  );
};
