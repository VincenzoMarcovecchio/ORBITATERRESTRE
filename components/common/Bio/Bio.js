import clsx from "clsx";
import { getSiteMetaData } from "@utils/helpers";

 function Bio({ className }) {
  const { author, social } = getSiteMetaData();
  return (
    <div className={clsx(`flex items-center `, className)}>
      <p className="text-base leading-7">
        Sito web ancora in costruzione ed in cerca di ispirazioni by{" "}
        <b className="font-semibold">{author.name}</b>
        <a target="_blank" rel="noopener noreefrrer canonical" href={`https://twitter.com/${social.twitter}`}>
          &nbsp;Seguimi su Twitter
        </a> o sulla pagina<a target="_blank"  rel="noopener noreefrrer canonical" href={`https://www.facebook.com/cyberspaceronda`}>
          &nbsp;Facebook
        </a>
      </p>
    </div>
  );
}
export default Bio