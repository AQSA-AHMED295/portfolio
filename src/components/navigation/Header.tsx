const Header = () => {
  return (
    <header className="lg:flex bg-white fixed md:hidden sm:hidden hidden z-10  w-full items-center justify-between lg:px-52 md:px-[12vw] lg:h-[6vw] md:h-[8vw]">
      <div className="leftNav font-medium text-xl">Aqsa</div>
      <div className="rightNav">
        <div className="flex gap-4 navList leading-none tracking-tight">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
