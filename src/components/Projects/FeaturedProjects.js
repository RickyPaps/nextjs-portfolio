import { m } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/util/Icons";

const FeaturedProjects = ({
  type,
  title,
  summary,
  image,
  link,
  githubLink,
}) => {
  const FramerImage = m(Image);

  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl
         lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl 
          xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={image}
          alt={title}
          className="w-full h-auto"
          width={600}
          height={600}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between p-4 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center sm:w-full xs:justify-center">
          {String(githubLink).length > 0 && (
            <Link href={githubLink} target="_blank" className="w-10">
              <GithubIcon />
            </Link>
          )}
          <Link
            href={link}
            target="_blank"
            className="font-semibold text-light bg-dark px-6 p-2 rounded-lg sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProjects;
