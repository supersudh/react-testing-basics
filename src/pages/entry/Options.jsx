import axios from 'axios';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';

import ScoopOption from './ScoopOption';
import ToppingOption from './ToppingOption';
import AlertBanner from '../common/AlertBanner';

export default function Options({ optionType }) {

  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  // optionType is 'scoops' or 'toppings'
  useEffect(() => {
    async function fetchScoopOrToppings() {
      try {
        const { data } = await axios.get(`http://localhost:3030/${optionType}`);
        setItems(data);
      } catch (error) {
        // console.log('Error in fetchScoopOrToppings');
        // console.log(error);
        setError(true);
      }
    }
    fetchScoopOrToppings();
  }, [optionType]);

  if (error) {
    return (
      <AlertBanner
        message=""
        variant=""
      />
    );
  }

  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;

  const optionItems = items.map((item, i) => (
    <ItemComponent
      key={`item-${i + 1}`}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return (
    <Row>
      {optionItems}
    </Row>
  );
}