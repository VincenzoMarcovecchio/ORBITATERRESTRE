import clsx from "clsx";
import { getSiteMetaData } from "@utils/helpers";

export function Bio({ className }) {
  const { author, social } = getSiteMetaData();
  return (
    <div className={clsx(`flex items-center `, className)}>
      <p className="text-base leading-7">
        Sito web ancora in costruzione ed in cerca di ispirazioni by{" "}
        <b className="font-semibold">{author.name}</b>
        <a href={`https://twitter.com/${social.twitter}`}>
          &nbsp;Seguimi su Twitter
        </a>
      </p>
    </div>
  );
}
