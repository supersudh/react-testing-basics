import axios from 'axios';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';

import ScoopOption from './ScoopOption';

export default function Options({ optionType }) {

  const [items, setItems] = useState([]);

  // optionType is 'scoops' or 'toppings'
  useEffect(() => {
    async function fetchScoopOrToppings() {
      try {
        console.log(16, `http://localhost:3030/${optionType}`);
        const { data } = await axios.get(`http://localhost:3030/${optionType}`);
        setItems(data);
      } catch (error) {
        console.log('Error in fetchScoopOrToppings');
        console.log(error);
      }
    }
    fetchScoopOrToppings();
  }, [optionType]);

  const ItemComponent = optionType === 'scoops' ? ScoopOption : null;

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