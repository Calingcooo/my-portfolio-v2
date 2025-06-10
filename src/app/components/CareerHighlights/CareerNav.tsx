const CareerNav = () => {
  const careerItems = ["DigEco Technologies", "Skin Manila Inc."];

  return (
    <ul className="w-[30%]">
      {careerItems.map((item, i) => (
        <li
          className="hover:text-[#64ffda] cursor-pointer transition-all duration-150"
          key={i}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default CareerNav