import { Icon } from "./icon";
export function Brand({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <span className="brand-mark">
        <Icon name="book" className="h-7 w-7" />
        <span className="brand-spark" />
      </span>
      <span className={`text-left ${light ? "text-white" : "text-navy"}`}>
        <span className="block text-[21px] font-extrabold leading-none tracking-[-.8px] sm:text-2xl">
          VISION<span className="text-blue-600">.</span>
        </span>
        <span
          className={`mt-1 block text-[9px] font-bold uppercase tracking-[2.5px] ${light ? "text-slate-300" : "text-slate-500"}`}
        >
          Science Academy
        </span>
      </span>
    </span>
  );
}
