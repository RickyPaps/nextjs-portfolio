import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/util/Icons";

const Project = ({ title, type, image, link, githubLink }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-between rounded-2xl border border-solid border-dark bg-light shadow-2xl p-12 relative
      xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light
        md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={image}
          alt={title}
          className="w-full h-auto"
          width={500}
          height={500}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="font-semibold text-lg underline md:text-base"
          >
            Visit
          </Link>
          <Link href={githubLink} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Project;
