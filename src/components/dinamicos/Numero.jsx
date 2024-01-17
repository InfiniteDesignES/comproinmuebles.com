// eslint-disable-next-line react/prop-types
export default function NumeroDinamico({ numero }) {
  return (
    <div className="flex items-center justify-end">
      <div className="flex items-center absolute">
        <div className="flex items-center justify-center rounded-full h-12 w-12 py-3 border-2 border-dotted bg-blue-600 border-600 text-600">
          {numero}
        </div>
      </div>
    </div>
  );
}
