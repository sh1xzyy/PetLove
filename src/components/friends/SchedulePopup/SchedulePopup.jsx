import CalendarDog from "/public/common/CalendarDog.webp";
const SchedulePopup = ({ workDays }) => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const formatSchedule = () => {
    if (!workDays || !Array.isArray(workDays) || workDays.length === 0) {
      return days.map((day) => `${day}: Closed`);
    }
    return workDays.map((day, index) => {
      const dayName = days[index];
      if (day.isOpen) {
        return `${dayName}: ${day.from} - ${day.to}`;
      }
      return `${dayName}: Closed`;
    });
  };

  return (
    <div className="absolute right-0 top-full z-10 mt-2 w-[160px] rounded-lg bg-white px-4 pb-3 pt-[70px] shadow-lg">
      <ul className="relative text-[14px] text-[--gray-900]">
        {formatSchedule().map((schedule, index) => (
          <li key={index} className="py-1">
            {schedule}
          </li>
        ))}
        <img
          src={CalendarDog}
          alt="Mult dog with calendar"
          className="absolute right-[35px] top-[-65px]"
          width="65"
          height="70"
        />
      </ul>
    </div>
  );
};

export default SchedulePopup;
