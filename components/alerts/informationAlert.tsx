export default function InformationAlert({
  message,
  detail,
}: {
  message: string;
  detail?: string;
}) {
  return (
    <div
      className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4"
      role="alert"
    >
      <p className="font-bold">{message}</p>
      <p>{detail}</p>
    </div>
  );
}
