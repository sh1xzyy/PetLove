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
    <div className="absolute right-0 top-full z-10 mt-2 w-[160px] rounded-lg bg-white px-4 pb-3 pt-[60px] shadow-lg">
      <ul className="relative text-[14px] text-[--gray-900]">
        {formatSchedule().map((schedule, index) => (
          <li key={index} className="py-1">
            {schedule}
          </li>
        ))}
        <img
          src="/public/common/CalendarDog.webp"
          alt="Mult dog with calendar"
          className="absolute right-[50px] top-[-70px]"
          width="65"
          height="70"
        />
      </ul>
    </div>
  );
};

export default SchedulePopup;
