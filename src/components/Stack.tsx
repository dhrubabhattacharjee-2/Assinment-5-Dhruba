import type { Technology } from "../type/tech";

interface StackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}
const Stack = ({ stack, onRemove, onRemoveAll }: StackProps) => {
  return (
    <aside className="h-fit rounded-xl border border-gray-100 bg-white p-4 shadow-sm lg:sticky lg:top-24">

     
      <div>
        <h2 className="text-base font-bold text-gray-900">
          Your Stack
        </h2>

        <p className="mt-1 text-xs text-gray-400">
          {stack.length}{" "}
          {stack.length === 1 ? "Technology" : "Technologies"} Selected
        </p>
      </div>

      
      <div className="mt-4 space-y-2">
        {stack.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-200 p-5 text-center">
            <p className="text-sm text-gray-400">
              Nothing is here!!!
            </p>

            <p className="mt-1 text-xs text-gray-300">
              Add Something Bro!!!
            </p>
          </div>
        ) : (
          stack.map((technology: Technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-lg border border-gray-100 p-2.5"
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-7 w-7 object-contain"
              />

              <div className="min-w-0 flex-1">
                <h3 className="truncate text-xs font-semibold text-gray-800">
                  {technology.name}
                </h3>

                <p className="text-[10px] text-gray-400">
                  {technology.category}
                </p>
              </div>

              <button
                onClick={() => onRemove(technology.id)}
                className="text-gray-400 transition hover:text-red-500"
                aria-label={`Remove ${technology.name}`}
              >
                ×
              </button>
            </div>
          ))
        )}
      </div>

      
      {stack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="mt-5 w-full rounded-lg border border-red-200 py-2 text-xs font-medium text-red-500 transition hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </aside>
  );
};

export default Stack;