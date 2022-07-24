import './ClueSheet.css';
import React, { useEffect, useState } from 'react';
import Josa from 'josa-js';
import sheetItemData from './item.json'
import cellIConData from './icon.json'

function ClueSheet() {

  const playerNumber = {
    default: 7,
    min: 2,
    max: 7,
  };

  const iconDataIndex = {
    default: 0,
    checked: 1,
    x: 2,
  };

  function setCheckBoxesValueRow(row, value = cellIConData[iconDataIndex.default]) {
    checkBoxesValues[row].forEach((_, column) => setCheckBoxesValue(row, column, value));
  }

  function setCheckBoxesValue(row, column, value) {
    let checkBoxesValuesNew = checkBoxesValues.slice();
    if (value === cellIConData[iconDataIndex.v])
      setCheckBoxesValueRow(row, cellIConData[iconDataIndex.x]);
    checkBoxesValuesNew[row][column] = value;
    setCheckBoxesValues(checkBoxesValuesNew);
  }

  function editColumnHeaderValue(column) {
    let columnHeaderValuesNew = columnHeaderValues.slice();
    columnHeaderValuesNew[column] = prompt("새로운 이름을 입력하세요", columnHeaderValues[column]);
    setColumnHeaderValues(columnHeaderValuesNew);
  }

  function getNumberOfItems() {
    const sheetItemDatalengthes = Object.keys(sheetItemData).map((key) => sheetItemData[key].length);
    return sheetItemDatalengthes.reduce((numberOfItems, length) => numberOfItems + length)
  }

  function getRowHeaderClassName(row) {
    if (checkBoxesValues[row].every((v) => v === cellIConData[iconDataIndex.x]))
      return 'expected'
    if (checkBoxesValues[row].includes(cellIConData[iconDataIndex.v]))
      return 'checked';
    return 'normal';
  }

  function getColumnHeaderClassName(column) {
    const checked = checkBoxesValues.filter((rows) => rows[column] === cellIConData[iconDataIndex.v]).length;
    if (checked >= numberOfCardsPerPlayer)
      return 'checked';
    return 'header';
  }

  const numberOfPlayersDefault = playerNumber.default;
  const numberOfItems = getNumberOfItems();

  const [checkBoxesValues, setCheckBoxesValues] = useState(Array.from({ length: numberOfItems }, () => new Array(playerNumber.max).fill(cellIConData[iconDataIndex.default])));
  useEffect(() => {
    const itemRowHeadersClassNamesNew = itemRowHeadersClassNames.map((_, i) => getRowHeaderClassName(i));
    setItemRowHeadersClassNames(itemRowHeadersClassNamesNew);

    const columnHeaderClassNamesNew = columnHeaderClassNames.map((_, i) => getColumnHeaderClassName(i));
    setColumnHeaderClassNames(columnHeaderClassNamesNew);
  }, [checkBoxesValues]);

  const [numberOfPlayers, setNumberOfPlayers] = useState(numberOfPlayersDefault);
  useEffect(() => {
    const checkBoxesValuesNew = checkBoxesValues.map((v, row) => v.map((value, column) => {
      if (column >= numberOfPlayers) {
        const valueNew = cellIConData[iconDataIndex.default];
        if (valueNew !== value)
          setCheckBoxesValue(row, column, valueNew);
        return valueNew;
      }
      return value;
    }));
    setCheckBoxesValues(checkBoxesValuesNew);

    const numberOfCardsPerPlayerNew = Math.floor(numberOfItems / numberOfPlayers);
    setNumberOfCardsPerPlayer(numberOfCardsPerPlayerNew);
  }, [numberOfPlayers]);

  const [numberOfCardsPerPlayer, setNumberOfCardsPerPlayer] = useState(Math.floor(numberOfItems /
    numberOfPlayersDefault));
  useEffect(() => {
    const columnHeaderClassNamesNew = columnHeaderClassNames.map((v, i) => getColumnHeaderClassName(checkBoxesValues, i));
    setColumnHeaderClassNames(columnHeaderClassNamesNew);
  }, [numberOfCardsPerPlayer]);

  const [columnHeaderClassNames, setColumnHeaderClassNames] = useState(new Array(playerNumber.max).fill('head'));

  const [columnHeaderValues, setColumnHeaderValues] = useState(Array.from({ length: playerNumber.max }, (_, k) => "P" + (k + 1)));

  const [itemRowHeadersClassNames, setItemRowHeadersClassNames] = useState(new Array(numberOfItems).fill('normal'));


  function NumberOfPlayersInput() {
    const min = playerNumber.min;
    const max = playerNumber.max;
    return (
        <form className='number-setting'>
          <label>
            {'플레이어 수: '}
            <select defaultValue={numberOfPlayers} min={min} max={max} onChange={(e) => setNumberOfPlayers(e.target.value)}>
              {Array.from({ length: (max - min + 1) }, (_, i) => <option key={i}>{i + min}</option>)}
            </select>
            {' 명'}
          </label>
        </form>
    );
  }

  function NumberOfCardsPerPlayerInput() {
    return (
      <form className='number-setting'>
        <label>
          {'1인당 카드 수: '}
          <select defaultValue={numberOfCardsPerPlayer} min={1} max={numberOfItems} onChange={(e) => setNumberOfCardsPerPlayer(e.target.value)}>
            {Array.from({ length: playerNumber.max }, (_, i) => <option key={i}>{i + 1}</option>)}
          </select>
          {' 장'}
        </label>
      </form>
    );
  }

  function CheckBoxes(props) {
    const row = props.index;
    return (
      <React.StrictMode>
        {
          Array.from({ length: numberOfPlayers }, ((_, column) => {
            return (
              <td key={column} className='cell'>
                <form>
                  <select className='cell' value={checkBoxesValues[row][column]} onChange={(e) => setCheckBoxesValue(row, column, e.target.value)}>
                    {Array.from(cellIConData, (v, i) => <option key={i}>{v}</option>)}
                  </select>
                </form>
              </td>
            );
          }))
        }
      </React.StrictMode>
    );
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
                  <th key={i + 1} className={columnHeaderClassNames[i]} onClick={() => editColumnHeaderValue(i)}>{columnHeaderValues[i]}</th>
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
            Object.keys(sheetItemData).map((key, index) => {
              const headerRow = (
                <tr key={index}>
                    <td key={key} className='head'>{key + Josa.c(key, '은/는') + '?'}</td>
                    <td key={key + '-empty'} className='empty' colSpan={numberOfPlayersDefault} />
                  </tr>
              );

              const itemRows = sheetItemData[key].map((v, i) => {
                const row = (offset + i);
                return (
                  <tr key={row}>
                    <td key={row} className={itemRowHeadersClassNames[row]} onDoubleClick={() => { setCheckBoxesValueRow(row, cellIConData[iconDataIndex.x]) }}>{v}</td>
                    <CheckBoxes index={row} />
                  </tr>
                )
              });
              offset += sheetItemData[key].length;

              return (
                <React.StrictMode key={index}>
                  {headerRow}
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
      <NumberOfPlayersInput />
      <NumberOfCardsPerPlayerInput />
      <table>
        <TableHeader />
        <TableBody />
      </table>
    </React.StrictMode>
  );
}

export default ClueSheet;