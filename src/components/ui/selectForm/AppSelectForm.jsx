export default ({ items }) => {
  return (
    <select className="h-1/2">
      {items.map((e) => (
        <option key={e.option}>{e.option}</option>
      ))}
    </select>
  );
};
