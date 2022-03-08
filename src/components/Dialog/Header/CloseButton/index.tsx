import { Button, IconCross } from "~/components";

import styles from "./styles.module.css";

interface CloseButtonProps {
  closeDialog: () => void;
}

const CloseButton = ({ closeDialog }: CloseButtonProps) => {
  return (
    <Button
      className={styles.closeButton}
      onClick={closeDialog}
      aria-label="cancel"
      bgColor="greenLighter"
      width="2rem"
      height="2rem"
      borderRadius="2rem"
    >
      <IconCross />
    </Button>
  );
};

export default CloseButton;
