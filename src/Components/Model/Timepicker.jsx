import { useState } from "react";
import Gradient from "../Gradient";

const days = [
  { id: 0, label: "Mon", date: "Jun 1", ids: "mon" },
  { id: 1, label: "Tue", date: "Jun 2", ids: "tue" },
  { id: 2, label: "Wed", date: "Jun 3", ids: "wed" },
  { id: 3, label: "Thu", date: "Jun 4", ids: "thu" },
  { id: 4, label: "fri", date: "Jun 5", ids: "fri" },
  { id: 5, label: "sat", date: "Jun 6", ids: "sat" },
  { id: 6, label: "sun", date: "Jun 7", ids: "sun" },
];

const timeSlots = [
  { time: "09:00", available: true },
  { time: "10:00", available: true },
  { time: "11:00", available: true },
  { time: "12:00", available: true },
  { time: "13:00", available: true },
  { time: "14:00", available: true },
  { time: "15:00", available: false },
  { time: "16:00", available: true },
  { time: "17:00", available: true },
  { time: "18:00", available: true },
  { time: "19:00", available: true },
  { time: "20:00", available: true },
  { time: "21:00", available: true },
  { time: "22:00", available: true },
  { time: "23:00", available: true },
];

let newData = days.filter((i) => {
  return i.id <= 3;
});

const ROWS = [
  { slots: ["09:00", "10:00", "11:00"] },
  { slots: ["12:00", "13:00", "14:00"] },
  { slots: ["15:00", "16:00", "17:00"] },
  { slots: ["18:00", "19:00", "20:00", "21:00"] },
  { slots: ["22:00", "23:00"] },
];

const Days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const NowDate = new Date().getDay();

export default function Timepicker() {
  const [selectedDay, setSelectedDay] = useState(Days[NowDate]);
  const [selectedTime, setSelectedTime] = useState("13:00");

  const slotMap = Object.fromEntries(timeSlots.map((s) => [s.time, s]));

  return (
    <div className={`  plus-jakarta     max-w-sm font-sans`}>
      <div className={`w-full max-w-sm   p-2.5 py-1`}>
        <div className="grid grid-cols-4 overflow-hidden gap-1.5 rounded-lg  p-1 ">
          {newData.map((d) => (
            <Gradient key={d.ids}>
              <button
                onClick={() => setSelectedDay(d.ids)}
                className={` ${selectedDay === d.ids ? " opacity-100" : "opacity-50"}   `}
              >
                {d.label && d.date ? (
                  <div>
                    <h2 className="text-white text-[12px] ">{d.label}</h2>
                    <p className=" text-[10px] ">{d.date}</p>
                  </div>
                ) : (
                  ""
                )}
              </button>
            </Gradient>
          ))}
        </div>

        <div className={`  mb-4`} />

        <p className={`Capitalize text-[12px] text-white mb-3`}>
          Available Time to Book Your Meeting
        </p>

        {/* Time Slots */}
        <div className="space-y-3">
          {ROWS.map((row) => (
            <div key={row.icon} className="flex items-center gap-2">
              <div className="flex flex-wrap gap-3 flex-1">
                {row.slots.map((time) => {
                  const slot = slotMap[time];
                  if (!slot) return null;
                  const isActive = selectedTime === time && slot.available;
                  const isSold = !slot.available;
                  return (
                    <button
                      key={time}
                      disabled={isSold}
                      onClick={() => !isSold && setSelectedTime(time)}
                      className={`relative px-4 py-1 bg-[#1c0c20] transition-all duration-200 ${
                        isSold
                          ? "border border-purple-50 text-white rounded text-xs cursor-not-allowed "
                          : isActive
                            ? "bg-[#4f1c52] text-white  rounded text-xs  "
                            : " text-white rounded text-xs transition-all duration-200 "
                      }`}
                    >
                      {time}
                      {isSold && (
                        <span
                          className={`absolute -bottom-2.5 left-1/2 -translate-x-1/2 text-[10px] whitespace-nowrap bg-[#7b0b15] px-1`}
                        >
                          Booked
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Confirm */}
        {selectedTime && (
          <div className="mt-6">
            <button className={`w-full py-2.5 text-xs bg-[#2d102f] rounded-md`}>
              Confirm — {days.find((d) => d.ids === selectedDay)?.date},{" "}
              {selectedTime}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
