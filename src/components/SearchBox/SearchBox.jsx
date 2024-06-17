import s from "./SearchBox.module.css";

export const SearchBox = ({ onSearch }) => {
  return (
    <div className={s.wrapper}>
      <span>Find contacts by name</span>
      <input type="search" onChange={onSearch} />
    </div>
  );
};
