import _ from "lodash";

export default function MenuTabBtn({
  children,
  isSide,
  className,
}: {
  children: React.ReactNode;
  isSide: boolean;
  className?: string;
}) {
  let _className = isSide
    ? "px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
    : "px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white";

  _className = _className.concat(" flex justify-center items-center");

  if (!_.isNil(className)) {
    _className = _className.concat(" ").concat(className);
  }

  return (
    <button className={_className} type="button">
      {children}
    </button>
  );
}
