import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

export function PokeduxCard(props) {
  const { pokemon } = props;
  return (
    <Card
      title={pokemon.name}
      cover={<img src={pokemon.sprites.front_default} alt={pokemon.name} />}
      extra={<StarOutlined />}
    >
      <Meta description={pokemon.types[0].type.name} />
    </Card>
  );
}
