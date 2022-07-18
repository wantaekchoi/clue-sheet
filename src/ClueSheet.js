import './ClueSheet.css';
import React, { useState } from 'react';
import Josa from 'josa-js';
import sheetItemData from './item.json'
import cellIConData from './icon.json'

class Icons {
  static index = {
    default: 0,
    check: 1,
  }

  static get(index = undefined) {
    if (index === undefined)
      return cellIConData;
    return cellIConData[index];
  }
}

function ClueSheet() {

  const number = { min: 2, max: 7, default: 7 };

  function getDefaultNumberOfItems() {
    let numberOfItemsDefault = 0;
    Object.keys(sheetItemData).forEach((v) => numberOfItemsDefault += sheetItemData[v].length);
    return numberOfItemsDefault;
  }

  const numberOfPlayersDefault = number.default;
  const numberOfItems = getDefaultNumberOfItems();
  const [numberOfPlayers, setNumberOfPlayers] = useState(numberOfPlayersDefault);
  const [numberOfCardsPerPlayer, setNumberOfCardsPerPlayer] = useState(Math.floor(numberOfItems /
  numberOfPlayersDefault));
  const [columnHeaderClassNames, setColumnHeaderClassNames] = useState(new Array(number.max).fill('head'));
  const [columnHeaderValues, setColumnHeaderValues] = useState(Array.from({length: number.max}, (_, k) => "P"+(k+1)));
  const [itemRowHeadersClassNames, setItemRowHeadersClassNames] = useState(new Array(numberOfItems).fill('normal'));
  const [checkBoxesValues, setCheckBoxesValues] = useState(new Array(numberOfItems).fill(0).map(row => new Array(number.max).fill(Icons.get(Icons.index.default))));

  function checkRowHeaderClassName(checkBoxes, row) {
    if (checkBoxes[row].includes(Icons.get(Icons.index.check)))
      return 'checked';
    return 'normal';
  }

  function checkColumnHeaderClassName(checkBoxes, column) {
    if (checkBoxes.filter((rows) => rows[column] === Icons.get(Icons.index.check)).length >= numberOfCardsPerPlayer)
      return 'checked';
    return 'header';
  }

  function onChangeCell(row, column, value) {
    let checkBoxesValuesNew = checkBoxesValues.slice();
    checkBoxesValuesNew[row][column] = value;
    setCheckBoxesValues(checkBoxesValuesNew);
    console.log(checkBoxesValuesNew);

    let itemRowHeadersClassNamesNew = itemRowHeadersClassNames.slice();
    itemRowHeadersClassNamesNew[row] = checkRowHeaderClassName(checkBoxesValuesNew, row);
    setItemRowHeadersClassNames(itemRowHeadersClassNamesNew);

    let columnHeaderClassNamesNew = columnHeaderClassNames.slice();
    columnHeaderClassNamesNew[column] = checkColumnHeaderClassName(checkBoxesValuesNew, column);
    setColumnHeaderClassNames(columnHeaderClassNamesNew);
  }

  function onChangeNumberOfPlayers(numberOfPlayersNew) {
    let checkBoxesValuesNew = checkBoxesValues.map((v, row) => v.map((icon, column) => {
      if (column >= numberOfPlayersNew) {
        const iconNew = Icons.get(Icons.index.default);
        if (iconNew !== icon)
          onChangeCell(row, column, iconNew);
        return iconNew;
      }
      return icon;
    }));
    setCheckBoxesValues(checkBoxesValuesNew);
    setNumberOfCardsPerPlayer(Math.floor((numberOfItems/numberOfPlayersNew)));
    setNumberOfPlayers(numberOfPlayersNew);
  }

  function NumberOfPlayersInput() {
    const name = 'numer-of-players';
    const min = number.min;
    const max = number.max;
    const defaultValue = numberOfPlayers;
    const options = Array.from({ length: (max - min + 1) }, (_, i) => <option key={i}>{i+min}</option>);
    return (
      <React.StrictMode key={name}>
        <form key={name} className={name}>
          <label>
            {'플레이어 수: '}
            <select name={name} className={name} defaultValue={defaultValue} min={min} max={max} onChange={(e) => onChangeNumberOfPlayers(e.target.value)}>
              {options}
            </select>
            {' 명'}
          </label>
        </form>
      </React.StrictMode>
    );
  }

  function NumberOfCardsPerPlayerInput() {
    const name = 'number-of-cards-per-player';
    const min = 1;
    const max = numberOfItems;
    const defaultValue = numberOfCardsPerPlayer;
    const options = Array.from({ length: (max - min + 1) }, (v, i) => <option key={i}>{i + min}</option>);
    return (
      <React.StrictMode key={name}>
        <form key={name} className={name}>
          <label>
            {'1인당 카드 수: '}
            <select name={name} className={name} defaultValue={defaultValue} min={min} max={max} onChange={(e) => setNumberOfCardsPerPlayer(e.target.value)}>
              {options}
            </select>
            {' 장'}
          </label>
        </form>
      </React.StrictMode>
    );
  }

  function CheckBoxOptions() {
    return Array.from(Icons.get(), (v, i) => <option key={i}>{v}</option>);
  }

  function CheckBoxes(props) {
    const row = props.index;
    return (
      <React.StrictMode>
        {
          Array.from({ length: numberOfPlayers }, ((_, column) => {
            return (
              <td key={row + '-' + column} className='cell'>
                <form>
                  <select className='cell' name='clue-sheet-cell' type='select' value={checkBoxesValues[row][column]} onChange={(e) => onChangeCell(row, column, e.target.value)}>
                    <CheckBoxOptions />
                  </select>
                </form>
              </td>
            );
          }))
        }
      </React.StrictMode>
    );
  }

  function onClickTableHeader(index) {
    let columnHeaderValuesNew = columnHeaderValues.slice();
    columnHeaderValuesNew[index] = prompt("새로운 이름을 입력하세요");
    setColumnHeaderValues(columnHeaderValuesNew);
  }

  function TableHeader() {
    return (
      <React.StrictMode key='table-header'>
        <thead>
          <tr>
            <td className='empty' key={0} />
            {
              Array.from({ length: numberOfPlayers }, (v, i) => {
                return (
                  <th key={i + 1} className={columnHeaderClassNames[i]} onClick={() => {onClickTableHeader(i)}}>{columnHeaderValues[i]}</th>
                );
              })
            }
          </tr>
        </thead>
      </React.StrictMode>
    );
  }

  function TableBody() {
    let offset = 0;
    return (
      <React.StrictMode key='table-body'>
        <tbody>
          {
            Object.keys(sheetItemData).map((key, keyIndex) => {
              const itemRows = Array.from(sheetItemData[key], (v, i) => {
                const index = (offset + i);
                return (
                  <tr key={key + '-' + keyIndex + '-' + index}>
                    <td key={key + '-' + keyIndex + '-' + index} className={itemRowHeadersClassNames[index]}>{v}</td>
                    <CheckBoxes index={index} />
                  </tr>
                )
              });

              offset += sheetItemData[key].length;

              return (
                <React.StrictMode key={key + '-' + keyIndex}>
                  <tr key={key + '-' + keyIndex}>
                    <td key={key} className='head'>{key + Josa.c(key, '은/는') + '?'}</td>
                    <td key={key + '-empty'} className='empty' colSpan={numberOfPlayersDefault} />
                  </tr>
                  {itemRows}
                </React.StrictMode>
              )
            })
          }
        </tbody>
      </React.StrictMode>
    )
  }

  return (
    <React.StrictMode>
      <div>
        <NumberOfPlayersInput />
        <NumberOfCardsPerPlayerInput />
      </div>
      <table>
        <TableHeader />
        <TableBody />
      </table>
    </React.StrictMode>
  );
}

export default ClueSheet;