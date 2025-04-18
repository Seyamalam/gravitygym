import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dumbbell, HeartPulse, Flame, Bike, Users, Star, Zap, Music2, StretchHorizontal } from "lucide-react";
import React from "react";

const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"] as const;
type WeekDay = typeof weekDays[number];

const timeSlots = ["6:00 AM", "8:00 AM", "10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM", "8:00 PM"];
type TimeSlot = typeof timeSlots[number];

type ScheduleType = {
  [key in WeekDay]?: {
    [key in TimeSlot]?: string;
  };
};

const classIcons: Record<string, React.ReactNode> = {
  "Cardio": <HeartPulse className="inline-block w-4 h-4 mr-1" />, // Cardio
  "CrossFit": <Dumbbell className="inline-block w-4 h-4 mr-1" />, // CrossFit
  "Strength": <Star className="inline-block w-4 h-4 mr-1" />, // Strength
  "Boxing": <Flame className="inline-block w-4 h-4 mr-1" />, // Boxing (using Flame as closest match)
  "Spinning": <Bike className="inline-block w-4 h-4 mr-1" />, // Spinning
  "Yoga": <StretchHorizontal className="inline-block w-4 h-4 mr-1" />, // Yoga (using StretchHorizontal icon)
  "HIIT": <Zap className="inline-block w-4 h-4 mr-1" />, // HIIT
  "Pilates": <Users className="inline-block w-4 h-4 mr-1" />, // Pilates
  "Zumba": <Music2 className="inline-block w-4 h-4 mr-1" />, // Zumba
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

function getCurrentDayIndex(): number {
  // JS: Sunday=0, Monday=1, ...
  const jsDay = new Date().getDay();
  // Our weekDays: MON=0, ..., SUN=6
  return jsDay === 0 ? 6 : jsDay - 1;
}

export function ScheduleSection() {
  const currentDayIdx = getCurrentDayIndex();
  return (
    <section className="py-20 bg-gradient-to-b from-black via-zinc-950 to-zinc-900 min-h-[80vh]" id="schedule">
      <div className="container mx-auto px-2 md:px-8">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-white drop-shadow-lg tracking-tight">
          CLASS <span className="text-lime-400">SCHEDULE</span>
        </h2>
        <div className="max-w-7xl mx-auto w-full">
          <div className="w-full bg-zinc-900/90 rounded-3xl shadow-2xl border border-zinc-800 p-1 sm:p-2 md:p-6 overflow-x-auto">
            <Table className="border-collapse w-full text-xs sm:text-sm md:text-base min-w-[600px]">
              <TableHeader>
                <TableRow>
                  <TableHead className="bg-zinc-800 text-center text-lime-400 font-bold text-lg py-4 rounded-tl-2xl sticky left-0 z-20 shadow-xl">TIME</TableHead>
                  {weekDays.map((day, idx) => (
                    <TableHead
                      key={day}
                      className={`bg-zinc-800 text-center text-lime-400 font-bold text-lg py-4 ${idx === weekDays.length - 1 ? 'rounded-tr-2xl' : ''} ${idx === currentDayIdx ? 'bg-lime-900/40 text-lime-300 shadow-lg' : ''}`}
                    >
                      {day}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {timeSlots.map((time, rowIdx) => (
                  <TableRow key={time} className={rowIdx % 2 === 0 ? "bg-zinc-900/70" : "bg-zinc-800/80"}>
                    <TableCell className="bg-zinc-800 text-center font-semibold text-white py-3 px-2 border-b border-zinc-700 sticky left-0 z-10 shadow-xl">
                      {time}
                    </TableCell>
                    {weekDays.map((day, colIdx) => {
                      const className = schedule[day]?.[time];
                      const isCurrentDay = colIdx === currentDayIdx;
                      return (
                        <TableCell
                          key={`${day}-${time}`}
                          className={`text-center px-2 py-3 border-b border-zinc-700 transition-colors duration-200 relative
                            ${className ?
                              `group font-bold rounded-full shadow-md hover:bg-lime-500/40 cursor-pointer
                              ${isCurrentDay ? 'bg-lime-500/30 text-lime-200 ring-2 ring-lime-400/60' : 'bg-lime-500/20 text-lime-300'}
                              `
                              :
                              'text-zinc-500 opacity-60'
                            }
                            ${colIdx === weekDays.length - 1 ? 'rounded-r-lg' : ''}`}
                          aria-label={className ? `${className} at ${time} on ${day}` : `No class at ${time} on ${day}`}
                        >
                          {className ? (
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-lime-700/20 group-hover:bg-lime-500/40 transition-colors text-base font-semibold shadow-sm">
                              {classIcons[className]}
                              {className}
                            </span>
                          ) : (
                            <span>—</span>
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <p className="text-gray-400 text-center mt-8 text-base md:text-lg font-medium">
          Tap on a class for more details or to book your spot.
        </p>
      </div>
    </section>
  );
} 