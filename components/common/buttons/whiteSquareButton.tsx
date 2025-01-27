import _ from "lodash";

export default function WhiteSquareButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  let _className =
    "flex items-center justify-center w-40 py-2.5 px-5 me-2 my-1 text-sm font-medium text-gray-900 focus:outline-none bg-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700";

  if (!_.isNil(className)) {
    _className = _className.concat(" ").concat(className);
  }

  return (
    <button className={_className} type="button">
      {children}
    </button>
  );
}
