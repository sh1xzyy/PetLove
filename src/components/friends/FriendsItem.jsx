import clsx from "clsx";
import React, { useState } from "react";
import SchedulePopup from "./SchedulePopup/SchedulePopup"; // Убедитесь, что путь правильный

const FriendsItem = ({ friend }) => {
  const {
    title,
    url,
    addressUrl,
    imageUrl,
    address,
    workDays = [],
    phone,
    email,
  } = friend || {};

  console.log(workDays);

  if (!friend) return null;

  const [showSchedule, setShowSchedule] = useState(false);

  return (
    <div
      className={clsx(
        "relative flex h-[184px] w-full max-w-[335px] flex-row gap-[14px] rounded-[15px] bg-white py-10 pl-5 pr-3",
        "md:h-[196px] md:max-w-[332px] md:gap-[16px]",
        "lg:max-w-[371px] lg:gap-[20px]",
      )}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-[80px] md:max-w-[90px]"
      >
        <img
          src={imageUrl}
          alt={`${title} logo`}
          className="w-full"
          onError={(e) => {
            e.target.src = "/placeholder-image.jpg";
          }}
        />
      </a>
      <div>
        <h3
          className={clsx(
            "mb-[14px] text-[16px] font-bold leading-[125%] tracking-[-0.04em] text-[--gray-900]",
            "md:mb-[20px] md:text-[20px] md:leading-[130%]",
          )}
        >
          {title}
        </h3>
        <a
          href={`mailto:${email || url}`}
          target="_blank"
          className={clsx(
            "mb-2 line-clamp-2 block text-[14px] font-medium leading-[129%] tracking-[-0.02em] text-[--gray-900]",
          )}
        >
          <span className="text-[--grey-05]">Email: </span>
          {email || "website only"}
        </a>
        <a
          href={addressUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={clsx(
            "mb-2 line-clamp-2 block text-[14px] font-medium leading-[129%] tracking-[-0.02em] text-[--gray-900]",
          )}
        >
          <span className="text-[--grey-05]">Address: </span>
          {address || "website only"}
        </a>
        <a
          href={`tel:${phone}`}
          className={clsx(
            "line-clamp-2 block text-[14px] font-medium leading-[129%] tracking-[-0.02em] text-[--gray-900]",
          )}
        >
          <span className="text-[--grey-05]">Phone: </span>
          {phone || "email only"}
        </a>
      </div>

      <div
        className={clsx(
          "absolute right-3 top-3 flex h-[32px] w-full max-w-[90px] items-center justify-center rounded-[30px] bg-[--bg-cream] text-[12px] font-medium leading-[133%] tracking-[-0.02em] text-[--accent-orange]",
          "h-[34px] md:max-w-[100px] md:text-[14px] md:leading-[129%]",
          workDays && workDays.length > 0 && "cursor-pointer",
        )}
        onMouseEnter={() =>
          workDays && workDays.length > 0 && setShowSchedule(true)
        }
        onMouseLeave={() =>
          workDays && workDays.length > 0 && setShowSchedule(false)
        }
      >
        {workDays && workDays.length > 0 ? "Schedule" : "No schedule"}
        {showSchedule && workDays && workDays.length > 0 && (
          <SchedulePopup workDays={workDays} />
        )}
      </div>
    </div>
  );
};

export default FriendsItem;
