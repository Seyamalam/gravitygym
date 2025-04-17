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
      <div className="container mx-auto px-2 md:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-white drop-shadow-lg">CLASS <span className="text-lime-400">SCHEDULE</span></h2>
        <div className="overflow-x-auto">
          <div className="bg-zinc-900/90 rounded-2xl shadow-2xl border border-zinc-800 max-w-6xl mx-auto">
            <Table className="border-collapse w-full text-base">
              <TableHeader>
                <TableRow>
                  <TableHead className="bg-zinc-800 text-center text-lime-400 font-bold text-lg py-4 rounded-tl-2xl">TIME</TableHead>
                  {weekDays.map((day, idx) => (
                    <TableHead key={day} className={`bg-zinc-800 text-center text-lime-400 font-bold text-lg py-4 ${idx === weekDays.length - 1 ? 'rounded-tr-2xl' : ''}`}>{day}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {timeSlots.map((time, rowIdx) => (
                  <TableRow key={time} className={rowIdx % 2 === 0 ? "bg-zinc-900/70" : "bg-zinc-800/80"}>
                    <TableCell className="bg-zinc-800 text-center font-semibold text-white py-3 px-2 border-b border-zinc-700 sticky left-0 z-10">{time}</TableCell>
                    {weekDays.map((day, colIdx) => {
                      const className = schedule[day]?.[time];
                      return (
                        <TableCell
                          key={`${day}-${time}`}
                          className={`text-center px-2 py-3 border-b border-zinc-700 transition-colors duration-200 ${
                            className
                              ? "bg-lime-500/20 text-lime-300 font-bold rounded-lg shadow-sm hover:bg-lime-500/40 cursor-pointer"
                              : "text-zinc-500"
                          } ${colIdx === weekDays.length - 1 ? 'rounded-r-lg' : ''}`}
                          aria-label={className ? `${className} at ${time} on ${day}` : `No class at ${time} on ${day}`}
                        >
                          {className || <span className="opacity-60">—</span>}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <p className="text-gray-400 text-center mt-6 text-sm">Tap on a class for more details or to book your spot.</p>
      </div>
    </section>
  );
} 