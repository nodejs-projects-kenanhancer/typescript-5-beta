type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

type WeekDay = Omit<DayOfWeek, "Saturday" | "Sunday">;

type Weekend = Extract<DayOfWeek, "Saturday" | "Sunday">;

export {};
