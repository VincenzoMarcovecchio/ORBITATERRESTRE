import clsx from "clsx";
import { getSiteMetaData } from "@utils/helpers";

export function Bio({ className }) {
  const { author, social } = getSiteMetaData();
  return (
    <div className={clsx(`flex items-center `, className)}>
      <small className="text-base leading-7 mb-6">
        Web site looking for ideas by{" "}
        <b className="font-semibold">{author.name}</b>
        <a
          target="_blank"
          rel="noopener noreefrrer canonical"
          href={`https://twitter.com/${social.twitter}`}
        >
          &nbsp;Follow me on twitter
        </a>{" "}
        or on
        <a
          target="_blank"
          rel="noopener noreefrrer canonical"
          href={`https://www.facebook.com/cyberspaceronda`}
        >
          &nbsp;Facebook
        </a>
      </small>
    </div>
  );
}
