"use client";
import { useId, useState } from "react";
import { faqs } from "@/data/faqs";
import { Icon } from "./icon";
export function FaqList() {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();
  return (
    <div className="mt-8 space-y-3">
      {faqs.map((item, index) => (
        <div
          key={item.q}
          className="rounded-2xl border border-slate-200 bg-white"
        >
          <h3>
            <button
              type="button"
              id={id + "-button-" + index}
              className="flex min-h-16 w-full items-center justify-between gap-4 p-5 text-left text-sm font-bold text-navy sm:text-base"
              onClick={() => setOpen(open === index ? null : index)}
              aria-expanded={open === index}
              aria-controls={id + "-panel-" + index}
            >
              {item.q}
              <span
                className={
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full " +
                  (open === index
                    ? "bg-blue-700 text-white"
                    : "bg-slate-100 text-slate-500")
                }
              >
                <Icon
                  name={open === index ? "close" : "chevron"}
                  className={
                    "h-3 w-3 " + (open === index ? "rotate-45" : "rotate-90")
                  }
                />
              </span>
            </button>
          </h3>
          <div
            id={id + "-panel-" + index}
            role="region"
            aria-labelledby={id + "-button-" + index}
            hidden={open !== index}
          >
            <p className="px-5 pb-5 text-sm leading-7 text-slate-500">
              {item.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
