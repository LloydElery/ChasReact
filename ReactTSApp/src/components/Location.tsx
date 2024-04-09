import { MouseEvent } from "react"; // needed to please TS when creating a function to handle click events.

const Location = () => {
  const locations = [
    { country: "Sverige", capital: "Stockholm", continent: "Europa" },
    { country: "Japan", capital: "Tokyo", continent: "Asien" },
    { country: "Australien", capital: "Canberra", continent: "Oceanien" },
    { country: "Kanada", capital: "Ottawa", continent: "Nordamerika" },
    { country: "Brasilien", capital: "Brasília", continent: "Sydamerika" },
  ];
  /**
   * Event handler
   * !INORMATIONAL
   * Why TypeScript needs imports to use events?
   * @param event is of type `any` traditionally and TS gives you the correct usecase alternatives when importing and asigning a value to it.
   * @returns an interface using `.` after the `event` keyword.
   */
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <div>
      <h2>Location: </h2>
      <ul>
        {locations.map((location, index) => (
          <li className="location" key={index} onClick={handleClick}>
            Country: {location.country}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Location;
