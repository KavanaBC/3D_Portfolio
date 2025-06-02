import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "angularjs",
    "c",
    "cplusplus",
    "css3",
    "firebase",
    "git",
    "html5",
    "java",
    "javascript",
    "mongodb",
    "MySQL",
    "python",
    "react",
    "tailwindcss",
    "vitejs",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
