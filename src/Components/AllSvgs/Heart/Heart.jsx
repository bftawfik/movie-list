import React from "react";

const Heart = ({ className }) => (
  <svg viewBox="0 0 1024 1024" width="100%" height="100%" className={className}>
    <path
      d="M512,195.5C383.5-25.1,22,39.3,22,315.7C22,506,249.5,700.6,512,961.2
	c262.6-260.6,490-455.2,490-645.5C1002,38.3,639.6-23.5,512,195.5z"
    />
    <path
      fill="currentColor"
      d="M512,921.3C271.8,685,42.7,482,42.7,306.8C42.7,145.1,173.6,85.3,268,85.3c56,0,177.1,21.4,244,190.2
	C579.8,106.2,702.5,85.8,756.3,85.8c108.4,0,225,69.2,225,221.1C981.3,480.4,762.2,674.8,512,921.3 M756.3,43.1
	c-94,0-189.7,44.5-244.3,138.2C457.2,87.1,361.7,42.7,268,42.7C132.2,42.7,0,136,0,306.8c0,198.9,237.7,402.3,512,674.5
	c274.3-272.2,512-475.6,512-674.5C1024,135.7,891.9,43.1,756.3,43.1"
    />
  </svg>
);

export default Heart;