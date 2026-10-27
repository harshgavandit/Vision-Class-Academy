import { NextResponse } from "next/server";
import { courses } from "@/data/courses";
import { contactMethods, counsellingTypes, currentClasses } from "@/data/contact";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const fieldLimits = {
  studentName: 100, parentName: 100, phone: 32, email: 254,
  currentClass: 32, course: 100, contactMethod: 16,
  counsellingType: 24, enquiryType: 16, message: 2000,
} as const;

export async function POST(request: Request) {
  if (Number(request.headers.get("content-length")) > 16_384) {
    return NextResponse.json({ error: "This enquiry is too long. Please shorten your message." }, { status: 413 });
  }

  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return NextResponse.json({ error: "Please send a valid enquiry form." }, { status: 400 });
  }

  if (data.get("website")) return NextResponse.json({ ok: true });

  const values: Record<string, string> = {};
  for (const [name, limit] of Object.entries(fieldLimits)) {
    const value = data.get(name);
    if ((value !== null && typeof value !== "string") || (typeof value === "string" && value.length > limit)) {
      return NextResponse.json({ error: "Please check the enquiry fields and try again." }, { status: 400 });
    }
    values[name] = typeof value === "string" ? value.trim() : "";
  }

  const required = ["studentName", "parentName", "phone", "email", "currentClass", "course", "contactMethod"];
  const allowed = (choices: readonly string[], value: string) => choices.includes(value);
  const isCounselling = values.enquiryType === "counselling";
  const invalid = required.some(name => !values[name])
    || !emailPattern.test(values.email)
    || !/^\+?[\d\s().-]+$/.test(values.phone)
    || !/^\d{7,15}$/.test(values.phone.replace(/\D/g, ""))
    || !allowed(currentClasses, values.currentClass)
    || !allowed(courses.map(course => course.title), values.course)
    || !allowed(contactMethods, values.contactMethod)
    || (values.enquiryType !== "" && !allowed(["general", "counselling"], values.enquiryType))
    || (isCounselling && !values.counsellingType)
    || (Boolean(values.counsellingType) && !allowed(counsellingTypes, values.counsellingType));

  if (invalid) {
    return NextResponse.json({ error: "Please check the enquiry fields and try again." }, { status: 400 });
  }

  // Connect the chosen transactional email provider here before enabling the form.
  // Report receipt only after that provider accepts the enquiry for delivery.
  return NextResponse.json({ error: "Online enquiries are currently unavailable. Please contact the academy directly." }, { status: 503 });
}
