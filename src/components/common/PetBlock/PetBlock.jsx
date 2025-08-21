const PetBlock = ({ children }) => {
  return (
    <div className="relative flex h-[280px] w-full flex-col items-center rounded-[60px] bg-accent-orange md:h-[302px] md:flex-row lg:h-[654px]">
      {children}
    </div>
  );
};

export default PetBlock;
