import Col from 'react-bootstrap/Col';

export default function ScoopOption({
  name,
  imagePath
}) {
  console.log(7, name + ' scoop');
  return (
    <Col xs={12} sm={6} md={3} lg={3} style={{ textAlign: 'center' }}>
      <img
        style={{ width: '75%' }}
        src={`http://localhost:3030/${imagePath}`}
        alt={name + ' scoop'}
      />
    </Col>
  );
}