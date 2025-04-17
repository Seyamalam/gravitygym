import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"] as const;
type WeekDay = typeof weekDays[number];

const timeSlots = ["6:00 AM", "8:00 AM", "10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM", "8:00 PM"];
type TimeSlot = typeof timeSlots[number];

type ScheduleType = {
  [key in WeekDay]?: {
    [key in TimeSlot]?: string;
  };
};

const schedule: ScheduleType = {
  "MON": {
    "6:00 AM": "Cardio",
    "8:00 AM": "CrossFit",
    "12:00 PM": "Spinning",
    "4:00 PM": "Yoga",
    "6:00 PM": "HIIT",
    "8:00 PM": "Pilates"
  },
  "TUE": {
    "6:00 AM": "Strength",
    "10:00 AM": "Boxing",
    "2:00 PM": "CrossFit",
    "6:00 PM": "Cardio",
    "8:00 PM": "Zumba"
  },
  "WED": {
    "8:00 AM": "HIIT",
    "10:00 AM": "Yoga",
    "12:00 PM": "Pilates",
    "4:00 PM": "Strength",
    "6:00 PM": "CrossFit"
  },
  "THU": {
    "6:00 AM": "Boxing",
    "10:00 AM": "Cardio",
    "2:00 PM": "HIIT",
    "6:00 PM": "Spinning",
    "8:00 PM": "Yoga"
  },
  "FRI": {
    "8:00 AM": "Strength",
    "12:00 PM": "CrossFit",
    "4:00 PM": "Pilates",
    "6:00 PM": "Zumba",
    "8:00 PM": "HIIT"
  },
  "SAT": {
    "8:00 AM": "CrossFit",
    "10:00 AM": "Yoga",
    "12:00 PM": "Boxing",
    "4:00 PM": "Cardio"
  },
  "SUN": {
    "10:00 AM": "HIIT",
    "12:00 PM": "Yoga",
    "2:00 PM": "Pilates"
  }
};

export function ScheduleSection() {
  return (
    <section className="py-20 bg-black" id="schedule">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">CLASS SCHEDULE</h2>
        
        <div className="overflow-x-auto">
          <Table className="border-collapse">
            <TableHeader>
              <TableRow>
                <TableHead className="bg-zinc-800 text-center">TIME</TableHead>
                {weekDays.map((day) => (
                  <TableHead key={day} className="bg-zinc-800 text-center">{day}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {timeSlots.map((time) => (
                <TableRow key={time}>
                  <TableCell className="bg-zinc-800 text-center font-medium">{time}</TableCell>
                  {weekDays.map((day) => (
                    <TableCell 
                      key={`${day}-${time}`} 
                      className={`text-center ${schedule[day]?.[time] ? 'bg-lime-500/20 text-lime-500' : 'bg-zinc-900'}`}
                    >
                      {schedule[day]?.[time] || "—"}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
} 