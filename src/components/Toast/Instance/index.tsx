import Alert from "@reach/alert";
import classNames from "classnames";
import { useEffect } from "react";

import { REMOVE_TOAST, TOAST_DURATION } from "~/enums";
import { sleep } from "~/utils";

import styles from "./styles.module.css";

/**
 * Toast instance.
 *
 * Usage:
 *
 * ```jsx
 * <ToastInstance color="green" content="content" />
 * ```
 */

export interface ToastInstanceProps {
  color: "green" | "grey" | "red";
  content?: string | React.ReactNode;
  subDescription?: string | React.ReactNode;

  buttonPlacement?: "top" | "bottom" | "center";
  customButton?: React.ReactNode;
}

export const ToastInstance = ({
  color,
  content,
  subDescription,
  buttonPlacement = "top",
  customButton,
}: ToastInstanceProps) => {
  const mainClasses = classNames({
    [styles.toast]: true,
    [styles[buttonPlacement]]: buttonPlacement,
    [styles[color]]: !!color,
    [styles.centerX]: !customButton,
  });
  const alertType = color === "red" ? "assertive" : "polite";

  return (
    <section className={mainClasses}>
      <section>
        <Alert type={alertType}>
          {content && <p className={styles.content}>{content}</p>}
          {subDescription && (
            <p className={styles.subDescription}>{subDescription}</p>
          )}
        </Alert>
      </section>

      {customButton && (
        <section className={styles.customButton}>{customButton}</section>
      )}
    </section>
  );
};

/**
 * ToastWithEffect is a wrapper of toast insatnce. Use event system to
 * mount it.
 *
 * Usage:
 *
 * ```js
 * window.dispatchEvent(new CustomEvent(
 *   'addToast',
 *   {
 *     detail: {
 *       color: 'green',
 *       content: 'some text',
 *       fixed: false,
 *       duration: 3000
 *     }
 *   }
 * ))
 * ```
 */
export const ToastWithEffect = ({
  id,
  duration = TOAST_DURATION,
  fixed,
  ...toastProps
}: {
  id: string;
  duration?: number;
  fixed?: boolean;
} & ToastInstanceProps) => {
  const remove = () => {
    window.dispatchEvent(new CustomEvent(REMOVE_TOAST, { detail: { id } }));
  };
  const closeAfterDuration = async () => {
    await sleep(duration);
    remove();
  };

  useEffect(() => {
    if (!fixed) {
      closeAfterDuration();
    }
  }, []);

  return <ToastInstance {...toastProps} />;
};
