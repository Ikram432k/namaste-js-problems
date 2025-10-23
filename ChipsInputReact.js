// Chips Input
//problem statement link below
//https://namastedev.com/practice/chips-input 

//solutiion below 

function ChipsInput() {
  const [chipsData, setchipsData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const deleteChipsData = (clickedChipData) => {
    setchipsData(currentItems => {
      return currentItems.filter((ele) => ele !== clickedChipData);
    })
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && inputValue.trim().length > 0) {
      setchipsData([...chipsData, inputValue]);
      setInputValue(''); 
    }
  };
  return (
    <div className='main-container'>
      <h2>Chips Input</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type a chip and press tag"
        className="input"
      />
      {chipsData.length > 0 ? chipsData.map((data) => (
        <div>
          <p>{data}</p>
          <div onClick={() => { deleteChipsData(data) }}>X</div>
        </div>
      )) :
      null}
    </div>
  );
}