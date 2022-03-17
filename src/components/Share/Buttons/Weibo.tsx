import queryString from "query-string";

import { TextIcon, withIcon } from "~/components";

import { dom } from "~/utils";

import { ReactComponent as IconShareWeibo } from "/public/icons/16px/share-weibo.svg";
import { ReactComponent as IconShareWeiboCircle } from "/public/icons/40px/share-weibo-circle.svg";

const Weibo = ({
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
      const cover = dom.$('meta[property="og:image"]')?.getAttribute("content");
      const shareUrl =
        "http://service.weibo.com/share/share.php?" +
        queryString.stringify({
          url: link,
          title,
          pic: cover,
        });
      return window.open(shareUrl, "分享到微博");
    }}
  >
    {circle && withIcon(IconShareWeiboCircle)({ size: "xlM" })}

    {!circle && (
      <TextIcon icon={withIcon(IconShareWeibo)({})} spacing="base">
        {/* <Translate zh_hant="微博" zh_hans="微博" en="weibo" /> */}
        weibo
      </TextIcon>
    )}
  </button>
);

export default Weibo;
