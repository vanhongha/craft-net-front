export default function Loading() {
  return (
    <div className="flex justify-center items-center align-middle h-screen">
      <span className="absolute flex h-20 w-20">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
      </span>
      <img alt="Loading logo" className="h-20" src="/craft-net-logo.svg" />
    </div>
  );
}
