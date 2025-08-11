const ActionBtns = ({ closeModal }) => {
  return (
    <>
      <button
        className="linear flex h-[44px] min-w-[135px] items-center justify-center gap-x-[8px] rounded-[30px] bg-accent-orange px-[14px] text-[14px] font-medium leading-[1.25] tracking-[-0.03em] text-light-white transition duration-[250ms] hover:bg-bg-cream hover:text-accent-orange md:h-[48px] md:min-w-[160px] md:text-[16px] md:leading-[1.25]"
        type="button"
        onClick={() => {
          console.log("clicked");
          closeModal();
        }}
      >
        Add to
        <svg className="h-[18px] w-[18px] stroke-light-white text-transparent">
          <use href="/icons/sprite.svg#icon-heart"></use>
        </svg>
      </button>
      <button
        className="linear h-[44px] min-w-[135px] rounded-[30px] bg-bg-cream px-[14px] text-[14px] font-medium leading-[1.25] tracking-[-0.03em] text-accent-orange transition duration-[250ms] hover:bg-dark-orange hover:text-accent-orange md:h-[48px] md:min-w-[160px] md:text-[16px] md:leading-[1.25]"
        type="button"
        onClick={() => closeModal()}
      >
        Contact
      </button>
    </>
  );
};

export default ActionBtns;
