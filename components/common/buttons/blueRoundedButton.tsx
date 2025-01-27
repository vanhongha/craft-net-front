export default function BlueRoundedButton({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <button
      className="flex items-center justify-center w-40 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4
          focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 my-1 dark:bg-blue-600
          dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
    >
      {children}
    </button>
  );
}
