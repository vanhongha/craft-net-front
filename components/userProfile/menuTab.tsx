import MenuTabBtn from "./menuTabBtn";

export default function MenuTab() {
  return (
    <div className="inline-flex w-full" role="group">
      <MenuTabBtn className="w-1/6" isSide={true}>
        <img alt="timeline" className="w-7" src={"/svg/posts.svg"} />
        <span className="ml-2">Timeline</span>
      </MenuTabBtn>
      <MenuTabBtn className="border-r w-1/6" isSide={false}>
        <img alt="timeline" className="w-7" src={"/svg/about.svg"} />
        <span className="ml-2">About</span>
      </MenuTabBtn>
      <MenuTabBtn className="border-r w-1/6" isSide={false}>
        <img alt="timeline" className="w-7" src={"/svg/friends.svg"} />
        <span className="ml-2">Friends</span>
      </MenuTabBtn>
      <MenuTabBtn className="border-r w-1/6" isSide={false}>
        <img alt="timeline" className="w-7" src={"/svg/photo.svg"} />
        <span className="ml-2">Photo</span>
      </MenuTabBtn>
      <MenuTabBtn className="w-1/6" isSide={false}>
        <img alt="timeline" className="w-7" src={"/svg/video.svg"} />
        <span className="ml-2">Video</span>
      </MenuTabBtn>
      <MenuTabBtn className="w-1/6" isSide={true}>
        <img alt="timeline" className="w-7" src={"/svg/reels.svg"} />
        <span className="ml-2">Reel</span>
      </MenuTabBtn>
    </div>
  );
}
