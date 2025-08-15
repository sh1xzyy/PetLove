const PetBlock = ({
  mobile1x,
  mobile2x,
  laptop1x,
  laptop2x,
  desktop1x,
  desktop2x,
  name,
  birthday,
  description,
}) => {
  return (
    <div className="relative flex h-[280px] w-full flex-col items-center rounded-[60px] bg-accent-orange md:h-[302px] md:flex-row lg:h-[654px]">
      <div className="z-10 mb-8 ml-8 mt-auto hidden w-[294px] rounded-[20px] bg-light-white p-4 md:flex lg:absolute lg:bottom-[97px] lg:left-[61px]">
        <div className="flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-full bg-bg-cream">
          {/* <img src={icon} alt="pet icon" className="w-[32px] h-[32px] object-contain" /> */}
        </div>
        <div>
          <div className="ml-2 flex items-baseline justify-between">
            <h3 className="text-accent-orange">{name}</h3>
            <p className="text-xs text-gray-900">
              <span className="text-grey-40">Birthday:</span> {birthday}
            </p>
          </div>
          <p className="text-grey-08 ml-2 mt-2 text-xs">{description}</p>
        </div>
      </div>
      <div className="lg:h-full lg:w-full">
        <picture className="md:absolute md:right-[90px] md:top-1/2 md:-translate-y-1/2 lg:static lg:translate-y-0">
          <source
            srcSet={`${desktop1x} 1x, ${desktop2x} 2x`}
            media="(min-width: 1280px)"
          />
          <source
            srcSet={`${laptop1x} 1x, ${laptop2x} 2x`}
            media="(min-width: 768px)"
          />
          <img
            src={mobile1x}
            srcSet={`${mobile1x} 1x, ${mobile2x} 2x`}
            alt="Pet"
            className="h-full w-full object-cover"
          />
        </picture>
      </div>
    </div>
  );
};

export default PetBlock;
