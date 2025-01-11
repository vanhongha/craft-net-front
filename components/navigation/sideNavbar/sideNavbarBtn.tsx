export default function SideNavbarButton({
  svgSrc,
  text,
}: {
  svgSrc: string;
  text: string;
}) {
  return (
    <a
      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      href="localhost:8080"
    >
      {svgSrc && svgSrc != "" && (
        <img alt={text} className="h-7" src={svgSrc} />
      )}
      <span className="ms-3">{text}</span>
    </a>
  );
}
