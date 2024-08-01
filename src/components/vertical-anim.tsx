import styled, { keyframes, css } from "styled-components";

export default function VerticalAnim() {
  const col1 = [
    "https://dl.dropbox.com/scl/fi/wwv0l8wph611rxdd7i6es/Group-7-1.svg?rlkey=fi2lf93rl88093efeqrfprk1k&st=yaw0kzv8&dl=0",
    "https://dl.dropbox.com/scl/fi/wwv0l8wph611rxdd7i6es/Group-7-1.svg?rlkey=fi2lf93rl88093efeqrfprk1k&st=yaw0kzv8&dl=0",
    "https://dl.dropbox.com/scl/fi/wwv0l8wph611rxdd7i6es/Group-7-1.svg?rlkey=fi2lf93rl88093efeqrfprk1k&st=yaw0kzv8&dl=0",
    "https://dl.dropbox.com/scl/fi/wwv0l8wph611rxdd7i6es/Group-7-1.svg?rlkey=fi2lf93rl88093efeqrfprk1k&st=yaw0kzv8&dl=0",
  ];

  const col2 = [
    "https://dl.dropbox.com/scl/fi/wwv0l8wph611rxdd7i6es/Group-7-1.svg?rlkey=fi2lf93rl88093efeqrfprk1k&st=yaw0kzv8&dl=0",
    "https://dl.dropbox.com/scl/fi/wwv0l8wph611rxdd7i6es/Group-7-1.svg?rlkey=fi2lf93rl88093efeqrfprk1k&st=yaw0kzv8&dl=0",
    "https://dl.dropbox.com/scl/fi/wwv0l8wph611rxdd7i6es/Group-7-1.svg?rlkey=fi2lf93rl88093efeqrfprk1k&st=yaw0kzv8&dl=0",
    "https://dl.dropbox.com/scl/fi/wwv0l8wph611rxdd7i6es/Group-7-1.svg?rlkey=fi2lf93rl88093efeqrfprk1k&st=yaw0kzv8&dl=0",
  ];

  return (
    <main>
        <div className="p-8 mb-12">
        <p className="text-[24px] font-poppins font-bold">Get Started with AR Templates from the Industry Experts</p>
        </div>
     
          <main className="flex mb-36 ">

<Marquee>
  <MarqueeGroup>
    {col1.map((ele) => (
      <ImageGroup key={ele}>
        <Image src={ele} />
      </ImageGroup>
    ))}
  </MarqueeGroup>
  <MarqueeGroup>
    {col2.map((ele) => (
      <ImageGroup key={ele}>
        <Image src={ele} />
      </ImageGroup>
    ))}
  </MarqueeGroup>
</Marquee>
<Marquee>
<MarqueeGroup2>
  {col2.map((ele) => (
    <ImageGroup key={ele}>
      <Image src={ele} />
    </ImageGroup>
  ))}
</MarqueeGroup2>
<MarqueeGroup2>
  {col2.map((ele) => (
    <ImageGroup key={ele}>
      <Image src={ele} />
    </ImageGroup>
  ))}
</MarqueeGroup2>
</Marquee>
</main>
 <div className="flex flex-col justify-center items-center mb-12">
    <button className="w-[248px] h-[39px] border border-[rgba(247,99,250,1)] text-black rounded-md font-bold">Explore the Libraries</button>
 </div>
    </main>
  
  );
}

const Marquee = styled.div`

 height:360px;
 overflow:hidden;
 user-select:none;
flex-direction:column;
overflow:hidden
`;

const scrollY = keyframes`
from{
    tranform:translateY(0)
}
to{
    transform:translateY(-100%)
}
`;
const common = css`
  flex-shrink: 0;
  display:flex
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  flex-direction:column
  height: 100%;
  animation: ${scrollY} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  height: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  background-color:white;

 
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;