import queryString from "query-string";

import { TextIcon, withIcon } from "~/components";

// import { analytics } from '~/common/utils'

import { ReactComponent as IconShareLINE } from "/public/icons/16px/share-line.svg";
import { ReactComponent as IconShareLINECircle } from "/public/icons/40px/share-line-circle.svg";

const LINE = ({
  title,
  link,
  circle,
}: {
  title: string;
  link: string;
  circle?: boolean;
}) => (
  <button
    type="button"
    onClick={() => {
      const shareUrl =
        "https://social-plugins.line.me/lineit/share?" +
        queryString.stringify({
          url: link,
          text: title,
        });

      // analytics.trackEvent('share', {
      //   type: 'line',
      // })
      return window.open(shareUrl, "Share to Line");
    }}
  >
    {circle && withIcon(IconShareLINECircle)({ size: "xlM" })}

    {!circle && (
      <TextIcon icon={withIcon(IconShareLINE)({})} spacing="base">
        LINE
      </TextIcon>
    )}
  </button>
);

export default LINE;
