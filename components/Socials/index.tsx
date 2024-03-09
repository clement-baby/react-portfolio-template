import Button from "../Button";
import React from "react";
import yourData from "../../data/portfolio.json";

type Props = {
  className?: string
}

const Socials = ({ className }: Props) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link p-5`}>
      {yourData.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
